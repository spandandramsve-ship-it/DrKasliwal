import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { journeySteps } from "@/data/home";

// Plan §4.8: 10-step timeline. Vertical line on mobile, connected 5-column rows on desktop.
export default function JourneySection() {
  return (
    <Section tone="sand" aria-labelledby="journey-heading">
      <SectionHeading
        id="journey-heading"
        eyebrow="Your surgery journey"
        title="From consultation to getting back to life"
        action={
          <Button href="/patient-guide/recovery-after-surgery" variant="outline" arrow>
            What to Expect After Surgery
          </Button>
        }
      />

      <ol className="relative grid gap-5 md:grid-cols-5">
        {/* Vertical connector (mobile) */}
        <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-0.5 bg-sand-border md:hidden" />
        {journeySteps.map((step, index) => (
          <li key={step.title} className="relative flex gap-4 md:flex-col md:gap-0">
            {/* Horizontal connector (desktop), hidden after each 5th step */}
            {index % 5 !== 4 && (
              <span aria-hidden="true" className="absolute left-12 right-0 top-6 hidden h-0.5 bg-sand-border md:block" />
            )}
            <span
              className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white font-heading text-lg font-bold text-navy shadow-soft ring-4 ring-sand md:mb-4"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <div className="flex-1 rounded-3xl bg-white/70 p-4 shadow-soft ring-1 ring-sand-border/60 md:mr-3 md:bg-white">
              <h3 className="font-heading text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-base text-slate-600">
        Timelines vary from patient to patient. Your care team will explain what to expect at each stage.
      </p>
    </Section>
  );
}
