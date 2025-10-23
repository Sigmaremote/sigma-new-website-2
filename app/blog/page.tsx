import { Blog7 } from "@/components/ui/blog7";

const blogData = {
  tagline: "Latest Insights",
  heading: "Global Hiring & Compliance Blog",
  description:
    "Stay updated with the latest trends, regulations, and best practices in global hiring, compliance, and workforce management. From country-specific guides to compliance updates, we've got you covered.",
  buttonText: "Explore all articles",
  buttonUrl: "/blog",
  posts: [
    {
      id: "post-0",
      title: "How to Hire International Contractors in 2025 (Without the Legal Headaches)",
      summary:
        "A step-by-step guide to hiring global talent compliantly - without FX fees, misclassification risks, or payroll delays.",
      label: "International Hiring",
      author: "SigmaRemote Editorial",
      published: "15 Jan 2025",
      url: "/blog/hire-international-contractors-2025",
      image: "/Blog images/How to Hire Blog 1/new blog image 2.jpg",
    },
    {
      id: "post-1",
      title: "Best Payoneer Alternatives for Global Payroll in 2025.",
      summary:
        "Find a Better Experience for Your International Team",
      label: "Payment Solutions",
      author: "Sigma Team",
      published: "22 Oct 2025",
      url: "/blog/payoneer-alternatives-2025",
      image: "/Blog images/Payoneer Alternatives Blog 2/payoneer-alternative.avif",
    },
  ],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Blog7 {...blogData} />
    </div>
  );
}
