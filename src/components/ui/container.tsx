import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

const WIDTHS = {
  narrow: "max-w-3xl",
  default: "max-w-7xl",
  wide: "max-w-8xl",
} as const;

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: keyof typeof WIDTHS;
  as?: ElementType;
}

export function Container({ children, className, size = "default", as: Tag = "div" }: ContainerProps) {
  return <Tag className={cn("mx-auto w-full px-6 sm:px-8 lg:px-12", WIDTHS[size], className)}>{children}</Tag>;
}
