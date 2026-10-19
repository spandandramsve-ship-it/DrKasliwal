import type { Metadata } from "next";
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
    "Keyhole surgery in Nashik for ACL tears, meniscus tears, PCL and cartilage injuries, kneecap instability, rotator cuff and shoulder dislocation, plus fracture care.",
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
    question: "Is arthroscopy a major operation?",
    answer:
      "It is done through tiny keyhole incisions, but it is still surgery under anaesthesia. Recovery depends on what tissue is repaired.",
  },
  {
    id: "hospital-stay-arthroscopy",
    question: "How long is the hospital stay?",
    answer:
      "Often one night or day-care for simple procedures; slightly longer after multi-ligament reconstructions.",
  },
  {
    id: "return-sport-acl",
    question: "When can I return to sport after ACL surgery?",
    answer:
      "Usually around 9 months or more, once objective strength and stability tests are fully satisfactory.",
  },
  {
    id: "meniscus-heal-alone",
    question: "Can a torn meniscus heal on its own?",
    answer:
      "Small tears in the vascular outer edge, and many age-related degenerative tears, can settle with physiotherapy. Mechanical locking tears usually need surgical treatment.",
  },
  {
    id: "shoulder-dislocation-surgery",
    question: "Do all shoulder dislocations need surgery?",
    answer:
      "No. Surgery (such as Bankart repair) is considered when the shoulder repeatedly dislocates or the risk of recurrence is high in active young individuals.",
  },
  {
    id: "mri-before-arthroscopy",
    question: "Do I need an MRI before arthroscopy?",
    answer:
      "Usually yes, to accurately confirm the ligament, meniscus or cartilage injury and map out the surgical plan.",
  },
];

