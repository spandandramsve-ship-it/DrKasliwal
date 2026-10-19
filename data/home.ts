/**
 * Homepage content (Website Plan §4). Copy is taken from the plan where it gives
 * wording. Items marked VERIFY need written confirmation before launch (plan §14).
 */

export interface LinkItem {
  label: string;
  href: string;
}

export const heroChips: LinkItem[] = [
  { label: "Knee", href: "/knee" },
  { label: "Hip", href: "/hip" },
  { label: "Shoulder", href: "/arthroscopy#shoulder-arthroscopy" },
  { label: "Arthroscopy", href: "/arthroscopy" },
  { label: "Revision Surgery", href: "/robotic-joint-replacement#revision-joint-replacement" },
];

export const heroBadgeLinks: LinkItem[] = [
  { label: "Robotic Knee", href: "/knee#robotic-total-knee-replacement" },
  { label: "Partial Knee", href: "/knee#partial-knee-replacement" },
  { label: "Hip Replacement", href: "/hip#hip-replacement" },
];

export interface CareArea {
  title: string;
  description: string;
  href: string;
  links: LinkItem[];
}

// Plan §4.3
export const careAreas: CareArea[] = [
  {
    title: "Knee Care",
    description: "Knee arthritis, ligament and meniscus injuries, and partial or total knee replacement.",
    href: "/knee",
    links: [
      { label: "Knee arthritis", href: "/knee#knee-arthritis" },
      { label: "Total knee replacement", href: "/knee#robotic-total-knee-replacement" },
      { label: "Partial knee replacement", href: "/knee#partial-knee-replacement" },
      { label: "ACL, PCL & meniscus", href: "/arthroscopy" },
    ],
  },
  {
    title: "Hip Care",
    description: "Hip arthritis, avascular necrosis (AVN), hip replacement and revision hip surgery.",
    href: "/hip",
    links: [
      { label: "Hip arthritis", href: "/hip#hip-arthritis" },
      { label: "AVN of the hip", href: "/hip#avn-hip" },
      { label: "Hip replacement", href: "/hip#hip-replacement" },
      { label: "Revision hip surgery", href: "/robotic-joint-replacement#revision-joint-replacement" },
    ],
  },
  {
    title: "Shoulder Care",
    description: "Keyhole (arthroscopic) surgery for rotator cuff tears and shoulder instability.",
    href: "/arthroscopy#shoulder-arthroscopy",
    links: [
      { label: "Rotator cuff repair", href: "/arthroscopy#shoulder-arthroscopy" },
      { label: "Bankart repair", href: "/arthroscopy#shoulder-arthroscopy" },
      { label: "Shoulder instability", href: "/arthroscopy#shoulder-arthroscopy" },
      { label: "Shoulder arthroscopy", href: "/arthroscopy#shoulder-arthroscopy" },
    ],
  },
  {
    title: "Trauma Care",
    description: "Fractures, emergencies and complex trauma at Kasliwal Super Speciality Hospital.",
    href: "/arthroscopy#fracture-and-trauma-care",
    links: [
      { label: "Fractures & emergencies", href: "/arthroscopy#fracture-and-trauma-care" },
      { label: "Complex trauma", href: "/arthroscopy#fracture-and-trauma-care" },
      { label: "Hip fracture in the elderly", href: "/hip#hip-fracture" },
    ],
  },
];

export interface FlagshipProcedure {
  title: string;
  abbr: string;
  suitedFor: string;
  description: string;
  href: string;
}

// Plan §4.4: three cards
export const flagshipProcedures: FlagshipProcedure[] = [
  {
    title: "Robotic Total Knee Replacement",
    abbr: "TKR",
    suitedFor: "Advanced arthritis needing total replacement",
    description:
      "The damaged surfaces of the thigh bone and shin bone are replaced, with implant position planned around your anatomy and ligament balance.",
    href: "/knee#robotic-total-knee-replacement",
  },
  {
    title: "Robotic Partial Knee Replacement",
    abbr: "UKR",
    suitedFor: "Arthritis in one compartment of the knee",
    description:
      "Only the worn part of the knee is replaced, keeping healthy bone and ligaments. Suitable for selected patients after careful assessment.",
    href: "/knee#partial-knee-replacement",
  },
  {
    title: "Revision Knee Replacement",
    abbr: "Revision",
    suitedFor: "Complex or failed knee replacements",
    description:
      "Specialist assessment and surgery for knee replacements that have become painful, loose, unstable or infected.",
    href: "/robotic-joint-replacement#revision-joint-replacement",
  },
];

