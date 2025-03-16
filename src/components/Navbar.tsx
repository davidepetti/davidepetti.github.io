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

  useEffect(() => {
    // Prevent body scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              className="fixed inset-0 bg-black/80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            
            {/* Menu content */}
            <motion.div
              className='fixed top-0 left-0 right-0 bottom-0 z-50 flex flex-col bg-gray-900 overflow-y-auto'
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end p-4">
                <button
                  className='p-2 text-gray-200 hover:text-blue-400 transition-colors'
                  onClick={closeMobileMenu}
                  aria-label='Close mobile menu'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
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
              </div>
              
              <div className="flex-1 flex flex-col justify-center items-center p-6 pb-20">
                <ul className='flex flex-col space-y-8 w-full text-center text-xl md:text-2xl'>
                  <li>
                    <Link
                      href='#about'
                      className='block py-3 text-gray-200 hover:text-blue-400 transition-colors'
                      onClick={closeMobileMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#skills'
                      className='block py-3 text-gray-200 hover:text-blue-400 transition-colors'
                      onClick={closeMobileMenu}
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#projects'
                      className='block py-3 text-gray-200 hover:text-blue-400 transition-colors'
                      onClick={closeMobileMenu}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#contact'
                      className='block py-3 text-gray-200 hover:text-blue-400 transition-colors'
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
