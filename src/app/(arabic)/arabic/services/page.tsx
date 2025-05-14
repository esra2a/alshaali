import Image from 'next/image';
import type { Metadata } from "next";
import { CheckCircle } from 'lucide-react'; // Using lucide-react for icons

export const metadata: Metadata = {
  title: "خدماتنا - اسم مكتب المحاماة", // Replace with actual name later
  description: "استكشف الخدمات القانونية الشاملة التي تقدمها [اسم مكتب المحاماة]، بما في ذلك القانون المدني والتجاري وقانون العمل والمزيد في دولة الإمارات العربية المتحدة.",
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
    id: "مدني",
    title: "القضايا المدنية",
    description: "نقدم تمثيلًا قانونيًا متميزًا في جميع القضايا المدنية، بما في ذلك النزاعات بين الأفراد والشركات والمؤسسات. تغطي خبرتنا الالتزامات التعاقدية، ومطالبات التعويض، والنزاعات العقارية، وغيرها، لضمان حماية حقوقكم بموجب قانون دولة الإمارات العربية المتحدة.",
    image: "/assets/legal_service_civil.webp",
    icon: CheckCircle, // Example icon
    details: [
      "النزاعات التعاقدية والتنفيذ",
      "قضايا العقارات والممتلكات",
      "تحصيل الديون واستردادها",
      "مطالبات التعويض والضرر",
      "نزاعات التأمين",
    ]
  },
  {
    id: "تجاري",
    title: "القضايا التجارية",
    description: "يدعم فريقنا عملاءنا في جميع المسائل التجارية، بدءًا من صياغة ومراجعة العقود المعقدة وصولًا إلى تسوية النزاعات التجارية عبر التفاوض أو التقاضي. كما نتولى هيكلة الشركات، واتفاقيات الوكالات، وحماية الملكية الفكرية.",
    image: "/assets/legal_service_commercial.webp",
    icon: CheckCircle,
    details: [
      "صياغة ومراجعة العقود التجارية",
      "قانون الشركات والحوكمة",
      "عمليات الدمج والاستحواذ",
      "حقوق الملكية الفكرية",
      "اتفاقيات الوكالة والتوزيع",
    ]
  },
  {
    id: "تَعَب",
    title: "قضايا العمل",
    description: "نحن نساعد كل من أصحاب العمل والموظفين في مجموعة واسعة من قضايا العمل، بما في ذلك التفاوض على العقود، ونزاعات الإنهاء، وحسابات مكافآت نهاية الخدمة، والتحقيقات في مكان العمل، والامتثال لقانون العمل في دولة الإمارات العربية المتحدة.",
    image: "/assets/legal_service_labor.webp",
    icon: CheckCircle,
    details: [
      "عقود العمل والمفاوضات",
      "دعاوى الفصل التعسفي وإنهاء الخدمة",
      "نزاعات مكافأة نهاية الخدمة",
      "الامتثال والسياسات في مكان العمل",
      "قضايا العمل والتحكيم",
    ]
  },
  {
    id: "شخصي",
    title: "قانون الأحوال الشخصية",
    description: "يتطلب التعامل مع قضايا الأحوال الشخصية الحساسة خبرةً وحكمةً. نتولى قضايا الزواج والطلاق وحضانة الأطفال والميراث والوصايا، مع ضمان الامتثال لقوانين دولة الإمارات العربية المتحدة ذات الصلة واحترام الفروق الثقافية.",
    image: "/assets/legal_service_personal.webp",
    icon: CheckCircle,
    details: [
      "إجراءات الزواج والطلاق",
      "حضانة الأطفال والوصاية عليهم",
      "النفقة والتسويات المالية",
      "التخطيط للميراث والتركة",
      "صياغة الوصايا وتنفيذها",
    ]
  },
  {
    id: "تطبيق",
    title: "التنفيذ والتنفيذ",
    description: "الحصول على حكمٍ مُرضٍ ليس سوى جزءٍ من العملية. نحن متخصصون في التنفيذ الفعال للأحكام القضائية، وقرارات التحكيم، واتفاقيات التسوية، مما يضمن لعملائنا تحقيق مكاسبهم القانونية.",
    image: "/assets/legal_service_implementation.webp", // Assuming this image exists
    icon: CheckCircle,
    details: [
      "تنفيذ الأحكام المحلية والأجنبية",
      "تنفيذ أحكام التحكيم",
      "تتبع الأصول واستردادها",
      "التفاوض على خطط الدفع",
      "إجراءات الإنفاذ عبر الحدود",
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
          <h1 className={`text-4xl md:text-5xl font-bold ${headingColor} mb-3`}>مجالات ممارستنا</h1>
          <p className={`text-lg ${secondaryTextColor} max-w-2xl mx-auto`}>تقديم الخبرة القانونية المتخصصة عبر مجموعة واسعة من مجالات الممارسة لتلبية احتياجاتك.</p>
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
          <h2 className={`text-2xl md:text-3xl font-semibold ${headingColor} mb-4`}>هل تحتاج إلى مساعدة قانونية؟</h2>
          <p className={`${secondaryTextColor} max-w-xl mx-auto mb-8`}>اتصل بنا اليوم لمناقشة حالتك المحددة ومعرفة كيف يمكننا مساعدتك في تحقيق أهدافك القانونية.</p>
          <a href="/contact" className={`bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-md transition duration-300 inline-flex items-center shadow-md hover:shadow-lg`}>
          طلب استشارة
          </a>
        </div>
      </section>
    </>
  );
}

