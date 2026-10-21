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
  title: "Hip Replacement in Nashik | AVN & Hip Arthritis | Dr. Vishal Kasliwal",
  description:
    "Comprehensive hip care in Nashik: Hip vs back pain assessment, AVN staging & joint preservation, ceramic total hip replacement (THR), elderly fracture care, recovery, and transparent costs by Dr. Vishal Kasliwal.",
  keywords: [
    "hip replacement Nashik",
    "hip replacement surgeon Nashik",
    "AVN hip treatment Nashik",
    "robotic hip replacement Nashik",
    "hip arthritis treatment",
    "avascular necrosis of hip",
    "hip fracture surgery elderly Nashik",
    "hip specialist Nashik",
    "hip replacement cost Nashik",
    "total hip replacement THR Nashik",
  ],
  alternates: {
    canonical: "https://kasliwaljointinstitute.com/hip",
  },
};

const hipFaqs: FAQItem[] = [
  {
    id: "hip-lifespan",
    question: "How long does a modern total hip replacement last?",
    answer:
      "Modern total hip replacements with fourth-generation ceramic heads and highly crosslinked polyethylene liners routinely function well for 15 to 20+ years. Maintaining a healthy body weight and avoiding high-impact joint trauma maximizes prosthetic longevity.",
  },
  {
    id: "young-avn-hip-replacement",
    question: "Can young patients with AVN have a hip replacement?",
    answer:
      "Yes, when the joint has structurally collapsed (Ficat-Arlet Stage 3 or 4) causing persistent pain and restricted mobility. In early stages (Stage 1 or 2 before femoral head collapse), hip-preserving treatments such as core decompression with BMAC are prioritized to save your natural joint.",
  },
  {
    id: "when-walk-hip",
    question: "When can I walk after hip replacement surgery?",
    answer:
      "Supervised standing and walking with a walker begins within 24 hours of surgery under the guidance of our dedicated physiotherapy team. Most patients transition to a single walking stick within 2 to 3 weeks and achieve independent walking by 4 to 6 weeks.",
  },
  {
    id: "leg-length-same",
    question: "Will my legs be the exact same length?",
    answer:
      "Leg length is meticulously planned during pre-operative digital templating and confirmed with intraoperative anatomical landmark measurements. Any initial sensation of difference usually resolves as pelvic tilt normalizes during rehabilitation.",
  },
  {
    id: "floor-sitting-hip",
    question: "Can I sit on the floor or cross-legged after hip replacement?",
    answer:
      "Modern hip replacements with larger diameter ceramic heads (32mm or 36mm) provide exceptional joint stability. However, deep floor squatting and sitting cross-legged (Sukhasana) should be discussed specifically with Dr. Kasliwal based on your surgical approach and muscle recovery.",
  },
  {
    id: "hip-pain-cause",
    question: "Is hip pain always caused by arthritis?",
    answer:
      "No. Many patients presenting with 'hip' discomfort actually have referred pain from the lumbar spine (such as sciatica or disc herniation), trochanteric bursitis, adductor tendonitis, or early avascular necrosis (AVN). A clinical physical examination and pelvic X-ray clearly establish the true anatomical cause.",
  },
  {
    id: "cemented-vs-uncemented",
    question: "What is the difference between cemented and uncemented hip replacement?",
    answer:
      "In uncemented hip replacements (preferred for active patients and younger adults), implants have a textured porous titanium coating that allows natural bone to integrate directly into the prosthesis. Cemented fixation uses acrylic bone cement to immediately secure components for elderly patients with osteoporotic bone.",
  },
  {
    id: "hip-precautions-dislocation",
    question: "What precautions are necessary to prevent hip dislocation?",
    answer:
      "During the initial 6 to 8 weeks while the capsule and surrounding muscles heal, patients are advised to avoid bending the hip past 90 degrees (such as sitting in low, deep couches), crossing legs at the knees, or sharply twisting the foot inwards. Using high-seated chairs and a raised commode seat helps ensure safe recovery.",
  },
  {
    id: "insurance-coverage-hip",
    question: "Does health insurance cover hip replacement and AVN treatment in Nashik?",
    answer:
      "Yes. Major health insurance policies and corporate TPAs approve total hip replacement for end-stage arthritis or AVN, as well as core decompression procedures under standard orthopaedic hospitalisation benefits. Our cashless insurance desk assists with pre-authorisation and documentation.",
  },
];

