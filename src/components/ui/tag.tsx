import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const TONES = {
  olive: "bg-olive-700/10 text-olive-700",
  brown: "bg-brown-600/10 text-brown-700",
  muted: "bg-charcoal-800/8 text-charcoal-600",
} as const;

interface TagProps {
  children: ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}

export function Tag({ children, tone = "olive", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[3px] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
