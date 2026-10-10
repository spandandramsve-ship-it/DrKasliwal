import type { Metadata } from "next";
import ArticlePage, { articleMetadata, articleStaticParams } from "@/components/shared/ArticlePage";

// Articles are fully static; waiting for the complete render lets unknown slugs return a real 404.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return articleStaticParams("hip");
}

export async function generateMetadata({ params }: PageProps<"/knowledge-centre/hip/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return articleMetadata("hip", slug);
}

export default function HipArticlePage({ params }: PageProps<"/knowledge-centre/hip/[slug]">) {
  return <ArticlePage category="hip" params={params} />;
}
