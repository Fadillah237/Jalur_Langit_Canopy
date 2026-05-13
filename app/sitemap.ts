import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jalurlangitcanopy.com",
      lastModified: new Date(),
    },
  ];
}
