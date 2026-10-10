"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { mainNavCategories } from "@/data/navigation";

const menuId = (title: string) => `nav-menu-${title.toLowerCase().replace(/\W+/g, "-")}`;

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveCategory(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key to close dropdown
  const handleKeyDown = (e: React.KeyboardEvent, title: string) => {
    if (e.key === "Escape") {
      setActiveCategory(null);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveCategory(activeCategory === title ? null : title);
    }
  };

  return (
    <nav
      ref={navRef}
      className="relative hidden items-center whitespace-nowrap text-[0.875rem] font-medium text-slate-700 xl:flex 2xl:gap-1 2xl:text-[0.9rem]"
      aria-label="Main Navigation"
    >
      {/* Home is omitted on desktop: the wordmark already links home */}
      {mainNavCategories.filter((c) => c.href !== "/").map((category) => {
        const hasItems = category.items.length > 0;
        const isOpen = activeCategory === category.title;
        const targetHref = category.href || "/";

        if (!hasItems) {
          return (
            <Link
              key={category.title}
              href={targetHref}
              className="px-2.5 py-2 rounded-full text-slate-700 hover:text-navy hover:bg-ice-blue transition"
            >
              {category.title}
            </Link>
          );
        }

        return (
          <div
            key={category.title}
            className="relative"
            onMouseEnter={() => setActiveCategory(category.title)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="flex items-center">
              <Link
                href={targetHref}
                className={`py-2 pl-2.5 pr-1 rounded-l-full transition flex items-center gap-1 ${
                  isOpen
                    ? "text-clinical-blue bg-ice-blue font-semibold"
                    : "text-slate-700 hover:text-navy hover:bg-ice-blue"
                }`}
              >
                <span>{category.title}</span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveCategory(isOpen ? null : category.title)}
                onKeyDown={(e) => handleKeyDown(e, category.title)}
                aria-expanded={isOpen}
                aria-controls={menuId(category.title)}
                aria-label={`Toggle ${category.title} menu`}
                className={`py-2 pl-1 pr-2 rounded-r-full transition ${
                  isOpen ? "bg-ice-blue text-clinical-blue" : "text-slate-500 hover:bg-ice-blue hover:text-slate-800"
                }`}
              >
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div
                id={menuId(category.title)}
                className="absolute left-0 top-full pt-1 z-50 w-72 origin-top-left"
               
              >
                <div className="rounded-3xl bg-white p-3 shadow-lift ring-1 ring-navy/5">
                  <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                      {category.title}
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                       
                        onClick={() => setActiveCategory(null)}
                        className="block px-3 py-2 rounded-2xl hover:bg-ice-blue transition"
                      >
                        <span className="text-sm font-medium text-slate-800 hover:text-navy block">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="text-xs text-slate-500 mt-0.5 block line-clamp-1">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
