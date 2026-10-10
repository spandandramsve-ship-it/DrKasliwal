import { Article } from "@/types";

// Article placeholder dataset for Knowledge Centre
// Articles will be populated with 65+ articles from the content plan in subsequent phases.
export const articles: Article[] = [
  {
    id: "sample-knee-article",
    title: "Understanding Knee Osteoarthritis: Symptoms and Stages",
    slug: "understanding-knee-osteoarthritis",
    category: "knee",
    excerpt: "An overview of how knee osteoarthritis develops, clinical stages, and treatment pathways.",
    publishedAt: "2025-01-01",
    author: "Kasliwal Joint Institute Medical Team",
    readTime: "5 min read",
  },
  {
    id: "sample-hip-article",
    title: "Signs and Causes of Avascular Necrosis (AVN) of the Hip",
    slug: "signs-and-causes-of-hip-avn",
    category: "hip",
    excerpt: "Recognising early symptoms of AVN and contemporary preservation options.",
    publishedAt: "2025-01-01",
    author: "Kasliwal Joint Institute Medical Team",
    readTime: "6 min read",
  },
  {
    id: "sample-robotics-article",
    title: "How VELYS Robotic Knee Surgery Works: A Patient Guide",
    slug: "how-velys-robotic-surgery-works",
    category: "robotics",
    excerpt: "A step-by-step patient explanation of imageless robotic navigation in knee replacement.",
    publishedAt: "2025-01-01",
    author: "Kasliwal Joint Institute Medical Team",
    readTime: "4 min read",
  },
];
