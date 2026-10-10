import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FAQ from "@/components/shared/FAQ";
import { featuredFaqs } from "@/data/faqs";

export default function HomeFAQSection() {
  return (
    <Section tone="ice" width="md" aria-labelledby="faq-heading">
      <SectionHeading
        id="faq-heading"
        eyebrow="Common questions"
        title="Frequently asked questions"
        align="center"
      />
      <FAQ items={featuredFaqs} />
      <div className="mt-10 text-center">
        <Button href="/faqs" variant="ghost" arrow>
          See all FAQs
        </Button>
      </div>
    </Section>
  );
}
