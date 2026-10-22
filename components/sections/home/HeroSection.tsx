import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_TAGLINE } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative flex h-[calc(100svh-4rem)] min-h-[560px] w-full items-center overflow-hidden bg-navy-dark lg:h-[calc(100svh-5rem)]">
      {/* Background Video — plays Hero.mp4 with poster fallback and responsive framing */}
      <div className="absolute inset-0 overflow-hidden bg-navy-dark">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero_video_poster.jpg"
          className="h-full w-full object-cover sm:w-[120%] lg:w-[124%] sm:max-w-none sm:translate-x-[8%] lg:translate-x-[12%]"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 16%, black 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 16%, black 100%)",
          }}
          aria-hidden="true"
        >
          <source src="/video/Hero.mp4" type="video/mp4" />
        </video>
        {/* Mobile Overlay: Balanced, full-coverage cinematic tint protecting text readability across full width while keeping video motion clearly visible */}
        <div className="absolute inset-0 bg-navy-dark/55 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-transparent via-50% to-navy-dark/70 sm:hidden" />

        {/* Desktop / Tablet Overlay: Smooth left-to-right gradient — deep navy text canvas on left, 100% open video view on right */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/80 via-40% to-transparent lg:via-35%" />
      </div>

      <Container className="relative z-10 flex h-full flex-col justify-center py-8 sm:py-8 lg:py-14">
        <div className="mx-auto sm:mx-0 max-w-2xl flex flex-col items-center sm:items-start text-center sm:text-left">
          {/* Main Brand Title — Prestigious Editorial Serif */}
          <div className="font-serif text-[1.75rem] font-medium uppercase leading-[1.08] tracking-wide text-[#F4EDE1] sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_16px_rgba(7,30,56,0.9)]">
            KASLIWAL
            <br />
            JOINT INSTITUTE
          </div>

          {/* Tagline */}
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#E0BE86] sm:text-sm drop-shadow-[0_1px_8px_rgba(7,30,56,0.9)]">
            {SITE_TAGLINE}
          </p>

          {/* Subheading / Service Headline */}
          <h1 className="mt-5 max-w-xl font-heading text-lg font-medium leading-snug text-[#F0F4F8] sm:text-xl md:text-2xl lg:text-3xl drop-shadow-[0_2px_12px_rgba(7,30,56,0.85)]">
            Advanced Robotic Joint Replacement &amp; Arthroscopy in Nashik
          </h1>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-3.5 w-full max-w-md sm:max-w-none sm:w-auto">
            <Link
              href="/book-appointment"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#246A92] px-5 py-3 sm:py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D5677] sm:text-base text-center"
            >
              <span>Book a Consultation</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/robotic-joint-replacement"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-navy-dark/40 backdrop-blur-xs px-5 py-3 sm:py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark/60 sm:text-base text-center"
            >
              <span>Explore Our Treatments</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

