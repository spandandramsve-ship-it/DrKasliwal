/**
 * Single source of truth for practice facts.
 *
 * Everything marked VERIFY must be confirmed in writing by Dr. Kasliwal before
 * launch (Website Plan §14, §15.1). Change a value here and it updates site-wide.
 */

export const SITE_NAME = "Kasliwal Joint Institute";
export const SITE_TAGLINE = "Precision. Compassion. Motion.";
export const SITE_URL = "https://kasliwaljointinstitute.com"; // VERIFY: domain decision (Plan §13.1)

export const HOSPITAL_NAME = "Kasliwal Super Speciality Hospital";
export const HOSPITAL_FOUNDED = 1981; // VERIFY: Plan §9.1 "est. 1981"
export const DOCTOR_NAME = "Dr. Vishal Kasliwal";
export const DOCTOR_QUALIFICATION = "M.S. Orthopaedics";
export const DOCTOR_TITLE = "M.S. Orthopaedics · Fellowship-Trained Joint Replacement & Arthroscopy Surgeon";

export const LOCATION_ADDRESS = "1st Floor, Bosco Centre, Prasad Circle, Gangapur Road";
export const LOCATION_CITY = "Nashik";
export const LOCATION_STATE = "Maharashtra";
export const LOCATION_PIN = "422005"; // VERIFY: not in client materials
export const LOCATION_FULL = `${LOCATION_ADDRESS}, ${LOCATION_CITY}, ${LOCATION_STATE} ${LOCATION_PIN}`;
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Kasliwal+Super+Speciality+Hospital+Gangapur+Road+Nashik"; // VERIFY: replace with GBP link

export const PHONE_TEL = "+919922335007";
export const PHONE_DISPLAY = "+91 99223 35007";
export const WHATSAPP_NUMBER = "919922335007";
export const EMAIL_PRIMARY = "kasliwalsuperspeciality.hosp@gmail.com";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Kasliwal Joint Institute, I would like to book a consultation."
)}`;

// VERIFY: OPD timings are not in client materials
export const OPD_TIMINGS = "Mon – Sat: 10:00 AM – 2:00 PM & 5:00 PM – 8:00 PM";
export const OPD_SCHEMA_HOURS = ["Mo-Sa 10:00-14:00", "Mo-Sa 17:00-20:00"];

/** Headline numbers. Must match GBP, Justdial, Practo etc. (Plan §4.2). */
export const STATS = {
  experience: { value: "15+", label: "Years of orthopaedic practice" },
  procedures: { value: "~5,000", label: "Orthopaedic & joint replacement procedures" }, // VERIFY
};

/**
 * Directory rating. Shown only as attributed text until a live Google
 * review widget is connected (Plan §4.10). VERIFY before launch.
 */
export const RATING = {
  value: "4.7",
  count: "300+",
  source: "Justdial and other directories",
};

export const VELYS_TRADEMARK =
  "VELYS™ is a trademark of DePuy Synthes (Johnson & Johnson MedTech). Used for identification only.";