// Plan §4.5
export const philosophyPillars = [
  {
    title: "Personalised Alignment",
    description: "Planning based on your individual anatomy rather than one fixed target for every knee.",
  },
  {
    title: "Precision",
    description: "Robotic assistance for accurate bone preparation and implant positioning.",
  },
  {
    title: "Preserving What Matters",
    description:
      "Minimally invasive approaches, such as the subvastus approach, and preservation of native structures where appropriate.",
  },
  {
    title: "Functional Recovery",
    description: "Early rehabilitation and a steady return to the activities you love.",
  },
];

// Plan §4.6
export const velysSteps = [
  { step: "Plan", description: "Your knee's anatomy is assessed and a personalised plan is created." },
  { step: "Guide", description: "The robotic system helps the surgeon carry out the plan." },
  { step: "Balance", description: "Alignment and soft-tissue balance are assessed through the knee's movement." },
  { step: "Verify", description: "Implant positioning and the final reconstruction are confirmed." },
];

// Plan §4.7.
export const surgeonTraining = [
  { focus: "Joint replacement", place: "Breach Candy Hospital, Mumbai", mentor: "Dr. Arun Mullaji" },
  { focus: "Knee & shoulder arthroscopy fellowship", place: "Pune", mentor: "Dr. Sachin Tapasvi" },
  { focus: "Advanced shoulder arthroscopy", place: "Korea", mentor: "Dr. Jin Young Park" },
];

export const surgeonExpertise = [
  "Joint replacement (primary & revision)",
  "Arthroscopy (knee & shoulder)",
];

// Plan §4.8. Order and labels from the plan.
export const journeySteps = [
  { title: "Consultation", description: "History, examination and a conversation about your goals." },
  { title: "Diagnosis & Assessment", description: "X-rays, including a hip-to-ankle scannogram, and other tests as needed." },
  { title: "Treatment Decision", description: "Non-surgical options first; surgery only when appropriate." },
  { title: "Personalised Planning", description: "Pre-operative tests, fitness checks and your surgical plan." },
  { title: "Surgery", description: "Usually under spinal anaesthesia, with close monitoring afterwards." },
  { title: "Early Mobilisation", description: "Walking with support begins soon after surgery, guided by the team." },
  { title: "Physiotherapy", description: "Supervised exercises twice a day while in hospital." },
  { title: "Going Home", description: "Medicines, dressing care and a home exercise plan." },
  { title: "Follow-up", description: "Wound review and progression of your exercise programme." },
  { title: "Back to Movement", description: "Gradual return to walking, stairs and daily life." },
];

// Plan §4.9 feature list.
export const hospitalFeatures = [
  { title: "Modern operation theatres", verify: false },
  { title: "Laminar airflow environment", verify: true },
  { title: "Dedicated physiotherapy team", verify: false },
  { title: "Experienced nursing team", verify: false },
  { title: "Supporting medical specialists", verify: false },
  { title: "Comprehensive perioperative care", verify: false },
];

// Plan §4.11.
export const knowledgePreview = [
  {
    title: "When should I consider knee replacement?",
    category: "Knee",
    href: "/knee#do-i-need-knee-replacement",
  },
  {
    title: "Am I too young for knee replacement?",
    category: "Knee",
    href: "/knowledge-centre/knee",
  },
  {
    title: "What is robotic knee replacement?",
    category: "Robotics",
    href: "/robotic-joint-replacement#how-velys-works",
  },
  {
    title: "Total vs partial knee replacement",
    category: "Knee",
    href: "/knee#partial-knee-replacement",
  },
  {
    title: "How long does a knee replacement last?",
    category: "Knee",
    href: "/knowledge-centre/knee",
  },
  {
    title: "When can I walk after surgery?",
    category: "Recovery",
    href: "/patient-guide#recovery",
  },
];
