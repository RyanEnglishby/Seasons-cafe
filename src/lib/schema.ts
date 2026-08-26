import {
  CONTACT,
  LOCATION,
  OPENING_HOURS,
  OPENING_HOURS_VERIFIED,
  OVERALL_RATING,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/data/site-config";

/**
 * Builds the LocalBusiness (CafeOrCoffeeShop) structured data for Google.
 *
 * By design this only ever includes fields marked `verified: true` in
 * site-config.ts. Nothing here is invented — as real details are confirmed
 * and flipped to `verified: true`, this schema fills itself in without any
 * further code changes.
 */
export function localBusinessJsonLd(): Record<string, unknown> {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: LOCATION.town,
    addressRegion: LOCATION.county,
    addressCountry: "IE",
  };
  if (LOCATION.streetAddress.verified && LOCATION.streetAddress.value) {
    address.streetAddress = LOCATION.streetAddress.value;
  }
  if (LOCATION.eircode.verified && LOCATION.eircode.value) {
    address.postalCode = LOCATION.eircode.value;
  }

  const sameAs = SOCIAL_LINKS.map((link) => link.url).filter((url): url is string => Boolean(url));

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: SITE_NAME,
    url: SITE_URL,
    address,
  };

  if (CONTACT.phone.verified) {
    schema.telephone = CONTACT.phone.value;
  }
  if (CONTACT.email.verified) {
    schema.email = CONTACT.email.value;
  }
  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }
  if (OVERALL_RATING) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: OVERALL_RATING.average,
      reviewCount: OVERALL_RATING.count,
    };
  }
  if (OPENING_HOURS_VERIFIED) {
    const specs = OPENING_HOURS.filter((row) => row.schema).map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.schema!.days,
      opens: row.schema!.opens,
      closes: row.schema!.closes,
    }));
    if (specs.length > 0) {
      schema.openingHoursSpecification = specs;
    }
  }

  return schema;
}
