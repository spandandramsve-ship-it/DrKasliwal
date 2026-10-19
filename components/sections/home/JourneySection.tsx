import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const journeySteps = [
  // Phase 1: Evaluation & Procedure
  { step: 1, title: "Consultation", desc: "Clinical exam & goals" },
  { step: 2, title: "Diagnosis", desc: "X-rays & alignment scan" },
  { step: 3, title: "Treatment Plan", desc: "Conservative or surgical" },
  { step: 4, title: "Pre-Op Planning", desc: "VELYS™ 3D robotic plan" },
  { step: 5, title: "Surgery Day", desc: "Minimally invasive procedure" },
  // Phase 2: Recovery & Return to Life
  { step: 6, title: "Early Walking", desc: "Standing within hours" },
  { step: 7, title: "Physiotherapy", desc: "Daily guided mobility" },
  { step: 8, title: "Discharge Home", desc: "Recovery & care roadmap" },
  { step: 9, title: "Follow-Up Review", desc: "Wound & progress check" },
  { step: 10, title: "Active Life", desc: "Return to daily routine" },
];

export default function JourneySection() {
  const phase1 = journeySteps.slice(0, 5);
  const phase2 = journeySteps.slice(5, 10);

  return (
    <Section tone="ice" size="md" width="xl" aria-labelledby="journey-heading">
      <SectionHeading
        id="journey-heading"
        eyebrow="Your surgery journey"
        title="From consultation to getting back to life"
        align="center"
        className="mb-8 sm:mb-10"
        action={
          <Button href="/patient-guide#journey" variant="navy" arrow className="w-full sm:w-auto text-center justify-center">
            Patient Journey Guide
          </Button>
        }
      />

      <div className="mt-7 space-y-6">
        {/* Phase 1: Pre-Op & Surgery */}
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-clinical-blue" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-clinical-blue">
              Phase 1: Diagnosis &amp; Procedure (Steps 1–5)
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
            {phase1.map((step) => (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between col-span-1 last:col-span-2 sm:last:col-span-1 rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-5 shadow-2xs transition-all hover:border-clinical-blue/40 hover:shadow-soft"
              >
                <div className="mb-2 sm:mb-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ice-blue text-xs font-bold text-clinical-blue border border-clinical-blue/25">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-sm sm:text-base lg:text-lg font-bold text-navy leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2: Post-Op & Recovery */}
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-navy" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-navy">
              Phase 2: Rehabilitation &amp; Active Life (Steps 6–10)
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
            {phase2.map((step) => (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between col-span-1 last:col-span-2 sm:last:col-span-1 rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-5 shadow-2xs transition-all hover:border-navy/40 hover:shadow-soft"
              >
                <div className="mb-2 sm:mb-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-navy border border-slate-200">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-sm sm:text-base lg:text-lg font-bold text-navy leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-sm leading-relaxed text-slate-500">
        Timelines vary by individual. Dr. Kasliwal and your care team guide you through every milestone.
      </p>
    </Section>
  );
}
