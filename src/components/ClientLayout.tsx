"use client";

import { useEffect, useState } from 'react';
import useSmoothScroll from '../hooks/useSmoothScroll';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [mounted, setMounted] = useState(false);
  useSmoothScroll();

  // This effect runs once after hydration is complete
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent content flash by hiding content until mounted
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return <>{children}</>;
};

export default ClientLayout;
