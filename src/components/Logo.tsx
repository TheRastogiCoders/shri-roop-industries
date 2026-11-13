import Image from "next/image";
import { company } from "@/lib/site";

export function Logo({
  className = "logo",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      className={className}
      src="/images/shri-roop-logo-v3.png"
      alt={company.legalName}
      width={1541}
      height={471}
      priority={priority}
      sizes="(max-width: 720px) 200px, 280px"
    />
  );
}
