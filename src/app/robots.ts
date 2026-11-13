import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const host = new URL(siteUrl).host;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "Anthropic-AI",
          "ClaudeBot",
          "PerplexityBot",
          "Applebot-Extended",
          "CCBot",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host,
  };
}
