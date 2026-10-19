import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { philosophyPillars } from "@/data/home";

const pillarIcons = [
  // 1: Personalised Alignment (Patient profile avatar inside circle, matching user reference)
  <svg
    key="alignment"
    className="h-6 w-6 text-clinical-blue"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="9.2" r="3.2" fill="currentColor" />
    <path
      d="M6.5 18.3c.7-2.6 2.8-4.1 5.5-4.1s4.8 1.5 5.5 4.1a8.25 8.25 0 0 1-11 0Z"
      fill="currentColor"
    />
  </svg>,

  // 2: Precision (Crosshair focus provided by user)
  <svg
    key="precision"
    className="h-6 w-6 text-clinical-blue"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    <path d="M9 12l6 0" />
    <path d="M12 9l0 6" />
  </svg>,

  // 3: Preserving What Matters (Protective joint preservation shield with native ligament cross)
  <svg
    key="preservation"
    className="h-6 w-6 text-clinical-blue"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.75"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l8 4v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-3.5-4h7" />
    <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.2" />
  </svg>,

  // 4: Functional Recovery (Medical cross with cycle recovery arrows, matching user reference)
  <svg
    key="recovery"
    className="h-6 w-6 text-clinical-blue"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    {/* Center Medical Cross */}
    <path
      d="M11 7.5h2a1 1 0 0 1 1 1V10h1.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H14v1.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V14H8.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H10V8.5a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
    {/* Left counter-clockwise arc ending with downward arrow */}
    <path
      d="M17.5 6A8.5 8.5 0 0 0 3.5 12"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <polygon points="1,12 6,12 3.5,16.5" fill="currentColor" />
    {/* Right counter-clockwise arc ending with upward arrow */}
    <path
      d="M6.5 18a8.5 8.5 0 0 0 14-6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <polygon points="18,12 23,12 20.5,7.5" fill="currentColor" />
  </svg>,
];

// Plan §4.5
export default function PhilosophySection() {
  return (
    <Section size="md" width="xl" aria-labelledby="philosophy-heading" className="!pt-4 !pb-12 sm:!pt-6 sm:!pb-14">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="relative flex flex-col overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-navy p-6 sm:p-8 lg:p-10 text-white shadow-lift lg:col-span-5">
          {/* Decorative circles */}
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5" />
          <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-gold/10" />

          <div className="relative">
            <Eyebrow tone="light">Our surgical philosophy</Eyebrow>
          </div>
          <h2 id="philosophy-heading" className="relative mt-5 sm:mt-6 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Not every knee is the same. So why should every knee be replaced the same way?
          </h2>
          <p className="relative mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-slate-200">
            We plan each operation around your anatomy, use minimally invasive technique where appropriate, and
            preserve what matters in your own knee.
          </p>
          <div className="relative mt-auto pt-6 sm:pt-8">
            <Button href="/about#surgical-philosophy" variant="outline-light" arrow className="w-full sm:w-auto text-center justify-center">
              Our Surgical Philosophy
            </Button>
          </div>
        </div>

        <ul className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:col-span-7">
          {philosophyPillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className={`rounded-3xl p-5 sm:p-8 shadow-soft ring-1 ring-navy/5 ${
                index % 3 === 0 ? "bg-gradient-to-br from-sand-light to-white" : "bg-gradient-to-br from-ice-blue/70 to-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-heading text-lg font-bold text-navy shadow-soft ring-1 ring-slate-900/5"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft ring-1 ring-slate-900/5 text-clinical-blue"
                  aria-hidden="true"
                >
                  {pillarIcons[index]}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-navy">{pillar.title}</h3>
              <p className="mt-2.5 text-base leading-relaxed text-slate-600">{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
