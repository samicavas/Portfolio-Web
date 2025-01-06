'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors duration-200">
      <div className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center align-middle justify-center flex flex-col items-center">
            <h1 className="inline-block text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 typewriter">
              {t('hero.greeting')}
            </h1>
            <p className="inline-block text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 typewriter delay-1">
              {t('hero.title')}
            </p>
          </div>

          {/* Bio Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 slide-right delay-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('bio.title')}aa
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>{t('bio.p1')}</p>
                <p>{t('bio.p2')}</p>
                <p>{t('bio.p3')}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {t('tech.title')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Redis'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 slide-up delay-3">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.experience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.projects')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.clients')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.contributions')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-gray-900 dark:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors fade-in-blur delay-4"
            >
              {t('cta.contact')}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
