import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "المدونة القانونية - اسم مكتب المحاماة", // Replace with actual name later
  description: "ابق على اطلاع بأحدث الأفكار القانونية والمقالات والأخبار من خبراء [اسم مكتب المحاماة]",
};

// Define colors based on new direction
const accentColor = 'text-green-700';
const secondaryTextColor = 'text-gray-500';
const headingColor = 'text-gray-900';
const cardBgColor = 'bg-white';

// Placeholder blog posts (replace with actual data or fetch from CMS)
const blogPosts = [
  {
    slug: "فهم قوانين العمل الجديدة في الإمارات العربية المتحدة",
    title: "فهم التغييرات الرئيسية في قوانين العمل الحديثة في دولة الإمارات العربية المتحدة",
    image: "/assets/blog_article_1.png", // Use relevant images
    date: "25 أبريل 2025",
    excerpt: "لمحة موجزة عن التحديثات الهامة لقانون العمل في دولة الإمارات العربية المتحدة وتداعياتها على أصحاب العمل والموظفين.",
  },
  {
    slug: "اعتبارات رئيسية للعقود التجارية",
    title: "البنود الأساسية التي يجب تضمينها في عقودك التجارية",
    image: "/assets/blog_article_2.webp",
    date: "18 أبريل 2025",
    excerpt: "قم بحماية مصالح عملك من خلال التأكد من أن اتفاقياتك التجارية تغطي هذه المجالات الحرجة.",
  },
  {
    slug: "التعامل مع النزاعات العقارية في دبي",
    title: "الأخطاء الشائعة في معاملات العقارات في دبي وكيفية تجنبها",
    image: "/assets/blog_article_3.png",
    date: "10 أبريل 2025",
    excerpt: "نظرة ثاقبة حول كيفية التعامل مع تعقيدات النزاعات والمعاملات العقارية في سوق دبي الديناميكي.",
  },
  {
    slug: "حماية الملكية الفكرية في الإمارات العربية المتحدة",
    title: "حماية حقوق الملكية الفكرية الخاصة بك في دولة الإمارات العربية المتحدة",
    image: "/assets/legal_service_commercial.webp", // Placeholder image
    date: "2 أبريل 2025",
    excerpt: "استراتيجيات لحماية العلامات التجارية وبراءات الاختراع وحقوق النشر الخاصة بك ضمن الإطار القانوني لدولة الإمارات العربية المتحدة.",
  },
  {
    slug: "التحكيم مقابل التقاضي في الإمارات العربية المتحدة",
    title: "التحكيم مقابل التقاضي: اختيار الطريقة الصحيحة لحل النزاعات في الإمارات العربية المتحدة",
    image: "/assets/scales_of_justice.webp", // Placeholder image
    date: "25 مارس 2025",
    excerpt: "مقارنة بين عمليات التحكيم والتقاضي في دولة الإمارات العربية المتحدة لمساعدتك في تحديد النهج الأفضل لنزاعك.",
  },
  // Add more posts...
];

export default function BlogPage() {
  return (
    <>
      {/* Page Header - Modern Style */}
      <section className="py-16 md:py-20 text-center bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h1 className={`text-4xl md:text-5xl font-bold ${headingColor} mb-3`}>رؤى ومقالات قانونية</h1>
          <p className={`text-lg ${secondaryTextColor} max-w-2xl mx-auto`}>ابق على اطلاع بأحدث تحليلاتنا حول التطورات القانونية والاتجاهات والأخبار.</p>
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
                  <ArrowLeft className="ml-1 h-4 w-4" /> المـزيد
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

