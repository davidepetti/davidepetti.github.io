'use client';

import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'GeoClient',
    description:
      'Energy-efficient Android app for collecting user-context data. It captures geolocation, Bluetooth MAC addresses, app usage stats, foreground apps, and activity recognition.',
    technologies: ['Android', 'SQLite', 'Python', 'Pandas', 'Room', 'Firebase'],
    github: 'https://github.com/davidepetti/GeoClient',
  },
  {
    id: 2,
    title: 'EasyRASH',
    description:
      'A dynamic online system for article evaluation in RASH. This simplified HTML5 variant for scientific articles combines content and comments seamlessly, streamlining the peer review process.It offers a robust and user-friendly platform for efficient academic collaboration.',
    technologies: [
      'Python',
      'Django',
      'Bootstrap',
      'HTML/CSS',
      'XML',
      'Angular',
      'RDF',
      'OWL',
    ],
    github: 'https://github.com/davidepetti/parea',
  },
  {
    id: 3,
    title: 'Alchemy Crowdfund Dapp',
    description:
      "A decentralized crowdfunding platform built with Next.js, React, and Alchemy's Account Kit that allows users to create and support campaigns using cryptocurrency.",
    technologies: [
      'Next.js',
      'TypeScript',
      'React',
      'Solidity',
      'Ethereum',
      'Alchemy Account Kit',
      'Scaffold Alchemy',
    ],
    link: 'https://alchemy-crowdfund-dapp-nextjs.vercel.app/',
    github: 'https://github.com/davidepetti/alchemy-crowdfund-dapp',
  },
  {
    id: 4,
    title: 'Libra',
    description:
      'A conflict-free financial intelligence web app, delivering personalized, data-driven investment insights through advanced quantitative finance models and AI-powered analysis, tailored to users of all expertise levels.',
    technologies: [
      'Python',
      'Streamlit',
      'Pandas',
      'AWS',
      'Next.js',
      'TypeScript',
      'React',
      'React Native',
      'Supabase',
    ],
    link: 'https://librajf.com/',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg overflow-hidden hover:border-blue-600/50 transition-all'
    >
      <div className='p-6'>
        <div className='flex items-center mb-4'>
          <div className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-600/20 text-blue-500 font-bold mr-3'>
            {project.title.substring(0, 1)}
          </div>
          <h3 className='text-xl font-bold text-white'>{project.title}</h3>
        </div>

        <p className='text-gray-300 mb-4'>{project.description}</p>

        <div className='mb-4'>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className='px-2 py-1 bg-gray-700/50 text-xs rounded text-gray-300'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className='flex space-x-4'>
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-blue-400 transition-colors'
            >
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
              </svg>
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-blue-400 transition-colors'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id='projects'
      className='py-20 bg-gray-950 w-full flex justify-center'
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-2 text-white'>
            My Projects
          </h2>
          <div className='w-16 h-1 bg-blue-600 mx-auto'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
