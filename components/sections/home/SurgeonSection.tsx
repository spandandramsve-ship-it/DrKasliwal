import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ImageSlot from "@/components/ui/ImageSlot";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { DOCTOR_NAME, DOCTOR_TITLE, STATS } from "@/lib/constants";
import { surgeonTraining, surgeonExpertise } from "@/data/home";

// Plan §4.7
export default function SurgeonSection() {
  return (
    <Section decor aria-labelledby="surgeon-heading">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div aria-hidden="true" className="absolute -inset-3 rotate-3 rounded-[2.75rem] bg-gradient-to-br from-sand to-ice-blue" />
          <ImageSlot
            src="/images/doctor/Dr_kasliwal.png"
            alt={`Portrait of ${DOCTOR_NAME}`}
            placeholderLabel="Professional portrait of Dr. Vishal Kasliwal"
            className="relative aspect-[4/5] bg-gradient-to-b from-ice-blue via-white to-sand-light/40"
            imageClassName="object-contain object-bottom"
          />
          <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-2 gap-3 rounded-3xl bg-white p-4 text-center shadow-lift ring-1 ring-navy/5 sm:left-10 sm:right-10">
            <div>
              <p className="font-heading text-2xl font-bold text-navy">{STATS.experience.value}</p>
              <p className="text-sm text-slate-600">Years of practice</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-navy">{STATS.procedures.value}</p>
              <p className="text-sm text-slate-600">Procedures</p>
            </div>
          </div>
        </div>

        <div className="pt-6 lg:col-span-7 lg:pt-0">
          <Eyebrow>Meet the surgeon</Eyebrow>
          <h2 id="surgeon-heading" className="mt-4 font-heading text-3xl font-bold text-navy sm:text-4xl">
            {DOCTOR_NAME}
          </h2>
          <p className="mt-2 text-lg font-semibold text-clinical-blue">{DOCTOR_TITLE}</p>

          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            Trained at Breach Candy Hospital, Mumbai under Dr. Arun Mullaji for joint replacement, with fellowship
            training in arthroscopy under Dr. Sachin Tapasvi, Pune, and advanced shoulder arthroscopy training under
            Dr. Jin Young Park, Korea.
          </p>

          <h3 className="sr-only">Training</h3>
          <ul className="mt-6 space-y-3">
            {surgeonTraining.map((t) => (
              <li
                key={t.mentor}
                className="flex flex-col gap-1 rounded-2xl bg-ice-blue/60 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <span className="text-base font-semibold text-navy">{t.focus}</span>
                <span className="text-sm text-slate-600">
                  {t.mentor}, {t.place}
                </span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Areas of expertise">
            {surgeonExpertise.map((area) => (
              <li key={area} className="rounded-full bg-sand px-4 py-2 text-sm font-semibold text-navy">
                {area}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href="/dr-vishal-kasliwal" variant="navy" arrow>
              Read Dr. Kasliwal&apos;s Story
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
