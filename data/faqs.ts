import { FAQItem } from "@/types";

/**
 * FAQ bank. Items flagged `featured` appear on the homepage; all appear on /faqs.
 * Copy follows plan §2 tone rules: typical ranges, no guarantees. Every answer
 * must be approved by Dr. Kasliwal before launch.
 */
export const faqs: FAQItem[] = [
  {
    id: "robot-does-surgery",
    question: "Does the robot perform the surgery?",
    answer:
      "No. Dr. Kasliwal performs the operation. The VELYS™ system helps him measure your knee, plan implant position and carry out that plan with greater precision and control. The surgeon remains responsible for every decision.",
    category: "Robotic surgery",
    featured: true,
  },
  {
    id: "robotic-advantages",
    question: "How is robotic-assisted knee replacement different from conventional surgery?",
    answer:
      "It is the same operation, performed with additional measurement and guidance. Robotic assistance helps the surgeon plan implant position around your anatomy and assess ligament balance during surgery. Published studies show more consistent implant positioning; evidence on long-term outcomes is still developing.",
    category: "Robotic surgery",
    featured: true,
  },
  {
    id: "recovery-timeline",
    question: "When will I walk after knee replacement?",
    answer:
      // VERIFY: booklet's "Day 2 / Day 3" numbering is ambiguous (from admission or from surgery)
      "Supervised physiotherapy and walking with support begin within the first day or two after surgery, twice a day. Many patients manage routine activities at home within a few weeks. Your own timeline depends on your health and the procedure.",
    category: "Recovery",
    featured: true,
  },
  {
    id: "hospital-stay",
    question: "How long will I stay in hospital?",
    answer:
      // VERIFY: typical length of stay (plan §15.1 item 10)
      "For a single knee replacement, patients are usually admitted the day before surgery and stay for a few days afterwards. You will have a clear plan for medicines, dressing care and physiotherapy before you leave.",
    category: "Hospital stay",
    featured: true,
  },
  {
    id: "insurance",
    question: "Is robotic knee replacement covered by health insurance?",
    answer:
      "Many health insurance policies cover joint replacement, including robotic-assisted procedures, but coverage depends on your policy. Our team can help you check your policy and with pre-authorisation. Please bring your policy details to your consultation.",
    category: "Cost & insurance",
    featured: true,
  },
  {
    id: "implant-life",
    question: "How long does a knee replacement last?",
    answer:
      "Most modern knee replacements continue to work well for 15 to 20 years or more. Body weight, activity level and bone quality all play a part. Your surgeon will discuss what to expect in your case.",
    category: "Knee replacement",
    featured: true,
  },
];

export const featuredFaqs = faqs.filter((item) => item.featured);
