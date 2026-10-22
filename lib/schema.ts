import {
  SITE_NAME,
  SITE_URL,
  HOSPITAL_NAME,
  DOCTOR_NAME,
  DOCTOR_QUALIFICATION,
  LOCATION_ADDRESS,
  LOCATION_CITY,
  LOCATION_STATE,
  LOCATION_PIN,
  PHONE_TEL,
  EMAIL_PRIMARY,
  OPD_SCHEMA_HOURS,
} from "@/lib/constants";
import type { FAQItem } from "@/types";

/** Stable @id values let Google connect doctor → institute → hospital (plan §13.3). */
export const SCHEMA_IDS = {
  clinic: `${SITE_URL}/#clinic`,
  hospital: `${SITE_URL}/hospital#hospital`,
  physician: `${SITE_URL}/dr-vishal-kasliwal#physician`,
  website: `${SITE_URL}/#website`,
};

const address = {
  "@type": "PostalAddress",
  streetAddress: LOCATION_ADDRESS,
  addressLocality: LOCATION_CITY,
  addressRegion: LOCATION_STATE,
  postalCode: LOCATION_PIN,
  addressCountry: "IN",
};

/** Site-wide entity graph, rendered once in the root layout. */
export function siteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": SCHEMA_IDS.website,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "en-IN",
        publisher: { "@id": SCHEMA_IDS.clinic },
      },
      {
        "@type": "MedicalClinic",
        "@id": SCHEMA_IDS.clinic,
        name: SITE_NAME,
        url: SITE_URL,
        // TODO: add `logo` once the institute's own logo exists (current file is the hospital's)
        telephone: PHONE_TEL,
        email: EMAIL_PRIMARY,
        address,
        openingHours: OPD_SCHEMA_HOURS,
        medicalSpecialty: "Orthopedic",
        parentOrganization: { "@id": SCHEMA_IDS.hospital },
        employee: { "@id": SCHEMA_IDS.physician },
        // TODO: add geo coordinates and sameAs (GBP, Justdial, Practo) once confirmed
      },
      {
        "@type": "Hospital",
        "@id": SCHEMA_IDS.hospital,
        name: HOSPITAL_NAME,
        logo: `${SITE_URL}/logos/kasliwal-logo.png`,
        telephone: PHONE_TEL,
        address,
      },
      {
        "@type": "Physician",
        "@id": SCHEMA_IDS.physician,
        name: DOCTOR_NAME,
        url: `${SITE_URL}/dr-vishal-kasliwal`,
        medicalSpecialty: "Orthopedic",
        hasCredential: DOCTOR_QUALIFICATION,
        telephone: PHONE_TEL,
        address,
        affiliation: [{ "@id": SCHEMA_IDS.clinic }, { "@id": SCHEMA_IDS.hospital }],
      },
    ],
  };
}

export function faqSchema(items: Pick<FAQItem, "question" | "answer">[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  const trail = [{ label: "Home", href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href === "/" ? "" : item.href}` } : {}),
    })),
  };
}
