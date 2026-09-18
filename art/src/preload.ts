import { plugin } from "bun";
import { fileURLToPath } from "node:url";
import { transformAsync } from "@babel/core";
import linguiMacro from "@lingui/babel-plugin-lingui-macro";
import { getConfig } from "@lingui/conf";

const root = fileURLToPath(new URL("./", import.meta.url));
const escapedRoot = root.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const filter = new RegExp(`^${escapedRoot}.*\\.tsx?$`);
const linguiConfig = getConfig({
  configPath: fileURLToPath(new URL("../lingui.config.ts", import.meta.url)),
});

plugin({
  name: "lingui-metadata",
  setup(build) {
    build.onLoad({ filter }, async ({ path }) => {
      const source = await Bun.file(path).text();
      const loader = path.endsWith(".tsx") ? "tsx" : "ts";
      if (!source.includes("@lingui/core/macro")) return { contents: source, loader };
      const result = await transformAsync(source, {
        filename: path,
        babelrc: false,
        configFile: false,
        parserOpts: { plugins: ["typescript", "jsx"] },
        plugins: [[linguiMacro, { linguiConfig }]],
      });
      if (!result?.code) throw new Error(`Failed to transform Lingui metadata: ${path}`);
      return { contents: result.code, loader };
    });
  },
});
