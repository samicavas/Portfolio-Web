'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.projects': 'Projeler',
    'nav.contact': 'İletişim',
    'hero.greeting': 'Merhaba, Ben Furkan Sami Çavaş',
    'hero.title': 'Full Stack Geliştirici & Bilgisayar Mühendisi',
    'bio.title': 'Deneyimli Full Stack Geliştirici',
    'bio.p1': 'Bilgisayar mühendisiyim ve 4 yıldır aktif olarak modern web teknolojileri üzerinde çalışıyorum. Frontend tarafında React, Next.js ve Angular, mobil tarafta React Native, backend tarafında ise NestJS teknolojilerinde uzmanlaşmış durumdayım.',
    'bio.p2': 'Özellikle web ve mobil uygulama geliştirme konusunda kapsamlı deneyime sahibim. Modern teknolojileri kullanarak, performanslı ve kullanıcı dostu uygulamalar geliştirmeye odaklanıyorum. TypeScript, Node.js ve modern frontend framework\'leri ile çalışmaktan keyif alıyorum.',
    'bio.p3': 'Sürekli kendimi geliştirmeye ve yeni teknolojileri öğrenmeye odaklanıyorum. Clean code prensiplerine uygun, sürdürülebilir ve ölçeklenebilir uygulamalar geliştirmeyi hedefliyorum.',
    'tech.title': 'Teknoloji Yığınım',
    'stats.experience': 'Yıl Deneyim',
    'stats.projects': 'Tamamlanan Proje',
    'stats.clients': 'Mutlu Müşteri',
    'stats.contributions': 'Github Katkısı',
    'cta.contact': 'Benimle İletişime Geçin',
    'footer.contact': 'İletişim',
    'footer.social': 'Sosyal Medya',
    'footer.quickLinks': 'Hızlı Linkler',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.location': 'Bursa, Türkiye',
    'footer.phone': 'Telefon',
    'contact.title': 'İletişime Geçin',
    'contact.description': 'Benimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.',
    'contact.name': 'Adınız',
    'contact.email': 'E-posta Adresiniz',
    'contact.message': 'Mesajınız',
    'contact.send': 'Gönder',
    'contact.success': 'Mesajınız başarıyla gönderildi!',
    'contact.error': 'Bir hata oluştu. Lütfen tekrar deneyin.',
    'about.title': 'Hakkımda',
    'about.intro': '28 yaşında, tutkulu bir yazılım geliştiricisiyim. Kütahya Dumlupınar Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum. Yazılım geliştirme benim için sadece bir meslek değil, aynı zamanda en büyük hobim. Bu alanda aktif olarak 4 yıldır profesyonel deneyime sahibim.',
    'about.skills': 'Teknik Yetenekler',
    'about.frontend': 'Frontend Geliştirme',
    'about.frontend.desc': 'Modern web uygulamaları geliştirmede uzmanım. Angular ve React gibi popüler frontend framework\'leri ile çalışıyorum. Özellikle Next.js kullanarak SEO dostu, performanslı web uygulamaları geliştiriyorum.',
    'about.mobile': 'Mobil Uygulama Geliştirme',
    'about.mobile.desc': 'React Native ile cross-platform mobil uygulamalar geliştiriyorum. Tek bir kod tabanıyla hem iOS hem de Android platformları için native performansta uygulamalar oluşturabiliyorum.',
    'about.backend': 'Backend Geliştirme',
    'about.backend.desc': 'NestJS ile güçlü ve ölçeklenebilir backend sistemleri geliştiriyorum. REST API\'ler, mikroservisler ve veritabanı yönetimi konularında deneyimliyim.',
    'about.experience': 'Deneyim ve Yaklaşımım',
    'about.experience.p1': '4 yıllık profesyonel deneyimimde, çeşitli ölçeklerde projeler geliştirdim. Her projede kullanıcı deneyimini ön planda tutarak, modern ve sürdürülebilir çözümler üretmeye odaklanıyorum. Yazılım geliştirme sürecinde clean code prensiplerini benimseyerek, okunabilir ve bakımı kolay kod yazmaya özen gösteriyorum.',
    'about.experience.p2': 'Sürekli öğrenme ve kendimi geliştirme konusunda tutkulu bir yaklaşımım var. Yeni teknolojileri takip ediyor, öğreniyor ve projelerimde uygun olanları kullanıyorum. Ayrıca, açık kaynak projelere katkıda bulunmayı ve teknoloji topluluklarıyla etkileşimde bulunmayı seviyorum.',
    'projects.title': 'Projeler',
    'projects.current': 'Güncel',
    'projects.technologies': 'Kullanılan Teknolojiler',
    'projects.duration': 'Süre',
    'projects.present': 'Devam Ediyor',
    'projects.description': 'Açıklama',
    'cookies.description.part1': 'Bu web sitesi, size en iyi deneyimi sunmak için çerezleri kullanır.',
    'cookies.description.part2': 'Çerez kullanımımız hakkında daha fazla bilgi için',
    'cookies.description.part3': 'inceleyebilirsiniz.',
    'cookies.policy': 'gizlilik politikamızı',
    'cookies.accept': "Kabul Et",
    'cookies.reject': "Reddet",
    'cookies.learnMore': "Daha fazla bilgi",
    'cookie.policy.title': "Çerez Politikası",
    'cookie.policy.what.title': "Çerezler Nedir?",
    'cookie.policy.what.description': "Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, size daha iyi bir deneyim sunmamıza yardımcı olur.",
    'cookie.policy.why.title': "Neden Çerez Kullanıyoruz?",
    'cookie.policy.why.reason1': "Site tercihlerinizi hatırlamak için",
    'cookie.policy.why.reason2': "Dil seçiminizi kaydetmek için",
    'cookie.policy.why.reason3': "Tema seçiminizi saklamak için",
    'cookie.policy.types.title': "Çerez Türleri",
    'cookie.policy.types.essential.title': "Zorunlu Çerezler",
    'cookie.policy.types.essential.description': "Bu çerezler, web sitesinin temel işlevleri için gereklidir ve devre dışı bırakılamazlar.",
    'cookie.policy.types.preferences.title': "Tercih Çerezleri",
    'cookie.policy.types.preferences.description': "Bu çerezler, dil ve tema gibi tercihlerinizi hatırlamamıza yardımcı olur.",
    'cookie.policy.control.title': "Çerezleri Nasıl Kontrol Edebilirim?",
    'cookie.policy.control.description': "Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz. Ancak, çerezleri devre dışı bırakmak bazı özelliklerin çalışmamasına neden olabilir."
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hello, I\'m Furkan Sami Çavaş',
    'hero.title': 'Full Stack Developer & Computer Engineer',
    'bio.title': 'Experienced Full Stack Developer',
    'bio.p1': 'I am a computer engineer with 4 years of active experience in modern web technologies. I have specialized in React, Next.js, and Angular for frontend, React Native for mobile development, and NestJS for backend development.',
    'bio.p2': 'I have extensive experience in web and mobile application development. I focus on developing performant and user-friendly applications using modern technologies. I enjoy working with TypeScript, Node.js, and modern frontend frameworks.',
    'bio.p3': 'I am dedicated to continuous self-improvement and learning new technologies. I aim to develop clean, maintainable, and scalable applications following clean code principles.',
    'tech.title': 'Tech Stack',
    'stats.experience': 'Years Experience',
    'stats.projects': 'Projects Completed',
    'stats.clients': 'Happy Clients',
    'stats.contributions': 'Github Contributions',
    'cta.contact': 'Get in Touch',
    'footer.contact': 'Contact',
    'footer.social': 'Social Media',
    'footer.quickLinks': 'Quick Links',
    'footer.rights': 'All rights reserved.',
    'footer.location': 'Bursa, Turkey',
    'footer.phone': 'Phone',
    'contact.title': 'Get in Touch',
    'contact.description': 'Fill out the form below to get in touch with me.',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send',
    'contact.success': 'Your message has been sent successfully!',
    'contact.error': 'An error occurred. Please try again.',
    'about.title': 'About Me',
    'about.intro': 'I am a passionate 28-year-old software developer. I graduated from Kütahya Dumlupınar University with a degree in Computer Engineering. Software development is not just my profession but also my biggest hobby. I have 4 years of active professional experience in this field.',
    'about.skills': 'Technical Skills',
    'about.frontend': 'Frontend Development',
    'about.frontend.desc': 'I specialize in developing modern web applications. I work with popular frontend frameworks like Angular and React. I particularly focus on developing SEO-friendly, high-performance web applications using Next.js.',
    'about.mobile': 'Mobile App Development',
    'about.mobile.desc': 'I develop cross-platform mobile applications using React Native. I can create native-performance applications for both iOS and Android platforms using a single codebase.',
    'about.backend': 'Backend Development',
    'about.backend.desc': 'I develop robust and scalable backend systems using NestJS. I am experienced in REST APIs, microservices, and database management.',
    'about.experience': 'Experience and Approach',
    'about.experience.p1': 'In my 4 years of professional experience, I have developed projects of various scales. I focus on producing modern and sustainable solutions while prioritizing user experience in every project. I embrace clean code principles in the software development process, taking care to write readable and maintainable code.',
    'about.experience.p2': 'I have a passionate approach to continuous learning and self-improvement. I follow and learn new technologies and use appropriate ones in my projects. I also enjoy contributing to open source projects and engaging with technology communities.',
    'projects.title': 'Projects',
    'projects.current': 'Current',
    'projects.technologies': 'Technologies Used',
    'projects.duration': 'Duration',
    'projects.present': 'Present',
    'projects.description': 'Description',
    'cookies.description.part1': 'This website uses cookies to ensure you get the best experience.',
    'cookies.description.part2': 'For more information about our cookie usage, please read our',
    'cookies.description.part3': ' ',
    'cookies.policy': 'privacy policy',
    'cookies.accept': "Accept",
    'cookies.reject': "Reject",
    'cookies.learnMore': "Learn more",
    'cookie.policy.title': "Cookie Policy",
    'cookie.policy.what.title': "What Are Cookies?",
    'cookie.policy.what.description': "Cookies are small text files that are stored in your browser when you visit our website. These files help us provide you with a better experience.",
    'cookie.policy.why.title': "Why Do We Use Cookies?",
    'cookie.policy.why.reason1': "To remember your site preferences",
    'cookie.policy.why.reason2': "To save your language preference",
    'cookie.policy.why.reason3': "To store your theme choice",
    'cookie.policy.types.title': "Types of Cookies",
    'cookie.policy.types.essential.title': "Essential Cookies",
    'cookie.policy.types.essential.description': "These cookies are necessary for the basic functions of the website and cannot be disabled.",
    'cookie.policy.types.preferences.title': "Preference Cookies",
    'cookie.policy.types.preferences.description': "These cookies help us remember your preferences such as language and theme.",
    'cookie.policy.control.title': "How Can I Control Cookies?",
    'cookie.policy.control.description': "You can manage or delete cookies through your browser settings. However, disabling cookies may cause some features to stop working."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language || 'tr';
    setLanguage(savedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'tr' ? 'en' : 'tr';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['tr']] || key;
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 