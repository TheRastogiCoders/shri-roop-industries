import { buildContactMarkdown, markdownResponse } from "@/lib/seo";

export function GET() {
  return markdownResponse(buildContactMarkdown());
}