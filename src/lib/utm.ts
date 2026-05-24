const utmSource = "twlite.dev";
const utmMedium = "referral";

export function withUtm(url: string): string {
  if (!url.startsWith("http")) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}utm_source=${utmSource}&utm_medium=${utmMedium}`;
}
