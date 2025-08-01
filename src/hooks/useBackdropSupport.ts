import { useState, useEffect } from 'react';

interface BackdropSupport {
  backdropFilter: boolean;
  isMobile: boolean;
  isLowPerformance: boolean;
  prefersReducedMotion: boolean;
}

export function useBackdropSupport(): BackdropSupport {
  const [support, setSupport] = useState<BackdropSupport>({
    backdropFilter: false,
    isMobile: false,
    isLowPerformance: false,
    prefersReducedMotion: false,
  });

  useEffect(() => {
    // Check backdrop-filter support
    const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(1px)') || 
                                   CSS.supports('-webkit-backdrop-filter', 'blur(1px)');

    // Detect mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth <= 768;

    // Detect low-performance devices (basic heuristic)
    const isLowPerformance = navigator.hardwareConcurrency <= 2 || 
                            (navigator as any).deviceMemory <= 2;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setSupport({
      backdropFilter: supportsBackdropFilter,
      isMobile,
      isLowPerformance,
      prefersReducedMotion,
    });

    // Listen for viewport changes
    const handleResize = () => {
      setSupport(prev => ({
        ...prev,
        isMobile: window.innerWidth <= 768,
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return support;
}

export function getOptimalBlurClass(support: BackdropSupport): string {
  if (support.prefersReducedMotion || !support.backdropFilter) {
    return 'glass-card-fallback';
  }
  
  if (support.isMobile || support.isLowPerformance) {
    return 'glass-card-mobile';
  }
  
  return 'glass-card';
}