import Image from 'next/image';
import type { Metadata } from "next";
import { CheckCircle } from 'lucide-react'; // Using lucide-react for icons

export const metadata: Metadata = {
  title: "About Us - Law Firm Name", // Replace with actual name later
  description: "Learn more about our law firm, our vision, mission, and values. Dedicated to justice and excellence in the UAE.",
};

// Define colors based on new direction
const accentColor = 'text-green-700';
const secondaryTextColor = 'text-gray-500';
const headingColor = 'text-gray-900';

export default function AboutPage() {
  return (
    <>
      {/* Page Header - Modern Style */}
      <section className="py-16 md:py-20 text-center bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h1 className={`text-4xl md:text-5xl font-bold ${headingColor} mb-3`}>About Our Firm</h1>
          <p className={`text-lg ${secondaryTextColor} max-w-2xl mx-auto`}>Committed to providing exceptional legal services with integrity and professionalism in the UAE.</p>
        </div>
      </section>

      {/* About the Office Section (Re-styled) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <span className={`text-sm font-semibold ${accentColor} uppercase tracking-wider mb-2 block`}>Our Foundation</span>
            <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} mb-5 leading-tight`}>Justice, Expertise, and Client Dedication</h2>
            <p className={`${secondaryTextColor} mb-4 text-base leading-relaxed`}>
              At [Law Firm Name], we believe justice begins with the right step. We leverage extensive legal expertise and a deep understanding of UAE laws to serve our clients with unwavering commitment and professionalism. We offer comprehensive solutions across diverse fields, from civil and commercial litigation to specialized consultations.
            </p>
            <p className={`${secondaryTextColor} text-base leading-relaxed`}>
              Transparency and innovation are core to our practice. We strive to achieve the best possible outcomes by navigating complex legal landscapes effectively and building lasting relationships based on trust.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            {/* Consider a more modern/abstract image or a professional team photo */}
            <Image src="/assets/about_office_image.webp" alt="Modern office interior or team meeting" width={600} height={450} className="rounded-lg shadow-xl w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section - Re-styled */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Vision */}
          <div className="text-center md:text-left p-6">
             <CheckCircle className={`w-10 h-10 ${accentColor} mb-3 mx-auto md:mx-0`} strokeWidth={1.5} />
            <h3 className={`text-2xl font-semibold ${headingColor} mb-3`}>Our Vision</h3>
            <p className={`${secondaryTextColor} text-sm leading-relaxed`}>
              To be the premier legal partner in the UAE, recognized for innovative solutions, unwavering integrity, and achieving exceptional results for our clients while upholding the rule of law.
            </p>
          </div>
          {/* Mission */}
          <div className="text-center md:text-left p-6 border-y md:border-y-0 md:border-x border-green-200">
             <CheckCircle className={`w-10 h-10 ${accentColor} mb-3 mx-auto md:mx-0`} strokeWidth={1.5} />
            <h3 className={`text-2xl font-semibold ${headingColor} mb-3`}>Our Mission</h3>
            <p className={`${secondaryTextColor} text-sm leading-relaxed`}>
              To provide specialized, comprehensive legal services by leveraging our deep expertise and commitment to client success, building trust through transparency and tailored strategies.
            </p>
          </div>
          {/* Values */}
          <div className="text-center md:text-left p-6">
             <CheckCircle className={`w-10 h-10 ${accentColor} mb-3 mx-auto md:mx-0`} strokeWidth={1.5} />
            <h3 className={`text-2xl font-semibold ${headingColor} mb-3`}>Our Values</h3>
            <p className={`${secondaryTextColor} text-sm leading-relaxed`}>
              Integrity, Excellence, Client-Focus, Confidentiality, and Community Contribution. These principles guide every action we take and every piece of advice we give.
            </p>
          </div>
        </div>
      </section>

       {/* Core Principles Section (Re-styled) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
           <h2 className={`text-3xl font-semibold ${headingColor} text-center mb-12`}>Our Guiding Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ // Using the same structure as homepage for consistency
              { title: "Justice and Equality", description: "Protecting rights without discrimination, in strict accordance with UAE law.", icon: CheckCircle },
              { title: "Absolute Confidentiality", description: "Maintaining client information with the highest security and ethical standards.", icon: CheckCircle },
              { title: "Local Expertise", description: "Providing specialized legal support based on deep understanding of the UAE environment.", icon: CheckCircle },
              { title: "Community Engagement", description: "Contributing to legal awareness and fostering a safe legal environment.", icon: CheckCircle },
            ].map((item, index) => (
              <div key={index} className="p-6 text-center bg-gray-50 rounded-lg border border-gray-100">
                <item.icon className={`w-10 h-10 ${accentColor} mx-auto mb-4`} strokeWidth={1.5} />
                <h3 className={`text-lg font-semibold ${headingColor} mb-2`}>{item.title}</h3>
                <p className={`${secondaryTextColor} text-sm`}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional: Call to Action Section */}
      {/* <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with Us</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">Let our experienced team guide you through your legal challenges. Contact us for a consultation.</p>
          <Link href="/contact" className="bg-white hover:bg-gray-100 text-green-700 font-semibold py-3 px-6 rounded-md transition duration-300">
            Request Consultation
          </Link>
        </div>
      </section> */} 
    </>
  );
}

