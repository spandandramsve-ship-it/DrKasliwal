import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Wave } from "@/components/ui/Section";
import { SITE_NAME, SITE_TAGLINE, STATS } from "@/lib/constants";
import { heroChips, heroBadgeLinks } from "@/data/home";

// Plan §4.1
export default function HeroSection() {
  // Desktop: the hero fills one screen (100svh − 80px header + 64px stats-card overlap)
  // so the first view ends cleanly at the fold instead of showing a sliver of the next card.
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ice-blue via-white to-sand-light lg:flex lg:min-h-[calc(100svh-1rem)] lg:items-center">
      {/* Soft background shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-clinical-blue/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl" />
      </div>

      <Container className="relative grid items-center gap-10 pb-20 pt-8 sm:pt-10 lg:grid-cols-12 lg:gap-12 lg:pb-[6.5rem] lg:pt-10">
        <div className="lg:col-span-6">
          {/* Brand line: styled, but not the H1 (plan §4 SEO note) */}
          <p className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-navy shadow-soft ring-1 ring-navy/5 backdrop-blur">
            {SITE_NAME}
            <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
            <span className="text-gold">{SITE_TAGLINE}</span>
          </p>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.1] text-navy sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
            Advanced Robotic Joint Replacement &amp;{" "}
            <span className="relative whitespace-nowrap text-clinical-blue">
              Arthroscopy
              <svg
                aria-hidden="true"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-gold/70"
              >
                <path d="M2 9 C 80 2, 220 2, 298 8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{" "}
            in Nashik
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 xl:text-xl">
            Robotic precision. Personalised alignment. Experienced surgical judgement, with{" "}
            <strong className="font-semibold text-navy">Dr. Vishal Kasliwal</strong>.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <Button href="/book-appointment" size="lg" arrow>
              Book a Consultation
            </Button>
            <Button href="/robotic-joint-replacement-nashik" variant="outline" size="lg" arrow>
              Explore Our Treatments
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Specialities">
            {heroChips.map((chip) => (
              <li key={chip.label}>
                <Link
                  href={chip.href}
                  className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-base text-navy shadow-soft ring-1 ring-navy/5 transition-colors hover:bg-navy hover:text-white"
                >
                  {chip.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Width capped so photo + badge card fit within one screen on laptops */}
        <div className="relative mx-auto w-full max-w-xl lg:col-span-6 lg:mr-0 lg:max-w-[min(100%,32rem)] xl:max-w-[34rem]">
          {/* Decorative ring behind the photo */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-clinical-blue/25 via-transparent to-gold/30 blur-sm"
          />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift ring-8 ring-white">
            <Image
              src="/images/doctor/hero_section.jpeg"
              alt="Dr. Vishal Kasliwal beside the VELYS robotic system with patient community"
              width={1024}
              height={765}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Floating chips */}
          <div className="absolute -left-3 top-6 hidden rounded-2xl bg-white/95 px-5 py-3 shadow-lift backdrop-blur sm:block lg:-left-10">
            <p className="font-heading text-2xl font-bold text-navy">{STATS.experience.value} years</p>
            <p className="text-sm text-slate-600">of orthopaedic practice</p>
          </div>

          {/* Badge card (sand). Plan §4.1: no "first/only" claim without written proof. */}
          <div className="relative -mt-14 ml-auto w-[94%] rounded-3xl bg-white/95 p-5 shadow-lift ring-1 ring-sand-border backdrop-blur">
            <p className="font-heading text-lg font-bold leading-snug text-navy">
              VELYS™ Robotic-Assisted Joint Replacement in Nashik
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {heroBadgeLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-full bg-sand px-3.5 text-sm font-semibold text-navy transition-colors hover:bg-gold hover:text-white"
                  >
                    {link.label} <span aria-hidden="true">&nbsp;→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Curved bottom edge into the white section below */}
      <Wave className="absolute inset-x-0 bottom-0" />
    </section>
  );
}
