# Seasons Café & Bakeshop

The website for Seasons Café & Bakeshop, an independent café and bakeshop in Emly, County Tipperary, Ireland.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript and Tailwind CSS, and structured so the site
can be maintained by editing a handful of data files — no component code needs to change for everyday updates.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `npm run build` produces a production build, and
`npm run lint` runs ESLint.

## Where to edit things

Everything a café owner would need to update regularly lives in `src/data/`, with comments in each file
explaining what to change:

| To update…                                            | Edit…                        |
| ------------------------------------------------------- | ----------------------------- |
| Menu items, categories, prices, dietary tags             | `src/data/menu.ts`            |
| Opening hours, phone, email, address, social links        | `src/data/site-config.ts`     |
| Navigation links                                          | `src/data/navigation.ts`      |
| Reviews / testimonials                                     | `src/data/reviews.ts`         |
| "Our Story" page content                                   | `src/data/story.ts`           |

### Marking information as verified

Contact details (phone, email, opening hours, street address) are stored as `{ value, verified }` pairs. The
site only ever shows a real phone number, email, or set of hours — or emits it in the SEO structured data —
once `verified` is set to `true`. Until then it shows an honest "to be confirmed" placeholder instead of
guessing. To go live with a real detail: fill in the value and flip `verified: true`.

The same pattern applies to Instagram/Facebook links (`SOCIAL_LINKS` in `site-config.ts`): a `url` of `null`
renders as a muted "coming soon" label instead of a guessed link.

## Replacing placeholder photography

Every photo on the site is currently a `<PlaceholderImage />` (`src/components/ui/placeholder-image.tsx`) — a
styled panel with a caption describing what real photo belongs there, not a stock photo pretending to be
Seasons. To swap one in:

1. Add the real, approved image file to `public/images/`.
2. Replace the `<PlaceholderImage label="..." icon="..." .../>` usage with Next's `<Image />` component,
   pointing at the new file, keeping the same `className` for sizing/aspect ratio.

Favour a small number of large, high-quality photos over many small ones (coffee, baking, the café interior,
food, and the general atmosphere are the priority shots — see the component's usages for exactly which photo
belongs where).

## The contact form

The form at `/contact` validates submissions properly (client- and server-side) and has real loading/success/
error states, but no email service is connected yet — see `src/app/api/contact/route.ts` for exactly what to
set up (a few minutes with [Resend](https://resend.com) or a similar provider). Until then, it's honest with
visitors that their message wasn't sent, rather than faking a success message.

## Adding Reservations later

Seasons is walk-in only for now, but the site is already structured for an online booking page to be added
without a redesign:

1. Set `FEATURES.reservations` to `true` in `src/data/site-config.ts`.
2. Add the "Reservations" entry to `NAV_ITEMS` in `src/data/navigation.ts` (the array already has a
   commented-out example).
3. Create `src/app/reservations/page.tsx`.

## Deployment

The site is set up for [Vercel](https://vercel.com) — connect the repository and deploy with no extra
configuration required. Two optional environment variables (see `.env.example`) unlock a few things once
they're set:

- `NEXT_PUBLIC_SITE_URL` — the live domain, once chosen (used for canonical links, the sitemap, and Open Graph tags).
- `RESEND_API_KEY` — turns on real email delivery for the contact form.

## Project structure

```
src/
  app/            Routes (one folder per page), plus SEO files (sitemap, robots, icons, OG image)
  components/
    layout/       Header, footer
    home/         Homepage sections
    menu/         Menu page sections
    reviews/      Review card
    contact/      Contact form, map embed
    ui/           Shared primitives (Button, Container, Tag, PlaceholderImage, etc.)
  data/           All editable content — see table above
  lib/            Small helpers (metadata builder, LocalBusiness schema, classnames)
  types/          Shared TypeScript types for content
```

## A note on placeholder content

Nothing on this site claims to be real Seasons Café & Bakeshop history, menu items, prices, reviews, ratings,
or contact details unless it has been explicitly confirmed and marked as verified. Sample/demo content is
clearly labelled in the UI (a "sample menu" notice, "sample review" badges, a "draft" tag on Our Story
sections) as well as in code comments, so it's never mistaken for the real thing.
