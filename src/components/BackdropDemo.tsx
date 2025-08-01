import React from 'react';
import { BlurCard, BlurWrapper } from './ui/blur-card';
import { useBackdropSupport } from '../hooks/useBackdropSupport';
import { getBackdropDebugInfo } from '../utils/backdrop-detection';

export function BackdropDemo() {
  const support = useBackdropSupport();
  
  const handleDebugInfo = () => {
    console.log('Backdrop Debug Info:', getBackdropDebugInfo());
  };

  return (
    <div className="min-h-screen bg-gradient-mesh p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Backdrop Filter Demo
        </h1>
        
        {/* Support Status */}
        <BlurCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Browser Support Status</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Backdrop Filter:</strong> {support.backdropFilter ? '✅ Supported' : '❌ Not Supported'}
            </div>
            <div>
              <strong>Mobile Device:</strong> {support.isMobile ? '📱 Yes' : '🖥️ No'}
            </div>
            <div>
              <strong>Low Performance:</strong> {support.isLowPerformance ? '⚠️ Yes' : '⚡ No'}
            </div>
            <div>
              <strong>Reduced Motion:</strong> {support.prefersReducedMotion ? '🔇 Enabled' : '🎬 Disabled'}
            </div>
          </div>
          <button 
            onClick={handleDebugInfo}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Log Debug Info
          </button>
        </BlurCard>

        {/* Different Intensity Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BlurCard intensity="light" className="p-6">
            <h3 className="text-xl font-semibold mb-2">Light Blur</h3>
            <p className="text-muted-foreground">
              Subtle backdrop effect with light blur intensity. Perfect for overlays that need to maintain readability.
            </p>
          </BlurCard>

          <BlurCard intensity="medium" className="p-6">
            <h3 className="text-xl font-semibold mb-2">Medium Blur</h3>
            <p className="text-muted-foreground">
              Balanced backdrop effect with medium blur intensity. Great for cards and modal dialogs.
            </p>
          </BlurCard>

          <BlurCard intensity="heavy" className="p-6">
            <h3 className="text-xl font-semibold mb-2">Heavy Blur</h3>
            <p className="text-muted-foreground">
              Strong backdrop effect with heavy blur intensity. Ideal for hero sections and prominent elements.
            </p>
          </BlurCard>
        </div>

        {/* BlurWrapper Example */}
        <BlurWrapper className="p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">BlurWrapper Component</h3>
          <p className="text-muted-foreground">
            This is a lightweight wrapper that automatically adapts between backdrop-blur-sm and a solid background based on browser support.
          </p>
        </BlurWrapper>

        {/* Manual Class Usage */}
        <div className="space-y-4">
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Manual Glass Card</h3>
            <p className="text-muted-foreground">
              Using the .glass-card class directly. This will automatically fall back to solid backgrounds in unsupported browsers.
            </p>
          </div>

          <div className="glass-card-mobile p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Mobile Optimized</h3>
            <p className="text-muted-foreground">
              Using the .glass-card-mobile class for better performance on mobile devices.
            </p>
          </div>

          <div className="glass-card-fallback p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fallback Style</h3>
            <p className="text-muted-foreground">
              Using the .glass-card-fallback class for maximum compatibility with older browsers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}