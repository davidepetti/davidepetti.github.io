/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0f172a', // Dark blue background (similar to gray-900)
          lighter: '#1e293b', // Slightly lighter for cards/surfaces (similar to gray-800)
          darker: '#020617', // Darker for contrast elements (similar to gray-950)
        },
        accent: {
          blue: {
            DEFAULT: '#3b82f6', // Blue accent color (similar to blue-500)
            light: '#60a5fa', // Lighter blue for hover states (similar to blue-400)
            dark: '#1d4ed8', // Darker blue for active states (similar to blue-700)
          },
          indigo: {
            DEFAULT: '#6366f1', // Indigo accent for gradients and variety
            light: '#818cf8', 
            dark: '#4338ca',
          },
        },
        text: {
          primary: '#f1f5f9', // Light text for dark backgrounds (similar to gray-100)
          secondary: '#94a3b8', // Muted text (similar to gray-400)
          accent: '#3b82f6', // Accent text color (blue-500)
        },
        border: {
          DEFAULT: 'rgba(71, 85, 105, 0.5)', // Default border (similar to gray-600 with opacity)
          light: 'rgba(148, 163, 184, 0.2)', // Lighter borders (similar to gray-400 with opacity)
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'blue-purple-gradient': 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
      },
    },
  },
  plugins: [],
}
