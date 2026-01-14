import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://sfdspm.com",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        // Add other routes here as the site grows
    ];
}
