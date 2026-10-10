import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";
import MobileMenu from "@/components/navigation/MobileMenu";
import Button from "@/components/ui/Button";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 shadow-[0_6px_24px_-16px_rgb(11_45_82/0.35)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:gap-4 xl:gap-3 2xl:gap-4 sm:px-6 lg:h-20 lg:px-8">
        {/* TODO: replace with the institute's own logo when supplied (plan §2); this is the hospital mark */}
        <Link href="/" className="flex shrink-0 items-center gap-2 leading-none sm:gap-3" aria-label={`${SITE_NAME}, home`}>
          <Image
            src="/logos/kasliwal-logo-transparent.png"
            alt=""
            width={56}
            height={56}
            className="h-10 w-10 sm:h-12 sm:w-12 2xl:h-14 2xl:w-14"
            priority
          />
          <span>
            <span className="block whitespace-nowrap font-heading text-base font-bold text-navy sm:text-xl xl:text-lg 2xl:text-2xl">
              {SITE_NAME}
            </span>
            <span className="mt-1 hidden text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gold sm:block 2xl:tracking-[0.25em]">
              {SITE_TAGLINE}
            </span>
          </span>
        </Link>

        <Navbar />

        <div className="flex items-center gap-2">
          {/* Visibility on wrappers: Button's own `inline-flex` would override `hidden` */}
          <span className="hidden sm:block">
            <Button href="/book-appointment" size="sm">
              Book Appointment
            </Button>
          </span>
          <span className="max-[359px]:hidden sm:hidden">
            <Button href="/book-appointment" size="sm">
              Book
            </Button>
          </span>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
