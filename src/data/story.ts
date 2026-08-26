export interface StorySection {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
}

/**
 * ============================================================================
 * OUR STORY — draft placeholder copy
 * ============================================================================
 * None of this is invented café history. Each paragraph is written as an
 * editable draft with a bracketed [prompt] wherever a real fact, name or
 * date is needed — swap those for the owners' own words and remove the
 * brackets. The page also displays a small "Draft" label on every section
 * pulled from here so it's never mistaken for confirmed content.
 * ============================================================================
 */
export const STORY_SECTIONS: StorySection[] = [
  {
    id: "the-story",
    eyebrow: "How it started",
    title: "The story behind Seasons",
    body: [
      "Seasons Café & Bakeshop is an independent café in Emly, County Tipperary, built around homemade food, honest coffee and a warm welcome for everyone who walks through the door.",
      "[Add a few lines here, in the owners' own words, on how and why Seasons came to be — what the idea was, and what it was named for.]",
    ],
  },
  {
    id: "the-people",
    eyebrow: "Who's behind the counter",
    title: "The people behind the café",
    body: [
      "A small, hands-on team bakes, cooks and serves everything at Seasons — the kind of café where you're likely to be served by the person who made your scone.",
      "[Introduce the owners and team here — names, backgrounds, and what brought them to running a café and bakeshop in Emly.]",
    ],
  },
  {
    id: "the-building",
    eyebrow: "Our home in Emly",
    title: "The building & location",
    body: [
      "Seasons is based in Emly, County Tipperary — a village with its own quiet history, at the heart of which sits this café.",
      "[Add a short description of the building itself here — its character, age, or history, if relevant, and what makes the space feel the way it does.]",
    ],
  },
  {
    id: "our-approach",
    eyebrow: "In the kitchen",
    title: "Our approach to food & baking",
    body: [
      "Baking happens on-site, and the food follows the same idea: simple, seasonal, and made properly rather than quickly.",
      "[Add detail here on sourcing, suppliers, baking methods or any philosophy around food that Seasons wants visitors to know.]",
    ],
  },
  {
    id: "community",
    eyebrow: "Part of Emly",
    title: "Local & community connection",
    body: [
      "As an independent business, Seasons is woven into everyday life in Emly and the surrounding area.",
      "[Add any local partnerships, suppliers, events or community involvement here — this is a good place for anything that shows Seasons' role in the village.]",
    ],
  },
];
