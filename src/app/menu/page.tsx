import { Container } from "@/components/ui/container";
import { MenuSection } from "@/components/menu/menu-section";
import { MENU_CATEGORIES } from "@/data/menu";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Menu",
  description:
    "Breakfast, lunch, sandwiches, fresh baking, coffee and more at Seasons Café & Bakeshop in Emly, Co. Tipperary.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <section className="bg-cream-100 pb-10 pt-14 sm:pb-14 sm:pt-20">
        <Container size="narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brown-600">Menu</p>
          <h1 className="mt-5 text-balance font-serif text-4xl font-normal leading-tight text-charcoal-900 sm:text-5xl">
            What&apos;s on offer
          </h1>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-charcoal-600">
            A sample of the kind of thing you&apos;ll find at Seasons — breakfast, lunch, fresh baking and good
            coffee, made daily.
          </p>

          <div
            role="note"
            className="mt-8 rounded-sm border border-brown-300/50 bg-brown-100/40 px-5 py-4 text-sm leading-relaxed text-brown-800"
          >
            <strong className="font-semibold">Sample menu for design purposes.</strong> Dishes and prices shown
            here are placeholders and will be replaced with Seasons&apos; real menu. Please ask our team about
            allergens and dietary requirements.
          </div>

          <nav aria-label="Menu categories" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-charcoal-900/10 pt-6">
            {MENU_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="text-sm font-medium text-charcoal-600 transition-colors hover:text-brown-700"
              >
                {category.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section className="bg-cream-50 pb-24 pt-4 sm:pb-28">
        <Container size="narrow">
          {MENU_CATEGORIES.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </Container>
      </section>
    </>
  );
}
