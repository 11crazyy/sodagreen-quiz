import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Album art-inspired palette
        spring: {
          50: '#f7f5e8',
          100: '#ede8cc',
          200: '#e0d5a0',
          300: '#d0be70',
          400: '#c1a64d',
          500: '#b3923f',
          600: '#9a7534',
          700: '#7d592e',
          800: '#694a2c',
          900: '#5a3f29',
        },
        autumn: {
          50: '#faf6f0',
          100: '#f2e8d5',
          200: '#e5ceaa',
          300: '#d4ad76',
          400: '#c6904f',
          500: '#ba793e',
          600: '#a56134',
          700: '#894a2e',
          800: '#713d2b',
          900: '#5e3426',
        },
        ink: {
          50: '#f6f5f4',
          100: '#e8e6e1',
          200: '#d2cdc5',
          300: '#b4ada0',
          400: '#999080',
          500: '#8a8072',
          600: '#7d7265',
          700: '#685e54',
          800: '#564e47',
          900: '#2d2823',
          950: '#1a1714',
        },
        warm: {
          50: '#fef9ee',
          100: '#fef0d2',
          200: '#fde0a4',
          300: '#fbc96c',
          400: '#f8ab31',
          500: '#f5910f',
          600: '#e67405',
          700: '#bf5607',
          800: '#98430d',
          900: '#7b3911',
          950: '#421c06',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', 'STSong', 'serif'],
        sans: ['"Noto Sans SC"', '"Source Han Sans SC"', 'PingFang SC', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
