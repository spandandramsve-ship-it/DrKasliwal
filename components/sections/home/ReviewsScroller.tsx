"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Review } from "@/types";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-amber-400 text-amber-400 shrink-0" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ReviewCardItem({ review }: { review: Review }) {
  return (
    <motion.li
      whileHover={{
        y: -4,
        boxShadow: "0 20px 35px -10px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(14, 165, 233, 0.2)",
        transition: { type: "spring", stiffness: 400, damping: 20 },
      }}
      className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs transition-all duration-300 select-none group"
    >
      {/* 5 Stars and Google Brand in Top Bar */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-1" role="img" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 border border-slate-200/70">
          <GoogleIcon className="h-3.5 w-3.5" />
          <span className="text-xs font-semibold text-slate-600">Google Review</span>
        </div>
      </div>

      {/* Review Text */}
      <blockquote className="m-0 p-0">
        <p className="text-slate-700 leading-relaxed font-normal text-sm m-0">
          &ldquo;{review.text}&rdquo;
        </p>
        <footer className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between">
          <cite className="font-heading font-bold not-italic text-sm text-navy">
            {review.author}
          </cite>
          {review.url && (
            <a
              href={review.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-clinical-blue hover:text-navy transition-colors inline-flex items-center gap-1"
            >
              Google Maps ↗
            </a>
          )}
        </footer>
      </blockquote>
    </motion.li>
  );
}

const Column = ({
  reviews,
  duration,
  className,
}: {
  reviews: Review[];
  duration: number;
  className?: string;
}) => {
  return (
    <div className={`flex-1 max-w-sm ${className || ""}`}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {reviews.map((r, i) => (
                <ReviewCardItem key={`${index}-${r.id || i}`} review={r} />
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export default function ReviewsScroller({ reviews }: { reviews: Review[] }) {
  const col1 = reviews.slice(0, 3);
  const col2 = reviews.slice(3, 6);
  const col3 = reviews.slice(6, 9);

  return (
    <div
      className="flex justify-center gap-5 mt-8 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[580px] overflow-hidden"
      role="region"
      aria-label="Patient Reviews Columns"
    >
      <Column reviews={col1} duration={18} />
      <Column reviews={col2} duration={22} className="hidden md:block" />
      <Column reviews={col3} duration={20} className="hidden lg:block" />
    </div>
  );
}
