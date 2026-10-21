import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FAQ from "@/components/shared/FAQ";
import CTA from "@/components/shared/CTA";
import MedicalReviewBox from "@/components/shared/MedicalReviewBox";
import Button from "@/components/ui/Button";
import {
  PHONE_TEL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  VELYS_TRADEMARK,
} from "@/lib/constants";
import { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "Robotic Joint Replacement in Nashik | VELYS™ | Kasliwal Joint Institute",
  description:
    "How VELYS™ robotic-assisted knee replacement works, how it compares with conventional surgery, who it suits, and revision joint replacement in Nashik.",
  keywords: [
    "robotic joint replacement Nashik",
    "VELYS robotic surgery Nashik",
    "robotic surgery Nashik",
    "robotic vs conventional knee replacement",
    "revision knee replacement Nashik",
    "revision hip replacement Nashik",
    "is robotic knee replacement worth it",
  ],
  alternates: {
    canonical: "https://kasliwaljointinstitute.com/robotic-joint-replacement",
  },
};

const roboticFaqs: FAQItem[] = [
  {
    id: "robot-perform-surgery",
    question: "Does the robot perform the operation?",
    answer:
      "No. Dr. Kasliwal performs the operation. The robotic system helps with measurement, planning and bone preparation, within limits he sets.",
  },
  {
    id: "ct-scan-needed",
    question: "Do I need a CT scan before robotic knee replacement?",
    answer:
      "Not for VELYS™. It is an image-free system that measures your knee during surgery. Routine X-rays and blood tests are still needed.",
  },
  {
    id: "is-robotic-safe",
    question: "Is robotic knee replacement safe?",
    answer:
      "Studies show a safety profile comparable to conventional knee replacement. All surgery has risks, which are explained before you decide.",
  },
  {
    id: "faster-recovery",
    question: "Will I recover faster with robotic surgery?",
    answer:
      "Recovery depends mainly on your health, the operation and physiotherapy. Some studies report early benefits, but evidence is still developing, so we do not promise faster recovery.",
  },
  {
    id: "knee-last-longer",
    question: "Will a robotic knee last longer?",
    answer:
      "Better implant positioning may help, but long-term studies are still in progress.",
  },
  {
    id: "surgery-cost",
    question: "Is robotic surgery more expensive?",
    answer:
      "Yes, the technology adds to the cost. See Cost & Insurance on the Knee page for what affects the total.",
  },
  {
    id: "insurance-coverage",
    question: "Is robotic knee replacement covered by insurance?",
    answer:
      "Many policies cover joint replacement, including robotic-assisted procedures, but coverage varies. Our team can help you check your policy.",
  },
  {
    id: "both-knees-robotically",
    question: "Can both knees be replaced robotically?",
    answer:
      "Yes, either on the same day or in two stages. Which suits you depends on your health; Dr. Kasliwal will advise you.",
  },
];

