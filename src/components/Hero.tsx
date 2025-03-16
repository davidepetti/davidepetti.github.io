'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black pt-20 w-full'>
      <div className='container mx-auto px-4 py-16 max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center max-w-3xl mx-auto'
        >
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
            <span className='block text-gray-900 dark:text-white'>
              Hello, I&apos;m Davide.
            </span>
            <span className='block text-blue-600 mt-2'>
              Software Developer & Web3 Security Researcher
            </span>
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
            Innovating at the edge of technology. Creating elegant solutions
            with security at their core.
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <motion.a
              href='#contact'
              className='px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href='#projects'
              className='px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors text-gray-900 dark:text-white'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a
          href='#about'
          className='flex flex-col items-center text-sm font-medium text-gray-600 dark:text-gray-400'
        >
          <span className='mb-2'>Scroll Down</span>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
