import type { Review, ReviewFeed } from "@/types";
import { curatedReviews, sampleReviews } from "@/data/reviews";
import { RATING } from "@/lib/constants";

interface PlacesReview {
  name: string;
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text: string };
  originalText?: { text: string };
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  googleMapsUri?: string;
}

interface PlacesResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
}

/**
 * Live reviews from Google Places API (New), fetched per request.
 * Google's policies don't allow caching review content, so this is deliberately
 * uncached and must render inside <Suspense>. Returns at most 5 reviews (API limit).
 */
async function fetchGoogleReviews(apiKey: string, placeId: string): Promise<ReviewFeed | null> {
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) {
      console.error(`Google Places reviews request failed: ${res.status}`);
      return null;
    }
    const data = (await res.json()) as PlacesResponse;

    const reviews: Review[] = (data.reviews ?? [])
      .filter((r) => (r.originalText ?? r.text)?.text)
      .map((r) => ({
        id: r.name,
        author: r.authorAttribution?.displayName ?? "Google user",
        authorUrl: r.authorAttribution?.uri,
        authorPhoto: r.authorAttribution?.photoUri,
        rating: r.rating ?? 5,
        // Original language (e.g. Marathi) rather than Google's machine translation
        text: (r.originalText ?? r.text)!.text,
        when: r.relativePublishTimeDescription,
        url: r.googleMapsUri,
      }));

    return {
      source: "google",
      rating: data.rating,
      count: data.userRatingCount,
      listingUrl: data.googleMapsUri,
      reviews,
    };
  } catch (error) {
    console.error("Google Places reviews request error:", error);
    return null;
  }
}

/**
 * Live Google reviews → curated reviews → dev-only samples → nothing.
 *
 * To enable live reviews, set these server-only env vars (e.g. in .env.local / hosting dashboard):
 *   GOOGLE_PLACES_API_KEY  - Google Maps Platform key with "Places API (New)" enabled
 *   GOOGLE_PLACE_ID        - Place ID of the clinic's Google Business Profile
 */
export async function getReviewFeed(): Promise<ReviewFeed | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (apiKey && placeId) {
    const live = await fetchGoogleReviews(apiKey, placeId);
    if (live && live.reviews.length > 0) return live;
  }

  if (curatedReviews.length > 0) {
    return { source: "curated", rating: Number(RATING.value), reviews: curatedReviews };
  }

  if (process.env.NODE_ENV !== "production") {
    return { source: "sample", reviews: sampleReviews };
  }

  return null;
}
