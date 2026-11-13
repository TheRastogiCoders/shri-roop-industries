import { buildAboutMarkdown, markdownResponse } from "@/lib/seo";

export function GET() {
  return markdownResponse(buildAboutMarkdown());
}
