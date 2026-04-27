import type { MetadataRoute } from "next";

const BASE = "https://tubescribed.com";
const now = new Date();

function url(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]) {
  return { url: `${BASE}${path}`, lastModified: now, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core
    url("/", 1.0, "weekly"),
    url("/pricing", 0.95, "monthly"),
    url("/features", 0.9, "monthly"),
    url("/roi-calculator", 0.85, "monthly"),
    url("/blog", 0.85, "weekly"),
    url("/about", 0.7, "monthly"),
    url("/contact", 0.6, "monthly"),
    url("/affiliate", 0.65, "monthly"),
    url("/changelog", 0.6, "weekly"),

    // Use Cases
    url("/for/content-creators", 0.85, "monthly"),
    url("/for/agencies", 0.85, "monthly"),
    url("/for/coaches", 0.85, "monthly"),
    url("/for/ai-builders", 0.8, "monthly"),
    url("/for/podcasters", 0.8, "monthly"),
    url("/for/course-creators", 0.8, "monthly"),

    // Features
    url("/features/youtube-transcription", 0.85, "monthly"),
    url("/features/ai-transcript-cleaner", 0.8, "monthly"),
    url("/features/brand-workspace", 0.8, "monthly"),
    url("/features/sop-generator", 0.8, "monthly"),
    url("/features/content-repurposing", 0.8, "monthly"),

    // VS Pages
    url("/vs/otter-ai", 0.8, "monthly"),
    url("/vs/descript", 0.8, "monthly"),
    url("/vs/tactiq", 0.75, "monthly"),
    url("/vs/notegpt", 0.75, "monthly"),
    url("/vs/chatgpt", 0.8, "monthly"),
    url("/vs/youtube-captions", 0.75, "monthly"),

    // Alternatives
    url("/alternatives/otter-ai", 0.75, "monthly"),
    url("/alternatives/tactiq", 0.7, "monthly"),
    url("/alternatives/descript", 0.7, "monthly"),

    // Free Tools
    url("/free-tools/youtube-transcript-generator", 0.9, "monthly"),

    // Compliance (low priority, no index on some handled by noIndex flag)
    url("/privacy-policy", 0.3, "yearly"),
    url("/terms-of-service", 0.3, "yearly"),
    url("/cookie-policy", 0.3, "yearly"),
    url("/gdpr", 0.3, "yearly"),
    url("/acceptable-use", 0.3, "yearly"),
    url("/refund-policy", 0.3, "yearly"),
  ];
}
