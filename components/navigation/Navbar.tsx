"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavCategories } from "@/data/navigation";

const menuId = (title: string) => `nav-menu-${title.toLowerCase().replace(/\W+/g, "-")}`;

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const isCategoryActive = (category: (typeof mainNavCategories)[number]) => {
    if (!pathname) return false;
    if (category.href === "/") {
      return pathname === "/";
    }
    if (category.href && (pathname === category.href || pathname.startsWith(category.href + "/"))) {
      return true;
    }
    if (category.items && category.items.length > 0) {
      return category.items.some(
        (item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
      );
    }
    return false;
  };

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
      className="relative hidden items-center whitespace-nowrap text-[0.8125rem] font-medium text-slate-700 xl:flex xl:gap-0.5 2xl:gap-1 2xl:text-[0.875rem]"
      aria-label="Main Navigation"
    >
      {mainNavCategories.map((category) => {
        const hasItems = category.items.length > 0;
        const isOpen = activeCategory === category.title;
        const isActive = isCategoryActive(category);
        const targetHref = category.href || "/";

        if (!hasItems) {
          return (
            <Link
              key={category.title}
              href={targetHref}
              aria-current={isActive ? "page" : undefined}
              className={`relative px-3 py-1.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-clinical-blue/[0.12] text-navy font-semibold"
                  : "text-slate-600 hover:text-navy hover:bg-slate-200/80"
              }`}
            >
              <span>{category.title}</span>
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-2.5 right-2.5 h-[2px] rounded-full bg-clinical-blue"
                />
              )}
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
            <div
              className={`relative flex items-center rounded-lg transition-all duration-200 ${
                isOpen
                  ? "bg-slate-200/85 text-navy font-semibold"
                  : isActive
                  ? "bg-clinical-blue/[0.12] text-navy font-semibold"
                  : "text-slate-600 hover:bg-slate-200/80 hover:text-navy"
              }`}
            >
              <Link
                href={targetHref}
                aria-current={isActive ? "page" : undefined}
                className="py-1.5 pl-3 pr-0.5 flex items-center text-inherit"
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
                className="py-1.5 pl-0.5 pr-2 flex items-center text-inherit opacity-75 hover:opacity-100"
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
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-2.5 right-2.5 h-[2px] rounded-full bg-clinical-blue"
                />
              )}
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
                    {category.items.map((item) => {
                      const isItemActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          aria-current={isItemActive ? "page" : undefined}
                          onClick={() => setActiveCategory(null)}
                          className={`block px-3 py-2 rounded-2xl transition ${
                            isItemActive
                              ? "bg-ice-blue text-clinical-blue font-semibold ring-1 ring-clinical-blue/20"
                              : "hover:bg-ice-blue text-slate-800"
                          }`}
                        >
                          <span
                            className={`text-sm block ${
                              isItemActive
                                ? "font-bold text-clinical-blue"
                                : "font-medium text-slate-800 hover:text-navy"
                            }`}
                          >
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="text-xs text-slate-500 mt-0.5 block line-clamp-1">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      );
                    })}
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
