import type { Metadata } from "next";
import ArticlePage, { articleMetadata, articleStaticParams } from "@/components/shared/ArticlePage";

// Articles are fully static; waiting for the complete render lets unknown slugs return a real 404.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return articleStaticParams("robotics");
}

export async function generateMetadata({ params }: PageProps<"/knowledge-centre/robotics/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return articleMetadata("robotics", slug);
}

export default function RoboticsArticlePage({ params }: PageProps<"/knowledge-centre/robotics/[slug]">) {
  return <ArticlePage category="robotics" params={params} />;
}