export default function RoboticJointReplacementPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section - Full Viewport Screen-Fit */}
      <section className="bg-navy text-white min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-8 lg:py-12">
        <Container>
          <Breadcrumbs
            items={[{ label: "Robotic Joint Replacement" }]}
            tone="dark"
            className="mb-3 sm:mb-4"
          />

          <div className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Heading & Key Actions */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-light">
                VELYS™ Robotic-Assisted Solution
              </span>

              <h1 className="mt-2 font-heading text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-tight">
                Robotic Joint Replacement in Nashik
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                Robotic-assisted knee replacement planned around your individual anatomy and performed by fellowship-trained joint replacement surgeon Dr. Vishal Kasliwal at Kasliwal Joint Institute.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button href="/book-appointment" variant="light" size="sm" arrow>
                  Book a Consultation
                </Button>
                <Button href={`tel:${PHONE_TEL}`} variant="outline-light" size="sm">
                  Call {PHONE_DISPLAY}
                </Button>
                <Button href={WHATSAPP_URL} variant="outline-light" size="sm">
                  WhatsApp
                </Button>
              </div>

              {/* Clean Credential Bar */}
              <div className="mt-6 pt-4 border-t border-white/15 text-xs sm:text-sm text-slate-300">
                <span className="font-semibold text-white">Dr. Vishal Kasliwal</span> · M.S. Orthopaedics · Reg. No. MMC/2005/02/1098
              </div>
            </div>

            {/* Right Column: Clean, Natural Surgical Image (No Text Overlays, No Overlapping Badges) */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-dark shadow-lift max-w-[460px] mx-auto lg:max-w-none">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/robotic/robotic_surgery_hero.jpeg"
                    alt="VELYS robotic surgery unit in the operating theatre at Kasliwal Super Speciality Hospital, Nashik"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16 space-y-16 sm:space-y-20">
        {/* 2. Overview - Bite-Sized Content & Visual Icons */}
        <section id="overview" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Technology Overview
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              What is Robotic-Assisted Joint Replacement?
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Joint replacement resurfaces the damaged bone of an arthritic joint with durable medical-grade components. With robotic assistance, Dr. Kasliwal uses high-precision computer guidance to measure your joint during the procedure, personalize component positioning, and balance ligaments with digital accuracy.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Pillar 1: Personalised Fit with Anatomy/Compass Icon */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 hover:border-slate-300 hover:shadow-2xs transition-all">
              <div className="w-11 h-11 rounded-xl bg-ice-blue text-clinical-blue flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">Personalised Fit</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                Planned around your natural joint anatomy rather than an arbitrary population average.
              </p>
            </div>

            {/* Pillar 2: Ligament Balance with Kinetic Tension Icon */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 hover:border-slate-300 hover:shadow-2xs transition-all">
              <div className="w-11 h-11 rounded-xl bg-ice-blue text-clinical-blue flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">Ligament Balance</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                Soft-tissue tension is measured across the full bend of the knee to avoid tightness or laxity.
              </p>
            </div>

            {/* Pillar 3: Precision Guidance with Surgical Shield Icon */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 hover:border-slate-300 hover:shadow-2xs transition-all">
              <div className="w-11 h-11 rounded-xl bg-ice-blue text-clinical-blue flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">Precision Guidance</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                Bone cuts are guided within safety boundaries set and controlled by the operating surgeon.
              </p>
            </div>
          </div>
        </section>

        {/* 3. The Surgeon Stays in Control - 3-Card Clinical Responsibility Grid */}
        <section id="surgeon-in-control" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Surgeon Control &amp; Patient Safety
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              The Robot Doesn&apos;t Replace the Surgeon
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Robotic technology is an advanced surgical instrument — it never acts or operates on its own. Dr. Vishal Kasliwal remains in full command of every clinical decision and operative movement.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: The Surgeon Decides */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-2xs transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-ice-blue text-clinical-blue flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-clinical-blue">
                  Clinical Judgement
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-navy">
                  1. Comprehensive Evaluation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dr. Kasliwal evaluates your symptoms, examines joint mobility, reviews X-rays, and decides whether surgery is genuinely warranted or non-surgical care should continue.
                </p>
              </div>
            </div>

            {/* Card 2: The Surgeon Operates */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-2xs transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-ice-blue text-clinical-blue flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.828 2.828a2 2 0 01-2.828 0L4.757 13.414a2 2 0 010-2.828l7.071-7.071a2 2 0 012.828 0l1.414 1.414" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-clinical-blue">
                  Hands-On Execution
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-navy">
                  2. Direct Surgical Control
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dr. Kasliwal performs every incision, controls the robotic tool, prepares the bone surfaces, and balances the joint&apos;s natural ligaments with seasoned surgical touch.
                </p>
              </div>
            </div>

            {/* Card 3: The Robot Assists */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-2xs transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-ice-blue text-clinical-blue flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-clinical-blue">
                  Digital Precision
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-navy">
                  3. Real-Time Guidance
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The robotic system serves as an intelligent co-pilot, providing continuous optical tracking and enforcing safety boundaries that prevent unintended bone removal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How VELYS Works - 4 Clean Step Cards with Integrated 3D Mapping Visual */}
        <section id="how-velys-works" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Step-by-Step Procedure
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              How VELYS™ Robotic Surgery Works
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              VELYS™ is an image-free system by DePuy Synthes (Johnson &amp; Johnson MedTech). It eliminates pre-operative CT scans by measuring your knee directly during surgery with infrared optical tracking.
            </p>
          </div>

          {/* Workflow + 3D Scientific Illustration Showcase */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: 4 Step Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Step 1: Plan */}
              <div className="flex flex-col justify-between p-5 rounded-2xl border border-slate-200 bg-white hover:border-clinical-blue/40 transition-colors">
                <div>
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy font-heading text-xs font-bold text-white">
                      1
                    </span>
                    <h3 className="font-heading text-base font-bold text-navy">Plan</h3>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dr. Kasliwal maps key anatomical points on the femur and tibia. The system constructs a 3D digital model of your joint.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-clinical-blue">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Anatomy Mapping</span>
                </div>
              </div>

              {/* Step 2: Balance */}
              <div className="flex flex-col justify-between p-5 rounded-2xl border border-slate-200 bg-white hover:border-clinical-blue/40 transition-colors">
                <div>
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy font-heading text-xs font-bold text-white">
                      2
                    </span>
                    <h3 className="font-heading text-base font-bold text-navy">Balance</h3>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The knee is moved through its range of motion. Ligament tightness is measured in real time before permanent cuts are made.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-clinical-blue">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <span>Ligament Tension</span>
                </div>
              </div>

              {/* Step 3: Guide */}
              <div className="flex flex-col justify-between p-5 rounded-2xl border border-slate-200 bg-white hover:border-clinical-blue/40 transition-colors">
                <div>
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy font-heading text-xs font-bold text-white">
                      3
                    </span>
                    <h3 className="font-heading text-base font-bold text-navy">Guide</h3>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The robotic saw guide assists bone preparation strictly within boundaries defined and controlled by the surgeon.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-clinical-blue">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Guided Cuts</span>
                </div>
              </div>

              {/* Step 4: Verify */}
              <div className="flex flex-col justify-between p-5 rounded-2xl border border-slate-200 bg-white hover:border-clinical-blue/40 transition-colors">
                <div>
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy font-heading text-xs font-bold text-white">
                      4
                    </span>
                    <h3 className="font-heading text-base font-bold text-navy">Verify</h3>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Trial implant alignment, stability, and movement arc are digitally confirmed prior to final component cementation.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Stability Verified</span>
                </div>
              </div>
            </div>

            {/* Right: 3D Kinematic Mapping Medical Illustration */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-soft">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/robotic/robotic_knee_mapping.jpg"
                    alt="3D kinematic joint alignment analysis in robotic knee surgery"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 bg-white border-t border-slate-200 text-center">
                  <p className="text-xs text-slate-600 font-medium">
                    Clinical 3D Kinematic Mapping &amp; Coronal Alignment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-[11px] text-slate-500 font-medium">Scans Required</p>
              <p className="font-bold text-xs sm:text-sm text-navy mt-0.5">Image-Free (No CT)</p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-[11px] text-slate-500 font-medium">Installation</p>
              <p className="font-bold text-xs sm:text-sm text-navy mt-0.5">Table-Mounted</p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-[11px] text-slate-500 font-medium">Tracking Method</p>
              <p className="font-bold text-xs sm:text-sm text-navy mt-0.5">Infrared Optical</p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-[11px] text-slate-500 font-medium">Implant System</p>
              <p className="font-bold text-xs sm:text-sm text-navy mt-0.5">ATTUNE® Knee</p>
            </div>
          </div>
        </section>

        {/* 5. Robotic vs Conventional Comparison Table */}
        <section id="robotic-vs-conventional" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Evidence-Based Comparison
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Robotic vs Conventional Knee Replacement
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Both techniques are established and relieve arthritis pain effectively. The primary difference lies in how bone cuts and ligament tension are measured.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100 text-navy">
                    <th className="py-3.5 px-5 font-bold">Feature</th>
                    <th className="py-3.5 px-5 font-bold">Conventional Knee</th>
                    <th className="py-3.5 px-5 font-bold bg-ice-blue/60 text-clinical-blue">
                      Robotic-Assisted (VELYS™)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-3.5 px-5 font-semibold text-navy">Surgical Approach</td>
                    <td className="py-3.5 px-5 text-slate-700">Standard incision &amp; implants</td>
                    <td className="py-3.5 px-5 text-slate-700 bg-ice-blue/20">Standard incision &amp; implants</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-semibold text-navy">Alignment Planning</td>
                    <td className="py-3.5 px-5 text-slate-700">Mechanical guides and visual estimate</td>
                    <td className="py-3.5 px-5 text-slate-700 bg-ice-blue/20">
                      Real-time digital mapping taken during surgery
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-semibold text-navy">Implant Positioning</td>
                    <td className="py-3.5 px-5 text-slate-700">Accurate in experienced hands</td>
                    <td className="py-3.5 px-5 text-slate-700 bg-ice-blue/20">
                      Consistent positioning with fewer alignment outliers
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-semibold text-navy">Ligament Balancing</td>
                    <td className="py-3.5 px-5 text-slate-700">Judged by tactile feel and spacers</td>
                    <td className="py-3.5 px-5 text-slate-700 bg-ice-blue/20">
                      Digitally measured across full range of motion
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-semibold text-navy">Pre-Op CT Radiation</td>
                    <td className="py-3.5 px-5 text-slate-700">None (Routine X-rays only)</td>
                    <td className="py-3.5 px-5 text-slate-700 bg-ice-blue/20">
                      None (Routine X-rays only; no CT scan needed)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-semibold text-navy">Technology Cost</td>
                    <td className="py-3.5 px-5 text-slate-700">Standard hospital package</td>
                    <td className="py-3.5 px-5 text-slate-700 bg-ice-blue/20">
                      Higher, covering robotic consumables
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-500 leading-relaxed">
            *Clinical scoping review (Morrison et al., 2026, <em>J Exp Orthop</em>) demonstrates improved implant accuracy with comparable safety to conventional methods. Long-term functional outcomes remain under ongoing study.
          </p>
        </section>

        {/* 6. Who is Suitable? - Visual Icons for Each Point */}
        <section id="who-is-it-for" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Candidacy
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Who is Robotic-Assisted Surgery Suitable For?
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Robotic assistance is an operative technique, not an independent reason to have surgery. The clinical decision depends on your pain, function, and X-ray findings.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Suitable Column with bespoke icons */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="font-heading text-base font-bold text-navy mb-4">
                It May Be Suitable If:
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-ice-blue text-clinical-blue shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span>Severe knee arthritis limits walking, daily tasks, or sleep despite non-surgical care.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-ice-blue text-clinical-blue shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span>X-rays demonstrate bone-on-bone joint damage requiring resurfacing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-ice-blue text-clinical-blue shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <span>You have marked limb deformity (bow legs or knock knees) where balance is critical.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-ice-blue text-clinical-blue shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>You are medically cleared for elective joint replacement surgery.</span>
                </li>
              </ul>
            </div>

            {/* May Not Need Column with info icons */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70">
              <h3 className="font-heading text-base font-bold text-navy mb-4">
                You May Not Need It If:
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-200/80 text-slate-600 shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <span>Your pain is still manageable with physiotherapy, weight control, or medicines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-200/80 text-slate-600 shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <span>You have an active infection or medical issues that need prior treatment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-200/80 text-slate-600 shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <span>Your condition is localized and better suited for keyhole arthroscopy.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Procedure Options - 3 Clean Cards with Real Photos */}
        <section id="options" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Joint Procedures
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Robotic Joint Replacement Options
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Explore in-depth recovery timelines, candidate criteria, and costs on our dedicated procedure pages:
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Total Knee */}
            <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] w-full bg-slate-50 overflow-hidden">
                  <Image
                    src="/images/procedures/implant_total_knee.jpg"
                    alt="Robotic Total Knee Replacement implant"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-contain p-4 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    Total Knee Replacement
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For widespread arthritis affecting the entire knee joint. Aligned to your individual envelope of motion.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5">
                <Link
                  href="/knee#robotic-total-knee-replacement"
                  className="text-xs sm:text-sm font-semibold text-clinical-blue hover:text-navy transition-colors inline-flex items-center gap-1"
                >
                  <span>Explore Total Knee</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Partial Knee */}
            <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] w-full bg-slate-50 overflow-hidden">
                  <Image
                    src="/images/procedures/implant_partial_knee.jpg"
                    alt="Partial Knee Replacement implant"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-contain p-4 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    Partial Knee Replacement
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For damage confined to one compartment of the knee, preserving your natural ligaments and healthy bone.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5">
                <Link
                  href="/knee#partial-knee-replacement"
                  className="text-xs sm:text-sm font-semibold text-clinical-blue hover:text-navy transition-colors inline-flex items-center gap-1"
                >
                  <span>Explore Partial Knee</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Hip Replacement */}
            <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] w-full bg-slate-50 overflow-hidden">
                  <Image
                    src="/images/procedures/card_hip_care.jpg"
                    alt="Total Hip Replacement ceramic bearing"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    Hip Replacement (THR)
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Total hip reconstruction with precision cup placement, leg-length balancing, and ceramic bearing surfaces.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5">
                <Link
                  href="/hip#hip-replacement"
                  className="text-xs sm:text-sm font-semibold text-clinical-blue hover:text-navy transition-colors inline-flex items-center gap-1"
                >
                  <span>Explore Hip Replacement</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Revision Joint Surgery - With Authentic Revision Implant Photo */}
        <section id="revision-joint-replacement" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Secondary Surgery
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Revision Knee &amp; Hip Replacement
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              When a previous joint replacement becomes painful, loose, or unstable, revision surgery may be necessary to restore stability and function.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Column: Revision Causes & Symptoms */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-200 bg-white">
                <h3 className="font-heading text-base font-bold text-navy mb-3">
                  Causes for Revision:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-clinical-blue font-bold">•</span>
                    <span><strong>Aseptic Loosening:</strong> Gradual loosening of the implant from bone over years.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-clinical-blue font-bold">•</span>
                    <span><strong>Joint Infection:</strong> Deep tissue infection around the implant components.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-clinical-blue font-bold">•</span>
                    <span><strong>Instability:</strong> Ligament laxity or wear of the plastic bearing insert.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-clinical-blue font-bold">•</span>
                    <span><strong>Periprosthetic Fracture:</strong> Bone fracture surrounding the implant stem.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white">
                <h3 className="font-heading text-base font-bold text-navy mb-3">
                  Signs to Have Checked:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>New or progressive pain after an extended pain-free period.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Persistent swelling, warmth, redness, or wound drainage.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>A feeling of the joint slipping, clicking, or giving way.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Noticeable change in leg length or sudden stiffness.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Revision Implant Real Photo */}
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-soft">
                <div className="relative aspect-[4/3] w-full bg-slate-50">
                  <Image
                    src="/images/procedures/implant_revision_knee.jpg"
                    alt="Revision Knee Replacement implant with stem extension"
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
                <div className="p-3 bg-white border-t border-slate-200 text-center">
                  <p className="text-xs text-slate-600 font-medium">
                    Specialized Stemmed Revision Implant System
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Assessment Callout */}
          <div className="mt-5 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-navy text-sm">Had joint surgery elsewhere and experiencing pain?</p>
              <p className="text-xs text-slate-600 mt-0.5">
                Share your previous surgical discharge summaries and recent X-rays for an objective clinical opinion.
              </p>
            </div>
            <Button href={WHATSAPP_URL} variant="navy" size="sm" arrow className="shrink-0">
              Share Reports via WhatsApp
            </Button>
          </div>
        </section>

        {/* 9. FAQs */}
        <section id="faqs" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Patient Guidance
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-6">
            <FAQ items={roboticFaqs} />
          </div>
        </section>

        {/* 10. Closing CTA */}
        <section id="book" className="scroll-mt-28">
          <CTA />
        </section>

        {/* Trademark & Medical Review */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500 leading-relaxed">
            {VELYS_TRADEMARK} ATTUNE® is a registered trademark of DePuy Synthes.
          </p>
          <MedicalReviewBox lastUpdated="October 2026" />
        </div>
      </Container>
    </div>
  );
}
