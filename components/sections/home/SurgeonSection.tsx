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
                <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 0 1 3 3L11.5 15.5l-4 1 1-4 10-10z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l3 3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 21h6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 16l-2 2a1.5 1.5 0 0 0 0 2.1" />
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
                <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 4.5c0 2.5 2 4 5 4s5-1.5 5-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2.5" />
                  <rect x="4.5" y="11.5" width="15" height="2.5" rx="1" stroke="currentColor" strokeWidth={1.8} />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 19.5h5" />
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
                <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="3" y="14" width="6.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth={1.8} />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.25 14v-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 15.5l9-9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 5l3 3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 3.5l1.5-1.5" />
                  <circle cx="18" cy="5" r="0.75" fill="currentColor" />
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
