import type { Metadata } from "next";
import ArticlePage, { articleMetadata, articleStaticParams } from "@/components/shared/ArticlePage";

// Articles are fully static; waiting for the complete render lets unknown slugs return a real 404.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return articleStaticParams("knee");
}

export async function generateMetadata({ params }: PageProps<"/knowledge-centre/knee/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return articleMetadata("knee", slug);
}

export default function KneeArticlePage({ params }: PageProps<"/knowledge-centre/knee/[slug]">) {
  return <ArticlePage category="knee" params={params} />;
}
