import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'ink': '#1a1a1a',
        'ink-light': '#666666',
        'parchment': '#f9f6f3',
        'cream': '#f5f1ed',
        'gold': '#b8860b',
        'gold-light': '#d4a574',
        'gold-dark': '#8a6708',
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'subtle': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'elevation': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 12px rgba(184, 134, 11, 0.4)',
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.btn-primary': {
          '@apply px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed': {},
        },
        '.btn-secondary': {
          '@apply px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-all active:scale-95': {},
        },
        '.btn-ghost': {
          '@apply px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all active:scale-95': {},
        },
        '.card': {
          '@apply bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow': {},
        },
        '.card-subtle': {
          '@apply bg-white rounded-xl border border-gray-100 shadow-xs': {},
        },
        '.input-modern': {
          '@apply w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all': {},
        },
        '.text-h1': {
          '@apply text-4xl font-extrabold text-gray-900': {},
        },
        '.text-h2': {
          '@apply text-2xl font-bold text-gray-900': {},
        },
        '.text-h3': {
          '@apply text-lg font-bold text-gray-900': {},
        },
        '.text-h4': {
          '@apply text-base font-semibold text-gray-900': {},
        },
        '.text-subtitle': {
          '@apply text-sm font-medium text-gray-600': {},
        },
        '.text-body': {
          '@apply text-sm text-gray-700': {},
        },
        '.text-muted': {
          '@apply text-xs text-gray-500': {},
        },
        '.badge-success': {
          '@apply inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold': {},
        },
        '.badge-warning': {
          '@apply inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold': {},
        },
        '.badge-info': {
          '@apply inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold': {},
        },
      })
    },
  ],
}

export default config
