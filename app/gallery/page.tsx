import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Button from "@/components/ui/Button";
import CTA from "@/components/shared/CTA";
import MedicalReviewBox from "@/components/shared/MedicalReviewBox";
import BentoGallery from "@/components/gallery/BentoGallery";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clinical & Hospital Gallery | Kasliwal Joint Institute, Nashik",
  description:
    "Explore authentic clinical photographs of our modular robotic surgical suites, consultation rooms, multidisciplinary care team, and patient evaluation facilities in Nashik.",
  keywords: [
    "Kasliwal Hospital gallery",
    "Dr Vishal Kasliwal photos",
    "robotic surgery OT Nashik",
    "joint replacement hospital photos Nashik",
    "Kasliwal Super Speciality Hospital photos",
  ],
  alternates: {
    canonical: "https://kasliwaljointinstitute.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section (Full Viewport Screen-Fit) */}
      <section className="bg-navy text-white min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-8 lg:py-12">
        <Container>
          <Breadcrumbs items={[{ label: "Hospital Gallery" }]} tone="dark" className="mb-3 sm:mb-4" />

          <div className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Title & Actions */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-light">
                Kasliwal Joint Institute · Nashik
              </span>

              <h1 className="mt-2 font-heading text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-tight">
                Clinical &amp; Hospital Gallery
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                A visual walkthrough of our outpatient consultation suites, modular laminar airflow operating theatre, computer-navigated robotic joint technology, and clinical care team at Kasliwal Super Speciality Hospital, Gangapur Road, Nashik.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button href="#photos" variant="light" size="sm" arrow>
                  View Photo Gallery
                </Button>
                <Button href="/book-appointment" variant="outline-light" size="sm">
                  Book Consultation
                </Button>
                <Button href={`tel:${PHONE_TEL}`} variant="outline-light" size="sm">
                  Call {PHONE_DISPLAY}
                </Button>
              </div>

              {/* Highlights Strip */}
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  Authentic Hospital Photos
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  Modular Laminar Airflow OT
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  Consultation &amp; Rehab Suites
                </span>
              </div>

              {/* Clean Credential Bar */}
              <div className="mt-5 pt-3.5 border-t border-white/15 text-xs sm:text-sm text-slate-300">
                <span className="font-semibold text-white">Kasliwal Super Speciality Hospital</span> · Dr. Vishal Kasliwal (MMC/2005/02/1098)
              </div>
            </div>

            {/* Right Column: Hero OT Photograph (No bottom tag) */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-dark shadow-lift max-w-[480px] mx-auto lg:max-w-none">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/patients/6.jpg.jpeg"
                    alt="Dr. Vishal Kasliwal with modular laminar airflow OT surgical team"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Sections (Screen-Fit Balanced Rhythm) */}
      <Container className="py-8 sm:py-12 space-y-12 sm:space-y-14">
        {/* 2. Bento Grid Section */}
        <section id="photos" className="scroll-mt-24">
          <div className="border-b border-slate-200 pb-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Visual Tour &amp; Clinical Spaces
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Consultations, Theatre &amp; Care Team
            </h2>
          </div>

          <BentoGallery />
        </section>

        {/* 3. Hospital Infrastructure Highlights */}
        <section id="facilities" className="scroll-mt-24 border-t border-slate-100 pt-8 sm:pt-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Centre of Excellence Standards
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Specialized Infrastructure for Joint Care
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every facility at Kasliwal Hospital is purpose-designed for safety, sterility, and rapid surgical recovery:
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Surgical Environment</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Laminar Airflow Theatre</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ultra-clean vertical positive pressure airflow delivering sterile air and stringent infection prevention.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Class 10,000 sterile air filtration
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Robotics &amp; Navigation</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">VELYS™ Robotic Suite</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  DePuy Synthes optical verification system for real-time kinematic ligament balancing and sub-millimetre bone cuts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Johnson &amp; Johnson DePuy Synthes
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Early Recovery</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">In-House Physiotherapy Gym</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Equipped with parallel walking bars, step trainers, and trained mobility therapists for day-one assisted ambulation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Same-day assisted walking protocol
              </div>
            </div>
          </div>
        </section>

        {/* 4. Consultation CTA */}
        <section id="book">
          <CTA
            title="Visit Kasliwal Joint Institute"
            description="Consult with Dr. Vishal Kasliwal at Kasliwal Super Speciality Hospital, Prasad Circle, Gangapur Road, Nashik."
          />
        </section>

        {/* 5. Medical Review Box */}
        <MedicalReviewBox />
      </Container>
    </div>
  );
}
