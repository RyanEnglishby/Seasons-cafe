import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ReviewCard } from "@/components/reviews/review-card";
import { REVIEWS } from "@/data/reviews";

export function ReviewsPreview() {
  const featured = REVIEWS.slice(0, 3);

  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow="Reviews"
          title="What people are saying"
          description="Real reviews will appear here once Seasons shares them with us — for now, this is sample placeholder content."
        />

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((review, index) => (
            <Reveal key={review.id} delay={index * 80}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <ArrowLink href="/reviews" className="text-brown-700 hover:text-brown-800">
            Read More Reviews
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
