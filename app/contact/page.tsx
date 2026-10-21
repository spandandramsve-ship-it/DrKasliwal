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
  EMAIL_PRIMARY,
  GOOGLE_MAPS_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Kasliwal Joint Institute | Gangapur Road, Nashik",
  description:
    "Hospital address, OPD timings, phone numbers, Google Map directions, and appointment booking with Dr. Vishal Kasliwal at Kasliwal Super Speciality Hospital, Nashik.",
  keywords: [
    "Kasliwal Hospital Nashik contact",
    "Dr Vishal Kasliwal appointment",
    "orthopaedic hospital Gangapur Road Nashik",
    "joint replacement clinic Nashik contact",
    "Prasad Circle hospital Nashik",
  ],
  alternates: {
    canonical: "https://kasliwaljointinstitute.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section (Full Viewport Screen-Fit) */}
      <section className="bg-navy text-white min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-8 lg:py-12">
        <Container>
          <Breadcrumbs items={[{ label: "Contact Us" }]} tone="dark" className="mb-3 sm:mb-4" />

          <div className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Title & Actions */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-light">
                Kasliwal Joint Institute · Nashik
              </span>

              <h1 className="mt-2 font-heading text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-tight">
                Contact Us &amp; Hospital Location
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                Conveniently located at Prasad Circle, Gangapur Road, Nashik. Connect with our dedicated patient coordination team to schedule an in-person consultation with Dr. Vishal Kasliwal, discuss joint surgery, or arrange cashless insurance.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button href={`tel:${PHONE_TEL}`} variant="light" size="sm" arrow>
                  Call {PHONE_DISPLAY}
                </Button>
                <Button href={WHATSAPP_URL} variant="outline-light" size="sm">
                  WhatsApp Us
                </Button>
                <Button href="#book-appointment" variant="outline-light" size="sm">
                  Book OPD Slot
                </Button>
              </div>

              {/* Quick Accessibility Highlights */}
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  Mon–Sat OPD Consultations
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  24/7 Trauma &amp; Emergency
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  Dedicated Visitor Parking
                </span>
              </div>

              {/* Clean Credential Bar */}
              <div className="mt-5 pt-3.5 border-t border-white/15 text-xs sm:text-sm text-slate-300">
                <span className="font-semibold text-white">Kasliwal Super Speciality Hospital</span> · Dr. Vishal Kasliwal (MMC/2005/02/1098)
              </div>
            </div>

            {/* Right Column: Hospital Exterior Photograph */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-dark shadow-lift max-w-[480px] mx-auto lg:max-w-none">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/hospital/hospital.jpeg"
                    alt="Kasliwal Super Speciality Hospital at Bosco Centre, Gangapur Road, Nashik"
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
        {/* 2. Interactive Booking Form & Direct Desks */}
        <section id="book-appointment" className="scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
                Consultation Scheduling
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                Appointment &amp; Direct Desks
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              OPD Timings: Mon–Sat 10:00 AM – 2:00 PM &amp; 5:00 PM – 8:00 PM
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left: Interactive Appointment Form */}
            <div className="lg:col-span-7 flex flex-col">
              <AppointmentForm />
            </div>

            {/* Right: Key Contact Desks & OPD Timings */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
              {/* OPD Schedule Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ice-blue text-clinical-blue">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue block">Clinic Timings</span>
                    <h3 className="font-heading font-bold text-base text-navy">OPD Consultation Hours</h3>
                  </div>
                </div>

                <div className="mt-3.5 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3">
                  <div className="flex justify-between items-center py-1">
                    <span className="font-medium text-slate-700">Morning Session:</span>
                    <span className="font-semibold text-navy">10:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-50">
                    <span className="font-medium text-slate-700">Evening Session:</span>
                    <span className="font-semibold text-navy">5:00 PM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-50">
                    <span className="font-medium text-slate-700">Days Active:</span>
                    <span className="font-semibold text-navy">Monday through Saturday</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-50 text-slate-500 text-xs">
                    <span>Sundays:</span>
                    <span>Emergency / Prior Appointment</span>
                  </div>
                </div>
              </div>

              {/* Direct Communication Lines */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-soft space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue block">Direct Lines</span>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Hospital Phone:</span>
                    <a href={`tel:${PHONE_TEL}`} className="font-bold text-navy hover:text-clinical-blue transition-colors">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-200 pt-2">
                    <span className="text-slate-600">WhatsApp Desk:</span>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#128C7E] hover:underline">
                      Chat on WhatsApp →
                    </a>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-200 pt-2">
                    <span className="text-slate-600">Email Address:</span>
                    <a href={`mailto:${EMAIL_PRIMARY}`} className="font-medium text-slate-700 hover:text-navy truncate max-w-[200px]">
                      {EMAIL_PRIMARY}
                    </a>
                  </div>
                </div>
              </div>

              {/* Cashless Insurance Note */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <h4 className="font-heading font-bold text-sm text-navy">Cashless Insurance Desk</h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Our hospital TPA desk handles direct pre-authorisations with all major health insurance companies and TPAs. Please bring your policy card to your OPD visit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Address & Interactive Location Map */}
        <section id="map" className="scroll-mt-24 border-t border-slate-100 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
                Prasad Circle, Gangapur Road
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                Hospital Address &amp; Directions
              </h2>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-semibold text-clinical-blue hover:text-navy transition-colors inline-flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left: Structured Address & Travel Durations */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Postal Address</span>
                <h3 className="mt-1 font-heading font-bold text-base sm:text-lg text-navy">
                  {HOSPITAL_NAME}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {LOCATION_ADDRESS},<br />
                  {LOCATION_CITY}, {LOCATION_STATE} {LOCATION_PIN}.
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2.5">
                    Approximate Travel Times
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                      <span><strong>College Road &amp; Canada Corner:</strong> ~5 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                      <span><strong>CBS Central Bus Stand:</strong> ~15 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                      <span><strong>Nashik Road Railway Station:</strong> ~25 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                      <span><strong>Mumbai-Agra Highway (NH3):</strong> Direct access via Gangapur Road</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2.5">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-navy px-4 py-2 text-xs font-semibold text-white shadow hover:bg-navy-light transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Get Driving Directions</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Call for Assistance
                </a>
              </div>
            </div>

            {/* Right: Embedded Interactive Google Map */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 overflow-hidden shadow-soft bg-slate-100 min-h-[320px] sm:min-h-[360px] relative">
              <iframe
                title="Kasliwal Super Speciality Hospital Location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.974011030018!2d73.76632497587784!3d20.009581822002575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0e33ef7401%3A0xe543c1ee12d26e47!2sKasliwal%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* 4. Support Services for Visiting Patients */}
        <section id="patient-support" className="scroll-mt-24 border-t border-slate-100 pt-8 sm:pt-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Patient Care Standards
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Specialist Support for Your Visit
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every facility at Kasliwal Hospital is planned to ensure comfort, accessibility, and fast turnaround:
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Outstation Patients</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Fast-Track OPD Review</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Share previous knee/hip X-rays via WhatsApp before travelling to ensure all preliminary evaluations are aligned in a single visit.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Single-day consultation &amp; scans
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Insurance &amp; Billing</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Direct TPA Desk</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dedicated insurance coordinators verify cashless approvals, estimate pre-authorisations, and assist with claims documentation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Cashless assistance available
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Emergency Care</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">24/7 Trauma &amp; ICU</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Round-the-clock intensive care monitoring, emergency trauma admission, and modular laminar airflow surgical theatres.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                24/7 Emergency cover
              </div>
            </div>
          </div>
        </section>

        {/* 5. Medical Review Box */}
        <MedicalReviewBox />
      </Container>
    </div>
  );
}
