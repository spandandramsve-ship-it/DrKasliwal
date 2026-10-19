import Link from "next/link";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/** Visible breadcrumb trail + BreadcrumbList schema. "Home" is prepended automatically. */
export default function Breadcrumbs({
  items,
  tone = "light",
  className = "mb-6",
}: {
  items: BreadcrumbItem[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <JsonLd data={breadcrumbSchema(items)} />
      <ol
        className={`flex flex-wrap items-center gap-2 text-sm ${
          isDark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        <li>
          <Link
            href="/"
            className={isDark ? "text-slate-300 hover:text-white" : "hover:text-clinical-blue"}
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              <span className={isDark ? "text-slate-400" : "text-slate-400"} aria-hidden="true">
                /
              </span>
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={isDark ? "text-slate-300 hover:text-white" : "hover:text-clinical-blue"}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`font-medium ${isDark ? "text-white" : "text-navy"}`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
