import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Legal Blog - Law Firm Name", // Replace with actual name later
  description: "Stay informed with the latest legal insights, articles, and news from [Law Firm Name]'s experts.",
};

// Define colors based on new direction
const accentColor = 'text-green-700';
const secondaryTextColor = 'text-gray-500';
const headingColor = 'text-gray-900';
const cardBgColor = 'bg-white';

// Placeholder blog posts (replace with actual data or fetch from CMS)
const blogPosts = [
  {
    slug: "understanding-new-uae-labor-laws",
    title: "Understanding the Key Changes in Recent UAE Labor Laws",
    image: "/assets/blog_article_1.png", // Use relevant images
    date: "April 25, 2025",
    excerpt: "A brief overview of the significant updates to the UAE Labour Law and their implications for employers and employees.",
  },
  {
    slug: "key-considerations-commercial-contracts",
    title: "Essential Clauses to Include in Your Commercial Contracts",
    image: "/assets/blog_article_2.webp",
    date: "April 18, 2025",
    excerpt: "Protect your business interests by ensuring your commercial agreements cover these critical areas.",
  },
  {
    slug: "navigating-real-estate-disputes-dubai",
    title: "Common Pitfalls in Dubai Real Estate Transactions and How to Avoid Them",
    image: "/assets/blog_article_3.png",
    date: "April 10, 2025",
    excerpt: "Insights into navigating the complexities of real estate disputes and transactions in Dubai's dynamic market.",
  },
  {
    slug: "intellectual-property-protection-uae",
    title: "Protecting Your Intellectual Property Rights in the UAE",
    image: "/assets/legal_service_commercial.webp", // Placeholder image
    date: "April 02, 2025",
    excerpt: "Strategies for safeguarding your trademarks, patents, and copyrights within the UAE legal framework.",
  },
  {
    slug: "arbitration-vs-litigation-uae",
    title: "Arbitration vs. Litigation: Choosing the Right Dispute Resolution Method in the UAE",
    image: "/assets/scales_of_justice.webp", // Placeholder image
    date: "March 25, 2025",
    excerpt: "A comparison of arbitration and litigation processes in the UAE to help you decide the best approach for your dispute.",
  },
  // Add more posts...
];

export default function BlogPage() {
  return (
    <>
      {/* Page Header - Modern Style */}
      <section className="py-16 md:py-20 text-center bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h1 className={`text-4xl md:text-5xl font-bold ${headingColor} mb-3`}>Legal Insights & Articles</h1>
          <p className={`text-lg ${secondaryTextColor} max-w-2xl mx-auto`}>Stay informed with our latest analysis on legal developments, trends, and news.</p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogPosts.map((post, index) => (
              <div key={index} className={`${cardBgColor} rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col transition duration-300 hover:shadow-xl group`}>
                <Link href={`/blog/${post.slug}`} className="block aspect-video relative overflow-hidden">
                  <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="transition duration-300 group-hover:scale-105"/>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">{post.date}</p>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className={`text-lg font-semibold ${headingColor} mb-3 hover:${accentColor} transition duration-300 leading-snug`}>{post.title}</h3>
                  </Link>
                  <p className={`${secondaryTextColor} text-sm mb-4 flex-grow`}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className={`${accentColor} font-medium text-sm mt-auto inline-flex items-center`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Optional: Pagination Placeholder */}
          {/* <div className="mt-16 flex justify-center">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </a>
              <a href="#" aria-current="page" className="relative z-10 inline-flex items-center px-4 py-2 border border-green-500 bg-green-50 text-sm font-medium text-green-600">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </a>
            </nav>
          </div> */}
        </div>
      </section>
    </>
  );
}

