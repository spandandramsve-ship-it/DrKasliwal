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
  title: "Knee Replacement & Arthritis Treatment in Nashik | Dr. Vishal Kasliwal",
  description:
    "Comprehensive knee care in Nashik: robotic total knee replacement, partial knee replacement (UKR), conservative arthritis ladder, recovery timelines, and transparent costs by Dr. Vishal Kasliwal.",
  keywords: [
    "knee replacement Nashik",
    "robotic knee replacement Nashik",
    "knee specialist Nashik",
    "knee replacement surgeon Nashik",
    "partial knee replacement Nashik",
    "knee arthritis treatment Nashik",
    "knee pain doctor Nashik",
    "knee replacement cost Nashik",
    "do I need knee replacement",
  ],
  alternates: {
    canonical: "https://kasliwaljointinstitute.com/knee",
  },
};

const kneeFaqs: FAQItem[] = [
  {
    id: "knee-age",
    question: "At what age should knee replacement be considered?",
    answer:
      "There is no fixed calendar age cutoff. Surgery is recommended when arthritis pain severely limits daily life and independent walking despite conservative treatments. Most patients are between 55 and 80, though younger adults with severe post-traumatic or rheumatoid joint destruction can also safely benefit.",
  },
  {
    id: "knee-lifespan",
    question: "How long does a modern robotic knee replacement last?",
    answer:
      "Modern knee implants with kinematic alignment and high-crosslinked polyethylene bearings routinely last 15 to 20+ years. Maintaining a healthy body weight and avoiding high-impact joint loading (such as heavy deep floor squatting) maximizes prosthetic longevity.",
  },
  {
    id: "knee-pain",
    question: "Is knee replacement surgery very painful?",
    answer:
      "Post-operative pain is managed using modern multimodal analgesia, including ultrasound-guided adductor canal nerve blocks and local periarticular infiltration. This delivers effective pain control while allowing full active quadriceps muscle function for walking on Day 1.",
  },
  {
    id: "hospital-stay",
    question: "How long is the typical hospital stay?",
    answer:
      "Most patients stay 3 to 4 days for a single knee replacement. Discharge occurs once you can get in and out of bed independently, walk safely with a walker or stick, bend your knee comfortably past 90 degrees, and manage stairs.",
  },
  {
    id: "when-walk",
    question: "When will I start walking after surgery?",
    answer:
      "Mobilisation begins within 24 hours under the supervision of a dedicated physiotherapist. Standing and short supported walking with a walker on Day 1 stimulates circulation and prevents deep vein thrombosis.",
  },
  {
    id: "floor-sitting",
    question: "Can I sit on the floor or cross-legged after knee replacement?",
    answer:
      "Sitting in standard chairs, dining tables, and sofas is encouraged. While high-flexion implants technically permit floor sitting, deep floor squatting and prolonged kneeling place extreme mechanical stress on prosthetic surfaces and are generally discouraged in joint replacement patients.",
  },
  {
    id: "partial-vs-total",
    question: "What is the difference between partial and total knee replacement?",
    answer:
      "A partial knee replacement (UKR) resurfaces only the damaged medial or lateral compartment, keeping your natural ACL, PCL, and healthy cartilage intact. A total knee replacement (TKR) resurfaces the entire joint when arthritis affects multiple compartments.",
  },
  {
    id: "surgery-xray-alone",
    question: "Do I need surgery if my X-ray shows severe arthritis?",
    answer:
      "Not necessarily. We treat the patient, not just the X-ray film. If you have minimal pain and remain active with exercise, surgery is not required. Knee replacement is an elective procedure chosen when symptoms disrupt your quality of life.",
  },
  {
    id: "insurance-coverage",
    question: "Does health insurance cover robotic knee replacement in Nashik?",
    answer:
      "Yes. Most major health insurance providers and TPAs approve robotic-assisted knee replacement under standard joint replacement policies. Our hospital insurance desk assists with pre-authorization and cashless claim settlement.",
  },
];

