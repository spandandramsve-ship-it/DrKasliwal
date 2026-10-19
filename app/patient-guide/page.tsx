import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTA from "@/components/shared/CTA";
import MedicalReviewBox from "@/components/shared/MedicalReviewBox";
import Button from "@/components/ui/Button";
import {
  PHONE_TEL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  LOCATION_ADDRESS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Guide | Preparing for & Recovering from Joint Surgery | Kasliwal Joint Institute",
  description:
    "What to expect before, during and after joint replacement or arthroscopy at Kasliwal Joint Institute, Nashik, including help for patients travelling from outside Nashik.",
  keywords: [
    "knee replacement recovery",
    "preparing for knee replacement",
    "what to expect after knee replacement",
    "hospital stay knee replacement",
    "joint replacement Nashik outstation patients",
  ],
  alternates: {
    canonical: "https://kasliwaljointinstitute.com/patient-guide",
  },
};

export default function PatientGuidePage() {
  return (
    <div className="bg-white">
      {/* 1. Hero */}
      <section className="bg-navy py-10 sm:py-14 text-white">
        <Container>
          <Breadcrumbs items={[{ label: "Patient Guide" }]} tone="dark" className="mb-3 sm:mb-4" />
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Patient Guide: Your Joint Replacement Journey
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Everything you need to know before, during and after your surgery at Kasliwal Joint Institute, so you know what happens next at every step.
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
              Reviewed by Dr. Vishal Kasliwal · M.S. Orthopaedics · Reg. No. MMC/2005/02/1098
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-12 space-y-16">
        {/* 2. Your Surgery Journey */}
        <section id="journey" className="scroll-mt-28">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
              Your Surgery Journey: Step by Step
            </h2>
            <p className="mt-2 text-slate-600">
              Joint replacement is a planned and structured process. Here is what you and your family can expect from your first visit through to complete recovery.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Comprehensive clinical history, physical joint examination, evaluation of functional limitations, and understanding your personal mobility goals.",
              },
              {
                step: "02",
                title: "Diagnosis",
                desc: "Weight-bearing X-rays, limb alignment assessment, and blood tests or advanced imaging as clinically indicated.",
              },
              {
                step: "03",
                title: "Treatment Decision",
                desc: "Non-surgical treatments (medicines, exercises, injections) are always explored first. Surgery is recommended only when conservative measures no longer provide relief.",
              },
              {
                step: "04",
                title: "Surgical Planning & Fitness",
                desc: "Pre-operative fitness assessment by the medical team (physician, anaesthetist, cardiologist clearance), control of blood sugar and blood pressure, and individualised implant planning.",
              },
              {
                step: "05",
                title: "Admission & Surgery",
                desc: "Admission the day before or morning of surgery. Surgery conducted under spinal or regional anaesthesia with advanced pain-blocking techniques in an ultra-clean modular operating theatre.",
              },
              {
                step: "06",
                title: "Early Mobilisation",
                desc: "Most patients stand and take their first assisted steps with a walker within a few hours to the next morning following surgery, promoting circulation and confidence.",
              },
              {
                step: "07",
                title: "Physiotherapy in Hospital",
                desc: "Supervised gentle exercises, bending techniques, safe bed transfers, and progressive walking practice guided by our hospital physiotherapy team.",
              },
              {
                step: "08",
                title: "Going Home",
                desc: "Discharge once you can walk safely, manage stairs with support, and your pain is comfortably controlled with oral medicines. You receive discharge medications, dressing guidelines, and a home exercise chart.",
              },
              {
                step: "09",
                title: "Follow-Up & Wound Review",
                desc: "First review typically around day 12–14 for wound inspection and staple/stitch removal, followed by progressive adjustments to your physiotherapy routine.",
              },
              {
                step: "10",
                title: "Back to Daily Movement",
                desc: "Gradual progression from walker to stick, and then independent walking. Resumption of domestic activities, driving, and social routines over 6 to 12 weeks.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-ice-blue text-navy font-bold flex items-center justify-center text-sm">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Preparing for Surgery */}
        <section id="preparing" className="scroll-mt-28">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
              Preparing for Surgery
            </h2>
            <p className="mt-2 text-slate-600">
              Good preparation helps minimise surgical risks and ensures a smoother, more comfortable recovery at home.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-heading text-lg font-bold text-navy">Medical Checklist</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span><strong>Bring all records:</strong> Carry all previous X-rays, MRI scans, lab reports, discharge summaries, and a complete list of current medications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span><strong>Medical optimisation:</strong> Keep blood sugar (HbA1c) and blood pressure well controlled under your physician&apos;s guidance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span><strong>Blood thinners:</strong> Inform the surgical team about any blood thinners (aspirin, clopidogrel, warfarin, apixaban). These need planned stoppage as directed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span><strong>Infection screening:</strong> Any active dental, skin, or urinary tract infection must be treated and resolved prior to joint replacement.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-heading text-lg font-bold text-navy">Home &amp; Practical Prep</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span><strong>Bathroom setup:</strong> Arrange a western commode or raised toilet seat with grab bars. Indian low toilets should be avoided in the early recovery phase.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span><strong>Seating:</strong> Ensure a firm chair with armrests is available so sitting down and standing up requires minimal knee or hip strain.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span><strong>Clear walkways:</strong> Remove loose rugs, electrical cords, and clutter from walkways between your bed, bathroom, and dining area.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">✓</span>
                  <span><strong>Caregiver support:</strong> Plan for a family member or caregiver to be present at home during the initial 1 to 2 weeks post-discharge.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-ice-blue/60 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-navy text-sm">Download Printable Pre-Surgery Checklist</p>
              <p className="text-xs text-slate-600 mt-0.5">A one-page reference list to check off at home before admission.</p>
            </div>
            <a
              href="#book"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-lg bg-navy text-white hover:bg-navy-light transition-colors"
            >
              Request Checklist via WhatsApp
            </a>
          </div>
        </section>

        {/* 4. In Hospital */}
        <section id="in-hospital" className="scroll-mt-28">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
              Your Hospital Stay
            </h2>
            <p className="mt-2 text-slate-600">
              You are usually admitted the day before or the morning of surgery. Here is what occurs during your hospital stay:
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border border-slate-200">
              <h3 className="font-heading text-base font-bold text-navy">Pre-Op Preparation</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Verification of reports, fasting instructions confirmed, joint area prepared cleanly, and pre-medications administered under nurse supervision.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-slate-200">
              <h3 className="font-heading text-base font-bold text-navy">Modern Pain Control</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Targeted local nerve blocks, peri-articular injections, and multi-modal pain medications keep discomfort well-managed, allowing early comfortable leg movement without severe grogginess.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-slate-200">
              <h3 className="font-heading text-base font-bold text-navy">Discharge Readiness</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Before discharge (typically day 3 or 4), you practice walking safely, navigating steps with support, and your family is briefed on wound dressings and oral medication schedules.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Recovery & Warning Signs */}
        <section id="recovery" className="scroll-mt-28">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
              Recovery, Rehabilitation &amp; Safety Signs
            </h2>
            <p className="mt-2 text-slate-600">
              Detailed procedure-specific recovery timelines are available on our{" "}
              <Link href="/knee#recovery" className="text-teal hover:underline font-medium">
                Knee Recovery Guide
              </Link>{" "}
              and{" "}
              <Link href="/hip#recovery" className="text-teal hover:underline font-medium">
                Hip Recovery Guide
              </Link>
              . Below are universal safety principles and warning signs to know.
            </p>
          </div>

          {/* Warning Signs Box */}
          <div className="mt-6 p-6 rounded-2xl border-2 border-amber-300 bg-amber-50/70">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
              <h3 className="font-heading text-lg font-bold text-amber-900">
                Warning Signs: When to Contact the Hospital Immediately
              </h3>
            </div>
            <p className="mt-2 text-sm text-amber-800">
              While complications are uncommon, you should contact our medical team without delay if you notice any of the following:
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-amber-950">
              <div className="p-3 bg-white/80 rounded-xl border border-amber-200">
                <strong>Fever:</strong> Persistent temperature over 100.4°F (38°C) or severe chills.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-amber-200">
                <strong>Wound Changes:</strong> Increasing redness, swelling, warmth, or yellow/foul discharge around the incision.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-amber-200">
                <strong>Calf Pain or Swelling:</strong> Tenderness or enlargement in the calf (possible sign of deep vein thrombosis / DVT).
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-amber-200">
                <strong>Sudden Shortness of Breath:</strong> Immediate emergency — seek urgent hospital care (potential sign of pulmonary embolism).
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-amber-200 flex flex-wrap items-center justify-between gap-3 text-xs text-amber-900">
              <span>Emergency / OPD Helpline: <strong>{PHONE_DISPLAY}</strong></span>
              <a href={`tel:${PHONE_TEL}`} className="font-bold underline">Call Now</a>
            </div>
          </div>
        </section>

        {/* 6. Outstation Patients */}
        <section id="outstation-patients" className="scroll-mt-28">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
              Guidance for Outstation Patients
            </h2>
            <p className="mt-2 text-slate-600">
              Many patients travel to Kasliwal Joint Institute from Dhule, Jalgaon, Ahmednagar, Nandurbar, and other parts of Maharashtra. We help you organise your visit smoothly.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border border-slate-200">
              <h3 className="font-heading text-base font-bold text-navy">1. Preliminary Review</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                You can send existing X-rays, MRI scans, and summaries via WhatsApp before traveling. Our clinical coordinator will advise whether further preliminary tests should be done locally first.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-slate-200">
              <h3 className="font-heading text-base font-bold text-navy">2. Stay Planning</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Hospital admission is typically 3–4 days. For accompanying family members, multiple hotels and guest accommodations are situated nearby along Gangapur Road.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-slate-200">
              <h3 className="font-heading text-base font-bold text-navy">3. Tele-Follow Up</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Following your in-person staple removal visit, subsequent routine progress checks and physiotherapy guidance can often be coordinated via scheduled video consultation.
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <strong>NMC Ethical Notice:</strong> Kasliwal Joint Institute does not offer commercial travel packages, discounts, or promotional inducements. Outstation support is strictly limited to clinical coordination and administrative guidance.
          </div>
        </section>

        {/* 7. Frequently Asked Questions */}
        <section id="faqs" className="scroll-mt-28">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-slate-600">
              Common questions regarding hospital procedures, documents, insurance, and visiting hours.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {[
              {
                q: "What documents do I need to bring for admission?",
                a: "Please bring your Aadhaar card or government photo ID, health insurance policy card/e-card (if using cashless insurance), all previous medical prescriptions, X-rays, and test reports.",
              },
              {
                q: "How does cashless health insurance processing work?",
                a: "Our hospital TPA desk coordinates pre-authorisation requests with major insurers and TPAs. Submit your policy details 2 to 3 days prior to planned admission so approvals can be processed smoothly.",
              },
              {
                q: "What are the visiting hours for family members?",
                a: "One dedicated attendant is allowed to stay with the patient in the room. General visiting hours for relatives are specified during morning and evening slots to ensure patients receive adequate rest and quiet for recovery.",
              },
              {
                q: "What food is provided during the hospital stay?",
                a: "Hygienic, doctor-approved meals are provided to the patient based on their nutritional needs and any dietary restrictions (such as diabetic or low-salt diets).",
              },
              {
                q: "When can I resume stairs and traveling after surgery?",
                a: "Patients are taught step-climbing techniques before hospital discharge. Short car rides are typically fine after discharge. Long road travel (over 2 hours) should be discussed with the surgeon at the first follow-up.",
              },
              {
                q: "How soon do I need to return for the first follow-up?",
                a: "The first follow-up is scheduled 12 to 14 days after surgery for surgical wound check and staple or suture removal.",
              },
            ].map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-200 bg-white">
                <h3 className="font-heading text-base font-bold text-navy">{faq.q}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Closing CTA */}
        <section id="book" className="scroll-mt-28">
          <CTA />
        </section>

        {/* Medical Review Box */}
        <MedicalReviewBox lastUpdated="October 2026" />
      </Container>
    </div>
  );
}
