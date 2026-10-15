"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavCategories } from "@/data/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) => ({ ...prev, [title]: !prev[title] }));
  };

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
          {mainNavCategories.map((cat) => {
            const isCatActive =
              cat.href === "/"
                ? pathname === "/"
                : pathname === cat.href || (cat.href && pathname.startsWith(cat.href + "/"));
            const hasItems = cat.items.length > 0;
            const isExpanded = !!openCategories[cat.title];

            if (!hasItems) {
              return (
                <div key={cat.title} className="border-b border-slate-100">
                  <Link
                    href={cat.href ?? "/"}
                    aria-current={isCatActive ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`flex min-h-12 items-center font-heading text-lg ${
                      isCatActive ? "font-bold text-clinical-blue" : "font-bold text-navy"
                    }`}
                  >
                    {cat.title}
                  </Link>
                </div>
              );
            }

            return (
              <div key={cat.title} className="border-b border-slate-100">
                <div className="flex min-h-12 items-center justify-between gap-2">
                  <Link
                    href={cat.href ?? "/"}
                    aria-current={isCatActive ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`flex-1 py-3 font-heading text-lg ${
                      isCatActive ? "font-bold text-clinical-blue" : "font-bold text-navy"
                    }`}
                  >
                    {cat.title}
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.title)}
                    className="flex h-12 w-12 shrink-0 items-center justify-center text-clinical-blue transition-transform active:scale-95"
                    aria-label={`Toggle ${cat.title} submenu`}
                    aria-expanded={isExpanded}
                  >
                    <span
                      className={`text-2xl font-light leading-none transition-transform duration-200 ${
                        isExpanded ? "rotate-45 text-navy" : "text-clinical-blue"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </div>

                {isExpanded && (
                  <ul className="pb-3 pl-2 space-y-1">
                    {cat.items.map((item) => {
                      const isItemActive = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            aria-current={isItemActive ? "page" : undefined}
                            onClick={() => setIsOpen(false)}
                            className={`flex min-h-11 items-center px-3 rounded-xl text-base ${
                              isItemActive
                                ? "bg-ice-blue font-bold text-clinical-blue"
                                : "text-slate-700 hover:text-clinical-blue"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </div>
  );
}
