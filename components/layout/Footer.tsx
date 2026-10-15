import Link from "next/link";
import Image from "next/image";
import { cacheLife } from "next/cache";
import { Wave } from "@/components/ui/Section";
import { footerLinks } from "@/data/navigation";
import {
  SITE_NAME,
  SITE_TAGLINE,
  HOSPITAL_NAME,
  LOCATION_FULL,
  GOOGLE_MAPS_URL,
  PHONE_TEL,
  PHONE_DISPLAY,
  EMAIL_PRIMARY,
  OPD_TIMINGS,
  VELYS_TRADEMARK,
} from "@/lib/constants";

// new Date() can't run in the prerendered shell under cacheComponents; cache it instead.
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="text-base text-slate-300">
      <Wave fill="var(--color-navy)" className="-mb-px" />
      <div className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-28 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
            {/* Brand + NAP block (must match Google Business Profile exactly, plan §12.2) */}
            <div className="space-y-5 lg:col-span-2">
              <div>
                <span className="block font-heading text-2xl font-bold text-white">{SITE_NAME}</span>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                  {SITE_TAGLINE}
                </span>
              </div>

              <address className="space-y-2 not-italic">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logos/kasliwal-logo-transparent.png"
                    alt={`${HOSPITAL_NAME} logo`}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full bg-white shadow-soft"
                  />
                  <p className="font-semibold text-white">{HOSPITAL_NAME}</p>
                </div>
                <p>{LOCATION_FULL}</p>
                <p>
                  <a href={`tel:${PHONE_TEL}`} className="text-white underline-offset-4 hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${EMAIL_PRIMARY}`} className="break-all hover:text-white">
                    {EMAIL_PRIMARY}
                  </a>
                </p>
                <p>OPD: {OPD_TIMINGS}</p>
                <p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white underline-offset-4 hover:underline"
                  >
                    Get directions →
                  </a>
                </p>
              </address>
            </div>

            {footerLinks.map((section) => (
              <nav key={section.category} aria-label={section.category}>
                <h2 className="mb-3 font-sans text-sm font-bold uppercase tracking-widest text-white">
                  {section.category}
                </h2>
                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="inline-flex min-h-9 items-center hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-12 space-y-3 border-t border-white/15 pt-6 text-sm text-slate-400">
            <p>
              © <CopyrightYear /> {SITE_NAME} · {HOSPITAL_NAME}. All rights reserved.
            </p>
            <p>
              The information on this website is for patient education and does not replace a consultation with a
              qualified orthopaedic surgeon. Results vary between patients.
            </p>
            <p>{VELYS_TRADEMARK}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
