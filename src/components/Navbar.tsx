'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className='container mx-auto px-6 py-4 flex justify-between items-center max-w-6xl'>
        <Link href='/' className='text-xl font-bold cursor-pointer text-white'>
          <span className='text-blue-600'>davide</span>petti
          <span className='text-blue-600'>.</span>io
        </Link>

        <nav className='hidden md:block'>
          <ul className='flex space-x-10 text-sm font-medium'>
            <li>
              <Link
                href='#about'
                className='px-3 py-2 text-gray-200 hover:text-blue-400 transition-colors'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='#skills'
                className='px-3 py-2 text-gray-200 hover:text-blue-400 transition-colors'
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href='#projects'
                className='px-3 py-2 text-gray-200 hover:text-blue-400 transition-colors'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href='#contact'
                className='px-3 py-2 text-gray-200 hover:text-blue-400 transition-colors'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className='block md:hidden p-2 focus:outline-none text-gray-200'
          onClick={toggleMobileMenu}
          aria-label='Toggle mobile menu'
        >
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
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className='fixed inset-0 bg-gray-900 z-40 pt-20 px-4'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <ul className='flex flex-col space-y-6 text-center text-lg'>
              <li>
                <Link
                  href='#about'
                  className='block py-2 text-gray-200 hover:text-blue-400 transition-colors'
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#skills'
                  className='block py-2 text-gray-200 hover:text-blue-400 transition-colors'
                  onClick={closeMobileMenu}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href='#projects'
                  className='block py-2 text-gray-200 hover:text-blue-400 transition-colors'
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href='#contact'
                  className='block py-2 text-gray-200 hover:text-blue-400 transition-colors'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button
              className='absolute top-4 right-4 p-2 text-gray-200'
              onClick={closeMobileMenu}
              aria-label='Close mobile menu'
            >
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
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
