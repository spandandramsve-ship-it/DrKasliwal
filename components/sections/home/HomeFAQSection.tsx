import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/shared/FAQ";
import { featuredFaqs } from "@/data/faqs";

export default function HomeFAQSection() {
  return (
    <Section tone="ice" size="md" width="xl" aria-labelledby="faq-heading">
      <SectionHeading
        id="faq-heading"
        eyebrow="Common questions"
        title="Frequently asked questions"
        align="center"
        className="mb-8 sm:mb-10"
      />

      <div className="mx-auto max-w-3xl">
        <FAQ items={featuredFaqs} />
      </div>
    </Section>
  );
}
