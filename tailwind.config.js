/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Ensure backdrop-filter utilities are available
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      backdropSaturate: {
        '120': '1.2',
        '150': '1.5',
        '180': '1.8',
        '200': '2',
      }
    },
  },
  plugins: [],
  // Ensure backdrop-filter utilities are not purged
  safelist: [
    'backdrop-blur-xs',
    'backdrop-blur-sm', 
    'backdrop-blur-md',
    'backdrop-blur-lg',
    'backdrop-blur-xl',
    'backdrop-blur-2xl',
    'backdrop-blur-3xl',
    'backdrop-saturate-120',
    'backdrop-saturate-150',
    'backdrop-saturate-180',
    'backdrop-saturate-200',
    'glass-card',
    'glass-card-mobile',
    'glass-card-fallback',
  ]
}