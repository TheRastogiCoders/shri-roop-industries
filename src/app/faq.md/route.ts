import { buildFaqMarkdown, markdownResponse } from "@/lib/seo";

export function GET() {
  return markdownResponse(buildFaqMarkdown());
}
