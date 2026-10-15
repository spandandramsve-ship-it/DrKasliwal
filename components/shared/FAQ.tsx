"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQItem } from "@/types";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

interface FAQProps {
  items: FAQItem[];
  /** Emit FAQPage schema (plan §5 template). Disable if the same FAQs appear twice on a page. */
  withSchema?: boolean;
}

// Ultra-smooth cubic bezier curve (smooth gradual deceleration)
const smoothTransition = {
  duration: 0.45,
  ease: [0.16, 1, 0.3, 1] as const,
};

const exitTransition = {
  duration: 0.32,
  ease: [0.16, 1, 0.3, 1] as const,
};

/**
 * Accessible, ultra-smooth animated accordion with single-open behavior.
 * When a question is opened, any previously opened question collapses smoothly.
 */
export default function FAQ({ items, withSchema = true }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (items.length === 0) return null;

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {withSchema && <JsonLd data={faqSchema(items)} />}
      <div className="space-y-3.5 sm:space-y-4">
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={cn(
                "rounded-2xl sm:rounded-3xl bg-white px-4 sm:px-8 ring-1 transition-[box-shadow,background-color,ring-color] duration-500 ease-out",
                isOpen
                  ? "shadow-lift ring-clinical-blue/25 bg-gradient-to-b from-white to-ice-blue/[0.2]"
                  : "shadow-soft ring-navy/5 hover:ring-clinical-blue/20 hover:shadow-md"
              )}
            >
              <button
                type="button"
                id={`faq-question-${item.id}`}
                onClick={() => handleToggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                className="flex w-full min-h-14 sm:min-h-16 cursor-pointer items-center justify-between gap-3 sm:gap-6 py-4 sm:py-5 text-left font-heading text-base sm:text-xl font-bold text-navy transition-colors duration-300 hover:text-clinical-blue focus:outline-none"
              >
                <span className="min-w-0 flex-1 leading-snug">{item.question}</span>
                <span
                  className={cn(
                    "flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full text-lg sm:text-xl font-normal transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isOpen
                      ? "rotate-45 bg-navy text-white shadow-xs"
                      : "rotate-0 bg-ice-blue text-clinical-blue hover:bg-clinical-blue hover:text-white"
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: smoothTransition,
                        opacity: { duration: 0.35, delay: 0.08, ease: "easeOut" },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: exitTransition,
                        opacity: { duration: 0.2, ease: "easeIn" },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -6, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.38, delay: 0.06, ease: [0.16, 1, 0.3, 1] },
                      }}
                      exit={{
                        y: -4,
                        opacity: 0,
                        transition: { duration: 0.18, ease: "easeIn" },
                      }}
                      className="pb-5 sm:pb-6 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-700"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>
  );
}
