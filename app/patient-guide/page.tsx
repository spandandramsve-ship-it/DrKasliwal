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
} from "@/lib/constants";
import { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "Patient Guide | Preparing for & Recovering from Joint Surgery | Kasliwal Joint Institute",
  description:
    "What to expect before, during, and after joint replacement or arthroscopy at Kasliwal Joint Institute, Nashik, including pre-op checklist, hospital stay, recovery milestones, and outstation patient support.",
  keywords: [
    "knee replacement recovery Nashik",
    "preparing for joint replacement",
    "what to expect after knee replacement",
    "hospital stay knee replacement Nashik",
    "outstation patients joint surgery Nashik",
    "joint surgery checklist",
  ],
  alternates: {
    canonical: "https://kasliwaljointinstitute.com/patient-guide",
  },
};

const patientGuideFaqs: FAQItem[] = [
  {
    id: "admission-documents",
    question: "What documents do I need to bring for hospital admission?",
    answer:
      "Please bring your Aadhaar card or government photo ID, health insurance policy card / e-card (if utilizing cashless insurance), all previous medical prescriptions, previous X-rays, MRI scans, and relevant laboratory test reports.",
  },
  {
    id: "cashless-insurance",
    question: "How does the cashless health insurance approval process work?",
    answer:
      "Our hospital TPA insurance desk coordinates pre-authorisation requests directly with major insurance companies and TPAs. We recommend submitting your policy documents 2 to 3 days prior to planned admission so initial approvals are secured smoothly.",
  },
  {
    id: "attendant-visiting-hours",
    question: "Can a family member stay with the patient in the room?",
    answer:
      "Yes. One dedicated attendant is accommodated in the patient room throughout the hospital stay. General visiting hours for other relatives are designated during morning and evening slots to ensure patients get adequate rest.",
  },
  {
    id: "hospital-food",
    question: "What food arrangements are provided during the hospital stay?",
    answer:
      "Hygienic, medically supervised meals are provided for the patient tailored to their clinical requirements, including diabetic, hypertensive, or low-salt diet plans.",
  },
  {
    id: "stairs-and-travel",
    question: "When can I safely climb stairs and travel by car after surgery?",
    answer:
      "Before discharge, our physiotherapy team trains you in step-by-step stair climbing with handrail support. Short car travel is safe immediately on discharge. Long-distance road travel (over 2 hours) should be discussed at your first follow-up.",
  },
  {
    id: "first-follow-up",
    question: "When is the first in-person follow-up scheduled?",
    answer:
      "The first post-operative check is scheduled 12 to 14 days after surgery for surgical incision inspection and staple or suture removal, followed by review of your home exercise routine.",
  },
];

