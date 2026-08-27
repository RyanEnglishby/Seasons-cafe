import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { PlaceholderIconName } from "@/components/ui/placeholder-image";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { STORY_SECTIONS } from "@/data/story";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our Story",
  description:
    "The story behind Seasons Café & Bakeshop — an independent café and bakeshop in Emly, County Tipperary.",
  path: "/our-story",
});

/**
 * Real photo where one exists and genuinely matches the section; otherwise
 * the placeholder graphic. Don't fill a `photo` in just to remove a
 * placeholder — a mismatched real photo is worse than an honest one.
 */
const SECTION_IMAGES: Record<
  string,
  { icon: PlaceholderIconName; label: string; tone: "light" | "warm"; photo?: { src: string; alt: string } }
> = {
  "the-story": {
    icon: "interior",
    label: "The café frontage in Emly",
    tone: "light",
    photo: { src: "/images/story-storefront.jpg", alt: "The front of Seasons Café & Bakeshop on Main Street, Emly" },
  },
  "the-people": { icon: "coffee", label: "The team behind the counter", tone: "warm" },
  "the-building": {
    icon: "interior",
    label: "The building Seasons calls home",
    tone: "light",
    photo: { src: "/images/story-stone-wall.jpg", alt: "The stone wall dining room at Seasons Café & Bakeshop" },
  },
  "our-approach": { icon: "bake", label: "Baking in progress in the kitchen", tone: "warm" },
  community: { icon: "pastry", label: "Seasons and the Emly community", tone: "light" },
};

export default function OurStoryPage() {
  return (
    <>
      <section className="bg-cream-100 pb-14 pt-14 sm:pb-20 sm:pt-20">
        <Container size="narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brown-600">Our Story</p>
          <h1 className="mt-5 text-balance font-serif text-4xl font-normal leading-tight text-charcoal-900 sm:text-5xl">
            The story behind Seasons
          </h1>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-charcoal-600">
            A little about who we are, where we are, and why Seasons exists — some of it still in draft, until
            the people who actually run the café fill in the rest.
          </p>
        </Container>
      </section>

      {STORY_SECTIONS.map((section, index) => {
        const image = SECTION_IMAGES[section.id];
        const reversed = index % 2 === 1;
        return (
          <section key={section.id} className={index % 2 === 0 ? "bg-cream-50" : "bg-cream-100"}>
            <Container
              size="wide"
              className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-20 lg:py-20"
            >
              <Reveal className={reversed ? "lg:order-2" : undefined}>
                {image.photo ? (
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-sm">
                    <Image
                      src={image.photo.src}
                      alt={image.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <PlaceholderImage
                    label={image.label}
                    icon={image.icon}
                    tone={image.tone}
                    className="aspect-[5/4] w-full rounded-sm"
                  />
                )}
              </Reveal>
              <Reveal delay={100} className={reversed ? "lg:order-1" : undefined}>
                <div className="flex items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brown-600">
                    {section.eyebrow}
                  </p>
                  <Tag tone="muted">Draft — to be confirmed</Tag>
                </div>
                <h2 className="mt-4 text-balance font-serif text-3xl font-normal leading-tight text-charcoal-900 sm:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-5 max-w-lg space-y-4 text-pretty leading-relaxed text-charcoal-600">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            </Container>
          </section>
        );
      })}

      <section className="bg-brown-800 py-16 text-center text-cream-100 sm:py-20">
        <Container size="narrow">
          <p className="text-balance font-serif text-2xl font-normal leading-snug sm:text-3xl">
            Come and see us in person — or have a look at what&apos;s on the menu first.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/menu" size="lg">
              View Menu
            </Button>
            <Button href="/contact" variant="inverse" size="lg">
              Find Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
