import Link from "next/link";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import type { PlaceholderIconName } from "@/components/ui/placeholder-image";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * Category teasers only — deliberately no dishes or prices here (those
 * live on the /menu page). Update freely to match whichever categories
 * should be highlighted on the homepage.
 */
const FEATURED_CATEGORIES: {
  id: string;
  title: string;
  description: string;
  icon: PlaceholderIconName;
}[] = [
  { id: "breakfast", title: "Breakfast", description: "Simple, hearty plates to start the day.", icon: "pastry" },
  { id: "lunch", title: "Lunch", description: "Soups, salads and daily specials.", icon: "interior" },
  { id: "fresh-baking", title: "Fresh Baking", description: "Baked in-house, every morning.", icon: "bake" },
  { id: "coffee", title: "Coffee", description: "Carefully made, every cup.", icon: "coffee" },
];

export function FeaturedMenu() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <Container size="wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="On The Menu" title="A taste of what's on offer" />
          <ArrowLink href="/menu" className="hidden text-brown-700 hover:text-brown-800 sm:inline-flex">
            View Full Menu
          </ArrowLink>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-4 lg:gap-10">
          {FEATURED_CATEGORIES.map((category, index) => (
            <Reveal key={category.id} delay={index * 80}>
              <Link href={`/menu#${category.id}`} className="group block">
                <PlaceholderImage
                  label={`${category.title} at Seasons`}
                  icon={category.icon}
                  tone={index % 2 === 0 ? "light" : "warm"}
                  className="aspect-[4/5] rounded-sm transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:aspect-[4/3]"
                />
                <h3 className="mt-5 font-serif text-xl text-charcoal-900 transition-colors group-hover:text-brown-700">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal-600">{category.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <ArrowLink href="/menu" className="text-brown-700 hover:text-brown-800">
            View Full Menu
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
