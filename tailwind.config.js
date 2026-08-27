/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        stone: {
          50: '#FAF9F6',
          100: '#F4F2EC',
          150: '#EBEBE3',
          200: '#E2DFD6',
          300: '#C9C5B8',
          400: '#9E998B',
          500: '#736E62',
          600: '#524E44',
          700: '#3D3A32',
          800: '#26241F',
          900: '#181714',
          950: '#0F0E0D',
        },
        obsidian: {
          50: '#1E222A',
          100: '#171A21',
          200: '#12151B',
          300: '#0D1016',
          400: '#090C10',
          500: '#05070A',
        },
        amber: {
          accent: '#D97706',
          warm: '#B45309',
          light: '#FDE68A',
        },
        bronze: {
          DEFAULT: '#8C7851',
          dark: '#6B5A3A',
          light: '#BAA276',
        }
      },
      boxShadow: {
        'tactile': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'tactile-hover': '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
        'craft': '0 8px 30px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
