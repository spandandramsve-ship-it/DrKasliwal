import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/constants";

// Plan §4.12: a rounded navy panel floating on white, rather than a full-bleed band
export default function ClosingCTASection() {
  return (
    <section aria-labelledby="closing-heading" className="bg-white py-16 sm:py-24">
      <Container>
        <div data-reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy via-navy to-clinical-blue px-6 py-14 text-center text-white shadow-lift sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
          <div aria-hidden="true" className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-gold/15" />

          <h2 id="closing-heading" className="relative font-heading text-3xl font-bold leading-tight sm:text-5xl">
            Ready to take the next step?
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            Whether you&apos;re exploring treatment options or already considering joint replacement, the first step is
            understanding what&apos;s right for you.
          </p>
          <div className="relative mt-10 flex flex-col justify-center gap-4 md:flex-row">
            <Button href="/book-appointment" variant="light" size="lg" arrow>
              Book an Appointment
            </Button>
            <Button href={`tel:${PHONE_TEL}`} variant="outline-light" size="lg">
              Call {PHONE_DISPLAY}
            </Button>
            <Button href={WHATSAPP_URL} variant="whatsapp" size="lg">
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
