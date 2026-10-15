import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { PHONE_TEL, PHONE_DISPLAY } from "@/lib/constants";

// Plan §4.12: a rounded navy panel floating on white, rather than a full-bleed band
export default function ClosingCTASection() {
  return (
    <section aria-labelledby="closing-heading" className="bg-white py-10 sm:py-14">
      <Container>
        <div data-reveal className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-navy via-navy to-clinical-blue px-5 py-10 text-center text-white shadow-lift sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
          <div aria-hidden="true" className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-gold/15" />

          <h2 id="closing-heading" className="relative font-heading text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
            Ready to take the next step?
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:mt-6 sm:text-lg md:text-xl">
            Whether you&apos;re exploring treatment options or already considering joint replacement, the first step is
            understanding what&apos;s right for you.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button href="/book-appointment" variant="light" size="lg" arrow className="w-full sm:w-auto text-center justify-center">
              Book an Appointment
            </Button>
            <Button href={`tel:${PHONE_TEL}`} variant="outline-light" size="lg" className="w-full sm:w-auto text-center justify-center">
              Call {PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
