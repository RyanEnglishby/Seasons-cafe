import { ContactForm } from "@/components/contact/contact-form";
import { MapEmbed } from "@/components/contact/map-embed";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ClockIcon, FacebookIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";
import {
  CONTACT,
  DIRECTIONS_URL,
  LOCATION,
  OPENING_HOURS,
  OPENING_HOURS_VERIFIED,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/data/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Opening hours, phone, email and directions for Seasons Café & Bakeshop in Emly, Co. Tipperary.",
  path: "/contact",
});

const SOCIAL_ICONS = { Instagram: InstagramIcon, Facebook: FacebookIcon } as const;

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream-100 pb-10 pt-14 sm:pb-14 sm:pt-20">
        <Container size="narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brown-600">Contact</p>
          <h1 className="mt-5 text-balance font-serif text-4xl font-normal leading-tight text-charcoal-900 sm:text-5xl">
            Visit {SITE_NAME}
          </h1>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-charcoal-600">
            {LOCATION.town}, {LOCATION.county}, {LOCATION.country}. No booking required — just call in.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Button
              href={CONTACT.phone.verified ? `tel:${CONTACT.phone.value}` : undefined}
              disabled={!CONTACT.phone.verified}
              size="lg"
              className="justify-center"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              {CONTACT.phone.verified ? `Call ${CONTACT.phone.value}` : "Call Us"}
            </Button>
            <Button
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="justify-center"
            >
              <MapPinIcon className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </Button>
          </div>
          {!CONTACT.phone.verified ? (
            <p className="mt-2 text-xs text-charcoal-400">Phone number to be confirmed by Seasons.</p>
          ) : null}
        </Container>
      </section>

      <section className="bg-cream-50 py-14 sm:py-20">
        <Container size="wide" className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 font-serif text-lg text-charcoal-900">
                <MapPinIcon className="h-5 w-5 text-brown-600" aria-hidden="true" />
                Address
              </h2>
              <address className="mt-3 space-y-0.5 text-sm not-italic leading-relaxed text-charcoal-600">
                <p>{SITE_NAME}</p>
                <p>{LOCATION.town}</p>
                <p>{LOCATION.county}</p>
                <p>{LOCATION.country}</p>
              </address>
            </div>

            <div>
              <h2 className="flex items-center gap-2 font-serif text-lg text-charcoal-900">
                <ClockIcon className="h-5 w-5 text-brown-600" aria-hidden="true" />
                Opening Hours
              </h2>
              <ul className="mt-3 text-sm text-charcoal-600">
                {OPENING_HOURS.map((row) => (
                  <li
                    key={row.days}
                    className="flex items-baseline justify-between gap-6 border-b border-charcoal-900/8 py-1.5"
                  >
                    <span>{row.days}</span>
                    <span className={!OPENING_HOURS_VERIFIED ? "italic text-charcoal-400" : "font-medium text-charcoal-800"}>
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
              {!OPENING_HOURS_VERIFIED ? (
                <p className="mt-3 text-xs text-charcoal-400">
                  Hours shown are placeholders — please check our Facebook/Instagram for up-to-date times.
                </p>
              ) : null}
            </div>

            <div>
              <h2 className="flex items-center gap-2 font-serif text-lg text-charcoal-900">
                <MailIcon className="h-5 w-5 text-brown-600" aria-hidden="true" />
                Email &amp; Phone
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-charcoal-600">
                <li>
                  {CONTACT.phone.verified ? (
                    <a href={`tel:${CONTACT.phone.value}`} className="hover:text-brown-700">
                      {CONTACT.phone.value}
                    </a>
                  ) : (
                    <span className="italic text-charcoal-400">Phone — to be confirmed</span>
                  )}
                </li>
                <li>
                  {CONTACT.email.verified ? (
                    <a href={`mailto:${CONTACT.email.value}`} className="hover:text-brown-700">
                      {CONTACT.email.value}
                    </a>
                  ) : (
                    <span className="italic text-charcoal-400">Email — to be confirmed</span>
                  )}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-lg text-charcoal-900">Follow Along</h2>
              <ul className="mt-3 space-y-2 text-sm text-charcoal-600">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.platform];
                  return (
                    <li key={social.platform} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 shrink-0 text-charcoal-400" aria-hidden="true" />
                      {social.url ? (
                        <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-brown-700">
                          {social.label}
                        </a>
                      ) : (
                        <span className="italic text-charcoal-400">{social.platform} — link coming soon</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <MapEmbed className="h-full min-h-[380px]" />
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-20">
        <Container size="narrow">
          <h2 className="font-serif text-3xl font-normal text-charcoal-900 sm:text-4xl">Send a Message</h2>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-charcoal-600">
            For anything that isn&apos;t urgent, drop us a note here. For same-day questions, calling is
            quicker.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
