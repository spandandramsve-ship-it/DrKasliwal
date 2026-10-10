import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { flagshipProcedures } from "@/data/home";

// Plan §4.4
export default function FlagshipRoboticSection() {
  return (
    <Section tone="mist" decor aria-labelledby="flagship-heading">
      <SectionHeading
        id="flagship-heading"
        eyebrow="Our flagship service"
        title={
          <>
            Robotic Knee Replacement
            <span className="mt-2 block text-2xl font-medium text-clinical-blue">Precision planned around you.</span>
          </>
        }
        intro="Robotic-assisted knee replacement combines advanced technology with the surgeon's experience to create a personalised plan based on your unique anatomy."
        action={
          <Button href="/robotic-knee-replacement-nashik" arrow>
            Explore Robotic Knee Replacement
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {flagshipProcedures.map((proc, i) => (
          <Card key={proc.href} href={proc.href} tone={i === 0 ? "navy" : "white"}>
            <span
              className={`self-start rounded-full px-4 py-1 text-sm font-bold ${
                i === 0 ? "bg-gold-light text-navy" : "bg-ice-blue text-clinical-blue"
              }`}
            >
              {proc.abbr}
            </span>
            <h3 className={`mt-5 font-heading text-2xl font-bold ${i === 0 ? "text-white" : "text-navy group-hover:text-clinical-blue"}`}>
              {proc.title}
            </h3>
            <p className={`mt-2 text-base font-semibold ${i === 0 ? "text-gold-light" : "text-gold"}`}>{proc.suitedFor}</p>
            <p className={`mt-3 text-base leading-relaxed ${i === 0 ? "text-slate-200" : "text-slate-600"}`}>
              {proc.description}
            </p>
            <span className={`mt-auto pt-6 text-base font-semibold ${i === 0 ? "text-white" : "text-clinical-blue"}`}>
              Learn more{" "}
              <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Card>
        ))}
      </div>
    </Section>
  );
}
