/**
 * Utility functions for backdrop-filter detection and fallback handling
 */

export interface BackdropCapabilities {
  hasBackdropFilter: boolean;
  hasWebkitBackdropFilter: boolean;
  isMobile: boolean;
  isLowPerformance: boolean;
  prefersReducedMotion: boolean;
  userAgent: string;
}

/**
 * Comprehensive backdrop-filter support detection
 */
export function detectBackdropCapabilities(): BackdropCapabilities {
  const hasBackdropFilter = CSS.supports('backdrop-filter', 'blur(1px)');
  const hasWebkitBackdropFilter = CSS.supports('-webkit-backdrop-filter', 'blur(1px)');
  
  // Mobile detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth <= 768;
  
  // Performance detection
  const isLowPerformance = navigator.hardwareConcurrency <= 2 || 
                          (navigator as any).deviceMemory <= 2;
  
  // Motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return {
    hasBackdropFilter,
    hasWebkitBackdropFilter,
    isMobile,
    isLowPerformance,
    prefersReducedMotion,
    userAgent: navigator.userAgent,
  };
}

/**
 * Get the appropriate CSS class based on capabilities
 */
export function getBackdropClass(capabilities?: BackdropCapabilities): string {
  const caps = capabilities || detectBackdropCapabilities();
  
  // No backdrop support or reduced motion preference
  if ((!caps.hasBackdropFilter && !caps.hasWebkitBackdropFilter) || caps.prefersReducedMotion) {
    return 'glass-card-fallback';
  }
  
  // Mobile or low performance
  if (caps.isMobile || caps.isLowPerformance) {
    return 'glass-card-mobile';
  }
  
  // Full support
  return 'glass-card';
}

/**
 * Apply backdrop styles programmatically
 */
export function applyBackdropStyles(element: HTMLElement, intensity: 'light' | 'medium' | 'heavy' = 'medium'): void {
  const capabilities = detectBackdropCapabilities();
  const baseClass = getBackdropClass(capabilities);
  
  // Remove existing classes
  element.classList.remove('glass-card', 'glass-card-mobile', 'glass-card-fallback', 'blur-light', 'blur-medium', 'blur-heavy');
  
  // Add base class
  element.classList.add(baseClass);
  
  // Add intensity class if supported
  if ((capabilities.hasBackdropFilter || capabilities.hasWebkitBackdropFilter) && 
      !capabilities.isMobile && 
      !capabilities.isLowPerformance && 
      !capabilities.prefersReducedMotion) {
    element.classList.add(`blur-${intensity}`);
  }
}

/**
 * Debug information for troubleshooting
 */
export function getBackdropDebugInfo(): Record<string, any> {
  const capabilities = detectBackdropCapabilities();
  
  return {
    capabilities,
    recommendedClass: getBackdropClass(capabilities),
    cssSupport: {
      'backdrop-filter': CSS.supports('backdrop-filter', 'blur(1px)'),
      '-webkit-backdrop-filter': CSS.supports('-webkit-backdrop-filter', 'blur(1px)'),
    },
    browserInfo: {
      userAgent: navigator.userAgent,
      hardwareConcurrency: navigator.hardwareConcurrency,
      deviceMemory: (navigator as any).deviceMemory,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
    },
    mediaQueries: {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      prefersColorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
    }
  };
}