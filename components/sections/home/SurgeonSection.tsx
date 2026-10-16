import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { DOCTOR_NAME } from "@/lib/constants";

export default function SurgeonSection() {
  return (
    <Section size="md" width="xl" aria-labelledby="surgeon-heading">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
        {/* Left Column: Clean Doctor Portrait (No text overlay) */}
        <div className="flex justify-center lg:col-span-5">
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] aspect-[4/4.6] overflow-hidden rounded-3xl bg-gradient-to-b from-ice-blue via-white to-sand-light/40 border border-slate-200/80 shadow-md">
            <Image
              src="/images/doctor/Dr_kasliwal.png"
              alt={`Portrait of ${DOCTOR_NAME}`}
              fill
              sizes="(min-width: 1024px) 390px, 320px"
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* Right Column: Balanced, rich surgeon information */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <Eyebrow>Meet the surgeon</Eyebrow>

          <h2
            id="surgeon-heading"
            className="mt-2 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            {DOCTOR_NAME}
          </h2>

          <div className="mt-1.5 space-y-0.5">
            <p className="text-base sm:text-lg font-bold text-clinical-blue">
              M.S. Orthopaedics
            </p>
            <p className="text-sm sm:text-base font-medium text-slate-700">
              Fellowship-trained Joint Replacement &amp; Arthroscopy Surgeon
            </p>
          </div>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
            Trained at Breach Candy Hospital, Mumbai under Dr. Arun Mullaji for joint replacement, with fellowship in arthroscopy under Dr. Sachin Tapasvi, Pune, and advanced shoulder arthroscopy in Seoul, Korea under Dr. Jin Young Park.
          </p>

          {/* 2x2 Grid of Stat & Specialty Cards */}
          {/* 2x2 Grid of Stat & Specialty Cards */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-3.5">
            {/* 1. 15+ Years of experience */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-2xs hover:border-clinical-blue/40 transition-colors">
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-ice-blue text-clinical-blue border border-clinical-blue/25 shadow-2xs">
                <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 3.5v4a3.5 3.5 0 0 0 7 0v-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3.5h3m4 0h3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 11v4.5a4.5 4.5 0 0 0 9 0V13" />
                  <circle cx="17" cy="11.5" r="2.25" stroke="currentColor" strokeWidth={1.8} />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-heading text-lg sm:text-2xl font-bold text-navy leading-tight">15+</p>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-tight">Years Surgical Experience</p>
              </div>
            </div>

            {/* 2. ~5,000 Procedures */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-2xs hover:border-clinical-blue/40 transition-colors">
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-ice-blue text-clinical-blue border border-clinical-blue/25 shadow-2xs">
                {/* Procedures Performed (Medical log sheet, first aid case, and verified gear checkmark matching reference) */}
                <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M10 5h7a2 2 0 0 1 2 2v6M6 10v9a2 2 0 0 0 2 2h6.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path d="M9 11.5h8M9 14.5h5M9 17.5h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  {/* Top-Left Medical Case */}
                  <rect x="2" y="2.5" width="6.5" height="5.5" rx="1.2" fill="currentColor" />
                  <path d="M3.8 2.5V1.7a.7.7 0 0 1 .7-.7h1.5a.7.7 0 0 1 .7.7v.8" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M5.25 4v2.5M4 5.25h2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  {/* Bottom-Right Verified Gear */}
                  <g transform="translate(13.5, 13.5)">
                    <circle cx="4.5" cy="4.5" r="4.2" fill="currentColor" />
                    <path
                      d="M4.5.3v1M4.5 7.7v1M.3 4.5h1M7.7 4.5h1M1.6 1.6l.7.7M6.7 6.7l.7.7M1.6 7.4l.7-.7M6.7 1.6l.7.7"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2.8 4.6l1.2 1.3 2.6-2.7"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-heading text-lg sm:text-2xl font-bold text-navy leading-tight">~5,000</p>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-tight">Procedures Performed</p>
              </div>
            </div>

            {/* 3. Joint Replacement */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-2xs hover:border-clinical-blue/40 transition-colors">
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-ice-blue text-clinical-blue border border-clinical-blue/25 shadow-2xs">
                {/* Knee Joint Replacement Prosthetic matching user reference */}
                <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {/* Femur & Femoral Component */}
                  <path
                    d="M9 1h6v4c1.8.4 3.4 1.4 4.3 3 .6 1.1.6 2.1.2 3.1H4.5c-.4-1-.4-2 .2-3.1 1-1.6 2.5-2.6 4.3-3V1Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7 8.3c1.2-.9 2.2-1.2 5-1.2s3.8.3 5 1.2c0 1.8-1 2.8-2.5 2.8s-1.8-1.4-2.5-1.4-1 1.4-2.5 1.4S7 10.1 7 8.3Z"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="0.7"
                  />
                  {/* Tibial Polyethylene Spacer Bar */}
                  <rect x="5.2" y="12.2" width="13.6" height="2" rx="0.4" fill="currentColor" />
                  {/* Tibia Bone Tray & Stem */}
                  <path
                    d="M4.6 15.2h14.8c0 2-1 3.4-3 4.4-.7.4-1.4.9-1.4 2.2V23h-6v-1.2c0-1.3-.7-1.8-1.4-2.2-2-1-3-2.4-3-4.4Z"
                    fill="currentColor"
                  />
                  {/* Stem & Keel white lines */}
                  <rect x="10.8" y="15.2" width="2.4" height="6.6" fill="white" />
                  <path d="M8.8 15.2l2 4M15.2 15.2l-2 4" stroke="white" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-heading text-xs sm:text-base font-bold text-navy leading-tight">Joint Replacement</p>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-tight">Primary &amp; Revision</p>
              </div>
            </div>

            {/* 4. Arthroscopy */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-2xs hover:border-clinical-blue/40 transition-colors">
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-ice-blue text-clinical-blue border border-clinical-blue/25 shadow-2xs">
                {/* Circular Arthroscopic Joint View matching user reference */}
                <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {/* Scope Viewport Circle */}
                  <circle cx="12" cy="12" r="9.75" stroke="currentColor" strokeWidth="1.75" />
                  {/* Joint Head & Shaft */}
                  <path
                    d="M10 13c1.3 0 2.2.8 2.2 2s-.6 2.5-1.2 4.5H8.2c-.4-1.5-.7-3-.2-4.5.4-1.2 1-2 2-2Z"
                    fill="currentColor"
                  />
                  <circle cx="10" cy="14" r="1.8" fill="currentColor" />
                  <path
                    d="M2.5 13.5c2.5-1.5 5.5-1 7.2.2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  {/* Arthroscope Camera from Right */}
                  <path d="M21 11.5l-8.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="17.5" y="10" width="3.5" height="3" rx="0.6" fill="currentColor" />
                  {/* Surgical Probe Instrument from Top */}
                  <path d="M17 3.5l-4.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <rect
                    x="14.8"
                    y="3"
                    width="2"
                    height="4"
                    rx="0.5"
                    transform="rotate(-28 15.8 5)"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-heading text-xs sm:text-base font-bold text-navy leading-tight">Arthroscopy</p>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-tight">Knee &amp; Shoulder</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button href="/dr-vishal-kasliwal" variant="navy" size="sm" arrow className="w-full sm:w-auto text-center justify-center">
              Read Dr. Kasliwal&apos;s Story
            </Button>
            <Button href="/contact" variant="outline" size="sm" className="w-full sm:w-auto text-center justify-center">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
