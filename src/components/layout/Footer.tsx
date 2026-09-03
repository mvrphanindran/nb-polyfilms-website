import Image from "next/image";
import Link from "next/link";
import { companyMeta } from "@/lib/content";

const FOOTER_NAV = [
  { label: "About NB", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Infrastructure", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
];

export function Footer() {
  return (
    <footer className="relative bg-navy-900">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-7 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-12 lg:items-center">
          <div className="flex items-center gap-3 lg:col-span-4">
            <div className="w-fit bg-white/95 px-2 py-1">
              <Image
                src="/images/nb-polyfilms-logo.png"
                alt="NB Polyfilms"
                width={686}
                height={495}
                className="h-6 w-auto"
              />
            </div>
            <span className="hidden text-[11px] leading-snug text-silver-400 sm:block">
              {companyMeta.tagline}
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-1.5 lg:col-span-5">
            {FOOTER_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-silver-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="lg:col-span-3 lg:text-right">
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-silver-400">
              Flexible Packaging Converter
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-start justify-between gap-1.5 text-[10px] text-silver-500 sm:flex-row sm:items-center">
          <span>&copy; {new Date().getFullYear()} NB Polyfilms. All rights reserved.</span>
          <span className="uppercase tracking-[0.14em]">
            Flexible Packaging Converter · Est. {companyMeta.established}
          </span>
        </div>
      </div>
    </footer>
  );
}
