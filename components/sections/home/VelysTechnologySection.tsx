import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ImageSlot from "@/components/ui/ImageSlot";
import { velysSteps } from "@/data/home";

// Plan §4.6
export default function VelysTechnologySection() {
  return (
    <Section size="sm" width="xl" tone="ice" aria-labelledby="velys-heading">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left Column: Text Overview, 4-Step Process & Callout */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <SectionHeading
            id="velys-heading"
            eyebrow="Meet the technology"
            title={
              <>
                VELYS™ Robotic-Assisted Surgery
                <span className="mt-1 block text-xl font-medium text-clinical-blue sm:text-2xl">
                  Plan. Guide. Balance. Verify.
                </span>
              </>
            }
            className="mb-4 sm:mb-5"
          />

          {/* 4 Steps in Connected Map Cards (1 → 2 → 3 → 4) */}
          <ol className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
            {velysSteps.map((item, index) => (
              <li
                key={item.step}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-clinical-blue/40 hover:shadow-lift sm:p-3.5"
              >
                <div>
                  {/* Step Header with Inline Number & Map Direction Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-xs font-bold text-white shadow-xs"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                      <h3 className="font-heading text-sm font-bold text-navy sm:text-base">
                        {item.step}
                      </h3>
                    </div>

                    {/* Map Connector Arrow between steps */}
                    {index < velysSteps.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="flex items-center text-xs font-bold text-clinical-blue transition-transform group-hover:translate-x-0.5"
                        title={`Proceed to Step ${index + 2}`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex items-center text-xs font-bold text-emerald-600"
                        title="Reconstruction Verified"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Map Stage Progress Track */}
                <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-clinical-blue to-navy"
                    style={{ width: `${((index + 1) / velysSteps.length) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ol>

          {/* Integrated Compact Callout Banner with Surgeon Expertise Icon */}
          <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200/90 bg-white/90 p-3 shadow-soft sm:p-3.5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-clinical-blue/20 bg-ice-blue text-clinical-blue shadow-xs">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                  {/* Surgeon with precision guidance symbol */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  <circle cx="18" cy="17" r="3" fill="white" stroke="currentColor" strokeWidth="1.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 15.5v3m-1.5-1.5h3" />
                </svg>
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                <strong className="font-semibold text-navy">The robot doesn&apos;t replace the surgeon.</strong>{" "}
                It helps the surgeon perform the planned procedure with greater precision and control.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-4 flex justify-end">
            <Button href="/velys-robotic-surgery" arrow>
              How Robotic Surgery Works
            </Button>
          </div>
        </div>

        {/* Right Column: VELYS Robotic Unit Photograph */}
        <div className="lg:col-span-5">
          <ImageSlot
            src="/images/robotic/robotic_surgery.jpeg"
            alt="The VELYS robotic system at Kasliwal Joint Institute"
            placeholderLabel="Institute's VELYS™ unit (real photo, not render)"
            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-slate-200/80"
          />
        </div>
      </div>
    </Section>
  );
}
