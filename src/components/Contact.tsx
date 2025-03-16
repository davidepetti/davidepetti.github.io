'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const contactInfoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const contactItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section
      id='contact'
      className='py-20 bg-gray-900 w-full flex justify-center'
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text'>
            Get In Touch
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto'></div>
        </motion.div>

        <div className='max-w-3xl mx-auto'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={contactInfoVariants}
            viewport={{ once: true }}
            className='p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-xl'
          >
            <h3 className='text-2xl font-bold mb-6 text-white/90 text-center'>
              Contact Information
            </h3>
            <p className='text-gray-300 mb-10 text-center'>
              Have a project in mind or want to discuss security research? Feel
              free to reach out through any of the channels below.
            </p>

            <div className='space-y-8'>
              <motion.div
                variants={contactItemVariants}
                className='flex items-start group'
              >
                <div
                  className='flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg 
                  bg-gradient-to-br from-blue-600/80 to-indigo-600/80 shadow-lg group-hover:from-blue-500 group-hover:to-indigo-500 
                  transform transition-all duration-300 group-hover:scale-110 mr-4'
                >
                  <svg
                    className='w-6 h-6 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white/90'>Email</h4>
                  <a
                    href='mailto:petti.davide@gmail.com'
                    className='text-blue-400 hover:text-blue-300 transition-colors'
                  >
                    petti.davide@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={contactItemVariants}
                className='flex items-start group'
              >
                <div
                  className='flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg 
                  bg-gradient-to-br from-blue-600/80 to-indigo-600/80 shadow-lg group-hover:from-blue-500 group-hover:to-indigo-500 
                  transform transition-all duration-300 group-hover:scale-110 mr-4'
                >
                  <svg
                    className='w-6 h-6 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white/90'>
                    Location
                  </h4>
                  <p className='text-gray-300'>Remote - Available Worldwide</p>
                </div>
              </motion.div>

              <motion.div
                variants={contactItemVariants}
                className='flex items-start group'
              >
                <div
                  className='flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg 
                  bg-gradient-to-br from-blue-600/80 to-indigo-600/80 shadow-lg group-hover:from-blue-500 group-hover:to-indigo-500 
                  transform transition-all duration-300 group-hover:scale-110 mr-4'
                >
                  <svg
                    className='w-6 h-6 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white/90'>
                    Availability
                  </h4>
                  <p className='text-gray-300'>
                    Open to Consultancy & Full-time Opportunities
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={socialVariants}
              className='flex justify-center mt-12 space-x-6'
            >
              <motion.a
                href='https://github.com/davidepetti'
                target='_blank'
                rel='noopener noreferrer'
                variants={socialItemVariants}
                whileHover={{ scale: 1.1 }}
                className='w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition-colors duration-300'
              >
                <FaGithub className='text-white text-xl' />
              </motion.a>

              <motion.a
                href='https://www.linkedin.com/in/davide-petti/'
                target='_blank'
                rel='noopener noreferrer'
                variants={socialItemVariants}
                whileHover={{ scale: 1.1 }}
                className='w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition-colors duration-300'
              >
                <FaLinkedin className='text-white text-xl' />
              </motion.a>

              <motion.a
                href='https://x.com/davide_petti'
                target='_blank'
                rel='noopener noreferrer'
                variants={socialItemVariants}
                whileHover={{ scale: 1.1 }}
                className='w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition-colors duration-300'
              >
                <FaSquareXTwitter className='text-white text-xl' />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
