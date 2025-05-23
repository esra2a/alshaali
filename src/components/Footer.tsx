import Link from 'next/link';
import Image from 'next/image';

// Define accent color (e.g., a shade of green from the logo)
const accentColor = 'text-green-700';
const hoverAccentColor = 'hover:text-green-600';
const bgColor = 'bg-gray-100'; // Lighter background for a calmer feel
const textColor = 'text-gray-600';
const headingColor = 'text-gray-800';

const Footer = () => {
  return (
    <footer className={`${bgColor} ${textColor} py-12 mt-16 border-t border-gray-200`}>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and Brief */}
        <div className="md:col-span-1">
          <Link href="/">
            <Image src="/assets/logo_header.png" alt="Law Firm Logo" width={180} height={60} className="mb-4" />
          </Link>
          <p className="text-sm mb-4">
            Providing expert legal solutions with dedication and integrity. Your trusted partner in navigating the complexities of law.
          </p>
          {/* Social Media Icons Placeholder */}
          <div className="flex space-x-4">
            {/* Add SVG icons for social media */}
            {/* Example: <Link href="#" className="text-gray-400 hover:text-green-700"><svg>...</svg></Link> */}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className={`text-lg font-semibold ${headingColor} mb-4`}>Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className={`${textColor} ${hoverAccentColor} transition duration-300`}>Home</Link></li>
            <li><Link href="/about" className={`${textColor} ${hoverAccentColor} transition duration-300`}>About Us</Link></li>
            <li><Link href="/services" className={`${textColor} ${hoverAccentColor} transition duration-300`}>Services</Link></li>
            <li><Link href="/team" className={`${textColor} ${hoverAccentColor} transition duration-300`}>Our Team</Link></li>
            <li><Link href="/blog" className={`${textColor} ${hoverAccentColor} transition duration-300`}>Blog</Link></li>
            <li><Link href="/contact" className={`${textColor} ${hoverAccentColor} transition duration-300`}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Practice Areas (Example) */}
        <div>
          <h3 className={`text-lg font-semibold ${headingColor} mb-4`}>Practice Areas</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services#civil" className={`${textColor} ${hoverAccentColor} transition duration-300`}>Civil Cases</Link></li>
            <li><Link href="/services#commercial" className={`${textColor} ${hoverAccentColor} transition duration-300`}>Commercial Issues</Link></li>
            <li><Link href="/services#labor" className={`${textColor} ${hoverAccentColor} transition duration-300`}>Labor Issues</Link></li>
            <li><Link href="/services#personal" className={`${textColor} ${hoverAccentColor} transition duration-300`}>Personal Status</Link></li>
            <li><Link href="/services#implementation" className={`${textColor} ${hoverAccentColor} transition duration-300`}>Implementation</Link></li>
            {/* Add more links if applicable */}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className={`text-lg font-semibold ${headingColor} mb-4`}>Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              
            </li>
            <li className="flex items-start">
              <svg className={`w-5 h-5 #29385 mr-2 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>+971567778217</span>
            </li>
            <li className="flex items-start">
              <svg className={`w-5 h-5  #29385 mr-2 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <a href="info@alshaaliattorneys.ae" className="text-gray-700 hover:text-[#293852] transition duration-300 block mt-1">
  info@alshaaliattorneys.ae
</a>            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-300 pt-6 text-center">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} All Rights Reserved. Developed by Esraa Elsayed.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


<a href="mailto:info@ahmed-sa.com" className={`text-gray-700 ${accentColor} transition duration-300 block mt-1`}>
  info@ahmed-sa.com
</a>