"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { NAV_ITEMS } from "@/data/navigation";
import { CONTACT, SITE_NAME } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close the mobile drawer on route change. Adjusting state during render
  // (rather than in an effect) avoids an extra commit — this is the pattern
  // React recommends for "reset state when a prop changes".
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Subtle shadow once the page has scrolled — keeps the header quiet at the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + handle Escape + focus management while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    const trigger = triggerRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-cream-100/95 backdrop-blur-sm transition-[box-shadow,border-color] duration-300",
          scrolled ? "border-charcoal-900/10 shadow-[0_10px_30px_-20px_rgba(43,38,30,0.35)]" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-6 sm:h-20 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="font-serif text-[1.6rem] leading-none tracking-tight text-charcoal-900 sm:text-[1.75rem]"
          >
            {SITE_NAME.split(" ")[0]}
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-10">
              {NAV_ITEMS.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative py-1 text-[0.95rem] font-medium text-charcoal-700 transition-colors hover:text-brown-700",
                        active && "text-brown-700",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brown-600 transition-transform duration-300 ease-out group-hover:scale-x-100",
                          active && "scale-x-100",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            ref={triggerRef}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-charcoal-800 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/*
        Full-screen mobile navigation — rendered as a sibling of <header>,
        not a child of it. <header> uses backdrop-blur, and backdrop-filter
        (like transform/filter) creates a new containing block for any
        `position: fixed` descendant, which would shrink this overlay down
        to the header's own box instead of the full viewport.
      */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        inert={!open}
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-cream-50 transition-opacity duration-300 ease-out md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 sm:h-20 sm:px-8">
          <span className="font-serif text-[1.6rem] leading-none tracking-tight text-charcoal-900">
            {SITE_NAME.split(" ")[0]}
          </span>
          <button
            ref={closeRef}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-charcoal-800"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <CloseIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile primary" className="flex flex-1 flex-col justify-center px-8 pb-20">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, index) => (
              <li
                key={item.href}
                className="border-b border-charcoal-900/8 py-4"
                style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  className="font-serif text-3xl text-charcoal-900 transition-colors hover:text-brown-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-charcoal-500">
            {CONTACT.phone.verified ? (
              <a href={`tel:${CONTACT.phone.value}`} className="hover:text-brown-700">
                {CONTACT.phone.value}
              </a>
            ) : (
              "Emly, Co. Tipperary, Ireland"
            )}
          </p>
        </nav>
      </div>
    </>
  );
}
