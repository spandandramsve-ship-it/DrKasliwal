import type { Metadata } from "next";
import Image from "next/image";
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
  LOCATION_CITY,
  HOSPITAL_NAME,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dr. Vishal Kasliwal | Joint Replacement Surgeon, Nashik | Kasliwal Joint Institute",
  description:
    "Dr. Vishal Kasliwal, M.S. Ortho, joint replacement and arthroscopy surgeon: training, surgical philosophy and Kasliwal Super Speciality Hospital, Gangapur Road, Nashik.",
  keywords: [
    "Dr Vishal Kasliwal",
    "joint replacement surgeon Nashik",
    "Kasliwal Hospital Nashik",
    "orthopaedic surgeon Nashik",
    "Kasliwal Super Speciality Hospital",
    "orthopaedic hospital Gangapur Road Nashik",
  ],
  alternates: {
    canonical: "https://kasliwaljointinstitute.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section (Full Viewport Screen-Fit) */}
      <section className="bg-navy text-white min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-8 lg:py-12">
        <Container>
          <Breadcrumbs items={[{ label: "About Us" }]} tone="dark" className="mb-3 sm:mb-4" />

          <div className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Title & Actions */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-light">
                Kasliwal Joint Institute · Nashik
              </span>

              <h1 className="mt-2 font-heading text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-tight">
                About Dr. Vishal Kasliwal &amp; Kasliwal Joint Institute
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                Kasliwal Joint Institute is the dedicated joint replacement and arthroscopy centre of Kasliwal Super Speciality Hospital, Nashik. Led by orthopaedic surgeon Dr. Vishal Kasliwal, we specialize in robotic knee replacement, hip reconstruction, and keyhole sports injury surgery.
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

              {/* Reassurance & Credential Pills */}
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  15+ Years Surgical Experience
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  ~5,000 Joint Procedures
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                  VELYS™ Robotic Arthroplasty
                </span>
              </div>

              {/* Clean Credential Bar */}
              <div className="mt-5 pt-3.5 border-t border-white/15 text-xs sm:text-sm text-slate-300">
                <span className="font-semibold text-white">Dr. Vishal Kasliwal</span> · M.S. Orthopaedics · Reg. No. MMC/2005/02/1098
              </div>
            </div>

            {/* Right Column: Dr. Vishal Kasliwal OPD Consultation Photo */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-dark shadow-lift max-w-[480px] mx-auto lg:max-w-none">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/doctor/dr_vishal_kasliwal_opd.jpg"
                    alt="Dr. Vishal Kasliwal, Orthopaedic Joint Replacement & Arthroscopy Surgeon, at his OPD consultation desk in Kasliwal Super Speciality Hospital, Nashik"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-8 sm:py-12 space-y-12 sm:space-y-14">
        {/* 2. Meet Dr. Vishal Kasliwal (Screen-Fit Balanced Layout) */}
        <section id="dr-vishal-kasliwal" className="scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
                Lead Surgeon Profile
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                Meet Dr. Vishal Kasliwal
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              M.S. Orthopaedics · MMC Reg. No. MMC/2005/02/1098
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left: Constrained Doctor Portrait with Integrated Credentials */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="relative h-[340px] sm:h-[360px] w-full rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 shadow-soft">
                <Image
                  src="/images/doctor/Dr_kasliwal.png"
                  alt="Dr. Vishal Kasliwal, Orthopaedic Joint Replacement & Arthroscopy Surgeon"
                  fill
                  priority
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/80 to-transparent p-3.5 pt-8 text-white">
                  <p className="font-heading font-bold text-sm text-white">Dr. Vishal Kasliwal</p>
                  <p className="text-[11px] text-gold-light font-medium">Joint Replacement &amp; Arthroscopy Surgeon</p>
                  <p className="text-[10px] text-slate-300">F.I.J.R. (Mumbai) · F.I.A. (South Korea)</p>
                </div>
              </div>
            </div>

            {/* Right: Bio & Highlights in Balanced Screen-Fit Layout */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-3.5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-soft flex-1 flex flex-col justify-between">
                <div className="space-y-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-navy font-semibold">Dr. Vishal Kasliwal</strong> is a fellowship-trained orthopaedic surgeon in Nashik dedicated to robotic joint replacement of the knee and hip, alongside advanced arthroscopic sports ligament reconstruction. Over his surgical career, he has performed over 5,000 joint replacement and arthroscopic procedures.
                  </p>
                  <p>
                    He completed formal fellowship training in computer-navigated arthroplasty at Breach Candy Hospital (Mumbai) under Dr. Arun Mullaji, arthroscopy in Pune under Dr. Sachin Tapasvi, and advanced shoulder reconstruction in Seoul, South Korea under Dr. Jin Young Park. He performs robotic-assisted knee replacement utilizing the VELYS™ system for personalized anatomical balance.
                  </p>
                </div>

                {/* Key Training Badges */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                    Breach Candy Hospital, Mumbai (Computer Navigation)
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                    Neon Hospital, Seoul (Shoulder Arthroscopy)
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                    VELYS™ Robotic Arthroplasty Certified
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                    Ex-Lecturer, NDMVP Medical College
                  </span>
                </div>
              </div>

              {/* Highlights Strip */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-3.5 shadow-soft">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                  <div className="p-1 sm:p-2">
                    <p className="font-heading font-bold text-lg sm:text-xl text-navy">15+ Years</p>
                    <p className="text-xs text-slate-500 mt-0.5">Surgical Experience</p>
                  </div>
                  <div className="p-1 sm:p-2">
                    <p className="font-heading font-bold text-lg sm:text-xl text-navy">~5,000</p>
                    <p className="text-xs text-slate-500 mt-0.5">Joint Procedures</p>
                  </div>
                  <div className="p-1 sm:p-2">
                    <p className="font-heading font-bold text-lg sm:text-xl text-navy">VELYS™</p>
                    <p className="text-xs text-slate-500 mt-0.5">Certified Robotic</p>
                  </div>
                  <div className="p-1 sm:p-2">
                    <p className="font-heading font-bold text-lg sm:text-xl text-navy">NMC Aligned</p>
                    <p className="text-xs text-slate-500 mt-0.5">Ethical Practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. Education, Fellowships & Career (Screen-Fit Side-by-Side Grid) */}
        <section id="training" className="scroll-mt-24 border-t border-slate-100 pt-8 sm:pt-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Academic Qualifications &amp; Appointments
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Education, Fellowships &amp; Career
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 leading-relaxed">
              Rigorous post-graduate training and international super-speciality fellowships across premier orthopaedic institutions:
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            {/* Education & Fellowships */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-soft overflow-hidden flex flex-col justify-between">
              <div className="py-3 px-4 bg-navy text-white">
                <h3 className="font-heading font-bold text-sm sm:text-base">
                  Education &amp; Fellowship Training
                </h3>
              </div>
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-2.5 px-3.5 font-bold text-navy w-20">2005</td>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">MBBS</td>
                      <td className="py-2.5 px-3.5 text-slate-600">MR Medical College, Kalaburagi</td>
                    </tr>
                    <tr className="bg-slate-50/40 hover:bg-slate-50/60">
                      <td className="py-2.5 px-3.5 font-bold text-navy w-20">2010</td>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">M.S. Orthopaedics</td>
                      <td className="py-2.5 px-3.5 text-slate-600">JN Medical College, Belagavi</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-2.5 px-3.5 font-bold text-navy w-20">2011</td>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">Computer-Navigated Arthroplasty</td>
                      <td className="py-2.5 px-3.5 text-slate-600">Breach Candy Hospital, Mumbai (Dr. Arun Mullaji)</td>
                    </tr>
                    <tr className="bg-slate-50/40 hover:bg-slate-50/60">
                      <td className="py-2.5 px-3.5 font-bold text-navy w-20">2014</td>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">Knee &amp; Shoulder Arthroscopy</td>
                      <td className="py-2.5 px-3.5 text-slate-600">Pune (Dr. Sachin Tapasvi)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-2.5 px-3.5 font-bold text-navy w-20">2015</td>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">Shoulder &amp; Elbow Arthroscopy</td>
                      <td className="py-2.5 px-3.5 text-slate-600">Neon Orthopaedic Hospital, Seoul (Dr. Jin Young Park)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="py-2 px-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 text-center font-medium">
                Accredited post-graduate fellowships in India &amp; South Korea
              </div>
            </div>

            {/* Career & Appointments */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-soft overflow-hidden flex flex-col justify-between" id="career">
              <div className="py-3 px-4 bg-navy text-white">
                <h3 className="font-heading font-bold text-sm sm:text-base">
                  Career &amp; Institutional Appointments
                </h3>
              </div>
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-2.5 px-3.5 font-bold text-navy w-28">2010–2012</td>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">Senior Registrar</td>
                      <td className="py-2.5 px-3.5 text-slate-600">K.E.M. Hospital, Mumbai</td>
                    </tr>
                    <tr className="bg-slate-50/40 hover:bg-slate-50/60">
                      <td className="py-2.5 px-3.5 font-bold text-navy w-28">2012–2013</td>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">Consultant Surgeon</td>
                      <td className="py-2.5 px-3.5 text-slate-600">Mewar Group of Orthopaedic Hospitals</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-2.5 px-3.5 font-bold text-navy w-28">2015–2016</td>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">Lecturer in Orthopaedics</td>
                      <td className="py-2.5 px-3.5 text-slate-600">NDMVP Medical College, Nashik</td>
                    </tr>
                    <tr className="bg-slate-50/40 hover:bg-slate-50/60">
                      <td className="py-2.5 px-3.5 font-bold text-navy w-28">Present</td>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">Director &amp; Chief Surgeon</td>
                      <td className="py-2.5 px-3.5 text-slate-600">Kasliwal Super Speciality Hospital</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="py-2 px-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 text-center font-medium">
                Leading joint replacement &amp; orthopaedic services in Nashik
              </div>
            </div>
          </div>
        </section>

        {/* 5. Areas of Clinical Focus */}
        <section id="expertise" className="scroll-mt-24 border-t border-slate-100 pt-8 sm:pt-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Surgical Specialisation
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Areas of Clinical Focus
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 leading-relaxed">
              Specialized sub-disciplines evaluated and operated by Dr. Vishal Kasliwal:
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <Link href="/knee#robotic-total-knee-replacement" className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white shadow-soft hover:shadow-lift hover:border-clinical-blue transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Knee</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Robotic Knee Replacement</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">VELYS™ image-free precision total knee replacement.</p>
              </div>
              <span className="mt-3 text-xs font-semibold text-clinical-blue inline-flex items-center gap-1">
                Explore procedure →
              </span>
            </Link>

            <Link href="/knee#partial-knee-replacement" className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white shadow-soft hover:shadow-lift hover:border-clinical-blue transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Knee</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Partial Knee Replacement</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">Bone-preserving unicompartmental resurfacing.</p>
              </div>
              <span className="mt-3 text-xs font-semibold text-clinical-blue inline-flex items-center gap-1">
                Explore procedure →
              </span>
            </Link>

            <Link href="/hip#hip-replacement" className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white shadow-soft hover:shadow-lift hover:border-clinical-blue transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Hip</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Total Hip Replacement</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">Ceramic articulation for arthritis, AVN and trauma.</p>
              </div>
              <span className="mt-3 text-xs font-semibold text-clinical-blue inline-flex items-center gap-1">
                Explore procedure →
              </span>
            </Link>

            <Link href="/robotic-joint-replacement#revision-joint-replacement" className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white shadow-soft hover:shadow-lift hover:border-clinical-blue transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Complex</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Revision Joint Surgery</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">Redo reconstruction for failed joint implants.</p>
              </div>
              <span className="mt-3 text-xs font-semibold text-clinical-blue inline-flex items-center gap-1">
                Explore procedure →
              </span>
            </Link>

            <Link href="/arthroscopy#acl-reconstruction" className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white shadow-soft hover:shadow-lift hover:border-clinical-blue transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Sports</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">ACL &amp; Ligament Repair</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">Arthroscopic reconstruction for sports instability.</p>
              </div>
              <span className="mt-3 text-xs font-semibold text-clinical-blue inline-flex items-center gap-1">
                Explore procedure →
              </span>
            </Link>

            <Link href="/arthroscopy#meniscus-tear" className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white shadow-soft hover:shadow-lift hover:border-clinical-blue transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Cartilage</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Meniscus Preservation</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">Keyhole meniscus suturing and cartilage repair.</p>
              </div>
              <span className="mt-3 text-xs font-semibold text-clinical-blue inline-flex items-center gap-1">
                Explore procedure →
              </span>
            </Link>

            <Link href="/arthroscopy#shoulder-arthroscopy" className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white shadow-soft hover:shadow-lift hover:border-clinical-blue transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Shoulder</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Shoulder Arthroscopy</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">Rotator cuff repair &amp; Bankart shoulder stabilization.</p>
              </div>
              <span className="mt-3 text-xs font-semibold text-clinical-blue inline-flex items-center gap-1">
                Explore procedure →
              </span>
            </Link>

            <Link href="/arthroscopy#fracture-and-trauma-care" className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white shadow-soft hover:shadow-lift hover:border-clinical-blue transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Trauma</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Fracture &amp; Trauma Care</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">Complex fracture fixation and round-the-clock ICU.</p>
              </div>
              <span className="mt-3 text-xs font-semibold text-clinical-blue inline-flex items-center gap-1">
                Explore procedure →
              </span>
            </Link>
          </div>
        </section>

        {/* 6. Surgical Philosophy */}
        <section id="surgical-philosophy" className="scroll-mt-24 border-t border-slate-100 pt-8 sm:pt-10">
          <div className="rounded-3xl bg-navy p-6 sm:p-8 text-white shadow-lift">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-light">
              Guiding Principles
            </span>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold leading-tight">
              Our Surgical Philosophy: Not every knee is the same.
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Why should every joint be treated with one fixed cookie-cutter approach? We align every surgical decision to your unique anatomy.
            </p>

            <div className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4 sm:p-5 border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gold-light text-base">Personalised Alignment</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Planning is tailored to your individual natural anatomy and soft-tissue balance rather than an arbitrary mechanical average.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 sm:p-5 border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gold-light text-base">Digital Robotic Precision</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Robotic optical verification helps translate the pre-surgical plan into sub-millimetre bone cuts and balanced kinematics.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 sm:p-5 border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gold-light text-base">Preserving What Matters</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Muscle-sparing subvastus approaches preserve the quadriceps tendon, healthy bone compartments, and native ligaments.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 sm:p-5 border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gold-light text-base">The Right Operation, or None</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Non-surgical care first; partial joint replacement when suitable; total replacement only when clinically indicated.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 sm:p-5 border border-white/10 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
                <div>
                  <h3 className="font-bold text-gold-light text-base">Rapid Functional Recovery</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Multi-modal pain management and early next-day assisted walking build confidence and restore daily active living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Kasliwal Super Speciality Hospital (With Photo) */}
        <section id="hospital" className="scroll-mt-24 border-t border-slate-100 pt-8 sm:pt-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Centre of Excellence
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Kasliwal Super Speciality Hospital
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 leading-relaxed">
              Kasliwal Hospital was established in Nashik in 1981. Its super speciality centre at Bosco Centre, Prasad Circle, Gangapur Road, is home to Kasliwal Joint Institute, purpose-built for joint replacement and advanced orthopaedic surgery.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Real Exterior Hospital Photo */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/hospital/hospital.jpeg"
                    alt="Kasliwal Super Speciality Hospital at Bosco Centre, Gangapur Road, Nashik"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-500 text-center">
                Kasliwal Super Speciality Hospital, Bosco Centre, Prasad Circle, Gangapur Road, Nashik.
              </p>
            </div>

            {/* Right: Hospital Facilities Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-soft">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-navy">Laminar Airflow OT</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">Ultra-clean vertical laminar air distribution for sterile infection control.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-soft">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-navy">VELYS™ Robotic Suite</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">Equipped with Johnson &amp; Johnson DePuy Synthes robotic surgical system.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-soft">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-navy">24/7 Intensive Care (ICU)</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">Round-the-clock intensivist physician cover and vital telemetry monitoring.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-soft">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-navy">In-House Physiotherapy</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">Dedicated rehabilitation suite with parallel walking bars and stair trainers.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-soft">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-navy">Inpatient Accommodation</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">Spacious private rooms, semi-private rooms, and dedicated attendant facilities.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-soft">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-navy">Cashless Insurance Desk</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">Hassle-free pre-authorization processing with major insurance companies &amp; TPAs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Care Team */}
        <section id="team" className="scroll-mt-24 border-t border-slate-100 pt-8 sm:pt-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Multidisciplinary Support
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Our Clinical Care Team
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every joint replacement patient is supported by an integrated clinical team working in unison:
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">Surgery</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Orthopaedic Surgeons</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Fellowship-trained surgical team executing precision robotic and minimally invasive joint procedures.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Led by Dr. Vishal Kasliwal
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">Anaesthesia</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Anaesthetists &amp; Intensivists</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Specialists administering advanced nerve blocks, spinal anaesthesia, and round-the-clock ICU supervision.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                24/7 Emergency &amp; pain cover
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">Rehabilitation</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Physiotherapy Team</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dedicated mobility therapists guiding early assisted walking, bed transfers, and progressive home exercises.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Same-day assisted walking
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue">Coordination</span>
                <h3 className="mt-1 font-heading font-bold text-base text-navy">Care Coordinators</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Administrative coordinators assisting with appointment scheduling, insurance pre-authorisations, and discharge.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-slate-500">
                End-to-end patient guidance
              </div>
            </div>
          </div>
        </section>

        {/* 9. Visit Us & Location */}
        <section id="visit-us" className="scroll-mt-24 border-t border-slate-100 pt-8 sm:pt-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Clinic &amp; Hospital Address
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-navy">
              Visit Kasliwal Super Speciality Hospital
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Conveniently located at Prasad Circle, Gangapur Road, with dedicated parking and accessibility:
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left: Address & OPD Hours */}
            <div className="lg:col-span-7 rounded-2xl bg-slate-50 p-6 sm:p-7 border border-slate-200 shadow-soft flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-navy">{HOSPITAL_NAME}</h3>
                  <p className="text-sm text-slate-600 mt-1">{LOCATION_ADDRESS}, {LOCATION_CITY}, Maharashtra 422005</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue block">OPD Hours</span>
                    <p className="text-sm text-slate-700 mt-0.5">Mon–Sat: 10:00 AM – 2:00 PM</p>
                    <p className="text-sm text-slate-700">Evening: 5:00 PM – 8:00 PM</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-clinical-blue block">Emergency &amp; Trauma</span>
                    <p className="text-sm text-slate-700 mt-0.5">24 Hours / 7 Days a Week</p>
                    <p className="text-sm font-semibold text-navy mt-0.5">{PHONE_DISPLAY}</p>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-500">
                  Landmarks: Located at Prasad Circle on Gangapur Road. Ample visitor and patient parking available.
                </div>
              </div>

              <div className="pt-5 border-t border-slate-200 flex flex-wrap gap-3">
                <Button href="/book-appointment" variant="navy" size="sm">
                  Book OPD Appointment
                </Button>
                <Button href="/contact" variant="outline" size="sm">
                  View Map &amp; Directions
                </Button>
                <Button href={`tel:${PHONE_TEL}`} variant="outline" size="sm">
                  Call Hospital
                </Button>
              </div>
            </div>

            {/* Right: Quick Directions Card */}
            <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-slate-200 shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">Location Guidance</span>
                <h3 className="mt-1 font-heading font-bold text-base sm:text-lg text-navy">
                  Easy Access from Across Nashik
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>5 mins from College Road &amp; Canada Corner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>15 mins from CBS Bus Stand, Nashik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>25 mins from Nashik Road Railway Station</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                    <span>Direct access via Mumbai-Agra Highway / Gangapur Road</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="font-semibold text-clinical-blue hover:text-navy text-xs sm:text-sm inline-flex items-center gap-1.5"
                >
                  <span>Open full directions &amp; Google Map</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Closing CTA */}
        <section id="book">
          <CTA
            title="Consult Dr. Vishal Kasliwal"
            description="Book an in-person assessment at Kasliwal Super Speciality Hospital, Gangapur Road, Nashik."
          />
        </section>

        {/* Medical Review Box */}
        <MedicalReviewBox />
      </Container>
    </div>
  );
}
