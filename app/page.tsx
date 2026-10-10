import { Suspense } from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import TrustBar from "@/components/sections/home/TrustBar";
import ReviewsMarquee, { ReviewsMarqueeSkeleton } from "@/components/sections/home/ReviewsMarquee";
import CareGrid from "@/components/sections/home/CareGrid";
import FlagshipRoboticSection from "@/components/sections/home/FlagshipRoboticSection";
import PhilosophySection from "@/components/sections/home/PhilosophySection";
import VelysTechnologySection from "@/components/sections/home/VelysTechnologySection";
import SurgeonSection from "@/components/sections/home/SurgeonSection";
import JourneySection from "@/components/sections/home/JourneySection";
import HospitalSection from "@/components/sections/home/HospitalSection";
import StoriesSection from "@/components/sections/home/StoriesSection";
import KnowledgePreviewSection from "@/components/sections/home/KnowledgePreviewSection";
import HomeFAQSection from "@/components/sections/home/HomeFAQSection";
import ClosingCTASection from "@/components/sections/home/ClosingCTASection";

export const metadata: Metadata = {
  title: "Robotic Knee & Hip Replacement in Nashik | Kasliwal Joint Institute",
  description:
    "Robotic knee, partial knee and hip replacement in Nashik with Dr. Vishal Kasliwal, fellowship-trained joint replacement surgeon. Book a consultation.",
  keywords: [
    "robotic knee replacement Nashik",
    "joint replacement surgeon Nashik",
    "knee replacement Nashik",
    "hip replacement Nashik",
    "Dr Vishal Kasliwal",
    "VELYS robotic surgery Nashik",
    "Kasliwal Hospital",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 4.1 Hero Section */}
      <HeroSection />

      {/* 4.2 Trust & Key Numbers Bar */}
      <TrustBar />

      {/* Google reviews marquee: streams in (live data can't be cached under Google's policy) */}
      <Suspense fallback={<ReviewsMarqueeSkeleton />}>
        <ReviewsMarquee />
      </Suspense>

      {/* 4.3 Expert Care for Every Joint */}
      <CareGrid />

      {/* 4.4 Flagship: Robotic Knee Replacement */}
      <FlagshipRoboticSection />

      {/* 4.5 Surgical Philosophy */}
      <PhilosophySection />

      {/* 4.6 Meet the Technology: VELYS™ */}
      <VelysTechnologySection />

      {/* 4.7 Meet the Surgeon: Dr. Vishal Kasliwal */}
      <SurgeonSection />

      {/* 4.8 Your Surgery Journey */}
      <JourneySection />

      {/* 4.9 Kasliwal Super Speciality Hospital */}
      <HospitalSection />

      {/* 4.10 Patient Stories & Reviews */}
      <StoriesSection />

      {/* 4.11 Knowledge Centre Preview */}
      <KnowledgePreviewSection />

      {/* FAQs (not in plan §4, kept for FAQPage rich results) */}
      <HomeFAQSection />

      {/* 4.12 Closing Call to Action */}
      <ClosingCTASection />
    </div>
  );
}
