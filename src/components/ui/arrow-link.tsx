import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  /** Must include a text color utility — intentionally has no default so it always wins. */
  className?: string;
}

export function ArrowLink({ href, children, className }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition-colors",
        className,
      )}
    >
      {children}
      <ArrowRightIcon
        className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
