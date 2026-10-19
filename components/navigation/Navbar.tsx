"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavCategories } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isCategoryActive = (href: string) => {
    if (!pathname) return false;
    const catBase = href.split("#")[0];
    if (catBase === "/") {
      return pathname === "/";
    }
    return pathname === catBase || (catBase !== "" && pathname.startsWith(catBase + "/"));
  };

  return (
    <nav
      className="relative hidden items-center whitespace-nowrap text-[0.8125rem] font-medium text-slate-700 xl:flex xl:gap-1 2xl:gap-1.5 2xl:text-[0.875rem]"
      aria-label="Main Navigation"
    >
      {mainNavCategories.map((category) => {
        const targetHref = category.href || "/";
        const isActive = isCategoryActive(targetHref);

        return (
          <Link
            key={category.title}
            href={targetHref}
            aria-current={isActive ? "page" : undefined}
            className={`relative px-3 py-1.5 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-clinical-blue/[0.12] text-navy font-semibold"
                : "text-slate-600 hover:text-navy hover:bg-slate-200/80"
            }`}
          >
            <span>{category.title}</span>
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-2.5 right-2.5 h-[2px] rounded-full bg-clinical-blue"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
