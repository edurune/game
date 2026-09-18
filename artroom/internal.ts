export function nameSignature(entries: Iterable<{ name: string }>) {
  return Array.from(entries, (entry) => entry.name)
    .sort()
    .join();
}
