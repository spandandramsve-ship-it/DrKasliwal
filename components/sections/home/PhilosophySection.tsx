import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { philosophyPillars } from "@/data/home";

const pillarIcons = [
  // 1: Personalised Alignment (Orthopedic anatomical alignment axis & caliper angle)
  <svg
    key="alignment"
    className="h-6 w-6 text-clinical-blue"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.75"
    aria-hidden="true"
  >
    {/* Mechanical axis line and angle calibration */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 6h14M7 6v3m5-3v3m5-3v3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 18l4 4 4-4" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 12h4" />
  </svg>,

  // 2: Precision (Articulated robotic surgical arm with laser precision tip)
  <svg
    key="precision"
    className="h-6 w-6 text-clinical-blue"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.75"
    aria-hidden="true"
  >
    {/* Robotic arm base, articulated joints, and surgical effector */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-4l5-5" />
    <circle cx="11" cy="12" r="2" stroke="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 12l5-5" />
    <circle cx="18" cy="7" r="2" stroke="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 5l2-2m-4 0l2 2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l2 2" />
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

  // 4: Functional Recovery (Active walking rehabilitation gait & recovery ground line)
  <svg
    key="recovery"
    className="h-6 w-6 text-clinical-blue"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.75"
    aria-hidden="true"
  >
    {/* Active walking patient recovering mobility */}
    <circle cx="15" cy="4" r="2" stroke="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21l3-6 3-2 3 3 4-2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 13l-2-2-4 2-3-2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3 6" />
    <path strokeLinecap="round" d="M3 21h18" strokeDasharray="2 3" />
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
            <Button href="/surgical-philosophy" variant="outline-light" arrow className="w-full sm:w-auto text-center justify-center">
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
