import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { knowledgePreview } from "@/data/home";

// Plan §4.11
export default function KnowledgePreviewSection() {
  return (
    <Section size="md" width="xl" aria-labelledby="knowledge-heading">
      <SectionHeading
        id="knowledge-heading"
        eyebrow="Knowledge Centre"
        title="Questions patients ask us every day"
        align="center"
        className="mb-8 sm:mb-10"
        action={
          <Button href="/knowledge-centre" variant="outline" arrow className="w-full sm:w-auto text-center justify-center">
            View All Articles
          </Button>
        }
      />

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {knowledgePreview.map((item, i) => (
          <li key={item.title} className="flex">
            <Card href={item.href} tone={i % 2 === 0 ? "ice" : "sand"} className="w-full">
              <span className="self-start rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold shadow-soft">
                {item.category}
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold leading-snug text-navy group-hover:text-clinical-blue">
                {item.title}
              </h3>
              <span className="mt-auto flex items-center gap-2 pt-6 text-base font-semibold text-clinical-blue">
                Read the answer
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-soft transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
