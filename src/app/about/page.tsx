'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="space-y-8">
            {/* Kişisel Bilgiler */}
            <section>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about.title')}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.intro')}
              </p>
            </section>

            {/* Teknik Yetenekler */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about.skills')}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {t('about.frontend')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {t('about.frontend.desc')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {t('about.mobile')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {t('about.mobile.desc')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'Expo', 'Native Base', 'Mobile UI/UX'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {t('about.backend')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {t('about.backend.desc')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['NestJS', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Deneyim ve Yaklaşım */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about.experience')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {t('about.experience.p1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.experience.p2')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 