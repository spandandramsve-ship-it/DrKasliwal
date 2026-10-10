import Image from "next/image";
import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { getReviewFeed } from "@/lib/reviews";
import { RATING } from "@/lib/constants";
import type { Review, ReviewFeed } from "@/types";

/** Repeat short lists so one copy of the track is always wider than the screen */
const MIN_ITEMS_PER_COPY = 8;
/** Seconds each card takes to travel past (sets marquee speed) */
const SECONDS_PER_CARD = 7;

const AVATAR_GRADIENTS = [
  "from-blue-600 to-indigo-700",
  "from-teal-600 to-emerald-700",
  "from-amber-500 to-orange-600",
  "from-purple-600 to-indigo-800",
  "from-cyan-600 to-blue-700",
  "from-rose-500 to-pink-700",
];

function getAvatarGradient(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % AVATAR_GRADIENTS.length;
  return AVATAR_GRADIENTS[index];
}

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

function ReviewCard({ review }: { review: Review }) {
  const initial = review.author.trim().charAt(0).toUpperCase();
  const gradient = getAvatarGradient(review.author);

  return (
    <figure className="relative mr-5 flex w-[320px] shrink-0 flex-col justify-between rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-clinical-blue/30 hover:shadow-lift sm:w-[380px]">
      <div>
        {/* Top bar: Author + Verified status + Google Icon */}
        <figcaption className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {review.authorPhoto ? (
              <Image
                src={review.authorPhoto}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-navy/5"
              />
            ) : (
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} font-heading text-lg font-bold text-white shadow-soft`}
              >
                {initial}
              </span>
            )}
            <div className="min-w-0">
              <span className="block truncate font-heading text-base font-bold text-navy">
                {review.author}
              </span>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
                  <svg viewBox="0 0 16 16" className="h-3 w-3 fill-emerald-600" aria-hidden="true">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                  Verified Patient
                </span>
                {review.when && <span className="text-xs text-slate-400">{review.when}</span>}
              </div>
            </div>
          </div>

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200/70">
            <GoogleIcon className="h-5 w-5" />
          </div>
        </figcaption>

        {/* Rating row */}
        <div className="mt-4 flex items-center gap-2">
          <Stars rating={review.rating} />
          <span className="rounded-md bg-amber-50 px-1.5 py-0.5 text-xs font-bold text-amber-800">
            {review.rating.toFixed(1)}
          </span>
        </div>

        {/* Review body */}
        <blockquote className="mt-3 line-clamp-4 text-base leading-relaxed text-slate-700">
          &ldquo;{review.text}&rdquo;
        </blockquote>
      </div>

      {/* Footer link */}
      {review.url && (
        <div className="mt-5 border-t border-slate-100 pt-3">
          <a
            href={review.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical-blue transition-colors hover:text-navy"
          >
            Posted on Google Maps
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </figure>
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

  const repeats = Math.max(1, Math.ceil(MIN_ITEMS_PER_COPY / feed.reviews.length));
  const items = Array.from({ length: repeats }, () => feed.reviews).flat();
  const duration = `${items.length * SECONDS_PER_CARD}s`;

  const rating = feed.rating ?? Number(RATING.value);
  const countLabel = feed.count ? `${feed.count.toLocaleString("en-IN")}+ Google reviews` : `${RATING.count} verified reviews`;

  return (
    <section aria-labelledby="reviews-heading" className="relative overflow-hidden bg-gradient-to-b from-white via-ice-blue/25 to-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Patient Experiences</Eyebrow>
            <h2 id="reviews-heading" className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Trusted by Patients Across Nashik
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-slate-600">
              Real recovery stories and feedback on robotic joint replacement, arthroscopy, and hospital care.
            </p>
          </div>

          {/* Google rating trust card */}
          <div className="flex items-center gap-4 rounded-3xl border border-slate-200/80 bg-white/95 p-4 shadow-soft backdrop-blur sm:px-6 sm:py-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
              <GoogleIcon className="h-7 w-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-3xl font-bold leading-none text-navy">{rating.toFixed(1)}</span>
                <div className="flex flex-col">
                  <Stars rating={rating} />
                  <span className="text-xs font-semibold text-emerald-700">★ Excellent rating</span>
                </div>
              </div>
              <p className="mt-1 text-xs font-medium text-slate-500">{countLabel}</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Marquee Track with smooth fade mask */}
      <div className="relative mt-10 py-2">
        <div className="marquee" style={{ ["--marquee-duration" as string]: duration }}>
          <div className="marquee-track flex">
            <div className="flex">
              {items.map((review, i) => (
                <ReviewCard key={`${review.id}-${i}`} review={review} />
              ))}
            </div>
            {/* Identical copy for the seamless loop; hidden from screen readers and keyboard */}
            <div className="flex" aria-hidden="true" inert>
              {items.map((review, i) => (
                <ReviewCard key={`copy-${review.id}-${i}`} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Container className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-slate-200/60 pt-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          <span>{sourceNote(feed)}</span>
        </div>
        {feed.listingUrl && (
          <Button href={feed.listingUrl} variant="outline" size="sm" arrow>
            View All Reviews on Google Maps
          </Button>
        )}
      </Container>
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

