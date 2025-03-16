'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className='bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 w-full flex justify-center relative overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 opacity-80'></div>
      <div className='absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-600/5 blur-3xl'></div>
      <div className='absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-600/5 blur-3xl'></div>

      <div className='container mx-auto px-4 max-w-6xl relative z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-12'
        >
          <motion.div
            variants={itemVariants}
            className='backdrop-blur-sm bg-gray-800/20 p-6 rounded-xl border border-gray-700/50 shadow-xl'
          >
            <h3 className='text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>
              About
            </h3>
            <p className='text-gray-300 mb-4'>
              Software Developer & Web3 Security Researcher building secure,
              innovative solutions.
            </p>
            <p className='text-gray-300'>
              Specializing in creating robust web applications and auditing
              smart contracts for security vulnerabilities.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='backdrop-blur-sm bg-gray-800/20 p-6 rounded-xl border border-gray-700/50 shadow-xl'
          >
            <h3 className='text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href='#about'
                  className='text-gray-300 hover:text-white transition-colors flex items-center group'
                >
                  <span className='w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300'></span>
                  About
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href='#skills'
                  className='text-gray-300 hover:text-white transition-colors flex items-center group'
                >
                  <span className='w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300'></span>
                  Skills
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href='#projects'
                  className='text-gray-300 hover:text-white transition-colors flex items-center group'
                >
                  <span className='w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300'></span>
                  Projects
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href='#contact'
                  className='text-gray-300 hover:text-white transition-colors flex items-center group'
                >
                  <span className='w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300'></span>
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='backdrop-blur-sm bg-gray-800/20 p-6 rounded-xl border border-gray-700/50 shadow-xl'
          >
            <h3 className='text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>
              Services
            </h3>
            <ul className='space-y-3'>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className='text-gray-300 flex items-center'
              >
                <div className='w-1.5 h-1.5 rounded-full bg-blue-500 mr-2'></div>
                Web Development
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className='text-gray-300 flex items-center'
              >
                <div className='w-1.5 h-1.5 rounded-full bg-blue-500 mr-2'></div>
                Mobile Development
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className='text-gray-300 flex items-center'
              >
                <div className='w-1.5 h-1.5 rounded-full bg-blue-500 mr-2'></div>
                Web3 Development
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className='text-gray-300 flex items-center'
              >
                <div className='w-1.5 h-1.5 rounded-full bg-blue-500 mr-2'></div>
                Web3 Security Reviews
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className='text-gray-300 flex items-center'
              >
                <div className='w-1.5 h-1.5 rounded-full bg-blue-500 mr-2'></div>
                Consulting
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className='flex flex-col md:flex-row md:items-center justify-between pt-8 mt-8 border-t border-gray-800/50'
        >
          <div className='flex space-x-4 mb-4 md:mb-0'>
            <motion.a
              href='https://github.com/davidepetti'
              target='_blank'
              rel='noopener noreferrer'
              className='w-9 h-9 flex items-center justify-center rounded-lg bg-gray-700/50 text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3'
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className='w-5 h-5' />
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/davide-petti/'
              target='_blank'
              rel='noopener noreferrer'
              className='w-9 h-9 flex items-center justify-center rounded-lg bg-gray-700/50 text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3'
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className='w-5 h-5' />
            </motion.a>
            <motion.a
              href='https://x.com/davide_petti'
              target='_blank'
              rel='noopener noreferrer'
              className='w-9 h-9 flex items-center justify-center rounded-lg bg-gray-700/50 text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3'
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSquareXTwitter className='w-5 h-5' />
            </motion.a>
          </div>

          <p className='text-gray-400 text-sm'>
            &copy; {currentYear} Davide Petti. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
