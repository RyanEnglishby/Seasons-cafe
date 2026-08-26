import type { MenuCategory } from "@/types";

/**
 * ============================================================================
 * MENU DATA — sample content, not the real Seasons menu
 * ============================================================================
 * Every dish, description and price below is placeholder content written to
 * demonstrate the page layout. None of it should be presented to customers
 * as Seasons' actual menu — replace it with the real thing whenever it's
 * ready.
 *
 * HOW TO EDIT:
 *   - Add/remove/reorder objects in the `items` array of any category.
 *   - Leave `price` out entirely to hide it for an item (e.g. "market price").
 *   - `tags` accepts "Vegetarian", "Vegan", "Gluten-free" — only add a tag
 *     once it's actually confirmed; the tag chip is omitted if the array
 *     is left empty.
 *   - Add a whole new category by copying one of the objects in
 *     MENU_CATEGORIES and giving it a unique `id`.
 * No code changes anywhere else are required — the /menu page renders
 * whatever is in this file.
 * ============================================================================
 */

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    items: [
      {
        name: "Seasons Breakfast Bowl",
        description: "Free-range eggs, roast tomato, sourdough, seasonal greens",
        price: "€9.50",
      },
      {
        name: "Overnight Oats",
        description: "Rolled oats, natural yoghurt, honey, seasonal fruit",
        price: "€5.50",
        tags: ["Vegetarian"],
      },
      {
        name: "Two Egg Toast",
        description: "Poached or fried eggs on sourdough toast",
        price: "€6.00",
        tags: ["Vegetarian"],
      },
      {
        name: "Breakfast Roll",
        description: "Bacon, sausage, egg and brown sauce in a fresh bread roll",
        price: "€6.50",
      },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    items: [
      {
        name: "Soup & Sandwich",
        description: "Soup of the day with half a sandwich of your choice",
        price: "€9.00",
      },
      {
        name: "Quiche of the Day",
        description: "Served warm with a side salad",
        price: "€8.50",
        tags: ["Vegetarian"],
      },
      {
        name: "Warm Grain Bowl",
        description: "Seasonal vegetables, grains and a herb dressing",
        price: "€10.00",
        tags: ["Vegan", "Gluten-free"],
      },
    ],
  },
  {
    id: "sandwiches-toasties",
    title: "Sandwiches & Toasties",
    items: [
      { name: "Ham & Cheese Toastie", price: "€5.50" },
      {
        name: "Brie & Cranberry Toastie",
        price: "€6.00",
        tags: ["Vegetarian"],
      },
      { name: "Chicken & Stuffing Sandwich", price: "€6.50" },
      {
        name: "Roast Vegetable Wrap",
        price: "€6.50",
        tags: ["Vegan"],
      },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    note: "Served with brown bread and butter",
    items: [
      {
        name: "Soup of the Day",
        description: "Ask our team what's in the pot today",
        price: "€5.50",
      },
    ],
  },
  {
    id: "fresh-baking",
    title: "Fresh Baking",
    note: "Baked in-house every morning",
    items: [
      { name: "Sourdough Loaf", price: "€4.50", tags: ["Vegan"] },
      { name: "Brown Bread", price: "€3.80", tags: ["Vegetarian"] },
      { name: "Croissant", price: "€3.20", tags: ["Vegetarian"] },
      {
        name: "Seasonal Scone",
        description: "Served with butter and jam",
        price: "€3.50",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "cakes-treats",
    title: "Cakes & Treats",
    items: [
      { name: "Slice of Cake of the Day", price: "€4.50", tags: ["Vegetarian"] },
      { name: "Chocolate Brownie", price: "€3.80", tags: ["Vegetarian"] },
      { name: "Carrot Cake", price: "€4.20", tags: ["Vegetarian"] },
      {
        name: "Gluten-Free Treat of the Day",
        price: "€4.00",
        tags: ["Gluten-free"],
      },
    ],
  },
  {
    id: "coffee",
    title: "Coffee",
    items: [
      { name: "Americano", price: "€3.20" },
      { name: "Filter Coffee", price: "€3.00" },
      { name: "Flat White", price: "€3.80" },
      { name: "Cappuccino", price: "€3.80" },
      { name: "Latte", price: "€3.80" },
      { name: "Mocha", price: "€4.20" },
    ],
  },
  {
    id: "tea",
    title: "Tea",
    items: [
      { name: "Pot of Tea", price: "€2.80" },
      { name: "Herbal Tea", description: "Ask about today's selection", price: "€3.00" },
    ],
  },
  {
    id: "cold-drinks",
    title: "Cold Drinks",
    items: [
      { name: "Iced Latte", price: "€4.20" },
      { name: "Fresh Orange Juice", price: "€3.50" },
      { name: "Sparkling Water", price: "€2.80" },
    ],
  },
];
