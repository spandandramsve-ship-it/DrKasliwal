import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FAQ from "@/components/shared/FAQ";
import { featuredFaqs } from "@/data/faqs";

export default function HomeFAQSection() {
  return (
    <Section tone="ice" size="md" width="xl" aria-labelledby="faq-heading">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Heading aligned with 1280px grid + patient guidance callout */}
        <div className="lg:col-span-5">
          <SectionHeading
            id="faq-heading"
            eyebrow="Common questions"
            title="Frequently asked questions"
            intro="Clear, direct answers to common questions about robotic joint surgery, recovery expectations, and implant longevity."
            align="left"
            className="!mb-6"
          />
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-soft backdrop-blur">
            <h3 className="font-heading text-base font-bold text-navy">
              Have a specific question?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore our complete repository of patient questions or consult directly with Dr. Kasliwal.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Button href="/faqs" variant="navy" size="sm" arrow>
                View All FAQs
              </Button>
              <Button href="/contact" variant="ghost" size="sm">
                Ask a Question
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="lg:col-span-7">
          <FAQ items={featuredFaqs} />
        </div>
      </div>
    </Section>
  );
}
