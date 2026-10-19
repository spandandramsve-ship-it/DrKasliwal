import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ImageSlot from "@/components/ui/ImageSlot";
import { velysSteps } from "@/data/home";

// Plan §4.6
export default function VelysTechnologySection() {
  const stepTags = [
    "3D Anatomy Mapping",
    "Robotic Precision",
    "Ligament Tension",
    "Implant Verified",
  ];

  return (
    <Section size="md" width="xl" tone="ice" aria-labelledby="velys-heading">
      {/* 1. Header Outside the Box (Centered & Screen-Fit) */}
      <SectionHeading
        id="velys-heading"
        eyebrow="Meet the technology"
        title="VELYS™ Robotic-Assisted Surgery"
        intro={<span className="font-medium text-clinical-blue">Plan. Guide. Balance. Verify.</span>}
        align="center"
        actionPosition="right"
        className="mb-8 sm:mb-10"
        action={
          <Button href="/robotic-joint-replacement#how-velys-works" variant="navy" size="sm" arrow className="w-full sm:w-auto text-center justify-center">
            How Robotic Surgery Works
          </Button>
        }
      />

      {/* 2. Content Grid: 4-Step Process & OR Photo */}
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left Column: 4-Step Process & Callout */}
        <div className="flex flex-col justify-center lg:col-span-7">
          {/* 4 Steps in Plain Open Layout (1 → 2 → 3 → 4) */}
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
            {velysSteps.map((item, index) => (
              <li
                key={item.step}
                className="flex flex-col justify-between"
              >
                <div>
                  {/* Step Header with Inline Number & Map Direction Arrow */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-xs font-bold text-white shadow-xs"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                      <h3 className="font-heading text-base font-bold text-navy sm:text-lg">
                        {item.step}
                      </h3>
                    </div>

                    {/* Map Connector Arrow between steps */}
                    {index < velysSteps.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="flex items-center text-xs font-bold text-clinical-blue"
                        title={`Proceed to Step ${index + 2}`}
                      >
                        <svg className="h-4 w-4 rotate-90 sm:rotate-0 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex items-center text-xs font-bold text-emerald-600"
                        title="Reconstruction Verified"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                    )}
                  </div>

                  <p className="mt-2.5 text-xs sm:text-[13.5px] leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto pt-2.5">
                  <span
                    className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${
                      index === 3 ? "text-emerald-700" : "text-clinical-blue"
                    }`}
                  >
                    {stepTags[index]}
                  </span>
                </div>
              </li>
            ))}
          </ol>

          {/* Integrated Compact Callout Banner with Surgeon Expertise Icon */}
          <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-soft">
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-clinical-blue/20 bg-ice-blue text-clinical-blue shadow-xs">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
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
        </div>

        {/* Right Column: VELYS Robotic Unit Photograph (Full width, balanced height) */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <ImageSlot
            src="/images/robotic/robotic_surgery.jpeg"
            alt="The VELYS robotic system at Kasliwal Joint Institute"
            placeholderLabel="Institute's VELYS™ unit (real photo, not render)"
            className="aspect-[16/11] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lift border border-slate-200/80"
          />
        </div>
      </div>
    </Section>
  );
}
