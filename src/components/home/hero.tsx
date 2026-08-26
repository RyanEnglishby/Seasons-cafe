import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { LOCATION, SITE_NAME } from "@/data/site-config";

export function Hero() {
  return (
    <section className="relative bg-cream-100">
      <Container
        size="wide"
        className="grid items-center gap-10 pb-14 pt-8 sm:pb-20 sm:pt-12 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-14"
      >
        <div className="order-2 lg:order-1">
          <p
            className="animate-fade-up mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-brown-600"
            style={{ animationDelay: "80ms" }}
          >
            {LOCATION.town}, {LOCATION.county}
          </p>
          <h1
            className="animate-fade-up text-balance font-serif text-5xl font-normal leading-[1.05] text-charcoal-900 sm:text-6xl lg:text-[3.75rem]"
            style={{ animationDelay: "160ms" }}
          >
            {SITE_NAME}
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-md text-pretty text-lg leading-relaxed text-charcoal-600"
            style={{ animationDelay: "260ms" }}
          >
            Homemade baking, honest coffee and simple food, made fresh every day in the heart of Emly.
          </p>
          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "360ms" }}>
            <Button href="/menu" size="lg">
              View Menu
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Find Us
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <PlaceholderImage
            label="Fresh bakes and coffee at the counter"
            icon="coffee"
            tone="warm"
            className="aspect-[4/5] w-full rounded-sm shadow-[0_30px_60px_-30px_rgba(43,38,30,0.35)] sm:aspect-[16/10] lg:aspect-[4/5]"
          />
        </div>
      </Container>
    </section>
  );
}
