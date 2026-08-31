import Image from "next/image";
import Link from "next/link";
import { companyMeta } from "@/lib/content";

const FOOTER_NAV = [
  { label: "Solutions", href: "/solutions" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

const CONTACT_FIELDS = [
  "Corporate Office",
  "Manufacturing Unit",
  "Phone",
  "Email",
  "Website",
];

export function Footer() {
  return (
    <footer className="relative bg-navy-900">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-7 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-12 lg:items-center">
          <div className="flex items-center gap-3 lg:col-span-3">
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

          <nav className="flex flex-wrap gap-x-5 gap-y-1.5 lg:col-span-4">
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

          <div className="grid grid-cols-2 gap-x-5 gap-y-1 sm:grid-cols-5 lg:col-span-5">
            {CONTACT_FIELDS.map((label) => (
              <div key={label} className="flex items-baseline gap-1.5 sm:flex-col sm:gap-0.5">
                <span className="font-display text-[9px] font-semibold uppercase tracking-[0.12em] text-silver-500">
                  {label}
                </span>
                <span className="text-[11px] italic text-silver-400/70">
                  To be added
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-1.5 border-t border-line-dark pt-3 text-[10px] text-silver-500 sm:flex-row sm:items-center">
          <span>&copy; {new Date().getFullYear()} NB Polyfilms. All rights reserved.</span>
          <span className="uppercase tracking-[0.14em]">
            Flexible Packaging Converter · Est. {companyMeta.established}
          </span>
        </div>
      </div>
    </footer>
  );
}
