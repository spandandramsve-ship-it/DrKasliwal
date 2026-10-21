import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FAQ from "@/components/shared/FAQ";
import CTA from "@/components/shared/CTA";
import MedicalReviewBox from "@/components/shared/MedicalReviewBox";
import Button from "@/components/ui/Button";
import { PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/constants";
import { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "Arthroscopy in Nashik | ACL, Meniscus & Shoulder Surgery | Dr. Vishal Kasliwal",
  description:
    "Keyhole surgery in Nashik for ACL tears, meniscus tears, PCL and cartilage injuries, kneecap instability, rotator cuff and shoulder dislocation, plus 24/7 fracture and trauma care.",
  keywords: [
    "knee arthroscopy Nashik",
    "ACL surgery Nashik",
    "shoulder arthroscopy Nashik",
    "ACL reconstruction Nashik",
    "meniscus tear treatment Nashik",
    "rotator cuff repair Nashik",
    "shoulder dislocation surgery",
    "sports injury doctor Nashik",
    "fracture treatment Nashik",
  ],
  alternates: {
    canonical: "https://kasliwaljointinstitute.com/arthroscopy",
  },
};

const arthroscopyFaqs: FAQItem[] = [
  {
    id: "major-operation",
    question: "Is arthroscopy considered a major operation?",
    answer:
      "Arthroscopy is performed through tiny 4 to 5 mm keyhole incisions rather than open surgery, significantly reducing blood loss, infection risk, and muscle damage. However, it is still formal surgery under anaesthesia. The recovery timeline depends on whether tissue is trimmed or biologically repaired and reconstructed.",
  },
  {
    id: "hospital-stay-arthroscopy",
    question: "How long is the hospital stay for arthroscopic surgery?",
    answer:
      "Most diagnostic arthroscopies and partial meniscectomies are performed as day-care procedures, allowing patients to return home the same evening. Complex ACL reconstructions and rotator cuff repairs typically involve an overnight observation stay of 24 hours.",
  },
  {
    id: "return-sport-acl",
    question: "When can an athlete safely return to sport after ACL reconstruction?",
    answer:
      "Return to non-contact jogging begins around 3 to 4 months. Clearance for competitive cutting, pivoting, and contact sports (cricket, football, badminton, kabaddi) requires at least 9 months and is determined by passing objective limb symmetry strength and agility tests, not calendar time alone.",
  },
  {
    id: "meniscus-heal-alone",
    question: "Can a torn meniscus heal without surgical treatment?",
    answer:
      "Small, stable tears located in the outer 'red zone' (which has a rich blood supply) can often heal with protected rest and targeted physiotherapy. However, tears in the inner avascular 'white zone' or displaced tears causing mechanical knee locking, clicking, and joint swelling require arthroscopic repair or trimming.",
  },
  {
    id: "shoulder-dislocation-surgery",
    question: "Do all shoulder dislocations require Bankart surgery?",
    answer:
      "A first-time dislocation in an older, less active person may be managed conservatively with a sling and physiotherapy. However, active young athletes and individuals who experience repeated dislocations have a torn labrum that rarely heals spontaneously. Arthroscopic Bankart repair refixes the labrum to restore stability and prevent progressive socket bone loss.",
  },
  {
    id: "mri-before-arthroscopy",
    question: "Why is an MRI scan required before arthroscopic surgery?",
    answer:
      "A high-resolution MRI confirms the exact location, grade, and extent of ligament rupture, meniscus tear geometry, cartilage damage, or rotator cuff tendon retraction. This imaging allows Dr. Vishal Kasliwal to formulate an exact anatomical surgical plan prior to entering the operating room.",
  },
];

export default function ArthroscopyPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section (Full Viewport Screen-Fit) */}
      <section className="bg-navy text-white min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-8 lg:py-12">
        <Container>
          <Breadcrumbs
            items={[{ label: "Arthroscopy & Sports Injuries" }]}
            tone="dark"
            className="mb-3 sm:mb-4"
          />

          <div className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Title & Actions */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-light">
                Specialist Arthroscopy &amp; Sports Medicine · Nashik
              </span>

              <h1 className="mt-2 font-heading text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-tight">
                Knee &amp; Shoulder Arthroscopy in Nashik
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                Advanced keyhole surgery for ACL tears, meniscus injuries, joint cartilage restoration, and shoulder rotator cuff repairs, backed by 24/7 emergency fracture and orthopaedic trauma care. Fellowship-trained expertise with Dr. Vishal Kasliwal at Kasliwal Joint Institute.
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
                <span className="font-semibold text-white">Dr. Vishal Kasliwal</span> · M.S. Orthopaedics · Fellowship-trained in Joint Replacement &amp; Arthroscopy (Seoul, S. Korea) · Reg. No. MMC/2005/02/1098
              </div>
            </div>

            {/* Right Column: Surgical Photograph */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-dark shadow-lift max-w-[460px] mx-auto lg:max-w-none">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/procedures/card_shoulder_care.jpg"
                    alt="Shoulder and knee arthroscopy surgical instrumentation in operating theatre at Kasliwal Joint Institute"
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
        {/* 2. What is Arthroscopy? */}
        <section id="what-is-arthroscopy" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Minimally Invasive Joint Surgery
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              What is Arthroscopy?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Arthroscopy is a state-of-the-art keyhole technique where a slender optical telescope (arthroscope) and precision micro-instruments are guided into the joint cavity through tiny incisions. High-definition magnification allows meticulous reconstruction of torn ligaments and cartilage without cutting open muscles.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  4–5 mm Keyhole Portals
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Instead of wide open joint exposures, procedures are completed through puncture incisions, dramatically reducing post-operative pain, scar tissue, and infection risks.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-clinical-blue">
                Minimal muscle trauma &amp; aesthetic scars
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  4K High-Definition Visualization
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Ultra-high-definition optics illuminate hidden joint recesses, allowing exact probing, tensioning, and anatomical suture fixation of damaged tissue under direct view.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-clinical-blue">
                Magnified micro-surgical accuracy
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center text-clinical-blue mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy">
                  Rapid Day-Care Recovery
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Most patients mobilize on the same day and are discharged within 24 hours. Physiotherapy commences immediately, returning patients to desk work and daily routines swiftly.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-clinical-blue">
                Accelerated rehabilitation timeline
              </div>
            </div>
          </div>
        </section>

        {/* 3. ACL Tear & Reconstruction (Screen-Fit Balanced Layout) */}
        <section id="acl-reconstruction" className="scroll-mt-28 border-t border-slate-100 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Ligament Stability &amp; Sports Medicine
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              ACL Tear &amp; Arthroscopic ACL Reconstruction
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              The Anterior Cruciate Ligament (ACL) is the primary internal stabilizer preventing the tibia from sliding forward or rotating erratically. ACL ruptures occur during rapid cutting, pivoting, awkward jump landings, or two-wheeler traffic collisions.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: 3D Anatomical Illustration with Integrated Diagnostic Signs */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft flex-1 flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src="/images/procedures/knee_arthroscopy_anatomy.jpg"
                    alt="3D medical anatomical illustration of knee arthroscopy showing keyhole portal, reconstructed ACL graft, and meniscus repair"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue block mb-2">
                    Recognizing an ACL Tear (Clinical Signs)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue shrink-0" />
                      <span>Audible &quot;pop&quot; inside the joint</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue shrink-0" />
                      <span>Rapid hemarthrosis swelling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue shrink-0" />
                      <span>Knee &quot;giving way&quot; on pivots</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue shrink-0" />
                      <span>Confirmed via Lachman &amp; MRI</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-500 text-center">
                3D Anatomical Illustration: Portal camera, ACL reconstruction graft &amp; meniscus repair.
              </p>
            </div>

            {/* Right: Matched Treatment Decision Cards */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">
                    Surgical Indication
                  </span>
                  <h3 className="mt-1 font-heading font-bold text-base sm:text-lg text-navy">
                    Who Requires Reconstruction Surgery?
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    While non-operative rehabilitation may manage sedentary patients with stable knees, active individuals and athletes require anatomical reconstruction. Without an intact ACL, recurrent knee shifts cause secondary meniscus tears and accelerate degenerative joint wear.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                  Prevents secondary cartilage damage &amp; chronic instability
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">
                    Living Autograft Technique
                  </span>
                  <h3 className="mt-1 font-heading font-bold text-base sm:text-lg text-navy">
                    Anatomical Autograft Reconstruction
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Dr. Vishal Kasliwal reconstructs the torn ligament using a living autograft (quadrupled hamstring or patellar tendon) harvested via a tiny cosmetic incision. Rigid titanium suspensory buttons and bio-absorbable interference screws ensure robust fixation and early mobilization.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                  Rigid suspensory fixation &amp; early progressive rehabilitation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Meniscus Tear Treatment & Comparison Table */}
        <section id="meniscus-tear" className="scroll-mt-28 border-t border-slate-100 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Shock Absorber Preservation
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Meniscus Tear Treatment: Repair vs. Trimming
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              The menisci are two C-shaped fibrocartilaginous shock absorbers distributing loads between the femur and tibia. In young athletes, tears occur from sudden rotational pivots; in older adults, tears can develop from minor twisting on degenerated cartilage.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-soft">
            <table className="w-full min-w-[580px] text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-4 font-heading font-semibold w-1/4">Clinical Aspect</th>
                  <th className="p-4 font-heading font-semibold w-3/8 border-l border-white/10">
                    Meniscus Repair (Preservation)
                  </th>
                  <th className="p-4 font-heading font-semibold w-3/8 border-l border-white/10">
                    Partial Meniscectomy (Trimming)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-4 font-semibold text-navy bg-slate-50/50">Surgical Approach</td>
                  <td className="p-4 text-slate-600 border-l border-slate-100">
                    Torn cartilage margins are stitched back together using all-inside micro-sutures.
                  </td>
                  <td className="p-4 text-slate-600 border-l border-slate-100">
                    Only the unstable, torn flap that lacks healing capacity is smoothly resected.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-navy bg-slate-50/50">Ideal Candidates</td>
                  <td className="p-4 text-slate-600 border-l border-slate-100">
                    Vascular outer edge (&quot;red-red&quot; zone) tears, young athletes, and meniscus root tears.
                  </td>
                  <td className="p-4 text-slate-600 border-l border-slate-100">
                    Avascular inner edge (&quot;white-white&quot; zone) tears and complex degenerative flaps.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-navy bg-slate-50/50">Rehabilitation Timeline</td>
                  <td className="p-4 text-slate-600 border-l border-slate-100">
                    Protected brace weight-bearing for 4 to 6 weeks to allow biological healing.
                  </td>
                  <td className="p-4 text-slate-600 border-l border-slate-100">
                    Rapid recovery with early weight-bearing and return to normal walking within 1 to 2 weeks.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-navy bg-slate-50/50">Long-Term Benefit</td>
                  <td className="p-4 text-slate-600 border-l border-slate-100">
                    Preserves native joint shock absorption, lowering long-term risk of early arthritis.
                  </td>
                  <td className="p-4 text-slate-600 border-l border-slate-100">
                    Immediate relief from painful joint locking, catching, and mechanical irritation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. PCL, Cartilage Restoration & Kneecap Instability */}
        <section id="pcl-and-cartilage" className="scroll-mt-28 border-t border-slate-100 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Complex Joint Restoration
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              PCL, Cartilage Restoration &amp; Kneecap Instability
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Beyond isolated ACL and meniscus tears, high-energy impact and developmental anatomy can destabilize other structural stabilizers of the knee joint.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PCL Injuries */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">
                  Posterior Ligament
                </span>
                <h3 className="mt-1 font-heading font-bold text-base sm:text-lg text-navy">
                  PCL &amp; Multi-Ligament Tears
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  The posterior cruciate ligament (PCL) is damaged during dashboard impacts in car crashes or heavy falls onto a bent knee. Isolated tears are managed with specialized dynamic bracing, whereas multi-ligament instability requires arthroscopic reconstruction to avoid chronic posterior subluxation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Anatomical tunnel reconstruction
              </div>
            </div>

            {/* Cartilage Restoration */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">
                  Articular Surface Care
                </span>
                <h3 className="mt-1 font-heading font-bold text-base sm:text-lg text-navy">
                  Cartilage Restoration Procedures
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  Localized cartilage defects cause persistent swelling, sharp pain, and mechanical clicking. Depending on defect depth, interventions range from arthroscopic microfracture (stimulating stem cell marrow release) to osteochondral autograft transfer (OATS) to resurface weight-bearing zones.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Microfracture &amp; OATS mosaicplasty
              </div>
            </div>

            {/* Kneecap Instability */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">
                  Patellar Tracking
                </span>
                <h3 className="mt-1 font-heading font-bold text-base sm:text-lg text-navy">
                  Kneecap (MPFL) Reconstruction
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  Recurrent patellar dislocation occurs when the kneecap slips outward from the femoral groove during pivoting, commonly in adolescents. Surgical reconstruction of the Medial Patellofemoral Ligament (MPFL) restores anatomical alignment and prevents future dislocation episodes.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Hamstring autograft MPFL repair
              </div>
            </div>
          </div>
        </section>

        {/* 6. Shoulder Arthroscopy (Screen-Fit Balanced Layout) */}
        <section id="shoulder-arthroscopy" className="scroll-mt-28 border-t border-slate-100 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Upper Extremity Sports Medicine
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Shoulder Arthroscopy in Nashik
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              The shoulder is the most mobile joint in the human body, relying on delicate soft-tissue restraints for stability. Keyhole shoulder surgery repairs complex tears with minimal stiffness and tissue trauma.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: 3D Anatomical Illustration with Clinical Indicators */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft flex-1 flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src="/images/procedures/shoulder_arthroscopy_anatomy.jpg"
                    alt="3D medical anatomical illustration of shoulder arthroscopy showing rotator cuff tendon repair with suture anchors and Bankart labral repair"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue block mb-2">
                    Common Shoulder Symptoms &amp; Diagnosis
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue shrink-0" />
                      <span>Severe night pain &amp; sleep disturbance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue shrink-0" />
                      <span>Weakness on overhead lifting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue shrink-0" />
                      <span>Recurrent popping or dislocations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue shrink-0" />
                      <span>Evaluated with 3T MRI &amp; stress tests</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-500 text-center">
                3D Anatomical Illustration: Rotator cuff tendon repair with suture anchors &amp; Bankart labral refixation.
              </p>
            </div>

            {/* Right: Matched Treatment Cards & International Fellowship */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">
                    Tendon Repair
                  </span>
                  <h3 className="mt-1 font-heading font-bold text-base sm:text-lg text-navy">
                    Rotator Cuff Tear Repair
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Tears in the supraspinatus tendon cause severe night ache and arm lifting weakness. Symptomatic tears that fail conservative physiotherapy are re-anchored onto the humeral bone footprint using bio-composite suture anchors via 3 tiny keyhole portals, restoring shoulder strength and active range of motion.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                  Minimally invasive suture anchor fixation
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">
                    Joint Stabilization
                  </span>
                  <h3 className="mt-1 font-heading font-bold text-base sm:text-lg text-navy">
                    Shoulder Dislocation &amp; Bankart Repair
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Traumatic dislocations tear the fibrocartilage labrum from the glenoid socket rim. Arthroscopic Bankart repair refixes the labrum to re-establish joint concavity compression, eliminating recurrent popping and restoring full confidence during overhead athletic activities.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-teal-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                  <span>Fellowship trained in Shoulder Arthroscopy (Seoul, S. Korea)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. 5-Phase Return-to-Sport Protocol */}
        <section id="return-to-sport" className="scroll-mt-28 border-t border-slate-100 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Criteria-Based Rehabilitation
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Return to Sport: 5-Phase Rehabilitation Protocol
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Surgical reconstruction provides the anatomical anchor, but structured rehabilitation rebuilds neuromuscular reflex and strength. Clearance is determined by objective functional testing:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-clinical-blue bg-ice-blue px-2 py-0.5 rounded-md mb-2">
                  Phase 1
                </span>
                <h3 className="font-heading font-bold text-sm sm:text-base text-navy">
                  Protection &amp; Swelling
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Weeks 0–2. Cryotherapy, passive full extension, quadriceps sets, and protected crutch weight-bearing.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Goal: Effusion control
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-clinical-blue bg-ice-blue px-2 py-0.5 rounded-md mb-2">
                  Phase 2
                </span>
                <h3 className="font-heading font-bold text-sm sm:text-base text-navy">
                  Range of Motion
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Weeks 2–6. Progressive flexion up to 120°, stationary cycling, and gait normalization without limping.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Goal: Normal walking gait
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-clinical-blue bg-ice-blue px-2 py-0.5 rounded-md mb-2">
                  Phase 3
                </span>
                <h3 className="font-heading font-bold text-sm sm:text-base text-navy">
                  Strength &amp; Balance
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Weeks 6–12. Closed-chain squats, hamstring curls, single-leg balance, and core stability drills.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Goal: Limb strength &gt;70%
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-clinical-blue bg-ice-blue px-2 py-0.5 rounded-md mb-2">
                  Phase 4
                </span>
                <h3 className="font-heading font-bold text-sm sm:text-base text-navy">
                  Sport Agility
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Months 3–6. Straight-line outdoor running, ladder agility drills, jumping, and deceleration training.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Goal: Dynamic control
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md mb-2">
                  Phase 5
                </span>
                <h3 className="font-heading font-bold text-sm sm:text-base text-navy">
                  Full Return to Play
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Months 9+. Full contact play permitted only after achieving &gt;90% Limb Symmetry Index on hop tests.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-teal-700">
                Goal: Safe match clearance
              </div>
            </div>
          </div>
        </section>

        {/* 8. Fracture & 24/7 Trauma Care (With Clinical Photo) */}
        <section id="fracture-and-trauma-care" className="scroll-mt-28 border-t border-slate-100 pt-12 sm:pt-16">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Trauma Services */}
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
                  Round-the-Clock Emergency Services
                </span>
                <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
                  24/7 Orthopaedic Trauma &amp; Fracture Care
                </h2>
                <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Kasliwal Super Speciality Hospital operates a fully equipped orthopaedic emergency and trauma centre in Nashik. We provide immediate surgical stabilization for acute fractures and severe musculoskeletal trauma with around-the-clock anaesthetist, intensivist, and blood bank cover.
                </p>

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Complex wrist, arm, clavicle &amp; leg fractures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Geriatric emergency hip fractures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Multiple trauma &amp; road accident injuries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Acute joint dislocations &amp; open injuries</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button href={`tel:${PHONE_TEL}`} variant="navy" size="sm">
                    Call Trauma Emergency: {PHONE_DISPLAY}
                  </Button>
                  <Button href={WHATSAPP_URL} variant="outline" size="sm">
                    WhatsApp Emergency Desk
                  </Button>
                </div>
              </div>

              {/* Right Column: Clean Trauma Operating Room Photo */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/images/procedures/card_trauma_care.jpg"
                      alt="Orthopaedic trauma surgical theatre and fracture stabilization equipment at Kasliwal Super Speciality Hospital"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-500 text-center">
                  Emergency orthopaedic surgical suite with continuous fluoroscopy and intensive care monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQs */}
        <section id="faqs" className="scroll-mt-28 border-t border-slate-100 pt-12 sm:pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Patient Information
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy mb-6">
              Frequently Asked Questions About Arthroscopy
            </h2>
          </div>
          <FAQ items={arthroscopyFaqs} />
        </section>

        {/* 10. Closing CTA */}
        <section id="book">
          <CTA
            title="Injured Your Knee or Shoulder?"
            description="Consult Dr. Vishal Kasliwal for an accurate clinical assessment, MRI review, and personalized sports recovery plan."
          />
        </section>

        {/* 11. Medical Review Box */}
        <MedicalReviewBox />
      </Container>
    </div>
  );
}
