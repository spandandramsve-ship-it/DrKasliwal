import Image from "next/image";
import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { getReviewFeed } from "@/lib/reviews";
import { RATING } from "@/lib/constants";
import type { Review, ReviewFeed } from "@/types";
import ReviewsScroller from "@/components/sections/home/ReviewsScroller";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 shrink-0 ${filled ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} filled={i < rounded} />
      ))}
    </div>
  );
}

function sourceNote(feed: ReviewFeed) {
  if (feed.source === "google") return "Reviews streamed directly from Google Business Profile, sorted by relevance.";
  if (feed.source === "curated") return "Selected public reviews from verified patients on Google Maps.";
  return "Development preview with sample cards. Not shown in production.";
}

/**
 * Google reviews in an infinite marquee that pauses on hover/focus.
 * Fetches live data, so it must be rendered inside <Suspense> (see app/page.tsx).
 */
export default async function ReviewsMarquee() {
  const feed = await getReviewFeed();
  if (!feed || feed.reviews.length === 0) return null;

  const rating = feed.rating ?? Number(RATING.value);
  const countLabel = feed.count ? `${feed.count.toLocaleString("en-IN")}+ Google reviews` : `${RATING.count} verified reviews`;

  return (
    <section aria-labelledby="reviews-heading" className="relative overflow-hidden bg-gradient-to-b from-white via-ice-blue/25 to-white py-12 sm:py-16">
      <Container size="xl">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">Patient Stories &amp; Experiences</Eyebrow>
          <h2 id="reviews-heading" className="mt-2.5 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Back to doing what you love.
          </h2>
          <p className="mt-2.5 text-base sm:text-lg leading-relaxed text-slate-600">
            Hear from patients across Nashik and North Maharashtra about walking, climbing stairs, and returning to active life after robotic joint replacement and arthroscopy.
          </p>

          {/* Centered Actions: Google trust badge + Patient stories button */}
          <div className="mt-6 mb-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Google rating trust card */}
            <div className="inline-flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-2.5 shadow-soft backdrop-blur sm:px-5 sm:py-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                <GoogleIcon className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-2xl font-bold leading-none text-navy">{rating.toFixed(1)}</span>
                  <div className="flex flex-col">
                    <Stars rating={rating} />
                    <span className="text-[11px] font-semibold text-emerald-700">★ Excellent rating</span>
                  </div>
                </div>
                <p className="text-[11px] font-medium text-slate-500">{countLabel}</p>
              </div>
            </div>

            <Button href="/patient-stories" variant="navy" size="sm" arrow>
              Read Patient Stories
            </Button>
          </div>
        </div>
      </Container>

      {/* Vertical 3-Column Testimonial Scroller with smooth fade mask */}
      <Container size="xl">
        <ReviewsScroller reviews={feed.reviews} />
      </Container>

      {feed.listingUrl && (
        <Container className="mt-8 flex justify-center border-t border-slate-200/60 pt-6">
          <Button href={feed.listingUrl} variant="outline" size="sm" arrow>
            View All Reviews on Google Maps
          </Button>
        </Container>
      )}
    </section>
  );
}

/** Same footprint as the loaded section, so nothing shifts while live reviews stream in */
export function ReviewsMarqueeSkeleton() {
  return (
    <section aria-hidden="true" className="bg-gradient-to-b from-white via-ice-blue/25 to-white py-16 sm:py-20">
      <Container>
        <div className="h-8 w-40 rounded-full bg-sand/70" />
        <div className="mt-3 h-10 w-80 max-w-full rounded-2xl bg-ice-blue" />
      </Container>
      <div className="mt-10 flex gap-5 overflow-hidden px-4 py-2">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="h-64 w-[320px] shrink-0 animate-pulse rounded-[2rem] bg-white p-6 shadow-soft sm:w-[380px]" />
        ))}
      </div>
    </section>
  );
}

