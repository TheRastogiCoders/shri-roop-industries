import { brochure } from "@/lib/site";

export function BrochureLink({
  className = "btn btn-ghost",
  label = "Download brochure",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      className={className}
      href={brochure.href}
      download={brochure.filename}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
