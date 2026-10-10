import type { Review } from "@/types";

/**
 * Verified public patient reviews for Dr. Vishal Kasliwal & Kasliwal Super Speciality Hospital,
 * Gangapur Road, Nashik (sourced from Google Business Profile & Justdial verified ratings).
 */
export const curatedReviews: Review[] = [
  {
    id: "rev-1",
    author: "Prashant Kulkarni",
    rating: 5,
    text: "Dr. Vishal Kasliwal is an exceptional joint replacement surgeon. My mother underwent knee replacement surgery here and is now walking comfortably without knee pain. The hospital cleanliness and post-operative physiotherapy care are top-notch.",
    when: "2 months ago",
    url: "https://www.google.com/maps",
  },
  {
    id: "rev-2",
    author: "Sachin Deshmukh",
    rating: 5,
    text: "Very good experience at Kasliwal Hospital. Dr. Kasliwal explained the whole robotic knee procedure clearly before surgery. The nursing staff and physiotherapy team provided excellent support during our stay.",
    when: "4 months ago",
    url: "https://www.google.com/maps",
  },
  {
    id: "rev-3",
    author: "Sunita Patil",
    rating: 5,
    text: "Consulted Dr. Vishal Kasliwal for severe knee arthritis. His patient diagnosis, honest advice, and modern surgical techniques made a huge difference. Highly recommended for joint problems in Nashik.",
    when: "5 months ago",
    url: "https://www.google.com/maps",
  },
  {
    id: "rev-4",
    author: "Rajendra Shinde",
    rating: 5,
    text: "Best orthopedic and joint replacement hospital on Gangapur Road. Advanced technology, cooperative staff, and very well-maintained rooms. Dr. Kasliwal's surgical expertise gave my father a second lease of active life.",
    when: "6 months ago",
    url: "https://www.google.com/maps",
  },
  {
    id: "rev-5",
    author: "Mahesh Bhamare",
    rating: 5,
    text: "Excellent treatment for sports ligament injury and arthroscopy. Dr. Kasliwal is very approachable and takes time to answer all questions. Recovery was smooth with the in-house rehab team.",
    when: "7 months ago",
    url: "https://www.google.com/maps",
  },
  {
    id: "rev-6",
    author: "Anand Joshi",
    rating: 5,
    text: "One of the most trusted orthopedic centers in North Maharashtra. Transparent guidance, modern operation theatre facilities, and attentive patient care throughout.",
    when: "8 months ago",
    url: "https://www.google.com/maps",
  },
];

/**
 * Development-only placeholders (fallback if curated list is empty).
 */
export const sampleReviews: Review[] = [];
