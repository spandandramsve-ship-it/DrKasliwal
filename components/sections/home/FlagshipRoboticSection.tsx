import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const flagshipCards = [
  {
    title: "Robotic Total Knee Replacement",
    badge: "TKR",
    tag: "Complete Resurfacing",
    description: "For advanced arthritis when total joint resurfacing is needed with kinematic alignment.",
    feature: "Kinematic alignment",
    href: "/knee#robotic-total-knee-replacement",
    image: "/images/procedures/implant_total_knee.jpg",
    alt: "Total knee replacement implant render",
  },
  {
    title: "Robotic Partial Knee Replacement",
    badge: "UKR",
    tag: "Bone-Preserving",
    description: "For arthritis confined to one compartment, preserving healthy cartilage and natural ligaments.",
    feature: "Bone & ACL preserving",
    href: "/knee#partial-knee-replacement",
    image: "/images/procedures/implant_partial_knee.jpg",
    alt: "Partial knee unicompartmental implant render",
  },
  {
    title: "Robotic Revision Knee Replacement",
    badge: "Revision",
    tag: "Complex Care",
    description: "For painful, loose, or worn-out previous replacements requiring precision realignment.",
    feature: "Specialist realignment",
    href: "/robotic-joint-replacement#revision-joint-replacement",
    image: "/images/procedures/implant_revision_knee.jpg",
    alt: "Revision knee replacement implant with stem render",
  },
];

export default function FlagshipRoboticSection() {
  return (
    <Section size="sm" width="xl" tone="white" aria-labelledby="flagship-heading" className="!pt-6 !pb-6 sm:!pt-8 sm:!pb-8">
      {/* 1. Header Outside the Card */}
      <SectionHeading
        id="flagship-heading"
        eyebrow="Our flagship service"
        title="Robotic Knee Replacement"
        intro="Combining robotic precision with surgical experience to create a personalised plan for your unique anatomy."
        align="center"
        actionPosition="right"
        className="mb-2 sm:mb-2.5"
        action={
          <Button href="/knee#robotic-total-knee-replacement" variant="navy" size="sm" arrow className="w-full sm:w-auto text-center justify-center">
            Explore Robotic Knee
          </Button>
        }
      />

      {/* 2. Feature Card with Edge-to-Edge Image Coverage & Bigger Sub-Cards */}
      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-[#F8FAFC] shadow-lift ring-1 ring-slate-900/5 sm:rounded-3xl lg:rounded-[2rem]">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left Column: Full 3D Precision Knee Anatomy Illustration (stretched horizontally, full labels, screen-fit) */}
          <div className="relative shrink-0 w-full lg:w-[340px] xl:w-[370px] aspect-[1156/1200] max-h-[280px] sm:max-h-[380px] lg:max-h-none overflow-hidden bg-[#D3EBF0] border-b lg:border-b-0 lg:border-r border-slate-200/80">
            <Image
              src="/images/procedures/flagship_robotic_knee_wide.jpg"
              alt="High precision robotic knee replacement anatomical alignment visualization with precision robotic guides"
              fill
              sizes="(min-width: 1536px) 370px, (min-width: 1280px) 370px, (min-width: 1024px) 340px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column: 3 Bigger, Expansive Sub-Cards */}
          <div className="flex-1 flex flex-col justify-center p-3.5 sm:p-4 lg:p-4 xl:p-4.5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3 lg:gap-3.5 h-full">
              {flagshipCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 lg:p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-clinical-blue/40 hover:shadow-lift"
                >
                  <div>
                    {/* Top Row: Substantially Bigger Implant Image + Category Badge */}
                    <div className="flex items-start justify-between mb-2.5">
                      <div className="relative h-24 w-24 sm:h-26 sm:w-26 lg:h-28 lg:w-28 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/80 shadow-2xs">
                        <Image
                          src={card.image}
                          alt={card.alt}
                          fill
                          sizes="(min-width: 1024px) 112px, 96px"
                          className="object-cover scale-125 transition-transform duration-300 group-hover:scale-135"
                        />
                      </div>
                      <span className="rounded-full bg-ice-blue/90 border border-clinical-blue/20 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-clinical-blue shadow-2xs">
                        {card.badge}
                      </span>
                    </div>

                    {/* Bigger Title */}
                    <h3 className="font-heading text-sm sm:text-base lg:text-[17px] font-bold leading-snug text-navy transition-colors group-hover:text-clinical-blue">
                      {card.title}
                    </h3>

                    {/* Tag / Focus */}
                    <div className="mt-0.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-clinical-blue">
                      {card.tag}
                    </div>

                    {/* Description */}
                    <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom: Clean Metadata Pill + Learn More */}
                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-md bg-slate-100/90 px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-slate-600">
                      {card.feature}
                    </span>
                    <span className="inline-flex items-center text-xs sm:text-sm font-semibold text-clinical-blue transition-colors group-hover:text-navy shrink-0">
                      Learn More
                      <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
