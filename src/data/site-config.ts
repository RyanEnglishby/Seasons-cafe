import type { OpeningHoursRow, OverallRating, SocialLink, Verified } from "@/types";

/**
 * ============================================================================
 * SITE CONFIG — the first file to open when maintaining this site
 * ============================================================================
 * Business details (hours, phone, email, address, socials) live here so they
 * can be updated in one place without touching any component or layout code.
 *
 * Every fact below is wrapped as `{ value, verified: false }` until Seasons
 * confirms it. Components check `verified` and render an honest "to be
 * confirmed" placeholder instead of a real link/number when it is false —
 * so nothing invented ever reaches a visitor or search engines.
 *
 * TO GO LIVE WITH REAL DETAILS:
 *   1. Replace the placeholder `value`.
 *   2. Set `verified: true`.
 *   That's it — the phone/email links, map, footer, and SEO structured
 *   data all update automatically.
 * ============================================================================
 */

export const SITE_NAME = "Seasons Café & Bakeshop";

/**
 * Production domain. Set the NEXT_PUBLIC_SITE_URL environment variable in
 * the Vercel project once a domain is chosen — no code change needed.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://seasons-cafe.vercel.app";

export const LOCATION = {
  town: "Emly",
  county: "Co. Tipperary",
  country: "Ireland",
  /** Street address / townland, e.g. "Main Street" — confirm exact wording with the owners. */
  streetAddress: { value: "", verified: false } satisfies Verified<string>,
  eircode: { value: "", verified: false } satisfies Verified<string>,
} as const;

/** Used for the "Get Directions" link and the map embed — no API key required. */
export const MAPS_QUERY = `${SITE_NAME}, Emly, Co. Tipperary, Ireland`;
export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`;

export const CONTACT = {
  phone: {
    value: "+353 XX XXX XXXX",
    verified: false,
  } satisfies Verified<string>,
  email: {
    value: "hello@seasonscafe.ie",
    verified: false,
  } satisfies Verified<string>,
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Instagram", url: null, label: "@seasonscafe" },
  { platform: "Facebook", url: null, label: "Seasons Café & Bakeshop" },
];

/**
 * Opening hours. Replace `hours` for each row once confirmed, e.g.
 * "8:00am – 5:00pm", and set OPENING_HOURS_VERIFIED to true so the
 * homepage/contact page drop the "to be confirmed" note and the
 * structured data (src/lib/schema.ts) starts publishing hours to
 * Google.
 */
export const OPENING_HOURS: OpeningHoursRow[] = [
  { days: "Monday – Friday", hours: "To be confirmed" },
  { days: "Saturday", hours: "To be confirmed" },
  { days: "Sunday", hours: "To be confirmed" },
];
export const OPENING_HOURS_VERIFIED = false;

/**
 * Set to a real, confirmed aggregate once Seasons shares their Google or
 * TripAdvisor rating. Leave as `null` to omit any rating from the site —
 * never estimate or invent this figure.
 */
export const OVERALL_RATING: OverallRating | null = null;

/**
 * Feature flags for functionality that is built but intentionally not
 * switched on yet.
 */
export const FEATURES = {
  /**
   * Seasons is walk-in only for now. The nav, footer and page structure
   * are already wired to support a future reservations flow — flip this
   * to `true` and add a "/reservations" route (see src/data/navigation.ts)
   * once the owners want online booking.
   */
  reservations: false,
} as const;
