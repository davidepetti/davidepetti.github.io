import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      // Check if it's an internal anchor link
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for navbar
          behavior: 'smooth'
        });
        
        // Update URL without scroll
        window.history.pushState(null, '', href);
      }
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

export default useSmoothScroll;
