"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNavCategories } from "@/data/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock page scroll and allow Escape to close while the menu is open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-ice-blue"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          data-lenis-prevent
          aria-label="Main"
          className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto bg-white px-4 pb-28 pt-4 lg:top-20"
        >
          {mainNavCategories.map((cat) =>
            cat.items.length === 0 ? (
              <Link
                key={cat.title}
                href={cat.href ?? "/"}
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 items-center border-b border-slate-100 font-heading text-lg font-bold text-navy"
              >
                {cat.title}
              </Link>
            ) : (
              <details key={cat.title} className="group border-b border-slate-100">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between font-heading text-lg font-bold text-navy [&::-webkit-details-marker]:hidden">
                  {cat.title}
                  <span className="text-xl text-clinical-blue transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <ul className="pb-3">
                  {cat.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex min-h-11 items-center pl-3 text-base text-slate-700 hover:text-clinical-blue"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            )
          )}
        </nav>
      )}
    </div>
  );
}
