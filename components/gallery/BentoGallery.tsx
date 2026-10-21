"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
  colSpan: string; // Tailwind class for grid columns
  aspectRatio: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "surgical-ot-team",
    src: "/images/patients/6.jpg.jpeg",
    alt: "Dr. Vishal Kasliwal with modular laminar airflow OT surgical team in front of navigation display",
    title: "Modular Surgical Theatre & Team",
    category: "Robotic Surgical Suite",
    description: "Dr. Vishal Kasliwal with theatre staff and surgical navigation console inside the laminar airflow operating theatre.",
    colSpan: "lg:col-span-8 lg:row-span-2",
    aspectRatio: "aspect-[16/10] sm:aspect-[16/11] lg:aspect-auto lg:h-full",
  },
  {
    id: "consultation-desk",
    src: "/images/patients/5.jpg.jpeg",
    alt: "Dr. Vishal Kasliwal at clinical consultation desk with joint anatomical models",
    title: "Orthopaedic Consultation Suite",
    category: "Specialist OPD",
    description: "Dr. Vishal Kasliwal at his desk with knee, hip, and shoulder anatomical models and post-operative X-rays.",
    colSpan: "lg:col-span-4",
    aspectRatio: "aspect-[16/10] sm:aspect-[4/3]",
  },
  {
    id: "joint-model-review",
    src: "/images/patients/1.jpg.jpeg",
    alt: "Dr. Vishal Kasliwal reviewing knee joint model and digital X-rays with patient",
    title: "Anatomical Review & Planning",
    category: "Patient Assessment",
    description: "Explaining knee articulation, implant alignment, and digital X-rays directly with the patient.",
    colSpan: "lg:col-span-4",
    aspectRatio: "aspect-[16/10] sm:aspect-[4/3]",
  },
  {
    id: "patient-consultation",
    src: "/images/patients/3.jpg.jpeg",
    alt: "Dr. Vishal Kasliwal discussing clinical diagnosis with patient and family",
    title: "Personalized Patient Consultation",
    category: "Clinical Care",
    description: "One-on-one discussion of non-surgical vs surgical pathways tailored to the patient's individual activity level.",
    colSpan: "lg:col-span-4",
    aspectRatio: "aspect-[16/10] sm:aspect-[4/3]",
  },
  {
    id: "counselling-room",
    src: "/images/patients/2.jpg.jpeg",
    alt: "Dr. Priyanka Kasliwal in clinical consultation with patient family",
    title: "Patient & Family Counselling",
    category: "Outpatient Care",
    description: "Comprehensive patient counselling and medical discussion in the clinical outpatient department.",
    colSpan: "lg:col-span-4",
    aspectRatio: "aspect-[16/10] sm:aspect-[4/3]",
  },
  {
    id: "clinical-care-team",
    src: "/images/patients/4.jpg.jpeg",
    alt: "Dr. Vishal Kasliwal with clinical care team and nursing staff at Kasliwal Hospital",
    title: "Integrated Hospital Care Team",
    category: "Care Coordination",
    description: "Multidisciplinary nursing and healthcare professionals ensuring seamless pre-op and post-op patient support.",
    colSpan: "lg:col-span-4",
    aspectRatio: "aspect-[16/10] sm:aspect-[4/3]",
  },
];

export default function BentoGallery() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  // Keyboard navigation for full-screen view
  useEffect(() => {
    if (activePhoto === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhoto(null);
      } else if (e.key === "ArrowLeft") {
        setActivePhoto((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1));
      } else if (e.key === "ArrowRight") {
        setActivePhoto((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto]);

  return (
    <>
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 auto-rows-[320px] sm:auto-rows-[300px] lg:auto-rows-[280px]">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(index)}
            className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-navy-dark shadow-soft hover:shadow-lift transition-all duration-300 cursor-pointer ${item.colSpan}`}
          >
            {/* Background Photo */}
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Subtle Gradient Overlay for Single-Line Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent transition-opacity duration-300" />

            {/* Content Bottom Strip: Clean single line title */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white">
              <h3 className="font-heading text-base sm:text-lg font-bold leading-tight text-white drop-shadow-md truncate group-hover:text-gold-light transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-3xl overflow-hidden bg-navy-dark border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Info and Close Button */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-navy/80 text-white">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-light">
                  {galleryItems[activePhoto].category} · Photo {activePhoto + 1} of {galleryItems.length}
                </span>
                <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                  {galleryItems[activePhoto].title}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close image viewer"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Photo Viewport */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/60 flex-1 min-h-[300px] sm:min-h-[460px]">
              <Image
                src={galleryItems[activePhoto].src}
                alt={galleryItems[activePhoto].alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhoto((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1));
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-navy/70 text-white hover:bg-navy transition-colors border border-white/20"
                aria-label="Previous image"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhoto((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-navy/70 text-white hover:bg-navy transition-colors border border-white/20"
                aria-label="Next image"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Description Footer */}
            <div className="p-4 px-6 bg-navy/90 border-t border-white/10 text-xs sm:text-sm text-slate-300">
              <p>{galleryItems[activePhoto].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
