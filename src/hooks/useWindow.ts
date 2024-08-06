import { Breakpoints, getCurrentBreakpoint } from '@utils/getCurrentBreakpoint';
import { useEffect, useState } from 'react';

interface WindowState {
  width: number;
  height: number;
  currentBreakpoint: Breakpoints;
}

export const useWindow = () => {
  const [windowSize, setWindowSize] = useState<WindowState>({
    width: window.innerWidth,
    height: window.innerHeight,
    currentBreakpoint: getCurrentBreakpoint(),
  });
  useEffect(() => {
    const handleResize = () => {
      const currentBreakpoint = getCurrentBreakpoint();
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        currentBreakpoint,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};
