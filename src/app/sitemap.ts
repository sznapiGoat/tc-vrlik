import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const cesty = [
    ["", 1],
    ["/servis-tepelnych-cerpadel", 0.9],
    ["/montaz-tepelnych-cerpadel", 0.8],
    ["/zakazky", 0.6],
    ["/kontakt", 0.7],
  ] as const;
  return cesty.map(([cesta, priority]) => ({ url: `${SITE_URL}${cesta}`, priority }));
}
