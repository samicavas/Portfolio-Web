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
    'hero.greeting': 'Merhaba, Ben Sami 👋',
    'hero.title': 'Full Stack Geliştirici & Yazılım Mühendisi',
    'bio.title': 'Tutkulu Bir Yazılım Geliştiricisi',
    'bio.p1': '5 yıllık deneyimimle modern web teknolojileri konusunda uzmanlaşmış bir yazılım mühendisiyim. Kullanıcı deneyimini ön planda tutarak, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.',
    'bio.p2': 'React, Next.js, Node.js ve TypeScript başta olmak üzere modern teknolojilerle çalışmaktan keyif alıyorum. Açık kaynak projelere katkıda bulunmayı ve teknoloji topluluklarıyla etkileşimde bulunmayı seviyorum.',
    'bio.p3': 'Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum. Yeni teknolojileri keşfetmek ve bunları projelerimde kullanmak benim için bir tutku.',
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
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hello, I\'m Sami 👋',
    'hero.title': 'Full Stack Developer & Software Engineer',
    'bio.title': 'Passionate Software Developer',
    'bio.p1': 'I am a software engineer with 5 years of experience specialized in modern web technologies. I develop performant and scalable applications with a focus on user experience.',
    'bio.p2': 'I enjoy working with modern technologies including React, Next.js, Node.js, and TypeScript. I love contributing to open source projects and engaging with technology communities.',
    'bio.p3': 'I focus on continuous learning and self-improvement. Exploring new technologies and implementing them in my projects is my passion.',
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