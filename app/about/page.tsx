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
      {/* 1. Hero */}
      <section className="bg-navy py-10 sm:py-14 text-white">
        <Container>
          <Breadcrumbs items={[{ label: "About Us" }]} tone="dark" className="mb-3 sm:mb-4" />
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              About Dr. Vishal Kasliwal &amp; Kasliwal Joint Institute
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Kasliwal Joint Institute is the joint replacement and arthroscopy centre of Kasliwal Super Speciality Hospital, Nashik, led by orthopaedic surgeon Dr. Vishal Kasliwal. We focus on knee, hip and shoulder care, from accurate diagnosis and non-surgical treatment to robotic-assisted joint replacement and keyhole surgery.
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
              Dr. Vishal Kasliwal · M.S. Orthopaedics · Reg. No. MMC/2005/02/1098
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16 space-y-16">
        {/* 2. Meet Dr. Vishal Kasliwal */}
        <section id="dr-vishal-kasliwal" className="scroll-mt-36">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                Dr. Vishal Kasliwal
              </h2>
              <p className="text-clinical-blue font-semibold text-sm sm:text-base">
                M.S. Orthopaedics · F.I.J.R. (Hip &amp; Knee) · F.I.A. (Shoulder), South Korea<br />
                Joint Replacement &amp; Arthroscopy Surgeon · Director, Kasliwal Super Speciality Hospital, Nashik<br />
                Registration: Maharashtra Medical Council / NMR No. MMC/2005/02/1098
              </p>
              <p>
                Dr. Vishal Kasliwal is an orthopaedic surgeon in Nashik whose practice is dedicated to joint replacement of the knee and hip and arthroscopic (keyhole) surgery of the knee and shoulder. He trained in computer-navigated joint replacement at Breach Candy Hospital, Mumbai, under Dr. Arun Mullaji, completed an arthroscopy fellowship in Pune under Dr. Sachin Tapasvi, and underwent advanced training in shoulder arthroscopy in Seoul, South Korea under Dr. Jin Young Park.
              </p>
              <p>
                He performs robotic-assisted knee replacement with the VELYS™ system, alongside partial knee replacement, total hip replacement, complex revision surgery and arthroscopic ligament reconstruction. Over his surgical career, he has performed over 5,000 joint replacement and arthroscopy procedures.
              </p>
              <p>
                Dr. Kasliwal has also contributed to academic surgical training as a lecturer in Orthopaedics at NDMVP Medical College, Nashik.
              </p>
            </div>
            <div className="lg:col-span-4 rounded-2xl bg-slate-50 p-6 border border-slate-200">
              <h3 className="font-heading font-bold text-base text-navy">Credentials at a Glance</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• 15+ years dedicated surgical experience</li>
                <li>• ~5,000 procedures performed</li>
                <li>• Certified VELYS™ Robotic Surgeon</li>
                <li>• Fellowship training in Mumbai, Pune &amp; Seoul</li>
                <li>• Strict adherence to NMC ethical standards</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Education & Training */}
        <section id="training" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            Education &amp; Fellowship Training
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3.5 font-heading font-semibold w-24">Year</th>
                  <th className="p-3.5 font-heading font-semibold">Qualification / Fellowship</th>
                  <th className="p-3.5 font-heading font-semibold">Institution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 border-x border-b border-slate-200">
                <tr>
                  <td className="p-3.5 font-bold text-navy">2005</td>
                  <td className="p-3.5 text-slate-700">MBBS</td>
                  <td className="p-3.5 text-slate-600">MR Medical College, Kalaburagi, Karnataka</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 font-bold text-navy">2010</td>
                  <td className="p-3.5 text-slate-700">M.S. Orthopaedics</td>
                  <td className="p-3.5 text-slate-600">Jawaharlal Nehru Medical College, Belagavi, Karnataka</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy">2011</td>
                  <td className="p-3.5 text-slate-700">Fellowship in Computer-Navigated Joint Replacement</td>
                  <td className="p-3.5 text-slate-600">Breach Candy Hospital, Mumbai, under Dr. Arun Mullaji</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 font-bold text-navy">2014</td>
                  <td className="p-3.5 text-slate-700">Fellowship in Knee &amp; Shoulder Arthroscopy</td>
                  <td className="p-3.5 text-slate-600">Pune, under Dr. Sachin Tapasvi</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy">2015</td>
                  <td className="p-3.5 text-slate-700">Fellowship in Shoulder &amp; Elbow Arthroscopy</td>
                  <td className="p-3.5 text-slate-600">Neon Orthopaedic Hospital, Seoul, South Korea, under Dr. Jin Young Park</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Career */}
        <section id="career" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            Career &amp; Appointments
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3.5 font-heading font-semibold w-32">Period</th>
                  <th className="p-3.5 font-heading font-semibold">Position</th>
                  <th className="p-3.5 font-heading font-semibold">Centre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 border-x border-b border-slate-200">
                <tr>
                  <td className="p-3.5 font-medium text-slate-700">2010–2012</td>
                  <td className="p-3.5 font-semibold text-navy">Senior Registrar, Orthopaedics</td>
                  <td className="p-3.5 text-slate-600">K.E.M. Hospital, Mumbai</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-700">2012–2013</td>
                  <td className="p-3.5 font-semibold text-navy">Consultant Orthopaedic Surgeon</td>
                  <td className="p-3.5 text-slate-600">Mewar Group of Orthopaedic Hospitals, Udaipur</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-slate-700">2015–2016</td>
                  <td className="p-3.5 font-semibold text-navy">Lecturer in Orthopaedics</td>
                  <td className="p-3.5 text-slate-600">NDMVP Medical College, Nashik</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-700">Present</td>
                  <td className="p-3.5 font-semibold text-navy">Director &amp; Chief Surgeon</td>
                  <td className="p-3.5 text-slate-600">Kasliwal Super Speciality Hospital / Kasliwal Joint Institute, Nashik</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Areas of Clinical Focus */}
        <section id="expertise" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            Areas of Clinical Focus
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/knee#robotic-total-knee-replacement" className="rounded-2xl border border-slate-200 p-4 bg-white hover:border-clinical-blue transition-colors">
              <p className="font-heading font-bold text-base text-navy">Robotic Knee Replacement</p>
              <p className="mt-1 text-xs text-slate-600">VELYS™ image-free precision total knee replacement</p>
            </Link>
            <Link href="/knee#partial-knee-replacement" className="rounded-2xl border border-slate-200 p-4 bg-white hover:border-clinical-blue transition-colors">
              <p className="font-heading font-bold text-base text-navy">Partial Knee Replacement</p>
              <p className="mt-1 text-xs text-slate-600">Bone-preserving unicompartmental knee resurfacing</p>
            </Link>
            <Link href="/hip#hip-replacement" className="rounded-2xl border border-slate-200 p-4 bg-white hover:border-clinical-blue transition-colors">
              <p className="font-heading font-bold text-base text-navy">Total Hip Replacement</p>
              <p className="mt-1 text-xs text-slate-600">Advanced planning for arthritis, AVN and trauma</p>
            </Link>
            <Link href="/robotic-joint-replacement#revision-joint-replacement" className="rounded-2xl border border-slate-200 p-4 bg-white hover:border-clinical-blue transition-colors">
              <p className="font-heading font-bold text-base text-navy">Revision Joint Surgery</p>
              <p className="mt-1 text-xs text-slate-600">Complex redo surgery for failed joint replacements</p>
            </Link>
            <Link href="/arthroscopy#acl-reconstruction" className="rounded-2xl border border-slate-200 p-4 bg-white hover:border-clinical-blue transition-colors">
              <p className="font-heading font-bold text-base text-navy">ACL &amp; Ligament Repair</p>
              <p className="mt-1 text-xs text-slate-600">Arthroscopic reconstruction for sports instability</p>
            </Link>
            <Link href="/arthroscopy#meniscus-tear" className="rounded-2xl border border-slate-200 p-4 bg-white hover:border-clinical-blue transition-colors">
              <p className="font-heading font-bold text-base text-navy">Meniscus Preservation</p>
              <p className="mt-1 text-xs text-slate-600">Keyhole meniscus suturing and cartilage repair</p>
            </Link>
            <Link href="/arthroscopy#shoulder-arthroscopy" className="rounded-2xl border border-slate-200 p-4 bg-white hover:border-clinical-blue transition-colors">
              <p className="font-heading font-bold text-base text-navy">Shoulder Arthroscopy</p>
              <p className="mt-1 text-xs text-slate-600">Rotator cuff repair and Bankart shoulder stabilization</p>
            </Link>
            <Link href="/arthroscopy#fracture-and-trauma-care" className="rounded-2xl border border-slate-200 p-4 bg-white hover:border-clinical-blue transition-colors">
              <p className="font-heading font-bold text-base text-navy">Fracture &amp; Trauma</p>
              <p className="mt-1 text-xs text-slate-600">Complex musculoskeletal trauma and ICU cover</p>
            </Link>
          </div>
        </section>

        {/* 6. Surgical Philosophy */}
        <section id="surgical-philosophy" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <div className="rounded-3xl bg-navy p-6 sm:p-10 text-white">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">
              Our Surgical Philosophy: Not every knee is the same.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="font-bold text-gold-light text-base">Personalised Alignment</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-200">Planning is tailored to your individual natural anatomy and soft-tissue balance.</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="font-bold text-gold-light text-base">Precision</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-200">Robotic measurement and bone preparation translate plans into accurate implant positioning.</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="font-bold text-gold-light text-base">Preserving What Matters</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-200">Muscle-sparing subvastus approaches and preserving healthy bone and native ligaments.</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="font-bold text-gold-light text-base">The Right Operation, or None</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-200">Non-surgical care first; partial replacement when suitable; total replacement when needed.</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="font-bold text-gold-light text-base">Functional Recovery</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-200">Early next-day mobilisation and structured physiotherapy protocols.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Kasliwal Super Speciality Hospital */}
        <section id="hospital" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            Kasliwal Super Speciality Hospital
          </h2>
          <p className="mt-3 text-base text-slate-700 leading-relaxed max-w-3xl">
            Kasliwal Hospital was established in Nashik in 1981. Its super speciality facility at Bosco Centre, Prasad Circle, Gangapur Road, is home to Kasliwal Joint Institute, purpose-built for orthopaedic surgery and advanced joint replacement.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
              <h3 className="font-heading font-bold text-base text-navy">Laminar Airflow OT</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">Ultra-clean vertical laminar air distribution for sterile infection control.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
              <h3 className="font-heading font-bold text-base text-navy">VELYS™ Robotic System</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">Equipped with Johnson &amp; Johnson DePuy Synthes robotic surgical suite.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
              <h3 className="font-heading font-bold text-base text-navy">Intensive Care Unit (ICU)</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">Round-the-clock intensivist physician cover and continuous vitals monitoring.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
              <h3 className="font-heading font-bold text-base text-navy">In-House Physiotherapy</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">Specialized rehabilitation department guiding same-day mobilisation.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
              <h3 className="font-heading font-bold text-base text-navy">Inpatient Rooms</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">Comfortable private, semi-private, and general ward categories.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
              <h3 className="font-heading font-bold text-base text-navy">Cashless Insurance</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">Hassle-free pre-authorization processing with major insurance providers &amp; TPAs.</p>
            </div>
          </div>
        </section>

        {/* 8. Care Team */}
        <section id="team" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            Our Care Team
          </h2>
          <p className="mt-3 text-base text-slate-700 leading-relaxed max-w-3xl">
            Your care is shared by an experienced multidisciplinary team: fellowship-trained orthopaedic surgeons, consultant anaesthetists, physician intensivists, specialized physiotherapists, dedicated nursing staff, and patient care coordinators.
          </p>
        </section>

        {/* 9. Visit Us */}
        <section id="visit-us" className="scroll-mt-36 border-t border-slate-100 pt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            Visit Kasliwal Super Speciality Hospital
          </h2>
          <div className="mt-6 rounded-2xl bg-slate-50 p-6 border border-slate-200 max-w-2xl space-y-3">
            <p className="font-heading font-bold text-lg text-navy">{HOSPITAL_NAME}</p>
            <p className="text-sm text-slate-700">{LOCATION_ADDRESS}, {LOCATION_CITY}, Maharashtra 422005</p>
            <p className="text-sm text-slate-700"><strong>OPD Timings:</strong> Monday to Saturday: 10:00 AM – 2:00 PM &amp; 5:00 PM – 8:00 PM</p>
            <p className="text-sm text-slate-700"><strong>Appointments &amp; Inquiries:</strong> {PHONE_DISPLAY}</p>
            <div className="pt-3 flex gap-3">
              <Button href="/book-appointment" variant="navy" size="sm">
                Book OPD Appointment
              </Button>
              <Button href="/contact" variant="outline" size="sm">
                Location &amp; Directions
              </Button>
            </div>
          </div>
        </section>

        {/* 10. Closing CTA */}
        <section id="book">
          <CTA
            title="Consult Dr. Vishal Kasliwal"
            description="Book an appointment at Kasliwal Super Speciality Hospital, Gangapur Road, Nashik."
          />
        </section>

        {/* Medical Review Box */}
        <MedicalReviewBox />
      </Container>
    </div>
  );
}
