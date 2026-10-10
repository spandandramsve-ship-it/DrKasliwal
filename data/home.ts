/**
 * Homepage content (Website Plan §4). Copy is taken from the plan where it gives
 * wording. Items marked VERIFY need written confirmation before launch (plan §14).
 */

export interface LinkItem {
  label: string;
  href: string;
}

export const heroChips: LinkItem[] = [
  { label: "Knee", href: "/knee-specialist-nashik" },
  { label: "Hip", href: "/hip-specialist-nashik" },
  { label: "Shoulder", href: "/shoulder-arthroscopy-nashik" },
  { label: "Arthroscopy", href: "/knee-arthroscopy-nashik" },
  { label: "Revision Surgery", href: "/revision-joint-replacement-nashik" },
];

export const heroBadgeLinks: LinkItem[] = [
  { label: "Robotic Knee", href: "/robotic-knee-replacement-nashik" },
  { label: "Partial Knee", href: "/robotic-partial-knee-replacement-nashik" },
  { label: "Hip Replacement", href: "/robotic-hip-replacement-nashik" },
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
    href: "/knee-specialist-nashik",
    links: [
      { label: "Knee arthritis", href: "/knee-arthritis-treatment-nashik" },
      { label: "Total knee replacement", href: "/robotic-knee-replacement-nashik" },
      { label: "Partial knee replacement", href: "/robotic-partial-knee-replacement-nashik" },
      { label: "ACL, PCL & meniscus", href: "/knee-arthroscopy-nashik" },
    ],
  },
  {
    title: "Hip Care",
    description: "Hip arthritis, avascular necrosis (AVN), hip replacement and revision hip surgery.",
    href: "/hip-specialist-nashik",
    links: [
      { label: "Hip arthritis", href: "/hip-specialist-nashik" },
      { label: "AVN of the hip", href: "/avn-hip-treatment-nashik" },
      { label: "Hip replacement", href: "/robotic-hip-replacement-nashik" },
      { label: "Revision hip surgery", href: "/revision-joint-replacement-nashik" },
    ],
  },
  {
    title: "Shoulder Care",
    // Plan §4.3: shoulder replacement only if performed regularly. VERIFY before adding.
    description: "Keyhole (arthroscopic) surgery for rotator cuff tears and shoulder instability.",
    href: "/shoulder-arthroscopy-nashik",
    links: [
      { label: "Rotator cuff repair", href: "/shoulder-arthroscopy-nashik" },
      { label: "Bankart repair", href: "/shoulder-arthroscopy-nashik" },
      { label: "Shoulder instability", href: "/shoulder-arthroscopy-nashik" },
      { label: "Shoulder arthroscopy", href: "/shoulder-arthroscopy-nashik" },
    ],
  },
  {
    title: "Trauma Care",
    description: "Fractures, emergencies and complex trauma at Kasliwal Super Speciality Hospital.",
    href: "/orthopaedic-trauma-care-nashik",
    links: [
      { label: "Fractures & emergencies", href: "/orthopaedic-trauma-care-nashik" },
      { label: "Complex trauma", href: "/orthopaedic-trauma-care-nashik" },
      { label: "Hip fracture in the elderly", href: "/orthopaedic-trauma-care-nashik" },
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

// Plan §4.4: three cards. The third is "Revision Knee Replacement" (not "Robotic Revision")
// until robotic use in revisions is confirmed.
export const flagshipProcedures: FlagshipProcedure[] = [
  {
    title: "Robotic Total Knee Replacement",
    abbr: "TKR",
    suitedFor: "Advanced arthritis needing total replacement",
    description:
      "The damaged surfaces of the thigh bone and shin bone are replaced, with implant position planned around your anatomy and ligament balance.",
    href: "/robotic-knee-replacement-nashik",
  },
  {
    title: "Robotic Partial Knee Replacement",
    abbr: "UKR",
    suitedFor: "Arthritis in one compartment of the knee",
    description:
      "Only the worn part of the knee is replaced, keeping healthy bone and ligaments. Suitable for selected patients after careful assessment.",
    href: "/robotic-partial-knee-replacement-nashik",
  },
  {
    title: "Revision Knee Replacement",
    abbr: "Revision",
    suitedFor: "Complex or failed knee replacements",
    description:
      "Specialist assessment and surgery for knee replacements that have become painful, loose, unstable or infected.",
    href: "/revision-joint-replacement-nashik",
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

// Plan §4.7. VERIFY: spelling "Tapasvi" vs "Tapaswi" (plan §4.7 note); fellowship years.
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

// Plan §4.9 feature list. VERIFY items must be confirmed before launch (plan §4.9 note).
export const hospitalFeatures = [
  { title: "Modern operation theatres", verify: false },
  { title: "Laminar airflow environment", verify: true },
  { title: "Dedicated physiotherapy team", verify: false },
  { title: "Experienced nursing team", verify: false },
  { title: "Supporting medical specialists", verify: false },
  { title: "Comprehensive perioperative care", verify: false },
];

// Plan §4.11. Hrefs point to the matching planned article (or closest live page until written).
export const knowledgePreview = [
  {
    title: "When should I consider knee replacement?",
    category: "Knee",
    href: "/do-i-need-knee-replacement",
  },
  {
    title: "Am I too young for knee replacement?",
    category: "Knee",
    href: "/knowledge-centre/knee",
  },
  {
    title: "What is robotic knee replacement?",
    category: "Robotics",
    href: "/knowledge-centre/robotics/how-velys-robotic-surgery-works",
  },
  {
    title: "Total vs partial knee replacement",
    category: "Knee",
    href: "/robotic-partial-knee-replacement-nashik",
  },
  {
    title: "How long does a knee replacement last?",
    category: "Knee",
    href: "/knowledge-centre/knee",
  },
  {
    title: "When can I walk after surgery?",
    category: "Recovery",
    href: "/patient-guide/recovery-after-surgery",
  },
];
