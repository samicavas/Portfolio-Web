'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projeler | Furkan Sami Çavaş',
  description: 'React, Next.js, Angular, React Native ve NestJS teknolojileri kullanılarak geliştirilen web ve mobil projeler. Full stack geliştirici portföyü.',
  openGraph: {
    title: 'Projeler | Furkan Sami Çavaş',
    description: 'React, Next.js, Angular, React Native ve NestJS teknolojileri kullanılarak geliştirilen web ve mobil projeler. Full stack geliştirici portföyü.',
  },
};

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.portfolio.title'),
      duration: t('projects.portfolio.duration'),
      description: t('projects.portfolio.description'),
      technologies: t('projects.portfolio.technologies').split(', '),
      current: true,
    },
    {
      title: t('projects.tipsvs.title'),
      duration: t('projects.tipsvs.duration'),
      description: t('projects.tipsvs.description'),
      technologies: t('projects.tipsvs.technologies').split(', '),
      current: true,
    },
    {
      title: t('projects.bookreen.title'),
      duration: t('projects.bookreen.duration'),
      description: t('projects.bookreen.description'),
      technologies: t('projects.bookreen.technologies').split(', '),
    },
    {
      title: t('projects.digitalcard.title'),
      duration: t('projects.digitalcard.duration'),
      description: t('projects.digitalcard.description'),
      technologies: t('projects.digitalcard.technologies').split(', '),
    },
    {
      title: t('projects.educationport.title'),
      duration: t('projects.educationport.duration'),
      description: t('projects.educationport.description'),
      technologies: t('projects.educationport.technologies').split(', '),
    },
    {
      title: t('projects.processtracking.title'),
      duration: t('projects.processtracking.duration'),
      description: t('projects.processtracking.description'),
      technologies: t('projects.processtracking.technologies').split(', '),
    },
    {
      title: t('projects.meetinginfo.title'),
      duration: t('projects.meetinginfo.duration'),
      description: t('projects.meetinginfo.description'),
      technologies: t('projects.meetinginfo.technologies').split(', '),
    },
    {
      title: t('projects.klinik365.title'),
      duration: t('projects.klinik365.duration'),
      description: t('projects.klinik365.description'),
      technologies: t('projects.klinik365.technologies').split(', '),
    },
    {
      title: t('projects.blokport.title'),
      duration: t('projects.blokport.duration'),
      description: t('projects.blokport.description'),
      technologies: t('projects.blokport.technologies').split(', '),
    },
    {
      title: t('projects.biyokimya.title'),
      duration: t('projects.biyokimya.duration'),
      description: t('projects.biyokimya.description'),
      technologies: t('projects.biyokimya.technologies').split(', '),
    },
    {
      title: t('projects.penmail.title'),
      duration: t('projects.penmail.duration'),
      description: t('projects.penmail.description'),
      technologies: t('projects.penmail.technologies').split(', '),
    },
    {
      title: t('projects.smarthome.title'),
      duration: t('projects.smarthome.duration'),
      description: t('projects.smarthome.description'),
      technologies: t('projects.smarthome.technologies').split(', '),
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {t('projects.title')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                {project.current && (
                  <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                    {t('projects.current')}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {t('projects.duration')}
                </h3>
                <p className="text-gray-900 dark:text-white">{project.duration}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {t('projects.description')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {t('projects.technologies')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 