export default function KneePage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="bg-navy text-white py-10 sm:py-14">
        <Container>
          <Breadcrumbs
            items={[{ label: "Knee Treatment" }]}
            tone="dark"
            className="mb-3 sm:mb-4"
          />

          <div className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Clinical Title & Actions */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-light">
                Specialist Knee Clinic · Nashik
              </span>

              <h1 className="mt-2 font-heading text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-tight">
                Knee Treatment &amp; Robotic Knee Replacement in Nashik
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                From conservative arthritis management and keyhole arthroscopy to subvastus muscle-sparing robotic total and partial knee replacement. Evaluated and operated by Dr. Vishal Kasliwal at Kasliwal Joint Institute.
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

            {/* Right Column: Clean Surgical Photograph */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-dark shadow-lift max-w-[460px] mx-auto lg:max-w-none">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/procedures/card_knee_care.jpg"
                    alt="Surgical knee replacement care and clinical instruments in operating theatre at Kasliwal Joint Institute"
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
        {/* 2. Common Knee Conditions We Treat */}
        <section id="knee-pain" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Clinical Conditions
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Common Knee Problems We Treat
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Every knee problem has a distinct anatomical origin. Accurate clinical diagnosis with weight-bearing imaging ensures targeted, conservative-first care.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* 1. Knee Osteoarthritis */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">Knee Osteoarthritis</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Progressive thinning of joint cartilage causing friction, bone spurs, stiffness, and bowing deformity (varus knees).
                </p>
              </div>
              <a href="#knee-arthritis" className="mt-4 text-xs sm:text-sm font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1">
                <span>Explore arthritis options</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* 2. Ligament Injuries (ACL & PCL) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">Ligament Tears (ACL, PCL)</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sudden pivoting sports injuries or two-wheeler trauma causing joint instability, giving way, and recurrent swelling.
                </p>
              </div>
              <Link href="/arthroscopy#acl-reconstruction" className="mt-4 text-xs sm:text-sm font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1">
                <span>ACL keyhole reconstruction</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* 3. Meniscus Tears */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">Meniscus Tears</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Torn shock-absorbing knee cartilage resulting in joint-line tenderness, painful clicking, catching, and difficulty squatting.
                </p>
              </div>
              <Link href="/arthroscopy#meniscus-tear" className="mt-4 text-xs sm:text-sm font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1">
                <span>Meniscus repair &amp; care</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* 4. Cartilage Defects */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">Chondral Defects &amp; Loose Bodies</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Isolated areas of damaged articular cartilage or loose joint fragments causing painful knee locking and early wear.
                </p>
              </div>
              <Link href="/arthroscopy#pcl-and-cartilage" className="mt-4 text-xs sm:text-sm font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1">
                <span>Cartilage preservation</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* 5. Kneecap Instability */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">Patella Instability &amp; Maltracking</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The kneecap slipping out of its femoral groove, leading to recurrent dislocations, anterior pain, and apprehension during stairs.
                </p>
              </div>
              <Link href="/arthroscopy#kneecap-instability" className="mt-4 text-xs sm:text-sm font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1">
                <span>MPFL reconstruction</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* 6. Painful / Failed Replacement */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">Painful or Loose Replacement</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Persistent pain, instability, or implant loosening from a prior surgery requiring specialist revision assessment.
                </p>
              </div>
              <Link href="/robotic-joint-replacement#revision-joint-replacement" className="mt-4 text-xs sm:text-sm font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1">
                <span>Revision knee surgery</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Knee Arthritis Treatment */}
        <section id="knee-arthritis" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Degenerative Joint Disease
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Knee Arthritis Treatment in Nashik
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Knee osteoarthritis is the progressive wear of the smooth cartilage covering the ends of the femur and tibia. In Indian patients, wear frequently concentrates on the medial (inner) side, resulting in gradual bow-legged alignment.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Visual: High-res Anatomical Comparison */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-soft h-full flex flex-col justify-between">
                <div className="relative aspect-[16/9] w-full bg-slate-100">
                  <Image
                    src="/images/procedures/knee_osteoarthritis_comparison.jpg"
                    alt="Anatomical illustration comparing healthy knee joint cartilage on left with osteoarthritic worn knee joint on right"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-navy">Left: Healthy Smooth Cartilage</span>
                  <span className="font-semibold text-amber-700">Right: Arthritic Bone Friction</span>
                </div>
              </div>
            </div>

            {/* Structured Medical Info */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
                <h3 className="font-heading font-bold text-base text-navy">
                  Types of Knee Arthritis
                </h3>
                <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-clinical-blue font-bold">•</span>
                    <span><strong>Primary Osteoarthritis:</strong> The most common form, related to age, biomechanical wear, genetic factors, and weight.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-clinical-blue font-bold">•</span>
                    <span><strong>Inflammatory Arthritis:</strong> Systemic autoimmune conditions such as Rheumatoid Arthritis affecting both knee joints.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-clinical-blue font-bold">•</span>
                    <span><strong>Post-Traumatic Arthritis:</strong> Secondary cartilage degeneration occurring years after a previous fracture, ACL rupture, or meniscus tear.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
                <h3 className="font-heading font-bold text-base text-navy">
                  Key Warning Signs &amp; Symptoms
                </h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Pain during stair climbing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Morning stiffness &gt; 30 mins</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Visible bowing of legs (varus)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Joint clicking &amp; grinding</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Difficulty rising from sofa</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Rest pain that disrupts sleep</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnosis Banner */}
          <div className="mt-6 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-navy">
                Accurate Standing X-Ray &amp; Alignment Scanograms
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl">
                We perform full weight-bearing standing views and digital limb scanograms to evaluate true mechanical load axes and joint space narrowing before planning treatment.
              </p>
            </div>
            <Button href="/book-appointment" variant="navy" size="sm" arrow className="shrink-0">
              Schedule Knee X-Ray
            </Button>
          </div>
        </section>

        {/* 4. Non-Surgical Treatment Ladder */}
        <section id="non-surgical-treatment" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Conservative Management First
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              The 6-Step Non-Surgical Treatment Ladder
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Surgery is never the initial step. For early to moderate arthritis, evidence-based non-surgical therapies control inflammation, strengthen supporting muscles, and preserve joint function.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ice-blue text-clinical-blue mb-3">
                Step 01
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Physiotherapy &amp; Muscle Strengthening</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Focused isometric quadriceps, vastus medialis, and hamstring training creates a muscular shock absorber around the joint.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ice-blue text-clinical-blue mb-3">
                Step 02
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Weight Management</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every 1 kg of body weight lost relieves approximately 4 kg of cumulative compressive stress across the knee joint with each step.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ice-blue text-clinical-blue mb-3">
                Step 03
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Activity Modification</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Transitioning from high-impact activities to cycling, swimming, and controlled flat-surface walking; avoiding deep squatting.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ice-blue text-clinical-blue mb-3">
                Step 04
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Monitored Medical Therapy</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Short, monitored courses of anti-inflammatory medications and cartilage protectants to quiet acute inflammatory flare-ups.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ice-blue text-clinical-blue mb-3">
                Step 05
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Unloading Knee Braces</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Custom off-loader knee braces transfer mechanical load away from the worn inner compartment onto healthy lateral cartilage.
              </p>
            </div>

            {/* Step 6 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ice-blue text-clinical-blue mb-3">
                Step 06
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Targeted Joint Injections</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hyaluronic acid viscosupplementation or targeted anti-inflammatory injections for patients needing interim relief.
              </p>
            </div>
          </div>
        </section>

        {/* 5. "Do I Need a Knee Replacement?" Self-Assessment */}
        <section id="do-i-need-knee-replacement" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Patient Decision Support
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Do You Need a Knee Replacement?
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Surgery is indicated when arthritis pain interferes with independent daily life and conservative measures stop working. Review these 7 clinical indicators:
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                <span className="shrink-0 w-6 h-6 rounded-md bg-clinical-blue/10 text-clinical-blue flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  Severe knee pain that wakes you up at night or disrupts sleep.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                <span className="shrink-0 w-6 h-6 rounded-md bg-clinical-blue/10 text-clinical-blue flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  Walking radius limited to less than 10 to 15 minutes before needing rest.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                <span className="shrink-0 w-6 h-6 rounded-md bg-clinical-blue/10 text-clinical-blue flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  Difficulty climbing stairs or rising from a low chair without arm support.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                <span className="shrink-0 w-6 h-6 rounded-md bg-clinical-blue/10 text-clinical-blue flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  Visible progressive bowing (varus deformity) or knock-knee angulation.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                <span className="shrink-0 w-6 h-6 rounded-md bg-clinical-blue/10 text-clinical-blue flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  Daily reliance on pain medications just to perform household routines.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                <span className="shrink-0 w-6 h-6 rounded-md bg-clinical-blue/10 text-clinical-blue flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  Physiotherapy, exercises, and joint injections no longer provide relief.
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-600">
                If you answered <strong>yes</strong> to 3 or more indicators, an objective surgical consultation is recommended.
              </p>
              <Button href="/book-appointment" variant="navy" size="sm" arrow className="shrink-0">
                Book Knee Evaluation
              </Button>
            </div>
          </div>
        </section>

        {/* 6. Robotic Total Knee Replacement (TKR) */}
        <section id="robotic-total-knee-replacement" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Precision Resurfacing
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              VELYS™ Robotic Total Knee Replacement (TKR)
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              In a total knee replacement, the worn cartilage surfaces of the thigh bone (femur) and shin bone (tibia) are resurfaced with precision cobalt-chromium or titanium components, cushioned by a high-durability polyethylene insert.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Implant Render (Clean, Unzoomed with object-contain p-4) */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-soft">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/procedures/implant_total_knee.jpg"
                    alt="Precision Total Knee Replacement implant showing femoral component, tibial baseplate, and insert"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-3.5 bg-white border-t border-slate-100 text-center">
                  <p className="text-xs font-semibold text-navy">
                    Complete Kinematic Joint Resurfacing System
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Key Clinical Features */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
                <h3 className="font-heading font-bold text-base text-navy">
                  Subvastus Muscle-Sparing Surgical Approach
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dr. Kasliwal utilizes a muscle-sparing subvastus approach whenever anatomically suitable. By elevating rather than cutting the quadriceps tendon, natural muscle control is retained, resulting in reduced postoperative pain and faster independent leg lifting.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
                <h3 className="font-heading font-bold text-base text-navy">
                  Personalised Kinematic Alignment
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rather than forcing a rigid 90-degree mechanical angle for every patient, VELYS™ robotic assistance maps your unique natural joint line and soft-tissue balance, restoring the natural feel of your knee.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
                <h3 className="font-heading font-bold text-base text-navy">
                  Real-Time Ligament Balancing Across Full Range
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The robotic optical tracking array measures joint tension dynamically through 0° extension to 120° flexion, ensuring stable, balanced knee movement without tight spots or instability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Partial Knee Replacement (UKR) */}
        <section id="partial-knee-replacement" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Bone &amp; Ligament Preservation
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Partial Knee Replacement (Unicompartmental UKR)
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Not every arthritic knee needs a total replacement. When wear is confined to the medial (inner) compartment, replacing only that single damaged compartment preserves the remaining 70% of healthy bone and both crucial cruciate ligaments (ACL and PCL).
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Implant Render (Clean, Unzoomed with object-contain p-4) */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-soft">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/procedures/implant_partial_knee.jpg"
                    alt="Unicompartmental Partial Knee Replacement implant preserving natural ligaments"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-3.5 bg-white border-t border-slate-100 text-center">
                  <p className="text-xs font-semibold text-navy">
                    Unicompartmental Bone-Preserving System
                  </p>
                </div>
              </div>
            </div>

            {/* Right: UKR vs TKR Comparison */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[480px] lg:min-w-0 text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="p-3 sm:p-3.5 font-heading font-semibold">Clinical Feature</th>
                        <th className="p-3 sm:p-3.5 font-heading font-semibold">Partial Knee (UKR)</th>
                        <th className="p-3 sm:p-3.5 font-heading font-semibold">Total Knee (TKR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-navy">Area Replaced</td>
                        <td className="p-3 sm:p-3.5 text-slate-600">Single compartment (medial/lateral)</td>
                        <td className="p-3 sm:p-3.5 text-slate-600">All 3 compartments resurfaced</td>
                      </tr>
                      <tr className="bg-slate-50/60">
                        <td className="p-3 sm:p-3.5 font-semibold text-navy">Ligaments Preserved</td>
                        <td className="p-3 sm:p-3.5 text-clinical-blue font-medium">Both ACL &amp; PCL intact</td>
                        <td className="p-3 sm:p-3.5 text-slate-600">Substituted by implant design</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-navy">Incision Length</td>
                        <td className="p-3 sm:p-3.5 text-slate-600">Smaller (approx. 7–8 cm)</td>
                        <td className="p-3 sm:p-3.5 text-slate-600">Standard (approx. 10–13 cm)</td>
                      </tr>
                      <tr className="bg-slate-50/60">
                        <td className="p-3 sm:p-3.5 font-semibold text-navy">Natural Joint Feel</td>
                        <td className="p-3 sm:p-3.5 text-clinical-blue font-medium">Closer to normal knee proprioception</td>
                        <td className="p-3 sm:p-3.5 text-slate-600">Stable, predictable, pain-free feel</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-navy">Suitability</td>
                        <td className="p-3 sm:p-3.5 text-slate-600">Isolated unicompartmental arthritis</td>
                        <td className="p-3 sm:p-3.5 text-slate-600">Advanced multi-compartment wear</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Recovery Timeline & Indian Lifestyle Considerations */}
        <section id="recovery" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Day-by-Day Rehabilitation
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Recovery Timeline After Knee Replacement
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              With muscle-sparing subvastus techniques and targeted nerve blocks, recovery follows a predictable, structured timeline:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Stage 1 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ice-blue text-clinical-blue mb-3">
                Day 0 – 1
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Standing &amp; First Steps</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Supervised standing and walking with a walker occurs within 24 hours. Early quadriceps isometric sets and ankle pumps begin.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ice-blue text-clinical-blue mb-3">
                Days 2 – 3
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Corridor &amp; Stair Practice</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bed-to-chair independence, knee flexion past 90 degrees, and step/stair training with our physiotherapy team before discharge.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ice-blue text-clinical-blue mb-3">
                Weeks 2 – 3
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Wound Review &amp; Stick Walking</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Surgical dressing review; transition from walker to single walking stick. Independent home mobility for basic routines.
              </p>
            </div>

            {/* Stage 4 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ice-blue text-clinical-blue mb-3">
                Weeks 4 – 6
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Independent Walking</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Most patients walk comfortably without any assistive stick. Resumption of light household activities and outdoor walks.
              </p>
            </div>

            {/* Stage 5 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ice-blue text-clinical-blue mb-3">
                Week 6 Onwards
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Driving &amp; Office Work</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Return to desk work, domestic travel, and driving (once emergency brake reaction time is safe and approved by surgeon).
              </p>
            </div>

            {/* Stage 6 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ice-blue text-clinical-blue mb-3">
                Months 3 – 12
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Full Strength &amp; Endurance</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Continued gains in quadriceps endurance, stair climbing ease, and natural joint feeling as residual deep tissue swelling subsides.
              </p>
            </div>
          </div>

          {/* Indian Lifestyle Note */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
              Indian Lifestyle &amp; Home Setup Guidance
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Standard chair seating, dining table usage, and stair navigation are fully resumed. While high-flexion implants technically allow cross-legged sitting for some patients, deep squatting and using ground-level Indian toilets exert extreme peak forces across prosthetic components. A Western raised commode seat and chair seating are strongly advised to maximize the 15–20+ year lifespan of your implant.
            </p>
          </div>
        </section>

        {/* 9. Safety, Risks & Complications */}
        <section id="risks" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Transparent Medical Care
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Surgical Safety &amp; Risk Mitigation
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Knee replacement is one of modern medicine&apos;s most successful operations. We manage and mitigate known surgical risks through strict clinical protocols:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <h3 className="font-heading font-bold text-base text-navy">
                Infection Prevention Protocols
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Surgeries are performed inside ultra-clean modular operating theatres equipped with laminar airflow and HEPA filtration. Patients receive weight-adjusted preoperative antibiotic prophylaxis adhering strictly to ICMR orthopaedic safety standards.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <h3 className="font-heading font-bold text-base text-navy">
                Blood Clot (DVT) Prevention
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deep vein thrombosis risks are minimized with multimodal thromboprophylaxis: immediate Day 1 mobilisation, intermittent pneumatic calf compression pumps, and prophylactic blood-thinning medications.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <h3 className="font-heading font-bold text-base text-navy">
                Joint Stiffness &amp; Scar Management
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Early active-assisted knee flexion within 24 hours prevents arthrofibrosis. Personalized physiotherapy protocols guide patients to achieve 110° to 125° comfortable bending.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <h3 className="font-heading font-bold text-base text-navy">
                Implant Longevity &amp; Wear Resistance
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sub-millimeter robotic bone preparation and kinematic ligament balance ensure that joint load is evenly distributed across bearing surfaces, preventing premature edge-loading and polyethylene wear.
              </p>
            </div>
          </div>
        </section>

        {/* 10. Cost & Cashless Insurance */}
        <section id="cost-and-insurance" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Financial Transparency
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Knee Replacement Cost &amp; Cashless Insurance in Nashik
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Every surgical estimate is provided in writing following your clinical consultation and standing X-ray review. The total cost is determined by four clinical factors:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="text-xs font-bold uppercase text-clinical-blue">Factor 01</span>
              <h3 className="mt-1 font-heading font-bold text-base text-navy">Procedure Type</h3>
              <p className="mt-1.5 text-xs text-slate-600">
                Single knee vs bilateral same-day; partial (UKR) vs total robotic replacement.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="text-xs font-bold uppercase text-clinical-blue">Factor 02</span>
              <h3 className="mt-1 font-heading font-bold text-base text-navy">Implant System</h3>
              <p className="mt-1.5 text-xs text-slate-600">
                Implant design, bearing surface specifications, and constraint requirements.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="text-xs font-bold uppercase text-clinical-blue">Factor 03</span>
              <h3 className="mt-1 font-heading font-bold text-base text-navy">Room Category</h3>
              <p className="mt-1.5 text-xs text-slate-600">
                Choice of general healthcare ward, semi-private room, or private deluxe suite.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="text-xs font-bold uppercase text-clinical-blue">Factor 04</span>
              <h3 className="mt-1 font-heading font-bold text-base text-navy">Stay Duration</h3>
              <p className="mt-1.5 text-xs text-slate-600">
                Standard 3–4 day stay or extended medical observation for co-morbid conditions.
              </p>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                Cashless Mediclaim Desk &amp; TPA Empanelment
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl">
                Our in-house insurance desk manages pre-authorization and claims with all major public and private health insurance companies. We help verify your coverage, policy waiting periods, and room eligibility prior to admission.
              </p>
            </div>
            <Button href={WHATSAPP_URL} variant="navy" size="sm" arrow className="shrink-0">
              Check Insurance Coverage
            </Button>
          </div>
        </section>

        {/* 11. Frequently Asked Questions */}
        <section id="faqs" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Patient Guidance
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Frequently Asked Questions About Knee Care
            </h2>
          </div>

          <div className="mt-6">
            <FAQ items={kneeFaqs} />
          </div>
        </section>

        {/* 12. Closing CTA */}
        <section id="book" className="scroll-mt-28">
          <CTA
            title="Considering Knee Replacement or Arthritis Care?"
            description="Schedule an in-person assessment with Dr. Vishal Kasliwal to evaluate your knee joints, review your standing X-rays, and understand your personalized treatment ladder."
          />
        </section>

        {/* Medical Review Box */}
        <MedicalReviewBox lastUpdated="October 2026" />
      </Container>
    </div>
  );
}