export default function ArthroscopyPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero */}
      <section className="bg-navy py-10 sm:py-14 text-white">
        <Container>
          <Breadcrumbs items={[{ label: "Arthroscopy & Sports Injuries" }]} tone="dark" className="mb-3 sm:mb-4" />
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Knee &amp; Shoulder Arthroscopy in Nashik
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Keyhole surgery for ligament, meniscus, cartilage and shoulder injuries, and orthopaedic fracture care, with Dr. Vishal Kasliwal, fellowship-trained in knee and shoulder arthroscopy.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/book-appointment" variant="light" size="sm">
                Book a Consultation
              </Button>
              <Button href={`tel:${PHONE_TEL}`} variant="outline-light" size="sm">
                Call {PHONE_DISPLAY}
              </Button>
              <Button href={WHATSAPP_URL} variant="outline-light" size="sm">
                WhatsApp
              </Button>
            </div>
            <p className="mt-5 text-xs text-slate-300 font-medium">
              Dr. Vishal Kasliwal · M.S. Orthopaedics · Fellowship-trained in Joint Replacement &amp; Arthroscopy · Reg. No. MMC/2005/02/1098
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16 space-y-16">
        {/* 2. What is Arthroscopy */}
        <section id="what-is-arthroscopy" className="scroll-mt-36">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            What is arthroscopy?
          </h2>
          <div className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Arthroscopy is minimally invasive keyhole surgery. Through two or three small incisions (portals), the surgeon inserts a thin optical camera (arthroscope) and specialized instruments into the joint. The interior of the joint is visualized on a high-definition monitor, allowing torn ligaments to be reconstructed, cartilage repaired, and damaged tissue smoothed with minimal disruption to surrounding muscles.
            </p>
            <ul className="grid gap-2 sm:grid-cols-2 text-sm sm:text-base text-slate-700 list-disc list-inside bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <li>Tiny incisions with minimal tissue trauma</li>
              <li>Shorter hospital stays (often day-care or single-night)</li>
              <li>Used for both precision diagnosis and simultaneous surgical treatment</li>
              <li>Guided by prior diagnostic MRI scans</li>
            </ul>
          </div>
        </section>

        {/* 3. ACL Reconstruction */}
        <section id="acl-reconstruction" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            ACL Tear &amp; ACL Reconstruction Surgery in Nashik
          </h2>
          <p className="mt-3 text-base text-slate-700 leading-relaxed max-w-3xl">
            The anterior cruciate ligament (ACL) is the primary stabilizer preventing the shin bone from sliding forward and twisting abnormally. It is commonly injured during sudden pivoting, cutting sports (football, cricket, badminton, kabaddi), or two-wheeler falls.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
              <h3 className="font-heading font-bold text-base sm:text-lg text-navy">Symptoms &amp; Diagnosis</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                <li>An audible &quot;pop&quot; at the moment of injury</li>
                <li>Immediate knee swelling and inability to continue playing</li>
                <li>A sensation of the knee &quot;giving way&quot; on pivots or stairs</li>
                <li>Confirmed clinically with Lachman test and diagnostic MRI</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
              <h3 className="font-heading font-bold text-base sm:text-lg text-navy">Does every tear need surgery?</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Non-operative rehabilitation can suit less active individuals with a stable joint. However, active athletes and patients experiencing recurrent knee instability require arthroscopic reconstruction to protect against secondary meniscus tears and premature joint wear.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 p-5 bg-white">
            <h3 className="font-heading font-bold text-base text-navy">Reconstruction &amp; Rehabilitation</h3>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              The torn ligament is reconstructed using an anatomical autograft (such as hamstring or patellar tendon) secured with biocompatible fixations. Supervised walking with crutches begins within days, progressive bending is regained over initial weeks, straight-line jogging starts after a few months, and clearance for competitive sport typically takes 9 months or more based on objective functional return-to-sport testing.
            </p>
          </div>
        </section>

        {/* 4. Meniscus Tear */}
        <section id="meniscus-tear" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            Meniscus Tear Treatment in Nashik
          </h2>
          <p className="mt-3 text-base text-slate-700 leading-relaxed max-w-3xl">
            The menisci are two C-shaped fibrocartilage shock absorbers between the femur and tibia. They can tear acutely from a twisting athletic motion in younger patients, or gradually degenerate over time.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3.5 font-heading font-semibold">Aspect</th>
                  <th className="p-3.5 font-heading font-semibold">Meniscus Repair (Preservation)</th>
                  <th className="p-3.5 font-heading font-semibold">Partial Meniscectomy (Trimming)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 border-x border-b border-slate-200">
                <tr>
                  <td className="p-3.5 font-medium text-navy">What is done</td>
                  <td className="p-3.5 text-slate-600">Torn edges are stitched together with specialized arthroscopic sutures</td>
                  <td className="p-3.5 text-slate-600">Only the unstable, torn flap that cannot heal is smoothed away</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 font-medium text-navy">Best for</td>
                  <td className="p-3.5 text-slate-600">Tears with healthy blood supply, younger active patients, root tears</td>
                  <td className="p-3.5 text-slate-600">Avascular tears that lack healing capacity</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-navy">Recovery</td>
                  <td className="p-3.5 text-slate-600">Longer; protected brace weight-bearing for several weeks</td>
                  <td className="p-3.5 text-slate-600">Quicker; rapid weight-bearing within weeks</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 font-medium text-navy">Long-term aim</td>
                  <td className="p-3.5 text-slate-600">Preserve native meniscus shock absorption to reduce future arthritis</td>
                  <td className="p-3.5 text-slate-600">Relieve mechanical clicking, catching, and painful locking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. PCL & Cartilage */}
        <section id="pcl-and-cartilage" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            PCL &amp; Joint Cartilage Injuries
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5 bg-white">
              <h3 className="font-heading font-bold text-base sm:text-lg text-navy">PCL Injuries</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                The posterior cruciate ligament (PCL) is often damaged during dashboard knee collisions in vehicular accidents or falls onto a flexed knee. Isolated tears frequently heal with dedicated bracing and rehab, while multi-ligament instability is managed with arthroscopic reconstruction.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5 bg-white">
              <h3 className="font-heading font-bold text-base sm:text-lg text-navy">Cartilage Restoration</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Focal cartilage damage causes localized pain, swelling, and clicking. Depending on the size and depth of the defect, options include arthroscopic debridement, marrow stimulation (microfracture), or specialized cartilage transfer procedures.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Kneecap Instability */}
        <section id="kneecap-instability" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            Kneecap (Patellar) Instability
          </h2>
          <p className="mt-3 text-base text-slate-700 leading-relaxed max-w-3xl">
            Some individuals, particularly teenagers and young athletes, experience kneecap dislocation or subluxation where the patella slips out of the femoral trochlear groove. While initial episodes are treated conservatively with quadriceps retraining, recurrent instability is corrected with surgical reconstruction of the medial patellofemoral ligament (MPFL) to restore tracking stability.
          </p>
        </section>

        {/* 7. Shoulder Arthroscopy */}
        <section id="shoulder-arthroscopy" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            Shoulder Arthroscopy in Nashik
          </h2>
          <p className="mt-3 text-base text-slate-700 leading-relaxed max-w-3xl">
            Keyhole shoulder surgery provides magnified visualization and precise repair for complex rotator cuff tears, recurrent dislocations, and shoulder stiffness.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
              <h3 className="font-heading font-bold text-base sm:text-lg text-navy">Rotator Cuff Tears</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Tears in the rotator cuff tendons cause painful arm lifting, weakness, and night pain. Symptomatic tears that do not respond to physiotherapy and targeted injections are repaired using minimally invasive suture anchors.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
              <h3 className="font-heading font-bold text-base sm:text-lg text-navy">Shoulder Dislocation (Bankart Repair)</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Traumatic dislocation often tears the labrum cartilage rim from the glenoid socket. Arthroscopic Bankart repair refixes the labrum to stabilize the joint and prevent recurrent dislocations.
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Dr. Vishal Kasliwal completed advanced international fellowship training in shoulder arthroscopy in Seoul, South Korea.
          </p>
        </section>

        {/* 8. Return to Sport */}
        <section id="return-to-sport" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            Return to Sport: 5-Phase Rehabilitation
          </h2>
          <p className="mt-3 text-base text-slate-700 leading-relaxed max-w-3xl">
            Rehabilitation is as crucial as the surgery itself. Recovery progresses through structured criteria-based stages:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-5">
            <div className="rounded-xl border border-slate-200 p-4 bg-white text-center">
              <span className="text-xs font-bold text-clinical-blue uppercase">Phase 1</span>
              <p className="mt-1 font-heading font-bold text-sm text-navy">Pain &amp; Swelling</p>
              <p className="mt-1 text-xs text-slate-500">Cryotherapy and early motion protection</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 bg-white text-center">
              <span className="text-xs font-bold text-clinical-blue uppercase">Phase 2</span>
              <p className="mt-1 font-heading font-bold text-sm text-navy">Full Range</p>
              <p className="mt-1 text-xs text-slate-500">Regaining normal joint flexion &amp; extension</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 bg-white text-center">
              <span className="text-xs font-bold text-clinical-blue uppercase">Phase 3</span>
              <p className="mt-1 font-heading font-bold text-sm text-navy">Strength &amp; Balance</p>
              <p className="mt-1 text-xs text-slate-500">Progressive resistance and proprioception</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 bg-white text-center">
              <span className="text-xs font-bold text-clinical-blue uppercase">Phase 4</span>
              <p className="mt-1 font-heading font-bold text-sm text-navy">Sport-Specific</p>
              <p className="mt-1 text-xs text-slate-500">Agility drills, jumping and straight running</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 bg-white text-center">
              <span className="text-xs font-bold text-clinical-blue uppercase">Phase 5</span>
              <p className="mt-1 font-heading font-bold text-sm text-navy">Full Return</p>
              <p className="mt-1 text-xs text-slate-500">Competitive match play upon testing clearance</p>
            </div>
          </div>
        </section>

        {/* 9. Fracture & Trauma */}
        <section id="fracture-and-trauma-care" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <div className="rounded-2xl border-l-4 border-clinical-blue bg-ice-blue/40 p-6 text-slate-800">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy">
              Orthopaedic Fracture &amp; Trauma Care
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
              Kasliwal Super Speciality Hospital provides round-the-clock emergency orthopaedic management for acute fractures and traumatic musculoskeletal injuries, supported by 24/7 anaesthetist and intensive care cover:
            </p>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2 text-sm text-slate-700 list-disc list-inside">
              <li>Complex fractures of the arm, wrist, leg and ankle</li>
              <li>Emergency hip fractures in elderly patients</li>
              <li>Multiple trauma with intensive care support</li>
              <li>Joint dislocations and ligament rupture repairs</li>
            </ul>
            <div className="mt-4">
              <Button href={`tel:${PHONE_TEL}`} variant="navy" size="sm">
                Call Trauma Emergency: {PHONE_DISPLAY}
              </Button>
            </div>
          </div>
        </section>

        {/* 10. FAQs */}
        <section id="faqs" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-6">
            Frequently asked questions about arthroscopy
          </h2>
          <FAQ items={arthroscopyFaqs} />
        </section>

        {/* 11. Closing CTA */}
        <section id="book">
          <CTA
            title="Injured your knee or shoulder?"
            description="Book an assessment with Dr. Vishal Kasliwal to diagnose your ligament, meniscus or joint injury and plan your recovery."
          />
        </section>

        {/* Medical Review Box */}
        <MedicalReviewBox />
      </Container>
    </div>
  );
}
