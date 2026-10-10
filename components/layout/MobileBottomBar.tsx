import Link from "next/link";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/constants";

const item = "flex min-h-12 items-center justify-center rounded-full text-base font-semibold";

/** Sticky Call · WhatsApp · Book bar on every page (plan §3, mobile header). */
export default function MobileBottomBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 rounded-t-3xl bg-white/95 p-2 shadow-[0_-8px_30px_-12px_rgb(11_45_82/0.3)] backdrop-blur pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a href={`tel:${PHONE_TEL}`} className={`${item} border border-navy/30 text-navy`}>
          Call
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} bg-whatsapp text-white`}
        >
          WhatsApp
        </a>
        <Link href="/book-appointment" className={`${item} bg-clinical-blue text-white`}>
          Book
        </Link>
      </div>
    </nav>
  );
}
