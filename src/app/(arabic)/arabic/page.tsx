
"use client"; 
export const metadata = {
  title: "مكتب الشعالي للمحاماة",
  description: "مكتب الشعالي للمحاماة يقدم خدمات قانونية متميزة في دولة الإمارات في مختلف التخصصات.",
  keywords: [,"محمد السيد المحامي","محاماة", "قانون", "مكتب محاماة", "مكتب الشعالي", "محامي في الإمارات", " Alshaali Law Firm ", " Law Firm ", " Mohamed Alsayed lawyer "],
};


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
            أحمـد الشعـالي<br></br> حيث يلتقي القانون بالتميز
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          نقدم استشارات قانونية متخصصة وتمثيلًا قانونيًا في جميع أنحاء دولة الإمارات العربية المتحدة. نلتزم بتحقيق العدالة بشفافية تامة
          </p>
          <div className="space-x-4">
            <Button 
              asChild 
              className={`${accentBgColor} ${hoverAccentBgColor} text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1f2a3f]`}
            >
             <Link href="/arabic/contact/">استشارة مجانية</Link>
            </Button>
            <Button 
              variant="outline" 
              asChild 
              className="bg-white/10 hover:bg-white/20 border-white text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
            <Link href="/arabic/contact" className={`${secondaryTextColor} ${headingColor} transition duration-300`}>اتصل بنا </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Principles/About Snippet */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} mb-6`}>مبادئنا الأساسية</h2>
          <p className={`text-lg ${secondaryTextColor} max-w-3xl mx-auto mb-10`}>
          في مكتبنا، نسعى جاهدين لأن نكون الشريك القانوني الأمثل للمواطنين والمقيمين على حد سواء، وحماية حقوقهم وتحقيق العدالة بشفافية كاملة
          </p>
          {/* Placeholder for maybe some icons/key points */}
          <Button asChild variant="outline" className={`border-[#1f2a3f] ${accentColor} hover:bg-sky-500 hover:bg-sky-600/10 font-semibold py-3 px-6 rounded-md transition duration-300`}>
           <Link href="/arabic/about" className={`${secondaryTextColor} ${headingColor} transition duration-300`}>تعرف على المزيد عنا</Link>
          </Button>
        </div>
      </section>

      {/* Practice Areas Snippet */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} text-center mb-12`}>مجالات الممارسة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Repeat Card for each practice area */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 p-6">
                 {/* Replace with new service image */}
                 <CardTitle className={`${headingColor} text-xl font-semibold`}>القانون المدني</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className={`${secondaryTextColor} mb-4`}>معالجة النزاعات المتعلقة بالعقود والملكية والحقوق الشخصية</p>
            <Link href="/arabic/services" className={`${secondaryTextColor} ${headingColor} transition duration-300`}>قراءة المزيد</Link>
              </CardContent>
            </Card>
             <Card className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 p-6">
                 {/* Replace with new service image */}
                 <CardTitle className={`${headingColor} text-xl font-semibold`}>القانون التجاري</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className={`${secondaryTextColor} mb-4`}>تقديم المشورة للشركات بشأن المسائل المتعلقة بالشركات والتجارة والمعاملات</p>
            <Link href="/arabic/services" className={`${secondaryTextColor} ${headingColor} transition duration-300`}> قراءة المزيد</Link>
              </CardContent>
            </Card>
             <Card className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 p-6">
                 {/* Replace with new service image */}
                 <CardTitle className={`${headingColor} text-xl font-semibold`}>قانون العمل</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className={`${secondaryTextColor} mb-4`}>تمثيل أصحاب العمل والموظفين في النزاعات العمالية والعقود</p>
            <Link href="/arabic/services" className={`${secondaryTextColor} ${headingColor} transition duration-300`}>قراءة المزيد</Link>
              </CardContent>
            </Card>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 p-6">
                 {/* Replace with new service image */}
                 <CardTitle className={`${headingColor} text-xl font-semibold`}> القانون البحري</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className={`${secondaryTextColor} mb-4`}>نحن خبراء في القانون البحري ونقدم استشارات قانونية متخصصة في هذا المجال</p>
            <Link href="/arabic/services" className={`${secondaryTextColor} ${headingColor} transition duration-300`}>من نحن</Link>
              </CardContent>
            </Card>  <Card className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 p-6">
                 {/* Replace with new service image */}
                 <CardTitle className={`${headingColor} text-xl font-semibold`}>القانون الجنائي</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className={`${secondaryTextColor} mb-4`}>نتمتع بخبرة واسعة في القانون الجنائي ونتولى القضايا الجنائية باحترافية عالية</p>
            <Link href="/arabic/services" className={`${secondaryTextColor} ${headingColor} transition duration-300`}>قراءة المزيد </Link>
              </CardContent>
            </Card>  
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 p-6">
                 {/* Replace with new service image */}
                 <CardTitle className={`${headingColor} text-xl font-semibold`}>قانون الأسرة </CardTitle>
   

              </CardHeader>
                           
              <CardContent className="p-6">
                                 <p className={`${secondaryTextColor} mb-4`}>نساعد عملاءنا في قضايا الطلاق، الحضانة، والنفقة بكل حساسية واحتراف.
</p>
                <p className={`${secondaryTextColor} mb-4`}></p>
            <Link href="/arabic/services" className={`${secondaryTextColor} ${headingColor} transition duration-300`}>من نحن</Link>
              </CardContent>
            </Card>
            {/* Add more cards as needed */}
          </div>
          <div className="text-center mt-10">
            <Button asChild className={`${accentBgColor} ${hoverAccentBgColor} text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg`}>
            <Link href="/arabic/services" className={`${secondaryTextColor} ${headingColor} transition duration-300`}>قراءة المزيد </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stats Snippet */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} text-center mb-12`}>لمـاذا نحـن</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Briefcase className={`w-12 h-12 ${accentColor} mx-auto mb-4`} />
              <h3 className={`text-xl font-semibold ${headingColor} mb-2`}>سنـوات من الخبـرة</h3>
              <p className={`${secondaryTextColor}`}>عقود من الخبرة القانونية المشتركة في سوق الإمارات العربية المتحدة</p>
            </div>
            <div>
              <Users className={`w-12 h-12 ${accentColor} mx-auto mb-4`} />
              <h3 className={`text-xl font-semibold ${headingColor} mb-2`}>نهج يركز على العميل</h3>
              <p className={`${secondaryTextColor}`}>نحن نعطي الأولوية لاحتياجاتك ونصمم استراتيجيات لتحقيق أفضل النتائج</p>
            </div>
            <div>
              <BookOpen className={`w-12 h-12 ${accentColor} mx-auto mb-4`} />
              <h3 className={`text-xl font-semibold ${headingColor} mb-2`}>سجل حافل بالنجاحات</h3>
              <p className={`${secondaryTextColor}`}>تعامل بنجاح مع العديد من القضايا المعقدة مع نتائج إيجابية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Snippet (Placeholder) */}
      {/* ... Add testimonials section if needed ... */}

      {/* Blog Snippet */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} text-center mb-12`}>أحدث الرؤى</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Repeat Card for each blog post */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
               {/* Replace with new blog image */}
              <Image src="/assets/still-life-with-scales-justice.jpg" alt="Blog Post 1" width={400} height={250} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <p className={`text-sm ${secondaryTextColor} mb-2`}>أبريل 20 2025</p>
                <CardTitle className={`${headingColor} text-lg font-semibold mb-3 hover:${accentColor} transition-colors`}><Link href="/blog/post-1">فهم قوانين العمل الجديدة في دولة الإمارات العربية المتحدة</Link></CardTitle>
                <p className={`${secondaryTextColor} text-sm mb-4 line-clamp-3`}>نظرة عامة موجزة على التغييرات الأخيرة في قوانين العمل في دولة الإمارات العربية المتحدة وما تعنيه لأصحاب العمل والموظفين...</p>
                 <Link href="/arabic/blog/" className={`${secondaryTextColor} ${headingColor} transition duration-300`}>المـزيد</Link>
              </CardContent>
            </Card>
             <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
               {/* Replace with new blog image */}
              <Image src="/assets/still-life-with-scales-justice (1).jpg" alt="Blog Post 2" width={400} height={250} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <p className={`text-sm ${secondaryTextColor} mb-2`}>أبريل 15 2025</p>
                <CardTitle className={`${headingColor} text-lg font-semibold mb-3 hover:${accentColor} transition-colors`}><Link href="/blog/post-2">أهمية تسجيل الوصية</Link></CardTitle>
                <p className={`${secondaryTextColor} text-sm mb-4 line-clamp-3`}>لماذا يعد تسجيل وصيتك في الإمارات العربية المتحدة أمرًا بالغ الأهمية لحماية أصولك وضمان تنفيذ رغباتك...</p>
                <Link href="/arabic/blog/" className={`${accentColor} font-medium text-sm hover:underline`}>المـزيد</Link>
              </CardContent>
            </Card>
             <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg overflow-hidden">
               {/* Replace with new blog image */}
              <Image src="/assets/closeup-shot-person-writing-book-with-gavel-table.jpg" alt="Blog Post 3" width={400} height={250} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <p className={`text-sm ${secondaryTextColor} mb-2`}>أبريل 10 2025</p>
                <CardTitle className={`${headingColor} text-lg font-semibold mb-3 hover:${accentColor} transition-colors`}><Link href="/blog/post-3">التعامل مع النزاعات العقارية</Link></CardTitle>
                <p className={`${secondaryTextColor} text-sm mb-4 line-clamp-3`}>أنواع النزاعات العقارية الشائعة في دبي وكيف يمكن للمشورة القانونية المتخصصة أن تساعد في حلها بشكل فعال...</p>
                 <Link href="/arabic/blog/" className={`${accentColor} font-medium text-sm hover:underline`}>المـزيد</Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className={`border-[#1f2a3f] ${accentColor} hover:bg-sky-500 hover:bg-sky-600/10 font-semibold py-3 px-6 rounded-md transition duration-300`}>
              <Link href="/arabic/blog/">مدونتنــا</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#1f2a3f] to-[#256d45] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لمناقشة قضيتك؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">اتصل بنا اليوم للحصول على استشارة أولية سرية ومجانية مع فريقنا القانوني الخبير</p>
          <Button 
            asChild 
            variant="outline" 
            className="bg-white text-[#1f2a3f] hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
           <Link href="/arabic/contact/">تواصل معنا</Link>
          </Button>
        </div>
      </section>
      
    </>
  );
}

