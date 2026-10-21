import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Button from "@/components/ui/Button";
import MedicalReviewBox from "@/components/shared/MedicalReviewBox";
import AppointmentForm from "@/components/forms/AppointmentForm";
import {
  HOSPITAL_NAME,
  LOCATION_ADDRESS,
  LOCATION_CITY,
  LOCATION_STATE,
  LOCATION_PIN,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book an Appointment | Dr. Vishal Kasliwal | Kasliwal Joint Institute",
  description:
    "Schedule an orthopaedic consultation for robotic knee replacement, hip surgery, or arthroscopy with Dr. Vishal Kasliwal at Kasliwal Super Speciality Hospital, Nashik.",
  keywords: [
    "book orthopaedic appointment Nashik",
    "Dr Vishal Kasliwal consultation",
    "knee replacement consultation Nashik",
    "hip specialist appointment Nashik",
  ],
  alternates: {
    canonical: "https://kasliwaljointinstitute.com/book-appointment",
  },
};

export default function BookAppointmentPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section (Full Viewport Screen-Fit) */}
      <section className="bg-navy text-white min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-8 lg:py-12">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Contact", href: "/contact" },
              { label: "Book Appointment" },
            ]}
            tone="dark"
            className="mb-3 sm:mb-4"
          />

          <div className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Title & Actions */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-light">
                Outpatient Department · Nashik
              </span>

              <h1 className="mt-2 font-heading text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-tight">
                Schedule a Consultation with Dr. Vishal Kasliwal
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                Comprehensive clinical assessment for knee pain, hip osteoarthritis, sports ligament tears, or revision joint surgery. Book your OPD appointment slot below or connect directly with our care coordinator.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button href="#booking-form" variant="light" size="sm" arrow>
                  Fill Booking Form
                </Button>
                <Button href={`tel:${PHONE_TEL}`} variant="outline-light" size="sm">
                  Call {PHONE_DISPLAY}
                </Button>
                <Button href={WHATSAPP_URL} variant="outline-light" size="sm">
                  WhatsApp Desk
                </Button>
              </div>

              {/* Consultation Highlights */}
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  Detailed Physical Joint Examination
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  X-Ray &amp; MRI Review
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  Clear Non-Surgical vs Surgical Options
                </span>
              </div>

              {/* Clean Credential Bar */}
              <div className="mt-5 pt-3.5 border-t border-white/15 text-xs sm:text-sm text-slate-300">
                <span className="font-semibold text-white">Dr. Vishal Kasliwal</span> · M.S. Orthopaedics · Reg. No. MMC/2005/02/1098
              </div>
            </div>

            {/* Right Column: Consultation Suite Photograph */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-dark shadow-lift max-w-[480px] mx-auto lg:max-w-none">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/patient_guide_hero.jpg"
                    alt="Clinical consultation suite with anatomical joint models at Kasliwal Joint Institute"
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
        {/* 2. Interactive Booking Form & OPD Schedule */}
        <section id="booking-form" className="scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
                Appointment Confirmation
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                Book Your OPD Consultation
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              OPD Timings: Mon–Sat 10:00 AM – 2:00 PM &amp; 5:00 PM – 8:00 PM
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left: Interactive Form */}
            <div className="lg:col-span-7 flex flex-col">
              <AppointmentForm />
            </div>

            {/* Right: What to Bring to Your Consultation */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue block">Checklist</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">
                  What to Bring for Your Consultation
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span><strong>Previous Imaging:</strong> Recent X-rays (standing weight-bearing views) or MRI scans of your joint.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span><strong>Medical Prescriptions:</strong> Current medications, heart/blood pressure records, or diabetes logs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span><strong>Insurance Card:</strong> Health insurance e-card or policy document if planning cashless surgery.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span><strong>Photo ID:</strong> Government-issued photo identification (Aadhaar or PAN).</span>
                  </li>
                </ul>
              </div>

              {/* Location & Contact Summary */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-soft space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue block">Clinic Location</span>
                <div>
                  <h4 className="font-heading font-bold text-sm text-navy">{HOSPITAL_NAME}</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {LOCATION_ADDRESS}, {LOCATION_CITY}, {LOCATION_STATE} {LOCATION_PIN}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-xs">
                  <span className="text-slate-600">Need help with directions?</span>
                  <Link href="/contact#map" className="font-semibold text-clinical-blue hover:underline">
                    View Google Map →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Medical Review Box */}
        <MedicalReviewBox />
      </Container>
    </div>
  );
}
