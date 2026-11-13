import Image from "next/image";

export function MetalPhoto({
  src,
  alt,
  sizes,
  className = "photo-frame",
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="photo-img"
        priority={priority}
      />
    </div>
  );
}
