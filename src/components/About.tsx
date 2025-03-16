'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id='about'
      className='py-20 bg-gray-950 w-full flex justify-center relative overflow-hidden'
    >
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-0 w-full h-full bg-grid-pattern-dots'></div>
      </div>

      <div className='container mx-auto px-4 max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-2 text-white'>
            About Me
          </h2>
          <div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full'></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='lg:grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto'
        >
          <div className='lg:col-span-3 space-y-8'>
            <h3 className='text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
              Software Developer & Web3 Security Researcher
            </h3>
            <div className='space-y-6 text-gray-300'>
              <p className='leading-relaxed'>
                I build robust applications that balance{' '}
                <span className='text-blue-400'>elegant design</span> with
                strong technical foundations. My approach combines cutting-edge
                technologies with time-tested development principles, creating
                solutions that solve real-world problems.
              </p>
              <div className='w-24 h-px bg-gradient-to-r from-blue-500/30 to-transparent mx-auto my-2'></div>
              <p className='leading-relaxed'>
                With expertise spanning both traditional software engineering
                and blockchain technologies, I specialize in creating{' '}
                <span className='text-blue-400'>secure, reliable systems</span>{' '}
                across multiple domains. My understanding of the full technology
                stack enables me to develop comprehensive solutions from
                front-end interfaces to backend architecture.
              </p>
              <div className='w-24 h-px bg-gradient-to-r from-blue-500/30 to-transparent mx-auto my-2'></div>
              <p className='leading-relaxed'>
                I'm passionate about continuous learning and staying at the
                forefront of technology trends. This dedication allows me to
                deliver innovative solutions that meet current needs while
                anticipating future developments in the rapidly evolving tech
                landscape.
              </p>
              <div className='w-24 h-px bg-gradient-to-r from-blue-500/30 to-transparent mx-auto my-2'></div>
              <p className='leading-relaxed'>
                In the Web3 space, I apply my security expertise to identify
                vulnerabilities in smart contracts and decentralized
                applications. This specialized focus has enabled me to
                contribute to a{' '}
                <span className='text-blue-400'>
                  safer blockchain ecosystem
                </span>{' '}
                by helping secure critical infrastructure and protecting digital
                assets.
              </p>
            </div>
          </div>

          <div className='lg:col-span-2 grid grid-cols-1 gap-6 mt-12 lg:mt-0'>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className='bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-lg border border-gray-700/50 backdrop-blur shadow-lg group hover:border-blue-500/30 transition-all'
            >
              <div className='flex items-center mb-3'>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-600/20 text-blue-400 mr-4 group-hover:bg-blue-600/30 transition-all'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <p className='text-gray-300 text-sm font-medium'>
                  Years of Experience
                </p>
              </div>
              <h4 className='font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500'>
                7+
              </h4>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className='bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-lg border border-gray-700/50 backdrop-blur shadow-lg group hover:border-blue-500/30 transition-all'
            >
              <div className='flex items-center mb-3'>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-600/20 text-blue-400 mr-4 group-hover:bg-blue-600/30 transition-all'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                    />
                  </svg>
                </div>
                <p className='text-gray-300 text-sm font-medium'>
                  Projects Delivered
                </p>
              </div>
              <h4 className='font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500'>
                20+
              </h4>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className='bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-lg border border-gray-700/50 backdrop-blur shadow-lg group hover:border-blue-500/30 transition-all'
            >
              <div className='flex items-center mb-3'>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-600/20 text-blue-400 mr-4 group-hover:bg-blue-600/30 transition-all'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                </div>
                <p className='text-gray-300 text-sm font-medium'>
                  Security Findings
                </p>
              </div>
              <h4 className='font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500'>
                10+
              </h4>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
