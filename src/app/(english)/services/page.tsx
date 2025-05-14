import Image from 'next/image';
import type { Metadata } from "next";
import { CheckCircle } from 'lucide-react'; // Using lucide-react for icons

export const metadata: Metadata = {
  title: "Our Services - Law Firm Name", // Replace with actual name later
  description: "Explore the comprehensive legal services offered by [Law Firm Name], including civil, commercial, labor law, and more in the UAE.",
};

// Define colors based on new direction
const accentColor = 'text-green-700';
const secondaryTextColor = 'text-gray-500';
const headingColor = 'text-gray-900';
const sectionBgColor = 'bg-white';
const altSectionBgColor = 'bg-gray-50';

// Service data (can be moved to a separate file/CMS later)
const services = [
  {
    id: "civil",
    title: "Civil Cases",
    description: "We provide distinguished legal representation in all civil matters, including disputes between individuals, companies, and institutions. Our expertise covers contractual obligations, compensation claims, property disputes, and more, ensuring your rights are protected under UAE law.",
    image: "/assets/legal_service_civil.webp",
    icon: CheckCircle, // Example icon
    details: [
      "Contractual Disputes & Enforcement",
      "Real Estate & Property Litigation",
      "Debt Collection & Recovery",
      "Compensation & Tort Claims",
      "Insurance Disputes",
    ]
  },
  {
    id: "commercial",
    title: "Commercial Issues",
    description: "Our team supports clients in all commercial matters, from drafting and reviewing complex contracts to settling commercial disputes through negotiation or litigation. We handle corporate structuring, agency agreements, and intellectual property protection.",
    image: "/assets/legal_service_commercial.webp",
    icon: CheckCircle,
    details: [
      "Commercial Contract Drafting & Review",
      "Corporate Law & Governance",
      "Mergers & Acquisitions (M&A)",
      "Intellectual Property Rights (IPR)",
      "Agency & Distribution Agreements",
    ]
  },
  {
    id: "labor",
    title: "Labor Issues",
    description: "We assist both employers and employees with a wide range of labor issues, including contract negotiation, termination disputes, end-of-service benefits calculations, workplace investigations, and compliance with UAE Labour Law.",
    image: "/assets/legal_service_labor.webp",
    icon: CheckCircle,
    details: [
      "Employment Contracts & Negotiations",
      "Unfair Dismissal & Termination Claims",
      "End-of-Service Benefits Disputes",
      "Workplace Compliance & Policies",
      "Labor Litigation & Arbitration",
    ]
  },
  {
    id: "personal",
    title: "Personal Status Law",
    description: "Navigating sensitive personal status matters requires expertise and discretion. We handle cases related to marriage, divorce, child custody, inheritance, and wills, ensuring compliance with relevant UAE laws and respecting cultural nuances.",
    image: "/assets/legal_service_personal.webp",
    icon: CheckCircle,
    details: [
      "Marriage & Divorce Proceedings",
      "Child Custody & Guardianship",
      "Alimony & Financial Settlements",
      "Inheritance & Estate Planning",
      "Will Drafting & Execution",
    ]
  },
  {
    id: "implementation",
    title: "Implementation & Execution",
    description: "Securing a favorable judgment is only part of the process. We specialize in the effective implementation and execution of judicial rulings, arbitral awards, and settlement agreements, ensuring our clients realize the benefits of their legal victories.",
    image: "/assets/legal_service_implementation.webp", // Assuming this image exists
    icon: CheckCircle,
    details: [
      "Enforcement of Local & Foreign Judgments",
      "Execution of Arbitral Awards",
      "Asset Tracing & Recovery",
      "Negotiation of Payment Plans",
      "Cross-border Enforcement Procedures",
    ]
  },
  // Add more services if needed
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header - Modern Style */}
      <section className="py-16 md:py-20 text-center bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h1 className={`text-4xl md:text-5xl font-bold ${headingColor} mb-3`}>Our Practice Areas</h1>
          <p className={`text-lg ${secondaryTextColor} max-w-2xl mx-auto`}>Delivering specialized legal expertise across a wide range of practice areas to meet your needs.</p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 space-y-16 md:space-y-20">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16 scroll-mt-20`}>
              {/* Image */}
              <div className="lg:w-5/12">
                <Image src={service.image} alt={service.title} width={513} height={340} className="rounded-lg shadow-lg w-full object-cover" />
              </div>
              {/* Content */}
              <div className="lg:w-7/12">
                <service.icon className={`w-10 h-10 ${accentColor} mb-3`} strokeWidth={1.5} />
                <h2 className={`text-3xl font-semibold ${headingColor} mb-4`}>{service.title}</h2>
                <p className={`${secondaryTextColor} mb-6 text-base leading-relaxed`}>{service.description}</p>
                {service.details && (
                  <ul className="space-y-2 text-sm">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className={`w-4 h-4 ${accentColor} mr-2 flex-shrink-0`} strokeWidth={2} />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optional: Contact CTA */}
      <section className="py-16 bg-green-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className={`text-2xl md:text-3xl font-semibold ${headingColor} mb-4`}>Need Legal Assistance?</h2>
          <p className={`${secondaryTextColor} max-w-xl mx-auto mb-8`}>Contact us today to discuss your specific situation and learn how we can help you achieve your legal objectives.</p>
          <a href="/contact" className={`bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-md transition duration-300 inline-flex items-center shadow-md hover:shadow-lg`}>
            Request a Consultation
          </a>
        </div>
      </section>
    </>
  );
}

