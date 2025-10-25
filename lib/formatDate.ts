export function formatPressDate(iso: string) {
  // Return something like "21 Jul 2025"
  // (Day number, short month EN, full year)
  const d = new Date(iso);
  const day = d.getUTCDate(); // 1-31
  const month = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" }); // "Jul"
  const year = d.getUTCFullYear(); // 2025
  return `${day} ${month} ${year}`;
}