export default function HipPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section (Full Viewport Screen-Fit) */}
      <section className="bg-navy text-white min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-8 lg:py-12">
        <Container>
          <Breadcrumbs
            items={[{ label: "Hip Treatment" }]}
            tone="dark"
            className="mb-3 sm:mb-4"
          />

          <div className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Clinical Title & Actions */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-light">
                Specialist Hip Clinic · Nashik
              </span>

              <h1 className="mt-2 font-heading text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-tight">
                Hip Treatment &amp; Hip Replacement in Nashik
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                Specialised clinical diagnosis and surgical care for hip pain, degenerative arthritis, and avascular necrosis (AVN)—from joint-preserving core decompression to precision ceramic total hip replacement. Evaluated and operated by Dr. Vishal Kasliwal at Kasliwal Joint Institute.
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
                <span className="font-semibold text-white">Dr. Vishal Kasliwal</span> · M.S. Orthopaedics · Fellowship-trained in Joint Replacement &amp; Arthroscopy · Reg. No. MMC/2005/02/1098
              </div>
            </div>

            {/* Right Column: Clean Surgical Photograph */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-dark shadow-lift max-w-[460px] mx-auto lg:max-w-none">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/procedures/card_hip_care.jpg"
                    alt="Surgical hip replacement instrumentation and anatomical model in operating theatre at Kasliwal Joint Institute"
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
        {/* 2. Common Hip Conditions We Treat */}
        <section id="hip-conditions" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Clinical Conditions
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Common Hip Problems We Treat
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Hip symptoms vary widely depending on the anatomical origin. Accurate clinical assessment with specialized standing pelvic imaging ensures targeted, conservative-first management.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* 1. Hip Osteoarthritis */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">Hip Osteoarthritis</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Cartilage wear in the ball-and-socket joint causing groin stiffness, restricted bending, and limping during daily walking.
                </p>
              </div>
              <a href="#hip-arthritis" className="mt-4 text-sm font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1">
                <span>Explore arthritis options</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* 2. AVN of the Hip */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">Avascular Necrosis (AVN)</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Compromised micro-circulation to the femoral head ball, leading to bone ischemia, subchondral collapse, and severe pain.
                </p>
              </div>
              <a href="#avn-hip" className="mt-4 text-sm font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1">
                <span>AVN staging &amp; treatment</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* 3. Hip Dysplasia & Labral Tears */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">Labral Tears &amp; FAI</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Cartilage rim tears and bone impingement causing sharp groin catching, pinching, and discomfort during hip rotation.
                </p>
              </div>
              <a href="#hip-replacement" className="mt-4 text-sm font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1">
                <span>Joint preservation &amp; care</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* 4. Ankylosing Spondylitis */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">Inflammatory Arthritis (AS)</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Systemic spondyloarthritis in younger adults causing progressive pelvic joint stiffness, fusion risk, and fixed flexion contractures.
                </p>
              </div>
              <a href="#hip-arthritis" className="mt-4 text-sm font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1">
                <span>Medical &amp; surgical options</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* 5. Elderly Hip Fractures */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">Elderly Hip Fractures</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Neck of femur and intertrochanteric fractures requiring prompt emergency surgical fixation or bipolar hemiarthroplasty.
                </p>
              </div>
              <a href="#hip-fracture" className="mt-4 text-sm font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1">
                <span>Emergency fracture care</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* 6. Painful / Loose Hip Replacement */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">Failing or Loose Hip Implant</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Persistent pain, clicking, or loosening from previous surgery requiring specialist revision assessment.
                </p>
              </div>
              <Link href="/robotic-joint-replacement#revision-joint-replacement" className="mt-4 text-sm font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1">
                <span>Revision hip assessment</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Is It Your Hip or Your Back? */}
        <section id="hip-pain" className="scroll-mt-24 border-t border-slate-200/80 pt-10 sm:pt-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Differential Diagnosis
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Is the Pain from Your Hip or Your Back?
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Differentiating true hip joint pathology from referred lumbar spine pain (sciatica) is essential for targeted, effective treatment.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual 3D Anatomical Comparison */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src="/images/procedures/hip_vs_spine_3d_anatomy.jpg"
                    alt="Realistic 3D medical anatomical comparison showing hip joint ball-and-socket pain on left versus lumbar spine disc and sciatic nerve pain on right"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-700">
                  <span className="font-semibold text-rose-700 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                    Left: Hip Joint (Groin &amp; Thigh)
                  </span>
                  <span className="font-semibold text-amber-700 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                    Right: Spine &amp; Sciatica (Back &amp; Leg)
                  </span>
                </div>
              </div>
            </div>

            {/* Structured Comparison Table with Integrated Action */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[440px] sm:min-w-0 text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="py-2.5 px-3.5 font-heading font-semibold w-28 sm:w-32">Indicator</th>
                        <th className="py-2.5 px-3.5 font-heading font-semibold text-clinical-blue-light">True Hip Joint</th>
                        <th className="py-2.5 px-3.5 font-heading font-semibold text-amber-300">Lumbar Spine / Sciatica</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-2.5 px-3.5 font-semibold text-navy">Pain Location</td>
                        <td className="py-2.5 px-3.5 text-slate-700">Groin crease, front thigh, inner knee</td>
                        <td className="py-2.5 px-3.5 text-slate-700">Lower back, buttock, back of calf &amp; foot</td>
                      </tr>
                      <tr className="bg-slate-50/60">
                        <td className="py-2.5 px-3.5 font-semibold text-navy">Pain Nature</td>
                        <td className="py-2.5 px-3.5 text-slate-700">Deep mechanical ache, stiffness, limp</td>
                        <td className="py-2.5 px-3.5 text-slate-700">Electric shooting, burning, numbness</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-semibold text-navy">Aggravated By</td>
                        <td className="py-2.5 px-3.5 text-slate-700">Walking, pivoting, car transfers</td>
                        <td className="py-2.5 px-3.5 text-slate-700">Prolonged sitting, coughing, forward bend</td>
                      </tr>
                      <tr className="bg-slate-50/60">
                        <td className="py-2.5 px-3.5 font-semibold text-navy">Key Daily Sign</td>
                        <td className="py-2.5 px-3.5 text-slate-700">Trouble clipping toenails or wearing socks</td>
                        <td className="py-2.5 px-3.5 text-slate-700">Pain shooting past knee into calf</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-semibold text-navy">Clinical Test</td>
                        <td className="py-2.5 px-3.5 text-slate-700">Positive FABER &amp; FADIR hip stress tests</td>
                        <td className="py-2.5 px-3.5 text-slate-700">Positive straight-leg raise (SLR) test</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 text-xs sm:text-sm">
                  <span className="text-slate-600 font-medium">Pelvic X-rays &amp; FABER testing confirm the exact source</span>
                  <Link href="/book-appointment" className="font-semibold text-clinical-blue hover:text-navy inline-flex items-center gap-1 shrink-0">
                    <span>Book Hip Exam</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Hip Arthritis Treatment */}
        <section id="hip-arthritis" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Degenerative Joint Disease
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Hip Arthritis Treatment in Nashik
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Hip arthritis is progressive wear of the smooth cartilage lining the ball-and-socket joint. We prioritize evidence-based conservative management to preserve your natural joint whenever possible.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Warning Signs Card */}
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-soft flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  Key Symptoms &amp; Warning Signs
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Deep groin or outer thigh pain aggravated by daily walking and weight-bearing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Stiffness making it difficult to put on socks, tie shoelaces, or clip toenails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>A noticeable limp or sensation that one leg is becoming structurally shorter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Severe restriction in sitting cross-legged or getting down to the floor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Rest pain or nocturnal throbbing that disturbs sleep quality</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Conservative Non-Surgical Ladder */}
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-soft flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-clinical-blue"></span>
                  Conservative Management Ladder First
                </h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <strong className="text-navy block">Physiotherapy:</strong>
                    <span>Gluteus medius and core abductor muscle strengthening to stabilize the pelvis.</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <strong className="text-navy block">Weight Optimization:</strong>
                    <span>Relieving 3–5 kg of cumulative joint stress for each kilogram of body weight reduced.</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <strong className="text-navy block">Activity Pacing:</strong>
                    <span>Transitioning to low-impact swimming and cycling; using a walking stick.</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <strong className="text-navy block">Targeted Injections:</strong>
                    <span>Ultrasound-guided anti-inflammatory joint therapy for non-surgical relief.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Self-Assessment Decision Checklist */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 shadow-soft">
            <h3 className="font-heading font-bold text-base sm:text-lg text-navy mb-2">
              Do You Need a Hip Replacement? Self-Assessment Checklist
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Surgery is considered when arthritis pain severely limits daily life and non-surgical treatments stop working:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                <span className="shrink-0 w-6 h-6 rounded-md bg-clinical-blue/10 text-clinical-blue flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                <span className="text-sm text-slate-700 font-medium">Severe groin or thigh pain that restricts daily independent walking.</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                <span className="shrink-0 w-6 h-6 rounded-md bg-clinical-blue/10 text-clinical-blue flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                <span className="text-sm text-slate-700 font-medium">Inability to put on shoes, tie laces, or clip toenails without help.</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                <span className="shrink-0 w-6 h-6 rounded-md bg-clinical-blue/10 text-clinical-blue flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                <span className="text-sm text-slate-700 font-medium">Hip joint stiffness that limits getting in and out of a car or sofa.</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                <span className="shrink-0 w-6 h-6 rounded-md bg-clinical-blue/10 text-clinical-blue flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                <span className="text-sm text-slate-700 font-medium">Rest or night pain that awakens you from sleep.</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                <span className="shrink-0 w-6 h-6 rounded-md bg-clinical-blue/10 text-clinical-blue flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                <span className="text-sm text-slate-700 font-medium">A progressive limp or sensation that one leg is becoming shorter.</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                <span className="shrink-0 w-6 h-6 rounded-md bg-clinical-blue/10 text-clinical-blue flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                <span className="text-sm text-slate-700 font-medium">Exercises, medications, and joint injections no longer provide relief.</span>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-sm text-slate-600">
                If you answered <strong>yes</strong> to 3 or more indicators, an objective surgical consultation is recommended.
              </p>
              <Button href="/book-appointment" variant="navy" size="sm" arrow className="shrink-0">
                Book Knee &amp; Hip Evaluation
              </Button>
            </div>
          </div>
        </section>

        {/* 5. AVN (Avascular Necrosis) of the Hip */}
        <section id="avn-hip" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Joint Preservation &amp; Staging
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              AVN (Avascular Necrosis) of the Hip: Treatment in Nashik
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Avascular necrosis (osteonecrosis) occurs when micro-circulation to the femoral head (ball) is compromised. Deprived of oxygenated blood, the bone tissue weakens and can collapse under daily body weight. Early detection via MRI is critical while the ball remains spherical and joint preservation is still possible.
            </p>
          </div>

          {/* Risk Factors Cards */}
          <div className="mt-6 rounded-2xl bg-slate-50 p-6 border border-slate-200 shadow-soft">
            <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
              Common Causes &amp; Risk Factors for Hip AVN
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm text-slate-700">
              <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                <span className="font-bold text-navy block">Corticosteroid Use</span>
                <span className="text-slate-600 text-xs sm:text-sm">Prior high-dose or prolonged steroid medication.</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                <span className="font-bold text-navy block">Alcohol Exposure</span>
                <span className="text-slate-600 text-xs sm:text-sm">Chronic alcohol intake altering lipid metabolism and micro-vessel flow.</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                <span className="font-bold text-navy block">Trauma &amp; Dislocation</span>
                <span className="text-slate-600 text-xs sm:text-sm">Previous fracture of the femoral neck or hip dislocation.</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                <span className="font-bold text-navy block">Blood Disorders</span>
                <span className="text-slate-600 text-xs sm:text-sm">Sickle cell disease, clotting disorders, or idiopathic cases.</span>
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-slate-500">
              <strong>Early Diagnostic Rule:</strong> Standard X-rays can appear normal in early AVN. An MRI scan of both hips is the gold standard for early detection when joint-preserving surgery is still achievable.
            </p>
          </div>

          {/* AVN Stages: Image & Clinical Progression */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Generated AVN Stages Medical Diagram */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <div className="relative aspect-[16/9] w-full bg-slate-100">
                  <Image
                    src="/images/procedures/avn_stages_comparison.jpg"
                    alt="Scientific medical illustration showing 3 stages of AVN: healthy femoral head blood supply, early ischemic necrosis, and advanced subchondral bone collapse"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3.5 bg-slate-50 border-t border-slate-100 text-center">
                  <p className="text-xs sm:text-sm font-semibold text-navy">
                    AVN Progression: Normal Blood Supply → Ischemia → Subchondral Collapse
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Stage-by-Stage Staging Table */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px] lg:min-w-0 text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="p-3.5 font-heading font-semibold w-32">Stage</th>
                        <th className="p-3.5 font-heading font-semibold">Anatomical Condition</th>
                        <th className="p-3.5 font-heading font-semibold">Treatment Options</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3.5 font-semibold text-navy">
                          Stage 1–2<br />
                          <span className="text-xs font-normal text-clinical-blue">Pre-Collapse</span>
                        </td>
                        <td className="p-3.5 text-slate-600">
                          Ischemia on MRI, but the femoral head retains its spherical round contour.
                        </td>
                        <td className="p-3.5 text-slate-700">
                          <strong className="text-clinical-blue">Joint Preservation:</strong> Core decompression &amp; BMAC stem cell augmentation.
                        </td>
                      </tr>
                      <tr className="bg-slate-50/60">
                        <td className="p-3.5 font-semibold text-navy">
                          Stage 3<br />
                          <span className="text-xs font-normal text-amber-600">Crescent Sign</span>
                        </td>
                        <td className="p-3.5 text-slate-600">
                          Subchondral bone fracture occurs; the femoral ball begins to flatten and lose sphericity.
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Preservation is less predictable; replacement is considered based on symptoms and activity.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-semibold text-navy">
                          Stage 4<br />
                          <span className="text-xs font-normal text-slate-500">Joint Collapse</span>
                        </td>
                        <td className="p-3.5 text-slate-600">
                          Total collapse of the femoral head with acetabular socket erosion and severe joint destruction.
                        </td>
                        <td className="p-3.5 text-slate-700">
                          <strong className="text-navy">Total Hip Replacement (THR):</strong> Reliably restores pain-free movement and equalizes leg length.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Total Hip Replacement (THR) */}
        <section id="hip-replacement" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Precision Reconstructive Surgery
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Total Hip Replacement in Nashik
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              In a total hip replacement (THR), the arthritic femoral ball is replaced with a highly polished ceramic or metal head mounted on a titanium stem. The worn acetabular socket is lined with a biocompatible titanium shell and an ultra-durable crosslinked polyethylene or ceramic insert.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Unzoomed Hip Implant Render */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-soft">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/procedures/implant_total_hip.jpg"
                    alt="Precision uncemented total hip replacement prosthesis featuring titanium stem, ceramic head, and acetabular shell"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-3.5 bg-white border-t border-slate-100 text-center">
                  <p className="text-xs sm:text-sm font-semibold text-navy">
                    Uncemented Biological Ingrowth Total Hip Prosthesis
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Modern Surgical Principles */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  Digital Templating &amp; Leg Length Equalization
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  Careful pre-operative digital planning determines the exact femoral stem offset, cup inclination angle (within the Lewinnek safe zone), and neck length to restore balanced leg lengths and stable soft-tissue tension.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  Ceramic Bearings for Maximum Longevity
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  We utilize Delta ceramic femoral heads paired with highly crosslinked polyethylene or ceramic liners. These advanced bearing surfaces have microscopic wear rates, providing 15 to 20+ years of durability for active adults.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  Tissue-Preserving Capsular Repair
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  Muscle-sparing surgical approaches with complete anatomical capsular reconstruction and external rotator repair minimize blood loss and virtually eliminate dislocation risk.
                </p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Surgical Journey */}
          <div className="mt-8">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-navy mb-4">
              Step-by-Step Hip Replacement Journey
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-soft">
                <span className="text-xs font-bold text-clinical-blue uppercase">Step 01</span>
                <h4 className="font-heading font-bold text-base text-navy mt-1">Pre-op Templating &amp; Fitness</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Cardiac, anaesthetic, and blood optimization with pelvic digital scanogram measurement.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-soft">
                <span className="text-xs font-bold text-clinical-blue uppercase">Step 02</span>
                <h4 className="font-heading font-bold text-base text-navy mt-1">Targeted Spinal Anaesthesia</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Conducted under modern regional spinal anaesthesia with multimodal pain control for rapid awake recovery.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-soft">
                <span className="text-xs font-bold text-clinical-blue uppercase">Step 03</span>
                <h4 className="font-heading font-bold text-base text-navy mt-1">Surgical Procedure (1.5–2 Hrs)</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Accurate cup reaming, stem insertion, trialing for full range of motion, and secure anatomical soft-tissue repair.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-soft">
                <span className="text-xs font-bold text-clinical-blue uppercase">Step 04</span>
                <h4 className="font-heading font-bold text-base text-navy mt-1">Day 1 Supported Walking</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Guided mobilization with a walker begins within 24 hours under our physiotherapy team to stimulate circulation.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-soft">
                <span className="text-xs font-bold text-clinical-blue uppercase">Step 05</span>
                <h4 className="font-heading font-bold text-base text-navy mt-1">Stair &amp; Transfer Training</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Mastering chair transfers, bathroom independence, and stair navigation prior to hospital discharge.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-soft">
                <span className="text-xs font-bold text-clinical-blue uppercase">Step 06</span>
                <h4 className="font-heading font-bold text-base text-navy mt-1">Safe Home Discharge</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Discharge home occurs within 2 to 3 days with complete wound care guidance and home exercise protocol.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Recovery Timeline & Precautions */}
        <section id="recovery" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Rehabilitation Milestones
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Recovery Timeline After Hip Replacement
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Because hip replacement relieves bone-on-bone pain immediately, rehabilitation progresses swiftly following a structured timeline:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Stage 1 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-ice-blue text-clinical-blue mb-3">
                Day 0 – 1
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Standing &amp; First Steps</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Supported standing and short corridor walking with a walker. Gentle ankle pumps and isometric gluteal contractions begin.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-ice-blue text-clinical-blue mb-3">
                Days 2 – 3
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Independence &amp; Stairs</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Bed-to-chair transfers, independent toilet visits using a raised commode, and step climbing practice with our physiotherapy team.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-ice-blue text-clinical-blue mb-3">
                Weeks 2 – 3
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Stick Walking &amp; Dressing Review</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Follow-up wound check; transition from walker to a single walking stick. Independent walking around the house.
              </p>
            </div>

            {/* Stage 4 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-ice-blue text-clinical-blue mb-3">
                Weeks 4 – 6
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Independent Walking</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Most patients discontinue the walking stick and walk smoothly without a limp. Resumption of outdoor walks and light routines.
              </p>
            </div>

            {/* Stage 5 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-ice-blue text-clinical-blue mb-3">
                Week 6 Onwards
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Driving &amp; Office Work</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Return to work, driving (once verified by clinical review), and domestic travel as hip precautions are gradually relaxed.
              </p>
            </div>

            {/* Stage 6 */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-ice-blue text-clinical-blue mb-3">
                Months 3 – 12
              </span>
              <h3 className="font-heading font-bold text-base text-navy">Full Active Life</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Full return to swimming, brisk walking, golf, travel, and active routine with durable, pain-free hip mechanics.
              </p>
            </div>
          </div>

          {/* Safe Living & Dislocation Precautions Guide */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
              Early Dislocation Precautions &amp; Indian Home Setup
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm text-slate-600">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong className="text-navy block">The 90-Degree Rule:</strong>
                <span>Avoid flexing the hip joint past 90 degrees during the initial 6 weeks (avoid very low bucket seats and bending forward to the floor).</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong className="text-navy block">Raised Commode Seat:</strong>
                <span>Use an elevated toilet seat attachment at home to prevent deep hip flexion during early healing.</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong className="text-navy block">Floor Sitting Guidance:</strong>
                <span>While large-head ceramic implants provide excellent motion, deep floor squatting and prolonged cross-legged sitting should be cleared with Dr. Kasliwal first.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Risks & Complications */}
        <section id="risks" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Patient Safety &amp; Ethics
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Surgical Safety &amp; Risk Mitigation
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Total hip replacement is an established and predictable surgery. We discuss potential risks openly and follow rigorous clinical protocols to minimize them:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <h3 className="font-heading font-bold text-base text-navy">
                Infection Control in Modular OTs
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Surgeries are performed in positive-pressure laminar airflow operating theatres with HEPA filtration, strict sterile draping, and protocolized prophylactic antibiotics adhering to ICMR orthopaedic guidelines.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <h3 className="font-heading font-bold text-base text-navy">
                Blood Clot (DVT) Prevention
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Deep vein thrombosis risks are mitigated with early Day 1 walking, graduated compression stockings, pneumatic calf pumps during bed rest, and supervised blood-thinning medications.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <h3 className="font-heading font-bold text-base text-navy">
                Dislocation Prevention Protocols
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Using larger-diameter 32mm/36mm ceramic heads, accurate cup orientation, and anatomical posterior capsule/rotator repair significantly reduces dislocation risks to under 0.5%.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <h3 className="font-heading font-bold text-base text-navy">
                Leg Length Accuracy
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Pre-operative scanograms and intraoperative caliper measurements are cross-checked before final component seating to restore balanced limb lengths and pelvic alignment.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Elderly Hip Fracture Care */}
        <section id="hip-fracture" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50/50 p-6 sm:p-8 text-slate-800 shadow-soft">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Geriatric Orthopaedic Emergency
            </span>
            <h2 className="mt-1 font-heading text-xl sm:text-2xl font-bold text-navy">
              Hip Fracture in the Elderly: Time-Sensitive Care in Nashik
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
              A domestic slip or fall in an elderly family member resulting in a broken hip (femoral neck or intertrochanteric fracture) is a medical emergency. Prolonged bed rest in older adults rapidly triggers complications like chest infections, bed sores, and blood clots.
            </p>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
              Prompt surgical intervention—ideally within <strong>24 to 48 hours</strong>—allows early pain-free sitting and mobilization:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm text-slate-800">
              <div className="p-3.5 bg-white/80 rounded-xl border border-amber-200">
                <strong className="block text-navy mb-1">Internal Fixation</strong>
                <span className="text-slate-600">Screws or cephalomedullary nail for stable trochanteric fractures.</span>
              </div>
              <div className="p-3.5 bg-white/80 rounded-xl border border-amber-200">
                <strong className="block text-navy mb-1">Bipolar Hemiarthroplasty</strong>
                <span className="text-slate-600">Replacing the ball while preserving the socket for neck of femur fractures.</span>
              </div>
              <div className="p-3.5 bg-white/80 rounded-xl border border-amber-200">
                <strong className="block text-navy mb-1">Total Hip Replacement</strong>
                <span className="text-slate-600">Recommended for active seniors with pre-existing arthritis.</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={`tel:${PHONE_TEL}`} variant="navy" size="sm">
                Emergency Call: {PHONE_DISPLAY}
              </Button>
              <Link href="/arthroscopy#fracture-and-trauma-care" className="inline-flex items-center text-sm font-semibold text-clinical-blue hover:text-navy">
                <span>View Full Trauma &amp; Fracture Protocols</span>
                <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 10. Revision Hip Surgery Callout */}
        <section id="revision" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
                Specialist Revision Service
              </span>
              <h3 className="mt-1 font-heading font-bold text-xl sm:text-2xl text-navy">
                Painful, Loose, or Dislocating Hip Replacement?
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                If you had a hip replacement elsewhere that has developed persistent groin pain, clicking, loosening from bone, or recurrent dislocation, specialist revision assessment is available. We manage bone loss, component exchange, and dual-mobility stability solutions.
              </p>
            </div>
            <Button href="/robotic-joint-replacement#revision-joint-replacement" variant="navy" size="sm" arrow className="shrink-0">
              Revision Hip Details
            </Button>
          </div>
        </section>

        {/* 11. Cost & Cashless Insurance */}
        <section id="cost-and-insurance" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Financial Transparency
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Hip Replacement Cost &amp; Cashless Insurance in Nashik
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Every surgical estimate is provided transparently in writing following your clinical consultation and pelvic X-ray review. The total cost is determined by four clinical factors:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="text-xs font-bold uppercase text-clinical-blue">Factor 01</span>
              <h3 className="mt-1 font-heading font-bold text-base text-navy">Procedure Type</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Core decompression vs total hip replacement (THR) vs bipolar hemiarthroplasty.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="text-xs font-bold uppercase text-clinical-blue">Factor 02</span>
              <h3 className="mt-1 font-heading font-bold text-base text-navy">Bearing Surfaces</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Choice of Delta ceramic-on-polyethylene vs ceramic-on-ceramic bearings.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="text-xs font-bold uppercase text-clinical-blue">Factor 03</span>
              <h3 className="mt-1 font-heading font-bold text-base text-navy">Room Category</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Choice of general healthcare ward, semi-private room, or private deluxe suite.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-soft">
              <span className="text-xs font-bold uppercase text-clinical-blue">Factor 04</span>
              <h3 className="mt-1 font-heading font-bold text-base text-navy">Stay Duration</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Standard 2–3 day hospital stay or extended medical observation for co-morbidities.
              </p>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                Cashless Mediclaim Desk &amp; TPA Empanelment
              </h3>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                Our in-house insurance desk manages pre-authorization and documentation with all major public and private health insurance companies. We help verify your hip procedure coverage, waiting periods, and room category eligibility prior to admission.
              </p>
            </div>
            <Button href={WHATSAPP_URL} variant="navy" size="sm" arrow className="shrink-0">
              Check Insurance Coverage
            </Button>
          </div>
        </section>

        {/* 12. Frequently Asked Questions */}
        <section id="faqs" className="scroll-mt-28 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Patient Guidance
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Frequently Asked Questions About Hip Care
            </h2>
          </div>

          <div className="mt-6">
            <FAQ items={hipFaqs} />
          </div>
        </section>

        {/* 13. Closing CTA */}
        <section id="book" className="scroll-mt-28">
          <CTA
            title="Hip pain, stiffness or difficulty walking?"
            description="Book an assessment with Dr. Vishal Kasliwal to diagnose the cause of your hip problem, evaluate your X-rays or MRI, and discuss the right treatment path."
          />
        </section>

        {/* Medical Review Box */}
        <MedicalReviewBox lastUpdated="October 2026" />
      </Container>
    </div>
  );
}
