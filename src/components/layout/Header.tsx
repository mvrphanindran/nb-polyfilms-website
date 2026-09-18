"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { capabilities } from "@/lib/content";

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

type NavItem = { label: string; href: string; items?: NavItem[] };

const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About NB",
    href: "/about",
    items: [
      { label: "Company", href: "/about" },
      { label: "Why NB", href: "/#why-nb" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Product Range", href: "/#solutions" },
      { label: "Industries We Serve", href: "/industries" },
    ],
  },
  {
    label: "Infrastructure",
    href: "/capabilities",
    items: capabilities.map((c) => ({ label: c.name, href: `/capabilities#${slugify(c.name)}` })),
  },
  { label: "Quality", href: "/quality" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const lightMode = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-500 ${
        lightMode
          ? "bg-white/10"
          : "bg-white/75 shadow-[0_18px_40px_-32px_rgba(11,31,58,0.35)]"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 bg-white/92 px-2.5 py-1.5" aria-label="NB Polyfilms home">
          <Image
            src="/images/nb-polyfilms-logo.png"
            alt="NB Polyfilms"
            width={686}
            height={495}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            const textColor = active
              ? "text-blue-500"
              : lightMode
              ? "text-white"
              : "text-navy-900";
            return (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 py-7 font-display text-[13px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-blue-500 ${textColor}`}
                >
                  {link.label}
                  {link.items && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="mt-px transition-transform duration-300 group-hover:translate-y-0.5"
                      aria-hidden
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>

                {link.items && (
                  <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-0 border border-line bg-white/97 opacity-0 shadow-[0_18px_40px_-16px_rgba(11,31,58,0.25)] backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="flex flex-col py-2">
                      {link.items.map((sub) => (
                        <div key={sub.href} className="group/sub relative">
                          <Link
                            href={sub.href}
                            className="flex items-center justify-between gap-3 px-5 py-2.5 text-[13px] text-ink-soft transition-colors hover:bg-mist hover:text-navy-900"
                          >
                            <span>{sub.label}</span>
                            {sub.items && (
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                className="-rotate-90 text-blue-600"
                                aria-hidden
                              >
                                <path
                                  d="M3 4.5L6 7.5L9 4.5"
                                  stroke="currentColor"
                                  strokeWidth="1.4"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </Link>
                          {sub.items && (
                            <div className="invisible absolute left-full top-0 w-48 translate-x-0 border border-line bg-white/97 opacity-0 shadow-[0_18px_40px_-16px_rgba(11,31,58,0.25)] backdrop-blur-md transition-all duration-200 group-hover/sub:visible group-hover/sub:opacity-100">
                              <div className="flex flex-col py-2">
                                {sub.items.map((nested) => (
                                  <Link
                                    key={nested.href}
                                    href={nested.href}
                                    className="px-5 py-2.5 text-[13px] text-ink-soft transition-colors hover:bg-mist hover:text-navy-900"
                                  >
                                    {nested.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className={`hidden shrink-0 items-center gap-2 border px-5 py-2.5 font-display text-[13px] font-medium uppercase tracking-[0.14em] transition-colors lg:inline-flex ${
            lightMode
              ? "border-white/40 text-white hover:border-blue-400 hover:bg-blue-500 hover:text-white"
              : "border-navy-900 text-navy-900 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          }`}
        >
          Get in Touch
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-px w-6 transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45 bg-navy-900" : lightMode ? "bg-white" : "bg-navy-900"
            }`}
          />
          <span
            className={`h-px w-6 transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45 bg-navy-900" : lightMode ? "bg-white" : "bg-navy-900"
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100svh-5rem)] overflow-y-auto bg-white px-6 py-8 shadow-[0_24px_60px_-32px_rgba(11,31,58,0.4)] lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="flex flex-col py-3 first:pt-0">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 font-display text-lg font-medium uppercase tracking-wide text-navy-900"
                >
                  {link.label}
                  {link.items && (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-blue-600"
                      aria-hidden
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>
                {link.items && (
                  <div className="mt-3 flex flex-col gap-3 pl-4">
                    {link.items.map((sub) => (
                      <div key={sub.href} className="flex flex-col gap-3">
                        <Link
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 text-sm text-ink-soft"
                        >
                          {sub.label}
                          {sub.items && (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              className="text-blue-600"
                              aria-hidden
                            >
                              <path
                                d="M3 4.5L6 7.5L9 4.5"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </Link>
                        {sub.items && (
                          <div className="flex flex-col gap-3 pl-4">
                            {sub.items.map((nested) => (
                              <Link
                                key={nested.href}
                                href={nested.href}
                                onClick={() => setOpen(false)}
                                className="text-sm text-ink-faint"
                              >
                                {nested.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
