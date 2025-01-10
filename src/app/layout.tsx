import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { CookieProvider } from "@/context/CookieContext";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Furkan Sami Çavaş | Full Stack Developer',
  description: 'Full Stack Geliştirici ve Bilgisayar Mühendisi. React, Next.js, Angular, React Native ve NestJS teknolojilerinde uzmanlaşmış yazılım geliştiricisi.',
  keywords: 'Full Stack Developer, Software Engineer, React, Next.js, Angular, React Native, NestJS, TypeScript, JavaScript',
  openGraph: {
    title: 'Furkan Sami Çavaş | Full Stack Developer',
    description: 'Full Stack Geliştirici ve Bilgisayar Mühendisi. React, Next.js, Angular, React Native ve NestJS teknolojilerinde uzmanlaşmış yazılım geliştiricisi.',
    url: 'https://samicavas.com',
    siteName: 'Furkan Sami Çavaş Portfolio',
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Furkan Sami Çavaş | Full Stack Developer',
    description: 'Full Stack Geliştirici ve Bilgisayar Mühendisi. React, Next.js, Angular, React Native ve NestJS teknolojilerinde uzmanlaşmış yazılım geliştiricisi.',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://samicavas.com" />
      </head>
      <body className={`${jost.className} transition-colors duration-200`}>
        <ThemeProvider>
          <LanguageProvider>
            <CookieProvider>
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
              <CustomCursor />
              <CookieBanner />
            </CookieProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
