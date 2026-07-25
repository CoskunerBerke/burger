import { MetadataRoute } from "next";
import { menuItems } from "@/data/menu";
import { siteConfig } from "@/data/site-config";
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseRoutes = [
    "",
    "/menu",
    "/galeri",
    "/hakkimizda",
    "/iletisim",
    "/kvkk",
    "/gizlilik-politikasi",
    "/cerez-politikasi"
  ].map((route) => ({
    url: `${siteConfig.seo.canonicalUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const menuRoutes = menuItems
    .filter((item) => item.verified)
    .map((item) => ({
      url: `${siteConfig.seo.canonicalUrl}/menu/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  return [...baseRoutes, ...menuRoutes];
}
