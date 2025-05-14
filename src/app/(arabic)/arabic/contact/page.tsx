
'use client'; // Add this directive to make it a Client Component

import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from 'lucide-react'; // Icons for contact info

// Metadata should ideally be defined in layout or page, but might cause issues here
// Let's comment it out for now to ensure the client component works
// export const metadata: Metadata = {
//   title: "Contact Us - Law Firm Name", // Replace with actual name later
//   description: "Get in touch with [Law Firm Name] for legal consultation or inquiries. Find our contact details and office location.",
// };

// Define colors based on new direction
const accentColor = 'text-green-700';
const accentBgColor = 'bg-green-700';
const hoverAccentBgColor = 'hover:bg-green-800';
const secondaryTextColor = 'text-gray-500';
const headingColor = 'text-gray-900';
const inputBorderColor = 'border-gray-300';
const inputFocusBorderColor = 'focus:border-green-500';
const inputFocusRingColor = 'focus:ring-green-500';

export default function ContactPage() {
  // Basic form handling simulation (no actual submission logic here)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here (e.g., using an API endpoint)
    alert('Form submitted (simulation). Implement actual submission logic.');
  };

  return (
    <>
      {/* Page Header - Modern Style */}
      <section className="py-16 md:py-20 text-center bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h1 className={`text-4xl md:text-5xl font-bold ${headingColor} mb-3`}>إتصـل بنـا</h1>
          <p className={`text-lg ${secondaryTextColor} max-w-2xl mx-auto`}>نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة مجانية أو أي استفسارات قانونية.</p>
        </div>
      </section>

      {/* Contact Details & Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">

          {/* Contact Information Column */}
          <div className="lg:col-span-5">
            <h2 className={`text-3xl font-semibold ${headingColor} mb-6`}>تواصل معنا</h2>
            <p className={`${secondaryTextColor} mb-8 text-base leading-relaxed`}>
            فريقنا جاهز لمساعدتك. تواصل معنا عبر الهاتف، أو البريد الإلكتروني، أو تفضل بزيارة مكتبنا خلال ساعات العمل.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className={`w-6 h-6 ${accentColor} mr-4 mt-1 flex-shrink-0`} />
                <div>
                  <h3 className={`text-lg font-semibold ${headingColor} mb-1`}>هـاتف</h3>
                  <a href="#" className={`text-gray-700 hover:${accentColor} transition duration-300`}>رقم هاتفنا</a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className={`w-6 h-6 ${accentColor} mr-4 mt-1 flex-shrink-0`} />
                <div>
                  <h3 className={`text-lg font-semibold ${headingColor} mb-1`}>بريد إلكتروني</h3>
                  <a href="mailto:ahmed@alshaaliattorneys.a" className={`text-gray-700 hover:${accentColor} transition duration-300 block`}>ahmed@alshaaliattorneys.a</a>
                  {/* <a href="mailto:support@lawfirm.example" className={`text-gray-700 hover:${accentColor} transition duration-300 block`}>support@lawfirm.example (Placeholder)</a> */}
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className={`w-6 h-6 ${accentColor} mr-4 mt-1 flex-shrink-0`} />
                <div>
                  <h3 className={`text-lg font-semibold ${headingColor} mb-1`}>عنوان المكتب</h3>
                  <p className="text-gray-700">عنوان مكتبنا</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className={`w-6 h-6 ${accentColor} mr-4 mt-1 flex-shrink-0`} />
                <div>
                  <h3 className={`text-lg font-semibold ${headingColor} mb-1`}>ساعات العمل</h3>
                  <p className="text-gray-700">الأحد - الخميس: 9:00 صباحًا - 6:00 مساءً</p>
                  <p className="text-gray-700">الجمعة - السبت: مغلق</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className={`text-3xl font-semibold ${headingColor} mb-6`}>أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className={`w-full px-4 py-2 ${inputBorderColor} rounded-md shadow-sm focus:outline-none ${inputFocusRingColor} ${inputFocusBorderColor}`}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">عنوان البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-2 ${inputBorderColor} rounded-md shadow-sm focus:outline-none ${inputFocusRingColor} ${inputFocusBorderColor}`}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف المحمول</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`w-full px-4 py-2 ${inputBorderColor} rounded-md shadow-sm focus:outline-none ${inputFocusRingColor} ${inputFocusBorderColor}`}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">عنوان الرسالة / الموضوع</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className={`w-full px-4 py-2 ${inputBorderColor} rounded-md shadow-sm focus:outline-none ${inputFocusRingColor} ${inputFocusBorderColor}`}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">رسالة</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={`w-full px-4 py-2 ${inputBorderColor} rounded-md shadow-sm focus:outline-none ${inputFocusRingColor} ${inputFocusBorderColor}`}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className={`${accentBgColor} ${hoverAccentBgColor} text-white font-semibold py-3 px-6 rounded-md transition duration-300 w-full md:w-auto shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                >
                  إرسـل
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* Optional: Map Section */}
      {/* <section className="h-96 bg-gray-200">
        <div className="container mx-auto px-6 h-full">
          {/* Embed Google Map or similar */}
          {/* <iframe src="https://www.google.com/maps/embed?..." width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe> */}
      {/*  </div>
      </section> */} 
    </>
  );
}



