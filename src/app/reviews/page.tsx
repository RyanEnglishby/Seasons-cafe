import { Container } from "@/components/ui/container";
import { StarIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { ReviewCard } from "@/components/reviews/review-card";
import { OVERALL_RATING } from "@/data/site-config";
import { REVIEWS, REVIEW_PLATFORM_LINKS } from "@/data/reviews";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Reviews",
  description: "What visitors say about Seasons Café & Bakeshop in Emly, County Tipperary.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const rating = OVERALL_RATING;

  return (
    <>
      <section className="bg-cream-100 pb-12 pt-14 sm:pb-16 sm:pt-20">
        <Container size="narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brown-600">Reviews</p>
          <h1 className="mt-5 text-balance font-serif text-4xl font-normal leading-tight text-charcoal-900 sm:text-5xl">
            What people are saying
          </h1>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-charcoal-600">
            Genuine feedback from customers will live on this page. Until Seasons shares real reviews with us,
            what follows is clearly-marked sample content only.
          </p>
        </Container>
      </section>

      <section className="border-y border-charcoal-900/8 bg-cream-50 py-10">
        <Container size="narrow" className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            {rating ? (
              <>
                <span className="font-serif text-4xl text-charcoal-900">{rating.average.toFixed(1)}</span>
                <div>
                  <div className="flex gap-0.5 text-brown-500" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        className={i < Math.round(rating.average) ? "h-4 w-4" : "h-4 w-4 text-cream-300"}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-charcoal-500">
                    {rating.count} reviews on {rating.source}
                  </p>
                </div>
              </>
            ) : (
              <p className="max-w-sm text-sm italic text-charcoal-500">
                An overall rating will appear here once Seasons shares a verified Google or TripAdvisor score
                with us.
              </p>
            )}
          </div>

          <ul className="flex flex-wrap items-center gap-3">
            {REVIEW_PLATFORM_LINKS.map((platform) => (
              <li key={platform.platform}>
                {platform.url ? (
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[3px] border border-charcoal-800/25 px-4 py-2 text-sm font-medium text-charcoal-800 transition-colors hover:border-brown-600 hover:text-brown-700"
                  >
                    Read on {platform.platform}
                  </a>
                ) : (
                  <span className="rounded-[3px] border border-charcoal-800/10 px-4 py-2 text-sm italic text-charcoal-400">
                    {platform.platform} link coming soon
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container size="wide">
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, index) => (
              <Reveal key={review.id} delay={(index % 3) * 80}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
