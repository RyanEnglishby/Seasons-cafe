import { MapEmbed } from "@/components/contact/map-embed";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ClockIcon, FacebookIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  CONTACT,
  DIRECTIONS_URL,
  LOCATION,
  OPENING_HOURS,
  OPENING_HOURS_NOTE,
  OPENING_HOURS_VERIFIED,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/data/site-config";

const SOCIAL_ICONS = { Instagram: InstagramIcon, Facebook: FacebookIcon } as const;

export function VisitSection() {
  return (
    <section id="visit" className="bg-cream-200/70 py-20 sm:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow="Find Us"
          title="Visit Seasons"
          description="Drop in for a coffee, breakfast or lunch — no booking needed, just come as you are."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 font-serif text-lg text-charcoal-900">
                <MapPinIcon className="h-5 w-5 text-brown-600" aria-hidden="true" />
                Address
              </h3>
              <address className="mt-3 space-y-0.5 text-sm not-italic leading-relaxed text-charcoal-600">
                <p>{SITE_NAME}</p>
                {LOCATION.streetAddress.verified && LOCATION.streetAddress.value ? (
                  <p>{LOCATION.streetAddress.value}</p>
                ) : null}
                <p>{LOCATION.town}</p>
                <p>{LOCATION.county}</p>
                <p>{LOCATION.country}</p>
                {LOCATION.eircode.verified && LOCATION.eircode.value ? <p>{LOCATION.eircode.value}</p> : null}
              </address>
              <div className="mt-4">
                <Button href={DIRECTIONS_URL} variant="secondary" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </Button>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-serif text-lg text-charcoal-900">
                <ClockIcon className="h-5 w-5 text-brown-600" aria-hidden="true" />
                Opening Hours
              </h3>
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
              {OPENING_HOURS_VERIFIED ? (
                OPENING_HOURS_NOTE ? (
                  <p className="mt-3 text-xs text-charcoal-500">{OPENING_HOURS_NOTE}</p>
                ) : null
              ) : (
                <p className="mt-3 text-xs text-charcoal-400">
                  Hours shown are placeholders — please check our Facebook/Instagram for up-to-date times.
                </p>
              )}
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-serif text-lg text-charcoal-900">
                <PhoneIcon className="h-5 w-5 text-brown-600" aria-hidden="true" />
                Get In Touch
              </h3>
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
              <h3 className="flex items-center gap-2 font-serif text-lg text-charcoal-900">
                <MailIcon className="h-5 w-5 text-brown-600" aria-hidden="true" />
                Follow Along
              </h3>
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
          </Reveal>

          <Reveal delay={100}>
            <MapEmbed className="h-full min-h-[380px]" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
