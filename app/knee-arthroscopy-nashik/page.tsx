import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTA from "@/components/shared/CTA";

export const metadata: Metadata = {
  title: "Knee Arthroscopy in Nashik",
  description: "Minimally invasive keyhole knee arthroscopy for meniscus, cartilage, and ligament tears.",
  alternates: {
    canonical: "https://kasliwaljointinstitute.com/knee-arthroscopy-nashik",
  },
};

export default function Page() {
  return (
    <Container className="py-10">
      <Breadcrumbs items={[
          { label: "Knee Care", href: "/knee-specialist-nashik" },
          { label: "Knee Arthroscopy in Nashik" },
        ]} />
      <header className="border-b border-slate-200 pb-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-navy">
          Knee Arthroscopy in Nashik
        </h1>
      </header>

      <section className="rounded-3xl bg-gradient-to-br from-ice-blue/60 to-white p-8 shadow-soft ring-1 ring-navy/5 text-center text-slate-600">
        <p className="text-base font-bold text-navy">Clinical Page Foundation</p>
        <p className="mt-2 text-sm max-w-xl mx-auto">
          This is a verified page placeholder for <strong>Knee Arthroscopy in Nashik</strong>.
          Detailed copy will be populated during the page-by-page build following the hospital masterplan.
        </p>
      </section>

      <CTA />
    </Container>
  );
}
