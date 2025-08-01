import React, { useEffect, useState } from 'react';

interface DeploymentDebugInfo {
  environment: 'development' | 'production';
  backdropSupport: boolean;
  webkitBackdropSupport: boolean;
  userAgent: string;
  cssSupports: Record<string, boolean>;
  computedStyles: Record<string, string>;
}

export function DeploymentDebug() {
  const [debugInfo, setDebugInfo] = useState<DeploymentDebugInfo | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const shouldShow = import.meta.env.DEV || 
                      localStorage.getItem('show-deployment-debug') === 'true' ||
                      window.location.search.includes('debug=true');
    
    setIsVisible(shouldShow);

    if (shouldShow) {
      // Create a test element to check computed styles
      const testElement = document.createElement('div');
      testElement.className = 'glass-card';
      testElement.style.position = 'absolute';
      testElement.style.top = '-9999px';
      document.body.appendChild(testElement);

      const computedStyle = window.getComputedStyle(testElement);

      const info: DeploymentDebugInfo = {
        environment: import.meta.env.DEV ? 'development' : 'production',
        backdropSupport: CSS.supports('backdrop-filter', 'blur(1px)'),
        webkitBackdropSupport: CSS.supports('-webkit-backdrop-filter', 'blur(1px)'),
        userAgent: navigator.userAgent,
        cssSupports: {
          'backdrop-filter': CSS.supports('backdrop-filter', 'blur(1px)'),
          '-webkit-backdrop-filter': CSS.supports('-webkit-backdrop-filter', 'blur(1px)'),
          'backdrop-filter-blur-20px': CSS.supports('backdrop-filter', 'blur(20px)'),
          'backdrop-filter-saturate': CSS.supports('backdrop-filter', 'saturate(180%)'),
        },
        computedStyles: {
          'backdrop-filter': computedStyle.backdropFilter || 'none',
          '-webkit-backdrop-filter': computedStyle.getPropertyValue('-webkit-backdrop-filter') || 'none',
          'background': computedStyle.background,
          'border': computedStyle.border,
          'box-shadow': computedStyle.boxShadow,
        }
      };

      setDebugInfo(info);
      document.body.removeChild(testElement);

      // Log to console for easy debugging
      console.group('🔍 Deployment Debug Info');
      console.log('Environment:', info.environment);
      console.log('Backdrop Support:', info.backdropSupport);
      console.log('Webkit Backdrop Support:', info.webkitBackdropSupport);
      console.log('CSS Supports:', info.cssSupports);
      console.log('Computed Styles:', info.computedStyles);
      console.log('User Agent:', info.userAgent);
      console.groupEnd();
    }
  }, []);

  if (!isVisible || !debugInfo) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-md">
      <div className="bg-black/90 text-white p-4 rounded-lg text-xs font-mono">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-yellow-400">Deployment Debug</h3>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-2">
          <div>
            <strong>Environment:</strong> 
            <span className={debugInfo.environment === 'production' ? 'text-red-400' : 'text-green-400'}>
              {debugInfo.environment}
            </span>
          </div>
          
          <div>
            <strong>Backdrop Support:</strong> 
            <span className={debugInfo.backdropSupport ? 'text-green-400' : 'text-red-400'}>
              {debugInfo.backdropSupport ? '✅' : '❌'}
            </span>
          </div>
          
          <div>
            <strong>Webkit Support:</strong> 
            <span className={debugInfo.webkitBackdropSupport ? 'text-green-400' : 'text-red-400'}>
              {debugInfo.webkitBackdropSupport ? '✅' : '❌'}
            </span>
          </div>

          <details className="mt-2">
            <summary className="cursor-pointer text-blue-400">CSS Supports</summary>
            <div className="ml-2 mt-1 space-y-1">
              {Object.entries(debugInfo.cssSupports).map(([key, value]) => (
                <div key={key}>
                  <code>{key}:</code> 
                  <span className={value ? 'text-green-400' : 'text-red-400'}>
                    {value ? '✅' : '❌'}
                  </span>
                </div>
              ))}
            </div>
          </details>

          <details className="mt-2">
            <summary className="cursor-pointer text-blue-400">Computed Styles</summary>
            <div className="ml-2 mt-1 space-y-1">
              {Object.entries(debugInfo.computedStyles).map(([key, value]) => (
                <div key={key} className="break-all">
                  <code>{key}:</code> 
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </details>
        </div>

        <div className="mt-3 pt-2 border-t border-gray-700 text-gray-400">
          Add <code>?debug=true</code> to URL or set localStorage 'show-deployment-debug' to 'true'
        </div>
      </div>
    </div>
  );
}

// Helper function to enable debug mode
export function enableDeploymentDebug() {
  localStorage.setItem('show-deployment-debug', 'true');
  window.location.reload();
}

// Helper function to disable debug mode
export function disableDeploymentDebug() {
  localStorage.removeItem('show-deployment-debug');
  window.location.reload();
}