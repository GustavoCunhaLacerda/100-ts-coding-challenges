const dictionary: string[] = [
  "apple", "application", "apply", "apt", "aptitude",
  "banana", "band", "bandana", "bandwidth",
  "car", "card", "care", "career", "careful",
  "data", "database", "date", "debug",
  "react", "reactive", "read", "readme",
];

export function autocomplete(prefix: string): string[] {
  if (!prefix) return [];
  return dictionary.filter((word) => word.startsWith(prefix.toLowerCase()));
}
