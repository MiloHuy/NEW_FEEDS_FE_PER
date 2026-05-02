export function getInitials(text: string): string {
  return text
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function getFallbackColor(text: string): string {
  const colors = [
    "avatar--indigo", "avatar--teal", "avatar--amber",
    "avatar--rose", "avatar--violet", "avatar--emerald",
  ];
  const idx = text.charCodeAt(0) % colors.length;
  return colors[idx];
}
