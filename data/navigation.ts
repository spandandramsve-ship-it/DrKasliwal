import { NavigationCategory, NavigationLink } from "@/types";

export const mainNavCategories: NavigationCategory[] = [
  {
    title: "Home",
    href: "/",
    items: [],
  },
  {
    title: "Robotic Joint Replacement",
    href: "/robotic-joint-replacement-nashik",
    items: [
      {
        label: "Robotic Joint Replacement Overview",
        href: "/robotic-joint-replacement-nashik",
        description: "Advanced robotic joint replacement technology in Nashik",
      },
      {
        label: "Robotic Total Knee Replacement (TKR)",
        href: "/robotic-knee-replacement-nashik",
        description: "Precision robotic total knee replacement",
      },
      {
        label: "Robotic Partial Knee Replacement (UKR)",
        href: "/robotic-partial-knee-replacement-nashik",
        description: "Bone-preserving robotic partial knee surgery",
      },
      {
        label: "Robotic Hip Replacement (THR)",
        href: "/robotic-hip-replacement-nashik",
        description: "Accurate implant positioning with robotic guidance",
      },
      {
        label: "How VELYS™ Robotic Surgery Works",
        href: "/velys-robotic-surgery",
        description: "How Plan, Guide, Balance and Verify work",
      },
      {
        label: "Revision Joint Replacement",
        href: "/revision-joint-replacement-nashik",
        description: "Specialised revision surgery for worn-out implants",
      },
    ],
  },
  {
    title: "Knee",
    href: "/knee-specialist-nashik",
    items: [
      {
        label: "Knee Specialist Care",
        href: "/knee-specialist-nashik",
        description: "Comprehensive knee evaluation and consultation",
      },
      {
        label: "Knee Arthritis Treatment",
        href: "/knee-arthritis-treatment-nashik",
        description: "Non-surgical and surgical options for knee arthritis",
      },
      {
        label: "Robotic Total Knee (TKR)",
        href: "/robotic-knee-replacement-nashik",
        description: "Personalised, robotic-assisted total knee replacement",
      },
      {
        label: "Robotic Partial Knee (UKR)",
        href: "/robotic-partial-knee-replacement-nashik",
        description: "Single-compartment bone preservation",
      },
      {
        label: "Knee Arthroscopy (Keyhole)",
        href: "/knee-arthroscopy-nashik",
        description: "Minimally invasive diagnostic & operative arthroscopy",
      },
      {
        label: "ACL Reconstruction",
        href: "/acl-reconstruction-nashik",
        description: "Ligament repair & reconstruction techniques",
      },
      {
        label: "Meniscus Tear Treatment",
        href: "/meniscus-tear-treatment-nashik",
        description: "Meniscal repair and preservation",
      },
      {
        label: "PCL & Cartilage Surgery",
        href: "/pcl-cartilage-surgery-nashik",
        description: "Cartilage restoration and PCL stabilisation",
      },
    ],
  },
  {
    title: "Hip",
    href: "/hip-specialist-nashik",
    items: [
      {
        label: "Hip Specialist Care",
        href: "/hip-specialist-nashik",
        description: "Diagnosis and management of hip joint conditions",
      },
      {
        label: "Robotic Hip Replacement (THR)",
        href: "/robotic-hip-replacement-nashik",
        description: "Total hip replacement with technology-assisted planning",
      },
      {
        label: "Avascular Necrosis (AVN) of Hip",
        href: "/avn-hip-treatment-nashik",
        description: "Early preservation and advanced AVN treatment",
      },
      {
        label: "Revision Hip Surgery",
        href: "/revision-joint-replacement-nashik",
        description: "Expert revision for failed hip components",
      },
    ],
  },
  {
    title: "Arthroscopy",
    href: "/knee-arthroscopy-nashik",
    items: [
      {
        label: "Knee Arthroscopy",
        href: "/knee-arthroscopy-nashik",
        description: "Minimally invasive keyhole knee surgery",
      },
      {
        label: "ACL Reconstruction",
        href: "/acl-reconstruction-nashik",
        description: "Arthroscopic ACL tear reconstruction",
      },
      {
        label: "Meniscus Tear Treatment",
        href: "/meniscus-tear-treatment-nashik",
        description: "Arthroscopic meniscal repair",
      },
      {
        label: "Shoulder Arthroscopy",
        href: "/shoulder-arthroscopy-nashik",
        description: "Rotator cuff and Bankart keyhole repair",
      },
    ],
  },
  {
    title: "Patient Guide",
    href: "/patient-guide",
    items: [
      {
        label: "Patient Guide Overview",
        href: "/patient-guide",
        description: "Comprehensive patient preparation resources",
      },
      {
        label: "Your Surgery Journey",
        href: "/patient-guide/surgery-journey",
        description: "Step-by-step roadmap from OPD to recovery",
      },
      {
        label: "Do I Need a Knee Replacement?",
        href: "/do-i-need-knee-replacement",
        description: "Self-assessment guide for patients",
      },
      {
        label: "Preparing for Surgery",
        href: "/patient-guide/preparing-for-surgery",
        description: "Pre-operative checklists and investigations",
      },
      {
        label: "Recovery & Rehabilitation",
        href: "/patient-guide/recovery-after-surgery",
        description: "Post-operative physio and healing milestones",
      },
      {
        label: "Cost & Insurance Guide",
        href: "/robotic-knee-replacement-cost-nashik",
        description: "What affects the cost, and help with insurance",
      },
      {
        label: "Outstation Patients Guide",
        href: "/patient-guide/outstation-patients",
        description: "Logistics, travel, and fast-track OPD planning",
      },
      {
        label: "Frequently Asked Questions",
        href: "/faqs",
        description: "Answers to common patient questions",
      },
      {
        label: "Knowledge Centre",
        href: "/knowledge-centre",
        description: "Educational health articles on knee and hip care",
      },
    ],
  },
  {
    title: "About",
    href: "/dr-vishal-kasliwal",
    items: [
      {
        label: "Dr. Vishal Kasliwal",
        href: "/dr-vishal-kasliwal",
        description: "Qualifications, fellowships, and surgical experience",
      },
      {
        label: "Our Surgical Philosophy",
        href: "/surgical-philosophy",
        description: "Joint preservation and patient-specific alignment",
      },
      {
        label: "Kasliwal Super Speciality Hospital",
        href: "/hospital",
        description: "Operating theatre standards and hospital infrastructure",
      },
      {
        label: "Patient Stories",
        href: "/patient-stories",
        description: "Patient experiences and recovery journeys",
      },
    ],
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
      { label: "Robotic Knee Replacement", href: "/robotic-knee-replacement-nashik" },
      { label: "Robotic Partial Knee Replacement", href: "/robotic-partial-knee-replacement-nashik" },
      { label: "Robotic Hip Replacement", href: "/robotic-hip-replacement-nashik" },
      { label: "VELYS™ Robotic Surgery", href: "/velys-robotic-surgery" },
      { label: "Knee Arthroscopy", href: "/knee-arthroscopy-nashik" },
      { label: "Shoulder Arthroscopy", href: "/shoulder-arthroscopy-nashik" },
      { label: "Revision Joint Replacement", href: "/revision-joint-replacement-nashik" },
    ],
  },
  {
    category: "Patient Resources",
    links: [
      { label: "Patient Guide", href: "/patient-guide" },
      { label: "Surgery Journey", href: "/patient-guide/surgery-journey" },
      { label: "Do I Need Knee Replacement?", href: "/do-i-need-knee-replacement" },
      { label: "Preparing for Surgery", href: "/patient-guide/preparing-for-surgery" },
      { label: "Recovery After Surgery", href: "/patient-guide/recovery-after-surgery" },
      { label: "Outstation Patients", href: "/patient-guide/outstation-patients" },
      { label: "Cost & Insurance", href: "/robotic-knee-replacement-cost-nashik" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    category: "About & Knowledge",
    links: [
      { label: "Dr. Vishal Kasliwal", href: "/dr-vishal-kasliwal" },
      { label: "Surgical Philosophy", href: "/surgical-philosophy" },
      { label: "Kasliwal Super Speciality Hospital", href: "/hospital" },
      { label: "Patient Stories", href: "/patient-stories" },
      { label: "Knowledge Centre", href: "/knowledge-centre" },
      { label: "Book Appointment", href: "/book-appointment" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    category: "Legal & Utility",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Medical Disclaimer", href: "/medical-disclaimer" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];
