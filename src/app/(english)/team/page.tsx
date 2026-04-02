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
    name: "Ahmed Alshaali",
    title: "Lawyer - Owner",
    image: "/assets/ahmedalshaali.jpg",
    bio: "Extensive experience in all areas of legal practice.",
  },
  {
    name: "Sayed Mahmoud",
    title: "Legal Manager",
    image: "/assets/Sayed Mohamed.jpg",
    bio: "Twenty years of experience in legal practice.",
  },
  {
    name: "Mohamed ElShenawy",
    title: "Legal Advisor",
    image: "/assets/Mohamed.jpg",
    bio: "Ten years of experience in legal practice.",
  },
  {
    name: "Youbin Ma",
    title: "Legal Advisor - Partner",
    image: "/assets/youbin Ma.jpg",
    bio: "",
  },
  
  {
    name: "Ahmed Sheta",
    title: "Legal Advisor",
    image: "/assets/Ahmed sheta.jpg",
  },
  {
    name: "Yasser Khalil",
    title: "Legal Advisor",
  image: "/assets/Yasserkhalil.jpeg",
    bio: "",
  },
  {
    name: "Abeer Helal",
    title: "Legal Researcher",
    image: "/assets/abier.jpg",
  },
  {
    name: "Asmaa Elsayed",
    title: "Legal Assistant",
    image: "/assets/asmaa.jpg",
  },

   /*{
    name: "Amr Mosa",
    title: "Legal Researcher",
    image: "/assets/amr mosa.jpeg",
    bio: "",
  },*/
  {
    name: "Mostafa Amer",
    title: "Legal Researcher",
    image: "/assets/Mostafa amer.jpg",
    bio: "",
  },
  {
    name: "Adel Zahran",
    title: "Legal Assistant",
    image: "/assets/Adel Zahran.jpg",
  },
  {
    name: "Maria Cristina",
    title: "Legal Assistant",
    image: "/assets/maria.jpg",
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
                    <div key={index} className={`${cardBgColor} rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col text-center p-2 transition duration-300 hover:shadow-xl`}>
                      <div className="relative w-52 h-60 mx-auto mb-5 rounded-2xl overflow-hidden shadow-lg border-3 border-white">
        <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
      </div>
      
                      <h3 className={`text-xl font-semibold ${headingColor} mb-1`}>{member.name}</h3>
                      <p className={`${accentColor} text-sm font-medium mb-3`}>{member.title}</p>
                      <p className={`${secondaryTextColor} text-sm mb-5 flex-grow`}>{member.bio}</p>
                      {/* Contact Icons */}
                      <div className="flex justify-center space-x-4 mt-auto">
                        
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

