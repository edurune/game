import { createRequire } from "node:module";
import { dirname } from "node:path";
import type { IncomingMessage } from "node:http";
import { defineConfig, type Plugin, type ViteDevServer, type PreviewServer } from "vite";

const apiUrl = new URL("./api.ts", import.meta.url).href;
function artApi(): Plugin {
  let api: Promise<typeof import("./api.ts")> | undefined;
  const module = (): Promise<typeof import("./api.ts")> => (api ??= import(apiUrl));
  const configure = (app: ViteDevServer | PreviewServer) => {
    app.middlewares.use(async (request, response, next) => {
      const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
      if (
        url.pathname !== "/skills" &&
        !url.pathname.startsWith("/api/") &&
        !/^\/music\/.+\.mp3$/.test(url.pathname)
      )
        return next();
      try {
        const headers = new Headers();
        for (const [key, value] of Object.entries(request.headers))
          if (value) headers.set(key, Array.isArray(value) ? value.join(", ") : value);
        const init: RequestInit = { method: request.method, headers };
        if (request.method !== "GET" && request.method !== "HEAD") init.body = await body(request);
        const result = await (await module()).handleRequest(new Request(url, init));
        response.statusCode = result.status;
        result.headers.forEach((value, key) => response.setHeader(key, value));
        response.end(Buffer.from(await result.arrayBuffer()));
      } catch (error) {
        response.statusCode = 500;
        response.end(
          JSON.stringify({ error: error instanceof Error ? error.message : String(error) }),
        );
      }
    });
  };
  return {
    name: "artroom-api",
    configureServer(app) {
      app.watcher.add(dirname(createRequire(import.meta.url).resolve("@edurune/art/catalog")));
      app.watcher.on("all", () => {
        if (api) void api.then((module) => module.clearArtCache());
      });
      configure(app);
    },
    configurePreviewServer: configure,
  };
}
async function body(request: IncomingMessage) {
  const chunks: Buffer[] = [];
  let length = 0;
  for await (const chunk of request) {
    length += chunk.length;
    if (length > 600_000) throw new Error("Request exceeds 600 KB");
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}
export default defineConfig({
  plugins: [artApi()],
  server: { host: "127.0.0.1", port: 4317, strictPort: true },
  preview: { host: "127.0.0.1", port: 4317, strictPort: true },
});
