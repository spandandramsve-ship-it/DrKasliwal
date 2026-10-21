"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

export default function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated counters with initial real stats to prevent flash of 0
  const [years, setYears] = useState(15);
  const [procedures, setProcedures] = useState(5000);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1600;
    const start = performance.now();

    function step(timestamp: number) {
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setYears(Math.floor(ease * 15));
      setProcedures(Math.floor(ease * 5000));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setYears(15);
        setProcedures(5000);
      }
    }

    requestAnimationFrame(step);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      aria-label="Clinical credentials and key practice numbers"
      className="relative z-10 border-b border-slate-200/80 bg-slate-50/80 py-10 sm:py-12"
    >
      <Container size="xl">
        <div className="rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-soft ring-1 ring-slate-900/5 sm:p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
          {/* Stat 1: 15+ Years */}
          <div className="flex items-center gap-3.5 sm:gap-4 lg:px-6 lg:first:pl-0">
            <svg
              className="h-9 w-9 shrink-0 text-navy"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeLinecap="round" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeLinecap="round" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" />
              <circle cx="8" cy="14" r="1" fill="currentColor" />
              <circle cx="12" cy="14" r="1" fill="currentColor" />
              <circle cx="16" cy="14" r="1" fill="currentColor" />
              <circle cx="8" cy="18" r="1" fill="currentColor" />
              <circle cx="12" cy="18" r="1" fill="currentColor" />
              <circle cx="16" cy="18" r="1" fill="currentColor" />
            </svg>
            <div className="min-w-0">
              <div className="font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                {years > 0 ? `${years}+` : "0+"}
              </div>
              <div className="mt-0.5 text-xs font-medium leading-snug text-slate-600 sm:text-sm">
                Years of orthopaedic practice
              </div>
            </div>
          </div>

          {/* Stat 2: ~5,000 Procedures */}
          <div className="flex items-center gap-4 lg:px-6">
            <svg
              className="h-9 w-9 shrink-0 text-navy"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div className="min-w-0">
              <div className="font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                ~{procedures > 0 ? procedures.toLocaleString("en-IN") : "0"}
              </div>
              <div className="mt-0.5 text-xs font-medium leading-snug text-slate-600 sm:text-sm">
                Orthopaedic &amp; joint replacement procedures
              </div>
            </div>
          </div>

          {/* Stat 3: Fellowship-trained */}
          <div className="flex items-center gap-4 lg:px-6">
            <svg
              className="h-9 w-9 shrink-0 text-navy"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L1 9l11 6 9-4.91V17" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13.18v4c0 2.21 3.13 4 7 4s7-1.79 7-4v-4" />
            </svg>
            <div className="min-w-0">
              <div className="font-heading text-lg font-bold tracking-tight text-navy sm:text-xl">
                Fellowship-trained
              </div>
              <div className="mt-0.5 text-xs font-medium leading-snug text-slate-600 sm:text-sm">
                Joint Replacement &amp; Arthroscopy
              </div>
            </div>
          </div>

          {/* Stat 4: Advanced Technology */}
          <div className="flex items-center gap-4 lg:px-6 lg:last:pr-0">
            <svg
              className="h-9 w-9 shrink-0 text-navy"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="min-w-0">
              <div className="font-heading text-lg font-bold tracking-tight text-navy sm:text-xl">
                Advanced Technology
              </div>
              <div className="mt-0.5 text-xs font-medium leading-snug text-slate-600 sm:text-sm">
                VELYS™ Robotic &amp; Navigation-assisted Surgery
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
}

