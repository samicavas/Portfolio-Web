'use client';

import { useLanguage } from '@/context/LanguageContext';

const projects = [
  {
    title: 'TipsVS Mobile Application',
    company: 'ARES DIGITAL PROJECT',
    duration: 'November 2023 - Present',
    technologies: [
      'React Native',
      'Redux',
      'Context API',
      'React Hook Form',
      'React Navigation',
      'Firebase Cloud Messaging',
      'React Native Animated',
      'Socket.IO',
      'AsyncStorage',
    ],
    description: [
      'React Native as mobile programming technology',
      'Implemented Redux, Context API for efficient state management',
      'Utilized React Hook Form to manage and validate inputs seamlessly',
      'Integrated React Navigation for smooth and intuitive app navigation',
      'Enabled in-app purchase functionality to support monetization strategies',
      'Implemented Firebase Cloud Messaging for effective user engagement through push notifications',
      'Incorporated the React Native Animated library to enhance user interfaces with dynamic visuals',
      'Leveraged Socket.IO for real-time interactions and updates',
      'Employed AsyncStorage to manage and persist local data efficiently',
      'Developed robust user registration and authentication processes',
      'Conducted performance tuning to optimize load times and application responsiveness',
      'Incorporated external APIs to extend functionality and provide additional features',
      'Independently managed all stages of development, including design, coding, testing, and deployment',
      'Successfully deployed the application to both the Apple App Store and Google Store'
    ]
  },
  {
    title: 'BOOKREEN',
    company: 'LYDIASOFT PROJECT',
    duration: 'May 2023 - September 2023',
    technologies: [
      'React Native',
      'Redux',
      'react-navigation',
      'maps',
      'chats',
      'tailwind CSS',
      'i18n',
      'theme mode',
      'calendar'
    ],
    description: [
      'React Native as mobile programming technology',
      'Redux as state management',
      'Using the latest version packages',
      'Using packages like react-navigation, maps, chats, tailwind Css, localization (i18n), thema mode, calender etc.'
    ]
  },
  {
    title: 'DIGITAL CARD',
    company: 'BURSALI PROJECT',
    duration: 'August 2023 - September 2023',
    technologies: [
      'Angular',
      'IFS',
      'Ngrx',
      'Rxjs',
      'NFC'
    ],
    description: [
      'Angular as frontend technology',
      'IFS as backend technology',
      'Ngrx and Rxjs as Angular',
      'Other technologies: NFC'
    ]
  },
  {
    title: 'EDUCATION PORT',
    company: 'BURSALI PROJECT',
    duration: 'January 2022 - September 2023',
    technologies: [
      'Angular',
      'C# entity framework',
      'Ngrx',
      'Rxjs',
      'Firebase'
    ],
    description: [
      'Angular as frontend technology',
      'C# entity framework as backend technology',
      'Ngrx and Rxjs as Angular',
      'Other technologies: Firebase'
    ]
  },
  {
    title: 'PROCESS TRACKING WITH PAPERWORK',
    company: 'BURSALI PROJECT',
    duration: 'October 2022 - August 2023',
    technologies: [
      'Javascript',
      'IFS',
      'GeoTime',
      'C#',
      'Paperwork'
    ],
    description: [
      'Javascript as frontend technology',
      'IFS and GeoTime',
      'C# as backend technology',
      'Other technologies: Paperwork'
    ]
  },
  {
    title: 'MEETING INFO SCREENS',
    company: 'BURSALI PROJECT',
    duration: 'October 2022 - November 2022',
    technologies: [
      'Angular',
      'Azure Cloud',
      'Rxjs',
      'Raspberry PI',
      'Orange PI'
    ],
    description: [
      'Angular as frontend technology',
      'Azure Cloud Development',
      'Rxjs as Angular',
      'Other technologies: Raspberry PI, Orange PI'
    ]
  },
  {
    title: 'KLINIK365',
    company: 'PIYONSOFT PROJECT',
    duration: 'September 2022 - October 2022',
    technologies: [
      'Angular',
      'C#',
      'Rxjs',
      'MsSQL'
    ],
    description: [
      'Angular as frontend technology',
      'C# as backend technology',
      'Rxjs as Angular',
      'Other technologies: MsSQL'
    ]
  },
  {
    title: 'BLOKPORT SAAS WEB APP',
    company: 'SMARTOVER PROJECT',
    duration: 'February 2022 - August 2022',
    technologies: [
      'Angular',
      'Nestjs',
      'Ngrx',
      'Rxjs',
      'HeidiSQL',
      'Sendgrid',
      'Firebase'
    ],
    description: [
      'Angular as frontend technology',
      'Nestjs as backend technology',
      'Ngrx and Rxjs as Angular',
      'Other technologies: HeidiSQL, Sendgrid, Firebase'
    ]
  },
  {
    title: 'BIYOKIMYA KONGRESI APP',
    company: 'SMARTOVER PROJECT',
    duration: 'May 2022 - June 2022',
    technologies: [
      'React Native',
      'Mobx',
      'MySQL'
    ],
    description: [
      'React Native as mobile programming technology',
      'Mobx as state management',
      'Using the latest version packages',
      'Other technologies: MySQL'
    ]
  },
  {
    title: 'PEN MAIL APP',
    company: 'INTERN PROJECT',
    duration: 'August 2020 - September 2020',
    technologies: [
      'React Native',
      'Mobx',
      'formik',
      'yup',
      'react-navigation',
      'webview'
    ],
    description: [
      'React Native as mobile programming technology',
      'Mobx as state management',
      'Using the latest version packages',
      'Using packages like formik, yup, react-navigation, webview etc.',
      'Applying notifications with push notification',
      'Publishing app in play store'
    ]
  },
  {
    title: 'SMARTHOME APP',
    company: 'GRADUATION PROJECT',
    duration: 'February 2020 - May 2020',
    technologies: [
      'React Native',
      'Firebase',
      'Raspberry PI',
      'Python'
    ],
    description: [
      'React Native as mobile programming technology',
      'Firebase as database technology',
      'Development of Raspberry pi control systems with Python'
    ]
  }
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {t('projects.title')}
          </h1>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {project.company}
                    </p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                    {project.duration}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {t('projects.technologies')}:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {t('projects.description')}:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {project.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-sm">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 