import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";
import MobileMenu from "@/components/navigation/MobileMenu";
import Button from "@/components/ui/Button";
import { SITE_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 shadow-[0_4px_20px_-12px_rgb(11_45_82/0.2)] backdrop-blur-md">
      <div className="flex h-16 w-full items-center justify-between gap-2 px-3.5 sm:px-6 lg:h-20 lg:px-6 xl:gap-3 xl:px-6 2xl:px-12">
        {/* Brand Logo & Wordmark completely on left */}
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 leading-none sm:gap-3" aria-label={`${SITE_NAME}, home`}>
          <Image
            src="/logos/kasliwal-logo.png"
            alt=""
            width={56}
            height={56}
            className="h-9 w-9 sm:h-12 sm:w-12 2xl:h-14 2xl:w-14 shrink-0 rounded-full"
            priority
          />
          <span className="whitespace-nowrap font-serif text-[15px] sm:text-lg md:text-xl xl:text-[1.3rem] 2xl:text-2xl font-bold tracking-tight text-navy">
            {SITE_NAME}
          </span>
        </Link>

        <Navbar />

        <div className="flex shrink-0 items-center gap-2">
          {/* Visibility on wrappers: Button's own `inline-flex` would override `hidden` */}
          <span className="hidden sm:block">
            <Button href="/book-appointment" size="sm">
              Book Appointment
            </Button>
          </span>
          <span className="hidden min-[460px]:block sm:hidden">
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
