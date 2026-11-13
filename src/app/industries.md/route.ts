import { buildIndustriesMarkdown, markdownResponse } from "@/lib/seo";

export function GET() {
  return markdownResponse(buildIndustriesMarkdown());
}
