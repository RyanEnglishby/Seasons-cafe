/**
 * Shared content types for Seasons Café & Bakeshop.
 *
 * Keeping these in one place means every data file in `src/data`
 * and every component that renders them agrees on the same shape.
 */

/** A value that must be confirmed by the café owners before it is treated as real. */
export interface Verified<T> {
  /** The actual value. Leave the placeholder in place until it is confirmed. */
  value: T;
  /** Flip to `true` only once this exact value has been confirmed by Seasons. */
  verified: boolean;
}

export type DietaryTag = "Vegetarian" | "Vegan" | "Gluten-free";

export interface MenuItem {
  name: string;
  description?: string;
  /** Display string, e.g. "€4.50". Leave undefined to hide the price. */
  price?: string;
  tags?: DietaryTag[];
}

export interface MenuCategory {
  id: string;
  title: string;
  /** Optional short line shown under the category title. */
  note?: string;
  items: MenuItem[];
}

export interface OpeningHoursRow {
  days: string;
  hours: string;
}

export interface Review {
  id: string;
  author: string;
  quote: string;
  /** 1–5. Omit until a genuine rating is supplied. */
  rating?: number;
  source?: "Google" | "TripAdvisor" | "Facebook" | "In person";
  date?: string;
  /** Always true until real reviews replace the sample content. */
  isPlaceholder: boolean;
}

export interface OverallRating {
  average: number;
  count: number;
  source: string;
  url?: string;
}

export interface SocialLink {
  platform: "Instagram" | "Facebook";
  /** Full URL once confirmed. Keep `null` to render a "coming soon" placeholder instead of a guessed link. */
  url: string | null;
  /** Handle or display label, e.g. "@seasonscafe". Shown even before the link is live. */
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Shows a small "coming soon" indicator instead of a working link. */
  comingSoon?: boolean;
}
