import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageSlotProps {
  /** Path under /public. Leave undefined until the real photograph is supplied. */
  src?: string;
  alt: string;
  /** Shown in the placeholder so the client knows which photo goes here */
  placeholderLabel: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Reserves the layout box for a real photograph (plan §2: real photos only).
 * Renders a labelled placeholder until `src` is provided, so layout never shifts.
 */
export default function ImageSlot({
  src,
  alt,
  placeholderLabel,
  className,
  imageClassName,
  priority,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: ImageSlotProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-[2rem] bg-navy shadow-lift", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,var(--color-navy)_0%,var(--color-clinical-blue)_100%)] p-6 text-center"
        >
          <span className="rounded-full border border-dashed border-white/40 px-4 py-2 text-sm font-medium text-white/80">
            Photo: {placeholderLabel}
          </span>
        </div>
      )}
    </div>
  );
}
