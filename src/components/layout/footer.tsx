import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { NAV_ITEMS } from "@/data/navigation";
import { CONTACT, LOCATION, SITE_NAME, SOCIAL_LINKS } from "@/data/site-config";

const SOCIAL_ICONS = { Instagram: InstagramIcon, Facebook: FacebookIcon } as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-900/10 bg-charcoal-900 text-cream-200">
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-[1.3fr_1fr_1fr] md:gap-8">
        <div>
          <p className="font-serif text-2xl text-cream-50">{SITE_NAME}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-300">
            An independent café and bakeshop in {LOCATION.town}, {LOCATION.county}.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.platform];
              if (social.url) {
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow ${SITE_NAME} on ${social.platform}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/15 text-cream-200 transition-colors hover:border-cream-50/40 hover:text-cream-50"
                  >
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </a>
                );
              }
              return (
                <span
                  key={social.platform}
                  title={`${social.platform} link coming soon`}
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/10 text-cream-50/25"
                >
                  <Icon className="h-4.5 w-4.5" />
                </span>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-400/70">Explore</p>
          <ul className="mt-5 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-cream-200 transition-colors hover:text-cream-50">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-400/70">Visit</p>
          <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-cream-200">
            {LOCATION.streetAddress.verified && LOCATION.streetAddress.value ? (
              <p>{LOCATION.streetAddress.value}</p>
            ) : null}
            <p>{LOCATION.town}</p>
            <p>{LOCATION.county}</p>
            <p>{LOCATION.country}</p>
            {LOCATION.eircode.verified && LOCATION.eircode.value ? <p>{LOCATION.eircode.value}</p> : null}
          </address>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              {CONTACT.phone.verified ? (
                <a href={`tel:${CONTACT.phone.value}`} className="text-cream-200 hover:text-cream-50">
                  {CONTACT.phone.value}
                </a>
              ) : (
                <span className="text-cream-400/60">Phone — to be confirmed</span>
              )}
            </li>
            <li>
              {CONTACT.email.verified ? (
                <a href={`mailto:${CONTACT.email.value}`} className="text-cream-200 hover:text-cream-50">
                  {CONTACT.email.value}
                </a>
              ) : (
                <span className="text-cream-400/60">Email — to be confirmed</span>
              )}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream-50/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-400/60 sm:flex-row">
          <p>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p>Emly, County Tipperary, Ireland</p>
        </Container>
      </div>
    </footer>
  );
}
