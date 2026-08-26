import type { Metadata } from "next";
import { SITE_NAME } from "@/data/site-config";

/**
 * Builds consistent per-page metadata. `title` stays short here — the root
 * layout's title template turns it into "<title> | Seasons Café & Bakeshop"
 * for the actual <title> tag — but Open Graph/Twitter cards don't go through
 * that template, so this fills in the full string for those explicitly.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path },
    twitter: { title: fullTitle, description },
  };
}
