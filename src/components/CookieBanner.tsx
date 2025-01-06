'use client';

import { useEffect, useState } from 'react';
import { useCookie } from '@/context/CookieContext';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function CookieBanner() {
  const { cookiesAccepted, acceptCookies, rejectCookies } = useCookie();
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (cookiesAccepted === false || cookiesAccepted === null) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [cookiesAccepted]);

  if (!isVisible || cookiesAccepted === true) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            {t('cookies.description.part1')}{' '}
            {t('cookies.description.part2')}{' '}
            <Link 
              href="/cookie-policy" 
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              {t('cookies.policy')}
            </Link>{' '}
            {t('cookies.description.part3')}
          </div>
          <div className="flex gap-4">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {t('cookies.reject')}
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t('cookies.accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 