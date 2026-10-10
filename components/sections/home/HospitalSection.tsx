import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ImageSlot from "@/components/ui/ImageSlot";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { HOSPITAL_NAME, LOCATION_ADDRESS, LOCATION_CITY } from "@/lib/constants";
import { hospitalFeatures } from "@/data/home";

// Plan §4.9. Laminar airflow, ICU and cashless must be confirmed before launch;
// unconfirmed features are hidden in production.
const showUnverified = process.env.NODE_ENV !== "production";

export default function HospitalSection() {
  const features = hospitalFeatures.filter((f) => !f.verify || showUnverified);

  return (
    <Section aria-labelledby="hospital-heading">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <ImageSlot
          src="/images/hospital/hospital.jpeg"
          alt={`Exterior of ${HOSPITAL_NAME}, Bosco Centre, Gangapur Road, Nashik`}
          placeholderLabel="Exterior of Bosco Centre, Gangapur Road"
          className="aspect-[4/3] lg:order-2 lg:col-span-6"
        />

        <div className="lg:col-span-6">
          <Eyebrow>Complete care under one roof</Eyebrow>
          <h2 id="hospital-heading" className="mt-4 font-heading text-3xl font-bold text-navy sm:text-4xl">
            {HOSPITAL_NAME}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            {LOCATION_ADDRESS}, {LOCATION_CITY}
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            The home of Kasliwal Joint Institute: modern operation theatres, a dedicated physiotherapy team and
            comprehensive care before, during and after your surgery.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.title}
                className="flex items-center gap-3 rounded-2xl bg-ice-blue/60 px-4 py-3 text-base text-navy"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-clinical-blue shadow-soft" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {f.title}
                {f.verify && (
                  <span className="rounded-full bg-amber-200 px-2 text-xs font-bold text-amber-900">VERIFY</span>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href="/hospital" variant="navy" arrow>
              View Our Hospital
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
