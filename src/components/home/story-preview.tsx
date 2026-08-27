import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function StoryPreview() {
  return (
    <section className="bg-brown-800 py-24 text-cream-100 sm:py-28">
      <Container size="narrow" className="text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brown-200">Our Story</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-serif text-3xl font-normal leading-snug sm:text-4xl">
            A small, independent café built around good food, good coffee, and the people of Emly.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-brown-100/90">
            From the ovens to the counter, everything at Seasons is made with care. Read a little more
            about who we are and how it began.
          </p>
          <div className="mt-9">
            <ArrowLink href="/our-story" className="justify-center text-cream-50 hover:text-cream-300">
              Read Our Story
            </ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
