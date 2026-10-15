import Button from "@/components/ui/Button";
import { PHONE_TEL, PHONE_DISPLAY } from "@/lib/constants";

interface CTAProps {
  title?: string;
  description?: string;
}

/** Mid/closing call-to-action band for inner pages: Book · Call */
export default function CTA({
  title = "Consult Dr. Vishal Kasliwal",
  description = "Get a specialist assessment of your knee, hip or shoulder problem and a clear explanation of your options.",
}: CTAProps) {
  return (
    <section className="relative my-8 sm:my-12 overflow-hidden rounded-3xl sm:rounded-[2rem] bg-gradient-to-br from-navy to-clinical-blue p-6 text-center text-white shadow-lift sm:p-12">
      <div aria-hidden="true" className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-gold/15" />
      <h2 className="relative font-heading text-2xl font-bold sm:text-3xl">{title}</h2>
      <p className="relative mx-auto mt-3 max-w-xl text-base sm:text-lg text-slate-200">{description}</p>
      <div className="relative mt-7 sm:mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
        <Button href="/book-appointment" variant="light" arrow className="w-full sm:w-auto text-center justify-center">
          Book a Consultation
        </Button>
        <Button href={`tel:${PHONE_TEL}`} variant="outline-light" className="w-full sm:w-auto text-center justify-center">
          Call {PHONE_DISPLAY}
        </Button>
      </div>
    </section>
  );
}
