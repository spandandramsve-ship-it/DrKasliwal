import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/** Invisible BreadcrumbList schema for SEO. Visible trail removed per design preference. */
export default function Breadcrumbs({
  items,
}: {
  items: BreadcrumbItem[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return <JsonLd data={breadcrumbSchema(items)} />;
}
