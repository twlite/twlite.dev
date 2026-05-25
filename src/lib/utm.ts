const utmSource = "twlite.dev";
const utmMedium = "referral";

export function withUtm(url: string): string {
  try {
    if (!url.startsWith("http")) return url;
    const parsed = new URL(url);
    if (!parsed.searchParams.has("utm_source")) parsed.searchParams.set("utm_source", utmSource);
    if (!parsed.searchParams.has("utm_medium")) parsed.searchParams.set("utm_medium", utmMedium);
    return parsed.toString();
  } catch {
    return url;
  }
}
