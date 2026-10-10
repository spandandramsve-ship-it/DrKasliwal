import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTA from "@/components/shared/CTA";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { articles } from "@/data/articles";
import { DOCTOR_NAME } from "@/lib/constants";
import type { Article } from "@/types";

type Category = Article["category"];

const categoryLabels: Record<Category, string> = {
  knee: "Knee",
  hip: "Hip",
  robotics: "Robotics",
};

export function findArticle(category: Category, slug: string) {
  return articles.find((a) => a.category === category && a.slug === slug);
}

export function articleStaticParams(category: Category) {
  return articles.filter((a) => a.category === category).map((a) => ({ slug: a.slug }));
}

export function articleMetadata(category: Category, slug: string): Metadata {
  const article = findArticle(category, slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/knowledge-centre/${category}/${article.slug}` },
  };
}

/**
 * Knowledge Centre article (plan §11 template). `params` is awaited before any
 * streaming so unknown slugs return a real HTTP 404, not a streamed 200.
 */
export default async function ArticlePage({
  category,
  params,
}: {
  category: Category;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = findArticle(category, slug);
  if (!article) notFound();

  const label = categoryLabels[category];

  return (
    <Container size="sm" className="py-10">
      <Breadcrumbs
        items={[
          { label: "Knowledge Centre", href: "/knowledge-centre" },
          { label, href: `/knowledge-centre/${category}` },
          { label: article.title },
        ]}
      />

      <article>
        <header className="mb-8 border-b border-slate-200 pb-6">
          <Eyebrow>{label}</Eyebrow>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {article.title}
          </h1>
          {article.excerpt && <p className="mt-4 text-lg text-slate-600">{article.excerpt}</p>}
          <p className="mt-4 text-sm text-slate-600">
            Medically reviewed by {DOCTOR_NAME}
            {article.readTime && <> · {article.readTime}</>}
          </p>
        </header>

        {/* TODO: article body (quick-answer box, sections, "when to see a specialist", related links) */}
        <div className="my-8 rounded-3xl border border-dashed border-slate-300 bg-ice-blue/40 p-8 text-center text-base text-slate-600">
          Article content is being written and medically reviewed.
        </div>

        <CTA />
      </article>
    </Container>
  );
}
