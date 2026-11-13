import type { Metadata } from "next";
import { company } from "./site";
import { absoluteUrl, getPage, type SitePage } from "./seo";

export function pageMetadata(
  path: string,
  overrides: Partial<Pick<SitePage, "title" | "description" | "keywords">> = {},
): Metadata {
  const page = getPage(path);
  if (!page) {
    throw new Error(`Unknown page path for metadata: ${path}`);
  }

  const title = overrides.title ?? page.title;
  const description = overrides.description ?? page.description;
  const keywords = overrides.keywords ?? page.keywords;
  const url = absoluteUrl(page.path);
  const markdown = absoluteUrl(page.mdPath);
  const isHome = path === "/";
  const socialTitle = isHome ? title : `${title} · ${company.shortName}`;

  return {
    title: isHome ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
      types: {
        "text/markdown": markdown,
      },
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      locale: "en_IN",
      type: "website",
      siteName: company.shortName,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}
