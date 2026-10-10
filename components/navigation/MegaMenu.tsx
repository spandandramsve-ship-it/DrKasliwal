import Link from "next/link";
import { NavigationCategory } from "@/types";

interface MegaMenuProps {
  category: NavigationCategory;
  isOpen: boolean;
  onClose?: () => void;
}

export default function MegaMenu({ category, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 top-full w-full border-b border-gray-200 bg-white p-6 shadow-xl">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-base font-semibold text-gray-900">{category.title}</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {category.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group block rounded-lg p-3 hover:bg-gray-50 transition"
            >
              <span className="block font-medium text-sm text-gray-900 group-hover:text-blue-600">
                {item.label}
              </span>
              {item.description && (
                <span className="block text-xs text-gray-500 mt-1">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
