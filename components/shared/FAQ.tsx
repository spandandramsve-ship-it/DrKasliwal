import { FAQItem } from "@/types";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema } from "@/lib/schema";

interface FAQProps {
  items: FAQItem[];
  /** Emit FAQPage schema (plan §5 template). Disable if the same FAQs appear twice on a page. */
  withSchema?: boolean;
}

/** Accessible accordion using native <details>; works without JavaScript. */
export default function FAQ({ items, withSchema = true }: FAQProps) {
  if (items.length === 0) return null;

  return (
    <>
      {withSchema && <JsonLd data={faqSchema(items)} />}
      <div className="space-y-4">
        {items.map((item) => (
          <details
            key={item.id}
            className="group rounded-2xl sm:rounded-3xl bg-white px-4 sm:px-8 shadow-soft ring-1 ring-navy/5 transition-shadow open:shadow-lift"
          >
            <summary className="flex min-h-14 sm:min-h-16 cursor-pointer list-none items-center justify-between gap-3 sm:gap-6 py-4 sm:py-5 font-heading text-base sm:text-xl font-bold text-navy [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 flex-1 leading-snug">{item.question}</span>
              <span
                className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-ice-blue text-lg sm:text-xl font-normal text-clinical-blue transition-all group-open:rotate-45 group-open:bg-navy group-open:text-white"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="pb-5 sm:pb-6 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}
