import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { philosophyPillars } from "@/data/home";

// Plan §4.5
export default function PhilosophySection() {
  return (
    <Section aria-labelledby="philosophy-heading">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="relative flex flex-col overflow-hidden rounded-[2.5rem] bg-navy p-8 text-white shadow-lift sm:p-10 lg:col-span-5">
          {/* Decorative circles */}
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5" />
          <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-gold/10" />

          <div className="relative">
            <Eyebrow tone="light">Our surgical philosophy</Eyebrow>
          </div>
          <h2 id="philosophy-heading" className="relative mt-6 font-heading text-3xl font-bold leading-tight sm:text-4xl">
            Not every knee is the same. So why should every knee be replaced the same way?
          </h2>
          <p className="relative mt-6 text-lg leading-relaxed text-slate-200">
            We plan each operation around your anatomy, use minimally invasive technique where appropriate, and
            preserve what matters in your own knee.
          </p>
          <div className="relative mt-auto pt-8">
            <Button href="/surgical-philosophy" variant="outline-light" arrow>
              Our Surgical Philosophy
            </Button>
          </div>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
          {philosophyPillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className={`rounded-[2rem] p-6 shadow-soft ring-1 ring-navy/5 sm:p-8 ${
                index % 3 === 0 ? "bg-gradient-to-br from-sand-light to-white" : "bg-gradient-to-br from-ice-blue/70 to-white"
              }`}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-heading text-lg font-bold text-gold shadow-soft"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy">{pillar.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
