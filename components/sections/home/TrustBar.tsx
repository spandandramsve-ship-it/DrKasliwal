import Container from "@/components/ui/Container";
import { STATS } from "@/lib/constants";

const iconProps = {
  className: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.6,
  "aria-hidden": true,
} as const;

// Plan §4.2: four stats with thin line icons, as a floating card overlapping the hero
const items = [
  {
    value: STATS.experience.value,
    label: STATS.experience.label,
    tint: "bg-ice-blue text-clinical-blue",
    icon: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: STATS.procedures.value,
    label: STATS.procedures.label,
    tint: "bg-sand text-gold",
    icon: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "Fellowship-trained",
    label: "In joint replacement & arthroscopy",
    tint: "bg-ice-blue text-clinical-blue",
    icon: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-6-9.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
      </svg>
    ),
  },
  {
    value: "VELYS™ robotics",
    label: "Robotic & navigation-assisted surgery",
    tint: "bg-sand text-gold",
    icon: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section aria-label="Key facts" className="relative z-10 -mt-14 sm:-mt-16">
      <Container>
        <ul data-reveal className="grid gap-6 rounded-[2rem] bg-white p-6 shadow-lift ring-1 ring-navy/5 sm:grid-cols-2 sm:p-8 lg:grid-cols-4 lg:divide-x lg:divide-slate-100">
          {items.map((item) => (
            <li key={item.value} className="flex items-center gap-4 lg:px-4 lg:first:pl-0">
              <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.tint}`}>
                {item.icon}
              </span>
              <span>
                <span className="block font-heading text-2xl font-bold leading-tight text-navy">{item.value}</span>
                <span className="mt-1 block text-sm leading-snug text-slate-600">{item.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
