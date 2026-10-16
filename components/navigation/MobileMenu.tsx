"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavCategories } from "@/data/navigation";
import { SITE_NAME, PHONE_TEL, PHONE_DISPLAY } from "@/lib/constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  // Close menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
      {/* Hamburger open button in header */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-ice-blue active:scale-95 transition-transform"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Full-screen mobile navigation drawer rendered via Portal directly into document.body */}
      {isOpen && mounted && createPortal(
        <div
          id="mobile-navigation-drawer"
          data-lenis-prevent
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-[100] flex flex-col bg-white text-navy animate-in fade-in duration-200"
          style={{ height: "100dvh" }}
        >
          {/* Top Header Bar inside drawer */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 px-4 sm:px-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex min-w-0 items-center gap-2.5"
              aria-label={`${SITE_NAME}, home`}
            >
              <Image
                src="/logos/kasliwal-logo-transparent.png"
                alt=""
                width={40}
                height={40}
                className="h-9 w-9 shrink-0"
              />
              <span className="font-serif text-[16px] sm:text-lg font-bold tracking-tight text-navy truncate">
                {SITE_NAME}
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-navy hover:bg-slate-100 active:scale-95 transition-transform"
              aria-label="Close navigation menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Navigation Body */}
          <nav className="flex-1 overflow-y-auto px-4 py-3 sm:px-6" aria-label="Main Menu">
            <div className="divide-y divide-slate-100">
              {mainNavCategories.map((cat) => {
                const isCatActive =
                  cat.href === "/"
                    ? pathname === "/"
                    : pathname === cat.href || (cat.href && pathname.startsWith(cat.href + "/"));
                const hasItems = cat.items.length > 0;
                const isExpanded = !!openCategories[cat.title];

                if (!hasItems) {
                  return (
                    <div key={cat.title} className="py-1">
                      <Link
                        href={cat.href ?? "/"}
                        aria-current={isCatActive ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                        className={`flex min-h-12 items-center rounded-xl px-2 font-heading text-lg transition-colors ${
                          isCatActive ? "font-bold text-clinical-blue bg-ice-blue/60" : "font-bold text-navy hover:text-clinical-blue"
                        }`}
                      >
                        {cat.title}
                      </Link>
                    </div>
                  );
                }

                return (
                  <div key={cat.title} className="py-1">
                    <div className="flex min-h-12 items-center justify-between gap-2">
                      <Link
                        href={cat.href ?? "/"}
                        aria-current={isCatActive ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                        className={`flex-1 py-3 px-2 font-heading text-lg transition-colors ${
                          isCatActive ? "font-bold text-clinical-blue" : "font-bold text-navy hover:text-clinical-blue"
                        }`}
                      >
                        {cat.title}
                      </Link>

                      <button
                        type="button"
                        onClick={() => toggleCategory(cat.title)}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-clinical-blue hover:bg-ice-blue active:scale-95 transition-all"
                        aria-label={`Toggle ${cat.title} submenu`}
                        aria-expanded={isExpanded}
                      >
                        <span
                          className={`text-xl font-light leading-none transition-transform duration-200 ${
                            isExpanded ? "rotate-45 text-navy" : "text-clinical-blue"
                          }`}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="mb-2 mt-1 rounded-2xl bg-slate-50/70 p-2">
                        <ul className="space-y-0.5">
                          {cat.items.map((item) => {
                            const isItemActive = pathname === item.href;
                            return (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  aria-current={isItemActive ? "page" : undefined}
                                  onClick={() => setIsOpen(false)}
                                  className={`flex min-h-11 items-center px-3 py-2 rounded-xl text-[15px] transition-colors ${
                                    isItemActive
                                      ? "bg-white font-bold text-clinical-blue shadow-2xs ring-1 ring-clinical-blue/20"
                                      : "text-slate-700 hover:text-navy hover:bg-white/60"
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Contact & Info Card inside mobile drawer */}
            <div className="my-6 space-y-3 rounded-2xl border border-slate-200/80 bg-gradient-to-b from-slate-50 to-white p-4 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Direct Clinic Assistance
              </p>
              <div className="flex flex-col gap-2.5">
                <Link
                  href="/book-appointment"
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-clinical-blue px-4 text-base font-semibold text-white shadow-soft transition-colors hover:bg-navy"
                >
                  <span>Book Consultation</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex min-h-12 w-full items-center justify-center rounded-xl border border-navy/20 bg-white px-4 text-base font-semibold text-navy shadow-2xs transition-colors hover:bg-slate-50"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <p className="pt-1 text-center text-xs text-slate-500">
                Bosco Centre, Gangapur Road, Nashik
              </p>
            </div>
          </nav>
        </div>,
        document.body
      )}
    </div>
  );
}
