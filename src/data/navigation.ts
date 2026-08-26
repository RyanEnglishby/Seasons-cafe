import type { NavItem } from "@/types";
import { FEATURES } from "@/data/site-config";

/**
 * Primary navigation, shown in the header and mirrored in the footer.
 * To add "Reservations" later: add a row here, flip
 * FEATURES.reservations to true in site-config.ts, and create
 * src/app/reservations/page.tsx.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/our-story" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
  ...(FEATURES.reservations
    ? [{ label: "Reservations", href: "/reservations" } satisfies NavItem]
    : []),
];
