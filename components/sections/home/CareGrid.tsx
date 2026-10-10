import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { careAreas } from "@/data/home";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

// Simple line icons + a soft tint per card (in data order: knee, hip, shoulder, trauma)
const visuals = [
  {
    tint: "from-ice-blue",
    iconBg: "bg-white text-clinical-blue",
    icon: <path {...stroke} d="M9 3v7l-2 4v7M15 3v7l2 4v7M7 14h10" />,
  },
  {
    tint: "from-sand",
    iconBg: "bg-white text-gold",
    icon: <><circle {...stroke} cx="12" cy="7" r="3.5" /><path {...stroke} d="M12 10.5V21M8 14l4-2 4 2" /></>,
  },
  {
    tint: "from-ice-blue",
    iconBg: "bg-white text-clinical-blue",
    icon: <><circle {...stroke} cx="8" cy="8" r="3" /><path {...stroke} d="M10.5 9.5 19 18M15 21l4-3" /></>,
  },
  {
    tint: "from-sand",
    iconBg: "bg-white text-gold",
    icon: <path {...stroke} d="M12 3v18M3 12h18M7 7l10 10" />,
  },
];

// Plan §4.3
export default function CareGrid() {
  return (
    <Section tone="white" aria-labelledby="care-heading">
      <SectionHeading
        id="care-heading"
        eyebrow="Find the right treatment"
        title="Expert care for every joint"
        intro="From arthritis and joint replacement to sports injuries and trauma, we provide comprehensive orthopaedic care using advanced technology and personalised treatment."
        align="center"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {careAreas.map((area, i) => {
          const v = visuals[i % visuals.length];
          return (
            <article
              key={area.title}
              className={`group flex flex-col rounded-[2rem] bg-gradient-to-br ${v.tint} to-white p-6 shadow-soft ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8 motion-reduce:transform-none`}
            >
              <div className="flex items-center gap-4">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-soft ${v.iconBg}`}>
                  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                    {v.icon}
                  </svg>
                </span>
                <h3 className="font-heading text-2xl font-bold text-navy">
                  <Link href={area.href} className="hover:text-clinical-blue">
                    {area.title}
                  </Link>
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{area.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {area.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center rounded-full bg-white px-4 text-sm font-medium text-navy ring-1 ring-navy/10 transition-colors hover:bg-navy hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={area.href}
                className="mt-auto inline-flex min-h-11 items-center pt-5 text-base font-semibold text-clinical-blue hover:text-navy"
              >
                Explore {area.title}
                <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
