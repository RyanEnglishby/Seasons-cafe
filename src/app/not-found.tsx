import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-cream-100 py-20">
      <Container size="narrow" className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brown-600">404</p>
        <h1 className="mt-5 text-balance font-serif text-4xl font-normal leading-tight text-charcoal-900 sm:text-5xl">
          This page has been cleared from the table
        </h1>
        <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-charcoal-600">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on
          track.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/menu" variant="secondary" size="lg">
            View Menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
