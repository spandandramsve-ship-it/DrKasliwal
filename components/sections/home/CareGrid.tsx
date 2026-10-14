import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { careAreas } from "@/data/home";

const careImages = [
  {
    src: "/images/procedures/card_knee_care.jpg",
    alt: "Advanced robotic knee replacement and arthroscopy care",
  },
  {
    src: "/images/procedures/card_hip_care.jpg",
    alt: "Modern hip joint reconstruction and ceramic replacement",
  },
  {
    src: "/images/procedures/card_shoulder_care.jpg",
    alt: "Keyhole shoulder arthroscopy and rotator cuff repair",
  },
  {
    src: "/images/procedures/card_trauma_care.jpg",
    alt: "Orthopaedic trauma management and fracture fixation",
  },
];

export default function CareGrid() {
  return (
    <Section size="sm" width="xl" tone="white" aria-labelledby="care-heading">
      <SectionHeading
        id="care-heading"
        eyebrow="Find the right treatment"
        title="Expert care for every joint"
        intro="Comprehensive surgical and non-surgical orthopaedic solutions personalised to your needs."
        align="left"
        className="mb-6 sm:mb-8"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {careAreas.map((area, i) => {
          const img = careImages[i % careImages.length];
          return (
            <article
              key={area.title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-clinical-blue/40 hover:shadow-lift"
            >
              {/* Clinical Photograph (Clean, without repeated title badge) */}
              <div className="relative h-36 w-full overflow-hidden bg-slate-100 sm:h-40">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-heading text-lg font-bold text-navy transition-colors group-hover:text-clinical-blue sm:text-xl">
                  <Link href={area.href} className="focus:outline-none">
                    {area.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 line-clamp-2">
                  {area.description}
                </p>

                {/* Key Treatments Minimal Badges */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {area.links.slice(0, 3).map((link) => (
                    <span
                      key={link.label}
                      className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                    >
                      {link.label}
                    </span>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="mt-auto pt-4">
                  <Link
                    href={area.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-clinical-blue transition-colors group-hover:text-navy"
                  >
                    <span>View treatments</span>
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
