
"use client"; 





import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming shadcn/ui Button
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming shadcn/ui Card
import { Briefcase, Users, BookOpen, MessageSquare } from 'lucide-react'; // Icons

// Define colors based on new direction (using SeaGreen #1f2a3f as logo green approximation)
const accentColor = 'text-[#293852]'; // الأزرق الرمادي الداكن
const accentBgColor = 'bg-[#293852]';
const hoverAccentBgColor = 'hover:bg-[#1f2a3f]'; // درجة أغمق منه للـ hover
const secondaryTextColor = 'text-gray-500';
const headingColor = 'text-gray-900';

export default function HomePage() {
  return (
    <>  
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-24 md:py-36 text-center text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/home_background_city.jpg')" }} // Added background image
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Ahmed Alshaali<br></br> Where Law Meets Excellence
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Providing expert legal counsel and representation across the UAE. We are committed to achieving justice with complete transparency.
          </p>
          <div className="space-x-4">
            <Button 
              asChild 
              className={`${accentBgColor} ${hoverAccentBgColor} text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1f2a3f]`}
            >
              <Link href="/contact">Free Consultation</Link>
            </Button>
            <Button 
              variant="outline" 
              asChild 
              className="bg-white/10 hover:bg-white/20 border-white text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Principles/About Snippet */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} mb-6`}>Our Core Principles</h2>
          <p className={`text-lg ${secondaryTextColor} max-w-3xl mx-auto mb-10`}>
            At our office, we strive to be the ideal legal partner for citizens and residents alike, protecting their rights and achieving justice with complete transparency.
          </p>
          {/* Placeholder for maybe some icons/key points */}
          <Button asChild variant="outline" className={`border-[#1f2a3f] ${accentColor} hover:bg-sky-500 hover:bg-sky-600/10 font-semibold py-3 px-6 rounded-md transition duration-300`}>
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>

      {/* Practice Areas Snippet */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} text-center mb-12`}>Practice Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Repeat Card for each practice area */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 p-6">
                 {/* Replace with new service image */}
                 <CardTitle className={`${headingColor} text-xl font-semibold`}>Civil Law</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className={`${secondaryTextColor} mb-4`}>Handling disputes related to contracts, property, and personal rights.</p>
                <Link href="/services#civil" className={`${accentColor} font-medium hover:underline`}>Read More</Link>
              </CardContent>
            </Card>
             <Card className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 p-6">
                 {/* Replace with new service image */}
                 <CardTitle className={`${headingColor} text-xl font-semibold`}>Commercial Law</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className={`${secondaryTextColor} mb-4`}>Advising businesses on corporate matters, trade, and transactions.</p>
                <Link href="/services#commercial" className={`${accentColor} font-medium hover:underline`}>Read More</Link>
              </CardContent>
            </Card>
             <Card className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 p-6">
                 {/* Replace with new service image */}
                 <CardTitle className={`${headingColor} text-xl font-semibold`}>Labor Law</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className={`${secondaryTextColor} mb-4`}>Representing employers and employees in labor disputes and contracts.</p>
                <Link href="/services#labor" className={`${accentColor} font-medium hover:underline`}>Read More</Link>
              </CardContent>
            </Card>
            {/* Add more cards as needed */}
          </div>
          <div className="text-center mt-10">
            <Button asChild className={`${accentBgColor} ${hoverAccentBgColor} text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg`}>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stats Snippet */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} text-center mb-12`}>Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Briefcase className={`w-12 h-12 ${accentColor} mx-auto mb-4`} />
              <h3 className={`text-xl font-semibold ${headingColor} mb-2`}>Years of Experience</h3>
              <p className={`${secondaryTextColor}`}>Decades of combined legal expertise in the UAE market.</p>
            </div>
            <div>
              <Users className={`w-12 h-12 ${accentColor} mx-auto mb-4`} />
              <h3 className={`text-xl font-semibold ${headingColor} mb-2`}>Client-Centric Approach</h3>
              <p className={`${secondaryTextColor}`}>We prioritize your needs and tailor strategies for optimal outcomes.</p>
            </div>
            <div>
              <BookOpen className={`w-12 h-12 ${accentColor} mx-auto mb-4`} />
              <h3 className={`text-xl font-semibold ${headingColor} mb-2`}>Proven Track Record</h3>
              <p className={`${secondaryTextColor}`}>Successfully handled numerous complex cases with favorable results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Snippet (Placeholder) */}
      {/* ... Add testimonials section if needed ... */}

      {/* Blog Snippet */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} text-center mb-12`}>Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Repeat Card for each blog post */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
               {/* Replace with new blog image */}
              <Image src="/assets/still-life-with-scales-justice.jpg" alt="Blog Post 1" width={400} height={250} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <p className={`text-sm ${secondaryTextColor} mb-2`}>April 20, 2025</p>
                <CardTitle className={`${headingColor} text-lg font-semibold mb-3 hover:${accentColor} transition-colors`}><Link href="/blog/post-1">Understanding New UAE Labor Laws</Link></CardTitle>
                <p className={`${secondaryTextColor} text-sm mb-4 line-clamp-3`}>A brief overview of the recent changes in the UAE labor regulations and what they mean for employers and employees...</p>
                <Link href="/blog/post-1" className={`${accentColor} font-medium text-sm hover:underline`}>Read More</Link>
              </CardContent>
            </Card>
             <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
               {/* Replace with new blog image */}
              <Image src="/assets/still-life-with-scales-justice (1).jpg" alt="Blog Post 2" width={400} height={250} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <p className={`text-sm ${secondaryTextColor} mb-2`}>April 15, 2025</p>
                <CardTitle className={`${headingColor} text-lg font-semibold mb-3 hover:${accentColor} transition-colors`}><Link href="/blog/post-2">The Importance of Will Registration</Link></CardTitle>
                <p className={`${secondaryTextColor} text-sm mb-4 line-clamp-3`}>Why registering your will in the UAE is crucial for asset protection and ensuring your wishes are followed...</p>
                <Link href="/blog/post-2" className={`${accentColor} font-medium text-sm hover:underline`}>Read More</Link>
              </CardContent>
            </Card>
             <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
               {/* Replace with new blog image */}
              <Image src="/assets/closeup-shot-person-writing-book-with-gavel-table.jpg" alt="Blog Post 3" width={400} height={250} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <p className={`text-sm ${secondaryTextColor} mb-2`}>April 10, 2025</p>
                <CardTitle className={`${headingColor} text-lg font-semibold mb-3 hover:${accentColor} transition-colors`}><Link href="/blog/post-3">Navigating Real Estate Disputes</Link></CardTitle>
                <p className={`${secondaryTextColor} text-sm mb-4 line-clamp-3`}>Common types of real estate disputes in Dubai and how expert legal advice can help resolve them effectively...</p>
                <Link href="/blog/post-3" className={`${accentColor} font-medium text-sm hover:underline`}>Read More</Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className={`border-[#1f2a3f] ${accentColor} hover:bg-sky-500 hover:bg-sky-600/10 font-semibold py-3 px-6 rounded-md transition duration-300`}>
              <Link href="/blog">Visit Our Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#1f2a3f] to-[#256d45] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Case?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Contact us today for a confidential and free initial consultation with our expert legal team.</p>
          <Button 
            asChild 
            variant="outline" 
            className="bg-white text-[#1f2a3f] hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
      
    </>
  );
}

