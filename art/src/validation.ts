export function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

export function isIdentifier(value: string) {
  return /^[a-z][a-z0-9-]*$/.test(value);
}

export function keySignature(value: object | null | undefined) {
  return Object.keys(value ?? {})
    .sort()
    .join();
}
