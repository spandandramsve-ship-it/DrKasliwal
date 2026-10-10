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
            className="group rounded-3xl bg-white px-6 shadow-soft ring-1 ring-navy/5 transition-shadow open:shadow-lift sm:px-8"
          >
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-heading text-lg font-bold text-navy sm:text-xl [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ice-blue text-xl font-normal text-clinical-blue transition-all group-open:rotate-45 group-open:bg-navy group-open:text-white"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="pb-6 text-base leading-relaxed text-slate-700 sm:text-lg">{item.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}
