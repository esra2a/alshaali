import Image from 'next/image';
import type { Metadata } from "next";
import { Linkedin, Mail, Phone } from 'lucide-react'; // Icons for contact

export const metadata: Metadata = {
  title: "Our Team - Law Firm Name", // Replace with actual name later
  description: "Meet the experienced legal professionals at [Law Firm Name]. Our team is dedicated to providing expert advice and representation.",
};

// Define colors based on new direction
const accentColor = 'text-green-700';
const secondaryTextColor = 'text-gray-500';
const headingColor = 'text-gray-900';
const cardBgColor = 'bg-white';

// Placeholder team data (replace with actual data)
const teamMembers = [
  {
    name: "Adv. Name Placeholder 1",
    title: "Managing Partner",
    image: "/assets/team_member_1.webp",
    bio: "Extensive experience in commercial litigation and corporate law. Dedicated to achieving strategic outcomes for clients.",
    linkedin: "#",
    email: "mailto:placeholder1@lawfirm.example",
  },
  {
    name: "Adv. Name Placeholder 2",
    title: "Senior Associate - Real Estate",
    image: "/assets/team_member_2.webp",
    bio: "Specializes in complex real estate transactions and property disputes throughout the UAE.",
    linkedin: "#",
    email: "mailto:placeholder2@lawfirm.example",
  },
  {
    name: "Dr. Name Placeholder 3",
    title: "Legal Consultant - Arbitration",
    image: "/assets/team_member_3.webp",
    bio: "Expert in international arbitration and alternative dispute resolution mechanisms.",
    linkedin: "#",
    email: "mailto:placeholder3@lawfirm.example",
  },
  {
    name: "Ms. Name Placeholder 4",
    title: "Associate - Labor Law",
    image: "/assets/team_member_4.webp",
    bio: "Focuses on employment contracts, workplace disputes, and compliance with UAE Labour Law.",
    linkedin: "#",
    email: "mailto:placeholder4@lawfirm.example",
  },
  // Add more team members as needed
   {
    name: "Mr. Name Placeholder 5",
    title: "Paralegal",
    image: "/assets/team_member_1.webp", // Use a different image or generic placeholder
    bio: "Provides essential support in case preparation, legal research, and document management.",
    linkedin: "#",
    email: "mailto:placeholder5@lawfirm.example",
  },
   {
    name: "Ms. Name Placeholder 6",
    title: "Legal Secretary",
    image: "/assets/team_member_2.webp", // Use a different image or generic placeholder
    bio: "Ensures smooth office operations and effective client communication.",
    linkedin: "#",
    email: "mailto:placeholder6@lawfirm.example",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Page Header - Modern Style */}
      <section className="py-16 md:py-20 text-center bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h1 className={`text-4xl md:text-5xl font-bold ${headingColor} mb-3`}>Meet Our Experts</h1>
          <p className={`text-lg ${secondaryTextColor} max-w-2xl mx-auto`}>A team of dedicated and experienced legal professionals committed to your success.</p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className={`${cardBgColor} rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col text-center p-6 transition duration-300 hover:shadow-xl`}>
                <div className="relative w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
                </div>
                <h3 className={`text-xl font-semibold ${headingColor} mb-1`}>{member.name}</h3>
                <p className={`${accentColor} text-sm font-medium mb-3`}>{member.title}</p>
                <p className={`${secondaryTextColor} text-sm mb-5 flex-grow`}>{member.bio}</p>
                {/* Contact Icons */}
                <div className="flex justify-center space-x-4 mt-auto">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:${accentColor} transition duration-300`}>
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.email && (
                    <a href={member.email} className={`text-gray-400 hover:${accentColor} transition duration-300`}>
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                  {/* Add Phone if applicable */}
                  {/* <a href="tel:+971..." className={`text-gray-400 hover:${accentColor} transition duration-300`}>
                    <Phone className="w-5 h-5" />
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Optional: Join Our Team CTA */}
      {/* <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className={`text-2xl md:text-3xl font-semibold ${headingColor} mb-4`}>Interested in Joining Us?</h2>
          <p className={`${secondaryTextColor} max-w-xl mx-auto mb-8`}>We are always looking for talented legal professionals. Explore career opportunities at [Law Firm Name].</p>
          <a href="/careers" className={`bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-md transition duration-300 inline-flex items-center shadow-md hover:shadow-lg`}>
            View Open Positions
          </a>
        </div>
      </section> */} 
    </>
  );
}

