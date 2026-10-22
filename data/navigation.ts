import { NavigationCategory, NavigationLink } from "@/types";

export const mainNavCategories: NavigationCategory[] = [
  {
    title: "Home",
    href: "/",
    items: [],
  },
  {
    title: "Robotic Surgery",
    href: "/robotic-joint-replacement",
    items: [],
  },
  {
    title: "Knee",
    href: "/knee",
    items: [],
  },
  {
    title: "Hip",
    href: "/hip",
    items: [],
  },
  {
    title: "Arthroscopy",
    href: "/arthroscopy",
    items: [],
  },
  {
    title: "Patient Guide",
    href: "/patient-guide",
    items: [],
  },
  {
    title: "About",
    href: "/about",
    items: [],
  },
  {
    title: "Gallery",
    href: "/gallery",
    items: [],
  },
  {
    title: "Contact",
    href: "/contact",
    items: [],
  },
];

export const footerLinks: { category: string; links: NavigationLink[] }[] = [
  {
    category: "Procedures",
    links: [
      { label: "Robotic Joint Replacement", href: "/robotic-joint-replacement" },
      { label: "Knee Replacement", href: "/knee" },
      { label: "Hip Replacement", href: "/hip" },
      { label: "Arthroscopy", href: "/arthroscopy" },
    ],
  },
  {
    category: "Patient Care",
    links: [
      { label: "Patient Guide", href: "/patient-guide" },
      { label: "Hospital FAQs", href: "/faqs" },
      { label: "Book Consultation", href: "/book-appointment" },
    ],
  },
  {
    category: "About Institute",
    links: [
      { label: "Dr. Vishal Kasliwal", href: "/about" },
      { label: "Hospital Gallery", href: "/gallery" },
      { label: "Contact & Location", href: "/contact" },
    ],
  },
];
