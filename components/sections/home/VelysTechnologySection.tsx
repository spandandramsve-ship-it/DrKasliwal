import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ImageSlot from "@/components/ui/ImageSlot";
import { velysSteps } from "@/data/home";

// Plan §4.6
export default function VelysTechnologySection() {
  return (
    <Section tone="ice" aria-labelledby="velys-heading">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading
            id="velys-heading"
            eyebrow="Meet the technology"
            title={
              <>
                VELYS™ Robotic-Assisted Surgery
                <span className="mt-2 block text-2xl font-medium text-clinical-blue">
                  Plan. Guide. Balance. Verify.
                </span>
              </>
            }
          />

          <ol className="grid gap-4 sm:grid-cols-2">
            {velysSteps.map((item, index) => (
              <li key={item.step} className="flex gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-navy/5">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-clinical-blue to-navy font-heading text-lg font-bold text-white shadow-glow"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy">{item.step}</h3>
                  <p className="mt-1 text-base leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <ImageSlot
          src="/images/robotic/robotic_surgery.jpeg"
          alt="The VELYS robotic system at Kasliwal Joint Institute"
          placeholderLabel="Institute's VELYS™ unit (real photo, not render)"
          className="aspect-[4/3] lg:col-span-5"
        />
      </div>

      <div className="mt-12 flex flex-col items-start gap-6 rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-navy/5 sm:p-8 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl font-heading text-xl leading-snug text-navy sm:text-2xl">
          <span className="text-gold" aria-hidden="true">“</span>The robot doesn&apos;t replace the surgeon. It helps the
          surgeon perform the planned procedure with greater precision and control.
          <span className="text-gold" aria-hidden="true">”</span>
        </p>
        <Button href="/velys-robotic-surgery" className="shrink-0" arrow>
          How Robotic Surgery Works
        </Button>
      </div>
    </Section>
  );
}
