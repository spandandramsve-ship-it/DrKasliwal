import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ImageSlot from "@/components/ui/ImageSlot";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { HOSPITAL_NAME, LOCATION_ADDRESS, LOCATION_CITY } from "@/lib/constants";

const hospitalFeatureCards = [
  {
    title: "Modern Operation Theatres",
    desc: "Equipped with Johnson & Johnson VELYS™ robotic system & HD surgical suites.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m-7 5a7 7 0 0 1 14 0H5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15h6m-3 0v6m-5 0h10" />
        <circle cx="12" cy="11" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Laminar Airflow Environment",
    desc: "Class-100 downward ultra-clean sterile airflow for uncompromising infection safety.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8v8m0 0l-1.5-1.5M7 16l1.5-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v12m0 0l-1.5-1.5m1.5 1.5l1.5-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8v8m0 0l-1.5-1.5m1.5 1.5l1.5-1.5" />
        <circle cx="12" cy="4" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Dedicated Physiotherapy Team",
    desc: "In-house rehab specialists guiding same-day mobilization and daily recovery.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="13" cy="4" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21l3-5 2.5 2 4.5-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l4-2 3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 14l3.5-3" />
      </svg>
    ),
  },
  {
    title: "Experienced Nursing Care",
    desc: "24/7 specialized orthopaedic nursing and continuous post-operative monitoring.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v4m-2-2h4" />
      </svg>
    ),
  },
  {
    title: "Supporting Medical Specialists",
    desc: "Collaborative care team with experienced anaesthesiologists and physician intensivists.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Perioperative Care",
    desc: "Complete 360° protocol covering pre-hab, surgery, pain management, and home recovery.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function HospitalSection() {
  return (
    <Section size="md" width="xl" aria-labelledby="hospital-heading">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Hospital Exterior Visual */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 shadow-md lg:order-2 lg:col-span-5">
          <ImageSlot
            src="/images/hospital/hospital.jpeg"
            alt={`Exterior of ${HOSPITAL_NAME}, Bosco Centre, Gangapur Road, Nashik`}
            placeholderLabel="Exterior of Bosco Centre, Gangapur Road"
            className="aspect-[4/3.5] w-full object-cover"
          />
        </div>

        {/* Hospital Information & Feature Cards */}
        <div className="lg:col-span-7">
          <Eyebrow>Complete care under one roof</Eyebrow>
          <h2 id="hospital-heading" className="mt-2.5 font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            {HOSPITAL_NAME}
          </h2>
          <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
            {LOCATION_ADDRESS}, {LOCATION_CITY}
          </p>

          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-700">
            The dedicated home of Kasliwal Joint Institute: combining world-class robotic operation theatres, laminar airflow infection control, and specialized orthopaedic rehabilitation under one roof.
          </p>

          {/* Rich Hospital Feature Cards Grid */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {hospitalFeatureCards.map((f) => (
              <div
                key={f.title}
                className="group flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 shadow-2xs transition-all hover:bg-white hover:border-clinical-blue/40 hover:shadow-xs"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ice-blue/80 text-clinical-blue border border-clinical-blue/20 transition-colors group-hover:bg-clinical-blue group-hover:text-white">
                  {f.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-sm font-bold text-navy leading-snug">
                    {f.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <Button href="/hospital" variant="navy" arrow>
              Explore Our Hospital
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
