import type { Review } from "@/types";

/**
 * ============================================================================
 * REVIEWS — placeholder content only
 * ============================================================================
 * No real customer names, ratings or quotes exist yet. Every entry below is
 * fictional demo copy with `isPlaceholder: true`, and the review components
 * always render a visible "Example review" badge whenever that flag is set.
 *
 * TO ADD A REAL REVIEW:
 *   Add an object with the genuine author name/initial, quote, rating and
 *   source, and set `isPlaceholder: false`. Once at least one real review
 *   exists, remove the sample rows below.
 * ============================================================================
 */

export const REVIEWS: Review[] = [
  {
    id: "sample-1",
    author: "Placeholder name",
    quote:
      "Example review — replace with a verified customer review once one is supplied by Seasons Café & Bakeshop.",
    isPlaceholder: true,
  },
  {
    id: "sample-2",
    author: "Placeholder name",
    quote:
      "Sample testimonial for layout purposes only. Swap this out for genuine feedback from a real visit.",
    isPlaceholder: true,
  },
  {
    id: "sample-3",
    author: "Placeholder name",
    quote:
      "Example review text. This card is here to show how a short, warm quote will look once real reviews are added.",
    isPlaceholder: true,
  },
  {
    id: "sample-4",
    author: "Placeholder name",
    quote:
      "Placeholder content — a genuine review about the coffee, baking or atmosphere can go here.",
    isPlaceholder: true,
  },
  {
    id: "sample-5",
    author: "Placeholder name",
    quote:
      "Example review — for demonstration only. Replace with a real quote once the owners provide one.",
    isPlaceholder: true,
  },
  {
    id: "sample-6",
    author: "Placeholder name",
    quote:
      "Sample review card. Once live reviews are connected, this space will hold real customer words.",
    isPlaceholder: true,
  },
];

/**
 * Optional links to review platforms. Set `url` once the real listing is
 * confirmed — until then the link is omitted rather than guessed.
 */
export const REVIEW_PLATFORM_LINKS: { platform: string; url: string | null }[] = [
  { platform: "Google", url: null },
  { platform: "TripAdvisor", url: null },
];
