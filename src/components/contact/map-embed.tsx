import { MAPS_EMBED_SRC, SITE_NAME } from "@/data/site-config";
import { cn } from "@/lib/utils";

/**
 * Uses Google's key-free "q=" embed so no Maps API key or billing account
 * is required. It searches by name + town, so it will resolve to Seasons'
 * exact pin automatically once the café has a Google Business listing —
 * update MAPS_QUERY in site-config.ts if the search needs refining.
 */
export function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-sm border border-charcoal-900/10", className)}>
      <iframe
        src={MAPS_EMBED_SRC}
        title={`Map showing the location of ${SITE_NAME} in Emly, Co. Tipperary`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[320px] w-full grayscale-[12%] contrast-[1.03]"
        style={{ border: 0 }}
      />
    </div>
  );
}
