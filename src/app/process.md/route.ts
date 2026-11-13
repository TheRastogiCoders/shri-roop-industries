import { buildProcessMarkdown, markdownResponse } from "@/lib/seo";

export function GET() {
  return markdownResponse(buildProcessMarkdown());
}
