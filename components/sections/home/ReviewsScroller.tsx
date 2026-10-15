"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Review } from "@/types";

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
      {/* 5 Stars Rating */}
      <div className="flex items-center gap-1 mb-3.5" role="img" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Review Text */}
      <blockquote className="m-0 p-0">
        <p className="text-slate-700 leading-relaxed font-normal text-sm sm:text-[14.5px] m-0">
          &ldquo;{review.text}&rdquo;
        </p>
        <footer className="mt-4 pt-3.5 border-t border-slate-100 flex items-center gap-3">
          {review.authorPhoto ? (
            <img
              src={review.authorPhoto}
              alt={review.author}
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-slate-200"
              loading="lazy"
            />
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EBF7F5] text-[#0D7A68]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <circle cx="12" cy="8" r="3.75" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 19.5a6 6 0 0112 0" />
              </svg>
            </div>
          )}
          <cite className="font-heading font-bold not-italic text-sm sm:text-base text-navy min-w-0 flex-1 truncate">
            {review.author}
          </cite>
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
    <div className={`flex-1 w-full max-w-full sm:max-w-sm ${className || ""}`}>
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
