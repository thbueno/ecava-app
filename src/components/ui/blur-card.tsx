import React from 'react';
import { useBackdropSupport, getOptimalBlurClass } from '../../hooks/useBackdropSupport';
import { cn } from './utils';

interface BlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: 'light' | 'medium' | 'heavy';
  fallbackOpacity?: number;
  children: React.ReactNode;
}

export function BlurCard({ 
  intensity = 'medium', 
  fallbackOpacity = 0.95,
  className, 
  children, 
  ...props 
}: BlurCardProps) {
  const support = useBackdropSupport();
  
  // Get the optimal blur class based on device capabilities
  const blurClass = getOptimalBlurClass(support);
  
  // Additional intensity class if supported
  const intensityClass = support.backdropFilter && !support.isMobile && !support.isLowPerformance
    ? `blur-${intensity}`
    : '';
  
  // Dynamic fallback styles for unsupported browsers
  const fallbackStyles = !support.backdropFilter ? {
    backgroundColor: `rgba(255, 255, 255, ${fallbackOpacity})`,
    // Dark mode handled by CSS
  } : {};

  return (
    <div
      className={cn(blurClass, intensityClass, className)}
      style={fallbackStyles}
      {...props}
    >
      {children}
    </div>
  );
}

// Lightweight wrapper for simple blur effects
export function BlurWrapper({ 
  children, 
  className,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  const support = useBackdropSupport();
  
  const blurClass = support.backdropFilter && !support.prefersReducedMotion
    ? 'backdrop-blur-sm'
    : 'bg-background/95';

  return (
    <div className={cn(blurClass, className)} {...props}>
      {children}
    </div>
  );
}