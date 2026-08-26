import { QuoteIcon, StarIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import type { Review } from "@/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex h-full flex-col border-t-2 border-brown-600/25 pt-6">
      <div className="flex items-start justify-between gap-3">
        <QuoteIcon className="h-6 w-6 text-brown-300" aria-hidden="true" />
        {review.isPlaceholder ? <Tag tone="muted">Sample review</Tag> : null}
      </div>

      {review.rating ? (
        <div className="mt-4 flex gap-0.5" role="img" aria-label={`Rated ${review.rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={cn("h-4 w-4", i < review.rating! ? "text-brown-500" : "text-cream-300")}
              aria-hidden="true"
            />
          ))}
        </div>
      ) : null}

      <p className="mt-4 flex-1 text-pretty text-[1.05rem] leading-relaxed text-charcoal-700">
        &ldquo;{review.quote}&rdquo;
      </p>

      <div className="mt-6">
        <p className="text-sm font-semibold text-charcoal-900">{review.author}</p>
        {review.source && !review.isPlaceholder ? (
          <p className="text-xs text-charcoal-500">via {review.source}</p>
        ) : null}
      </div>
    </div>
  );
}
