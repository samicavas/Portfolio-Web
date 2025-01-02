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