export default function PatientGuidePage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section (Full Viewport Screen-Fit) */}
      <section className="bg-navy text-white min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-8 lg:py-12">
        <Container>
          <Breadcrumbs items={[{ label: "Patient Guide" }]} tone="dark" className="mb-3 sm:mb-4" />

          <div className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Title & Actions */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-light">
                Kasliwal Joint Institute · Nashik
              </span>

              <h1 className="mt-2 font-heading text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-tight">
                Patient Guide: Your Joint Replacement Journey
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                A clear, compassionate roadmap from initial consultation and medical preparation to day-of-surgery care, hospital mobility, and safe recovery at home. Guided every step of the way by Dr. Vishal Kasliwal.
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

              {/* Patient Care Highlights */}
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  Dedicated Care Coordinator
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  Cashless Insurance Desk
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  Day-1 Assisted Walking
                </span>
              </div>

              {/* Clean Credential Bar */}
              <div className="mt-5 pt-3.5 border-t border-white/15 text-xs sm:text-sm text-slate-300">
                <span className="font-semibold text-white">Dr. Vishal Kasliwal</span> · M.S. Orthopaedics · Fellowship-trained in Joint Replacement &amp; Arthroscopy · Reg. No. MMC/2005/02/1098
              </div>
            </div>

            {/* Right Column: Consultation Suite Photograph */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-dark shadow-lift max-w-[480px] mx-auto lg:max-w-none">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/patient_guide_hero.jpg"
                    alt="Orthopaedic clinical consultation suite with anatomical joint models at Kasliwal Joint Institute"
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
        {/* 2. Structured 4-Phase Surgery Journey */}
        <section id="journey" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Step-by-Step Pathway
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Your Surgery Journey: 4 Structured Phases
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Joint replacement is a planned and predictable process. Here is what you and your family can expect from your very first evaluation through to full recovery:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Phase 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-clinical-blue bg-ice-blue px-2.5 py-1 rounded-md mb-3">
                  Phase 01 · Clinic
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  Evaluation &amp; Decision
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Detailed history &amp; joint mobility exam</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Weight-bearing X-rays &amp; alignment scans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Conservative therapies explored first</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Surgery only when necessary
              </div>
            </div>

            {/* Phase 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-clinical-blue bg-ice-blue px-2.5 py-1 rounded-md mb-3">
                  Phase 02 · Pre-Op
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  Medical Preparation
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Physician &amp; cardiology fitness check</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Blood sugar &amp; BP medical control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Personalized implant sizing &amp; planning</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Complete pre-anaesthesia clearance
              </div>
            </div>

            {/* Phase 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-clinical-blue bg-ice-blue px-2.5 py-1 rounded-md mb-3">
                  Phase 03 · Hospital
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  Surgery &amp; In-Hospital Care
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Subvastus / regional pain blocks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Supported walking within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Stair navigation practice before discharge</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Discharge on Day 3 or 4
              </div>
            </div>

            {/* Phase 4 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md mb-3">
                  Phase 04 · Home
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  Recovery &amp; Mobility
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Day 12–14 wound check &amp; staple removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Progression from walker to walking stick</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Independent daily routines at 6–12 weeks</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-teal-700">
                Pain-free active lifestyle
              </div>
            </div>
          </div>
        </section>

        {/* 3. Preparing for Surgery (Checklists) */}
        <section id="preparing" className="scroll-mt-28 border-t border-slate-100 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Pre-Admission Readiness
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Preparing for Surgery
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Careful medical and domestic preparation reduces anxiety, protects against surgical complications, and ensures an easy transition back home:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Medical Checklist */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">
                  Clinical Readiness
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-navy">Medical Checklist</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                    <span><strong>Medical Records:</strong> Bring all previous X-rays, MRI scans, lab reports, discharge cards, and current prescriptions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                    <span><strong>Blood Sugar &amp; BP:</strong> Keep HbA1c and blood pressure controlled in consultation with your physician.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                    <span><strong>Blood Thinners:</strong> Inform our surgical team about any blood thinners (aspirin, clopidogrel, warfarin, apixaban) for planned stoppage.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                    <span><strong>Infection Screening:</strong> Treat any active dental, skin, or urinary tract infection prior to joint replacement.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Verified during pre-anaesthesia evaluation
              </div>
            </div>

            {/* Home Prep */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">
                  Domestic Safety
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-navy">Home &amp; Practical Prep</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                    <span><strong>Bathroom Setup:</strong> Install a western commode or raised toilet seat with grab bars; avoid low Indian toilets during early recovery.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                    <span><strong>Supportive Seating:</strong> Arrange a firm, high-seated chair with armrests to minimize knee and hip strain when standing up.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                    <span><strong>Clear Pathways:</strong> Remove loose carpets, electrical cords, and clutter between your bed, bathroom, and living areas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                    <span><strong>Family Attendant:</strong> Plan for a family member or caregiver to assist with meals and daily routines for the first 1 to 2 weeks.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Ensures fall prevention &amp; effortless mobility
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-ice-blue/60 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-navy text-sm sm:text-base">Download Printable Pre-Surgery Checklist</p>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">A handy reference list to check off at home before admission.</p>
            </div>
            <Button
              href={WHATSAPP_URL}
              variant="navy"
              size="sm"
            >
              Request Checklist on WhatsApp
            </Button>
          </div>
        </section>

        {/* 4. In Hospital & Physiotherapy Suite (With Photo) */}
        <section id="in-hospital" className="scroll-mt-28 border-t border-slate-100 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              In-Hospital Care
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Your Hospital Stay &amp; Rehabilitation
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Patients are admitted the evening before or morning of surgery. Our modular operating theatres and dedicated physiotherapy department ensure a smooth, comfortable stay:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Modern Rehabilitation Suite Photo */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-soft">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/patient_physiotherapy_suite.jpg"
                    alt="Spacious physiotherapy and mobility rehabilitation suite at Kasliwal Super Speciality Hospital"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-500 text-center">
                Dedicated in-hospital physiotherapy suite with parallel walking bars and gait training stairs.
              </p>
            </div>

            {/* Right: Hospital Stay Features */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  Multi-Modal Pain Management
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  Subvastus muscle-sparing access, targeted local nerve blocks, and non-opioid multi-modal analgesia keep discomfort well controlled without extreme nausea or grogginess.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  Same-Day Assisted Mobility
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  Most patients stand and take their first assisted steps with a walker within hours of surgery, encouraging natural blood circulation, preventing stiffness, and building immediate confidence.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  Safe Discharge Readiness
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  Before going home (typically on Day 3 or 4), patients practice comfortable walking, transfer safely in and out of bed, climb stairs with support, and receive complete medication schedules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Recovery & Safety Red Flags */}
        <section id="recovery" className="scroll-mt-28 border-t border-slate-100 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Patient Safety &amp; Monitoring
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Recovery, Rehabilitation &amp; Warning Signs
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Detailed procedure-specific timelines are available on our{" "}
              <Link href="/knee" className="text-clinical-blue font-semibold hover:underline">
                Knee Care Page
              </Link>{" "}
              and{" "}
              <Link href="/hip" className="text-clinical-blue font-semibold hover:underline">
                Hip Care Page
              </Link>
              . Below are critical clinical signs that require immediate hospital attention:
            </p>
          </div>

          {/* Clean Medical Alert Box - No Pulsating Dots or AI Slop */}
          <div className="mt-8 p-6 rounded-2xl border border-amber-300 bg-amber-50/70 shadow-soft">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600 shrink-0" />
              <h3 className="font-heading text-lg font-bold text-amber-950">
                Warning Signs: When to Contact the Hospital Immediately
              </h3>
            </div>
            <p className="mt-2 text-sm text-amber-900 leading-relaxed">
              While serious complications are uncommon, you must alert our orthopaedic emergency team without delay if you notice:
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-amber-950">
              <div className="p-3.5 bg-white rounded-xl border border-amber-200">
                <strong>High Fever:</strong> Body temperature exceeding 100.4°F (38°C) or persistent shaking chills.
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-amber-200">
                <strong>Wound Changes:</strong> Expanding redness, progressive swelling, warmth, or persistent drainage from the dressing.
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-amber-200">
                <strong>Calf Pain or Swelling:</strong> Severe tenderness or unilateral calf enlargement (potential sign of DVT).
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-amber-200">
                <strong>Sudden Chest Pain or Breathlessness:</strong> Urgent emergency — seek immediate medical attention (potential sign of PE).
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-amber-200 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-amber-900">
              <span>Emergency 24/7 Orthopaedic Helpline: <strong>{PHONE_DISPLAY}</strong></span>
              <Button href={`tel:${PHONE_TEL}`} variant="navy" size="sm">
                Call Emergency Desk
              </Button>
            </div>
          </div>
        </section>

        {/* 6. Outstation Patients */}
        <section id="outstation-patients" className="scroll-mt-28 border-t border-slate-100 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Regional Patient Support
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Guidance for Patients Travelling from Outside Nashik
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Many patients travel to Kasliwal Joint Institute from Dhule, Jalgaon, Ahmednagar, Nandurbar, and across North Maharashtra. We streamline your visit to avoid unnecessary travel:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">
                  Step 1 · Remote
                </span>
                <h3 className="mt-1 font-heading text-base sm:text-lg font-bold text-navy">
                  Preliminary Scan Review
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Send current X-rays, MRI scans, and medical history via WhatsApp prior to travel. Our clinical coordinator reviews suitability so preliminary tests can be organized in your hometown.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Avoids unnecessary initial travel
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">
                  Step 2 · Stay
                </span>
                <h3 className="mt-1 font-heading text-base sm:text-lg font-bold text-navy">
                  Coordinated Hospital Stay
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Planned admissions minimize wait times. Hospital stay is typically 3 to 4 days. For accompanying family members, multiple hotels and guest accommodations are located nearby along Gangapur Road.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Accommodation guidance provided
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">
                  Step 3 · Telehealth
                </span>
                <h3 className="mt-1 font-heading text-base sm:text-lg font-bold text-navy">
                  Remote Follow-Up Care
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Following the initial 12–14 day wound review and suture removal, subsequent routine recovery milestones and physiotherapy adjustments can be coordinated via scheduled video consultation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Safe rehabilitation at home
              </div>
            </div>
          </div>

          <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <strong>NMC Ethical Notice:</strong> Kasliwal Joint Institute does not provide commercial travel packages, commissions, or promotional gifts. Outstation support is strictly limited to clinical coordination and administrative guidance.
          </div>
        </section>

        {/* 7. FAQs */}
        <section id="faqs" className="scroll-mt-28 border-t border-slate-100 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Common Questions
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy mb-6">
              Frequently Asked Questions: Hospital Stay &amp; Recovery
            </h2>
          </div>
          <FAQ items={patientGuideFaqs} />
        </section>

        {/* 8. Closing CTA */}
        <section id="book">
          <CTA
            title="Planning Your Joint Surgery?"
            description="Consult Dr. Vishal Kasliwal at Kasliwal Joint Institute to review your X-rays, evaluate conservative options, and prepare your recovery plan."
          />
        </section>

        {/* Medical Review Box */}
        <MedicalReviewBox />
      </Container>
    </div>
  );
}
