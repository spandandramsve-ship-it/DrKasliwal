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
      { label: "Robotic Knee Replacement", href: "/knee#robotic-total-knee-replacement" },
      { label: "Partial Knee Replacement", href: "/knee#partial-knee-replacement" },
      { label: "Hip Replacement", href: "/hip#hip-replacement" },
      { label: "AVN Hip Treatment", href: "/hip#avn-hip" },
      { label: "Knee Arthroscopy & ACL", href: "/arthroscopy#acl-reconstruction" },
      { label: "Shoulder Arthroscopy", href: "/arthroscopy#shoulder-arthroscopy" },
      { label: "Revision Joint Surgery", href: "/robotic-joint-replacement#revision-joint-replacement" },
    ],
  },
  {
    category: "Patient Resources",
    links: [
      { label: "Patient Guide", href: "/patient-guide" },
      { label: "Surgery Journey", href: "/patient-guide#journey" },
      { label: "Do I Need Knee Replacement?", href: "/knee#do-i-need-knee-replacement" },
      { label: "Preparing for Surgery", href: "/patient-guide#preparing" },
      { label: "Recovery & Safety Signs", href: "/patient-guide#recovery" },
      { label: "Outstation Patients", href: "/patient-guide#outstation-patients" },
      { label: "Cost & Cashless Insurance", href: "/knee#cost-and-insurance" },
      { label: "Hospital FAQs", href: "/patient-guide#faqs" },
    ],
  },
  {
    category: "About Dr. Kasliwal",
    links: [
      { label: "Dr. Vishal Kasliwal", href: "/about#dr-vishal-kasliwal" },
      { label: "Education & Fellowships", href: "/about#training" },
      { label: "Surgical Philosophy", href: "/about#surgical-philosophy" },
      { label: "Hospital Facilities", href: "/about#hospital" },
      { label: "OPD Hours & Location", href: "/about#visit-us" },
      { label: "Book Consultation", href: "/book-appointment" },
      { label: "Hospital Gallery", href: "/gallery" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    category: "Legal & Information",
    links: [
      { label: "Medical Disclaimer", href: "/medical-disclaimer" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Knowledge Centre", href: "/knowledge-centre" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];
