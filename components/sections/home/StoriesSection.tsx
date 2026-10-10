import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { RATING } from "@/lib/constants";

// Plan §4.10. Testimonial carousel waits for real, consented stories (DPDP Act 2023).
// Rating is attributed to its source until a live Google review widget is connected.
export default function StoriesSection() {
  return (
    <Section tone="mist" decor aria-labelledby="stories-heading">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading
            id="stories-heading"
            eyebrow="Patient stories"
            title="Back to doing what you love."
            intro="Hear from patients across Nashik and North Maharashtra about walking, climbing stairs and travelling again after treatment. Every story is shared with the patient's written consent."
            className="mb-8 sm:mb-8"
          />
          <Button href="/patient-stories" variant="navy" arrow>
            Read Patient Stories
          </Button>
        </div>

        <div className="relative lg:col-span-5">
          <div aria-hidden="true" className="absolute -inset-3 -rotate-2 rounded-[2.75rem] bg-sand" />
          <div className="relative rounded-[2.5rem] bg-white p-8 text-center shadow-lift ring-1 ring-navy/5 sm:p-10">
            <p className="text-2xl tracking-widest text-gold" aria-hidden="true">
              ★★★★★
            </p>
            <p className="mt-3 font-heading text-6xl font-bold text-navy">
              {RATING.value}
              <span className="text-2xl text-slate-400"> / 5</span>
            </p>
            <p className="mt-4 text-base text-slate-600">
              Average rating across {RATING.count} reviews on {RATING.source}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
