import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[3px] font-medium tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40";

const variantStyles: Record<Variant, string> = {
  primary: "bg-brown-600 text-cream-50 hover:bg-brown-700 active:bg-brown-800",
  secondary:
    "border border-charcoal-800/25 text-charcoal-800 hover:border-brown-600 hover:text-brown-700",
  ghost: "text-brown-700 hover:text-brown-800",
  /** Outline button for use on dark/brown backgrounds. */
  inverse: "border border-cream-100/30 text-cream-100 hover:border-cream-100 hover:text-cream-50",
};

const sizeStyles: Record<Size, string> = {
  md: "px-6 py-3 text-[0.9rem]",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Internal path, or an external/tel:/mailto: URL. Omit to render a <button>. */
  href?: string;
  /** Renders a non-interactive, clearly disabled placeholder — used for contact details not yet confirmed. */
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  disabled,
  type = "button",
  onClick,
  target,
  rel,
  ...aria
}: ButtonProps) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if (href && disabled) {
    return (
      <span className={cn(classes, "opacity-40")} aria-disabled="true" {...aria}>
        {children}
      </span>
    );
  }

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...aria}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} target={target} rel={rel} {...aria}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} {...aria}>
      {children}
    </button>
  );
}
