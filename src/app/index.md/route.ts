import { buildHomeMarkdown, markdownResponse } from "@/lib/seo";

export function GET() {
  return markdownResponse(buildHomeMarkdown());
}
