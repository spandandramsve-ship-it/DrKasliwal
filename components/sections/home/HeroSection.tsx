import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_TAGLINE } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative flex h-[calc(100svh-4rem)] min-h-[560px] w-full items-center overflow-hidden bg-navy-dark lg:h-[calc(100svh-5rem)]">
      {/* Background Photograph — aligned to the right so surgical team and VELYS console are clearly featured */}
      <div className="absolute inset-0">
        <Image
          src="/images/doctor/hero_robotic_surgery.jpg"
          alt="Orthopaedic surgeon performing advanced robotic joint replacement surgery with robotic navigation console"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] lg:object-[85%_center]"
        />
        {/* Editorial Left-to-Right Gradient: deep navy canvas for text on left, clear view of surgeon and robot on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 via-42% to-transparent sm:via-48% lg:via-42%" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-navy-dark/40" />
      </div>

      <Container className="relative z-10 flex h-full flex-col justify-center py-8 lg:py-14">
        <div className="max-w-2xl">
          {/* Main Brand Title — Prestigious Editorial Serif */}
          <div className="font-serif text-3xl font-medium uppercase leading-[1.05] tracking-wide text-[#F4EDE1] sm:text-4xl md:text-5xl lg:text-6xl">
            KASLIWAL
            <br />
            JOINT INSTITUTE
          </div>

          {/* Tagline */}
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#C9A364] sm:text-sm">
            {SITE_TAGLINE}
          </p>

          {/* Subheading / Service Headline */}
          <h1 className="mt-5 max-w-xl font-heading text-lg font-medium leading-snug text-[#E8EDF2] sm:text-xl md:text-2xl lg:text-3xl">
            Advanced Robotic Joint Replacement &amp; Arthroscopy in Nashik
          </h1>

          {/* Specialties Inline Navigation */}
          <nav
            aria-label="Clinical focus areas"
            className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm text-slate-300"
          >
            <Link href="/knee-specialist-nashik" className="transition-colors hover:text-white">
              Knee
            </Link>
            <span className="font-light text-slate-500" aria-hidden="true">
              |
            </span>
            <Link href="/hip-specialist-nashik" className="transition-colors hover:text-white">
              Hip
            </Link>
            <span className="font-light text-slate-500" aria-hidden="true">
              |
            </span>
            <Link href="/shoulder-arthroscopy-nashik" className="transition-colors hover:text-white">
              Shoulder
            </Link>
            <span className="font-light text-slate-500" aria-hidden="true">
              |
            </span>
            <Link href="/knee-arthroscopy-nashik" className="transition-colors hover:text-white">
              Arthroscopy
            </Link>
            <span className="font-light text-slate-500" aria-hidden="true">
              |
            </span>
            <Link href="/revision-joint-replacement-nashik" className="transition-colors hover:text-white">
              Revision Surgery
            </Link>
          </nav>

          {/* Matte Action Buttons matching mockup */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#246A92] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D5677] sm:text-base"
            >
              <span>Book a Consultation</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/robotic-joint-replacement-nashik"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:text-base"
            >
              <span>Explore Our Treatments</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>

      {/* Floating Bottom-Right Milestone Badge Card (shifted upwards so it doesn't overlap WhatsApp button) */}
      <aside
        aria-label="Centre milestone"
        className="absolute bottom-20 right-6 z-20 hidden md:block sm:bottom-22 lg:bottom-24 lg:right-10"
      >
        <div className="max-w-[300px] rounded-2xl bg-[#E4E8D5] p-4 text-slate-900 shadow-lift ring-1 ring-black/5">
          <p className="font-heading text-sm font-bold text-navy sm:text-base">
            Nashik&apos;s Advanced
          </p>
          <p className="mt-0.5 text-xs font-semibold text-slate-700">
            VELYS™ Robotic Joint Replacement Centre
          </p>
          <p className="mt-2 border-t border-slate-300/80 pt-1.5 text-xs font-semibold text-slate-600">
            Robotic Knee <span className="font-light text-slate-400">|</span> Partial Knee{" "}
            <span className="font-light text-slate-400">|</span> Hip Replacement
          </p>
        </div>
      </aside>
    </section>
  );
}

