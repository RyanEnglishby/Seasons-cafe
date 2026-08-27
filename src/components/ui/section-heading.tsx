import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: ElementType;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-brown-600">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-balance font-serif text-4xl font-normal leading-[1.1] text-charcoal-900 sm:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-relaxed text-charcoal-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
