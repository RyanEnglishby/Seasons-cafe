import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { LOCATION } from "@/data/site-config";

export function Intro() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container size="wide" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/interior-back-room.jpg"
              alt="Seating at Seasons Café & Bakeshop"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brown-600">About Seasons</p>
          <h2 className="mt-5 text-balance font-serif text-3xl font-normal leading-tight text-charcoal-900 sm:text-4xl">
            An independent café and bakeshop in the heart of {LOCATION.town}
          </h2>
          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-charcoal-600">
            Seasons is a small, welcoming space built around good coffee, homemade baking and food made
            properly — the kind of place you can drop into for five minutes or stay for an hour.
          </p>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-charcoal-600">
            Everything is made fresh, close to home, with the same care whether it&apos;s your first visit
            or your fiftieth.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
