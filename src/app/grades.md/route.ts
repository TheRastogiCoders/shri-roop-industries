import { buildGradesMarkdown, markdownResponse } from "@/lib/seo";

export function GET() {
  return markdownResponse(buildGradesMarkdown());
}
