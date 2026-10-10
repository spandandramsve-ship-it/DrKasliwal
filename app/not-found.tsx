import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-bold tracking-widest uppercase text-gold">
        404 Error
      </p>
      <h1 className="mt-2 text-3xl sm:text-5xl font-heading font-bold tracking-tight text-navy">
        Page Not Found
      </h1>
      <p className="mt-4 text-base text-slate-600 max-w-md mx-auto">
        The page or clinical resource you are looking for may have been updated or moved.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center rounded-full bg-clinical-blue px-6 text-base font-semibold text-white shadow-glow transition hover:bg-navy"
        >
          Return to Homepage
        </Link>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center rounded-full border-2 border-navy/15 bg-white px-6 text-base font-semibold text-navy transition hover:border-clinical-blue"
        >
          Contact Clinic
        </Link>
      </div>
    </Container>
  );
}
