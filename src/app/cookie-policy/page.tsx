'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function CookiePolicy() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {t('cookie.policy.title')}
          </h1>

          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('cookie.policy.what.title')}
              </h2>
              <p className="mb-4">{t('cookie.policy.what.description')}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('cookie.policy.why.title')}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>{t('cookie.policy.why.reason1')}</li>
                <li>{t('cookie.policy.why.reason2')}</li>
                <li>{t('cookie.policy.why.reason3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('cookie.policy.types.title')}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {t('cookie.policy.types.essential.title')}
                  </h3>
                  <p>{t('cookie.policy.types.essential.description')}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {t('cookie.policy.types.preferences.title')}
                  </h3>
                  <p>{t('cookie.policy.types.preferences.description')}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('cookie.policy.control.title')}
              </h2>
              <p>{t('cookie.policy.control.description')}</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 