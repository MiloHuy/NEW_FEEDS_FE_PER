/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./.storybook/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / 1)',
        text: 'rgb(var(--color-text) / 1)',
        muted: 'rgb(var(--color-muted) / 1)',

        primary: {
          50: 'rgb(var(--color-primary-50) / 1)',
          100: 'rgb(var(--color-primary-100) / 1)',
          200: 'rgb(var(--color-primary-200) / 1)',
          300: 'rgb(var(--color-primary-300) / 1)',
          400: 'rgb(var(--color-primary-400) / 1)',
          500: 'rgb(var(--color-primary-500) / 1)',
        },

        secondary: {
          50: 'rgb(var(--color-secondary-50) / 1)',
          100: 'rgb(var(--color-secondary-100) / 1)',
          200: 'rgb(var(--color-secondary-200) / 1)',
          300: 'rgb(var(--color-secondary-300) / 1)',
          400: 'rgb(var(--color-secondary-400) / 1)',
          500: 'rgb(var(--color-secondary-500) / 1)',
        },

        success: {
          50: 'rgb(var(--color-success-50) / 1)',
          100: 'rgb(var(--color-success-100) / 1)',
          200: 'rgb(var(--color-success-200) / 1)',
          300: 'rgb(var(--color-success-300) / 1)',
          400: 'rgb(var(--color-success-400) / 1)',
          500: 'rgb(var(--color-success-500) / 1)',
        },

        warning: {
          50: 'rgb(var(--color-warning-50) / 1)',
          100: 'rgb(var(--color-warning-100) / 1)',
          200: 'rgb(var(--color-warning-200) / 1)',
          300: 'rgb(var(--color-warning-300) / 1)',
          400: 'rgb(var(--color-warning-400) / 1)',
          500: 'rgb(var(--color-warning-500) / 1)',
        },

        error: {
          50: 'rgb(var(--color-error-50) / 1)',
          100: 'rgb(var(--color-error-100) / 1)',
          200: 'rgb(var(--color-error-200) / 1)',
          300: 'rgb(var(--color-error-300) / 1)',
          400: 'rgb(var(--color-error-400) / 1)',
          500: 'rgb(var(--color-error-500) / 1)',
        },

        neutral: {
          50: 'rgb(var(--color-neutral-50) / 1)',
          100: 'rgb(var(--color-neutral-100) / 1)',
          200: 'rgb(var(--color-neutral-200) / 1)',
          300: 'rgb(var(--color-neutral-300) / 1)',
          400: 'rgb(var(--color-neutral-400) / 1)',
          500: 'rgb(var(--color-neutral-500) / 1)',
        },

        tertiary: {
          50: 'rgb(var(--color-tertiary-50) / 1)',
          100: 'rgb(var(--color-tertiary-100) / 1)',
          200: 'rgb(var(--color-tertiary-200) / 1)',
          300: 'rgb(var(--color-tertiary-300) / 1)',
          400: 'rgb(var(--color-tertiary-400) / 1)',
          500: 'rgb(var(--color-tertiary-500) / 1)',
        },
      },
      fontSize: {
        '2xs': 'var(--text-2xs)',
        'xs-2': 'var(--text-xs-2)',
        'xs': 'var(--text-xs)',
        'sm-2': 'var(--text-sm-2)',
        'sm': 'var(--text-sm)',
        'md-2': 'var(--text-md-2)',
        'md': 'var(--text-md)',
        'base': 'var(--text-lg)',
        'lg': 'var(--text-lg)',
        'xl': 'var(--text-xl)',
      },
      spacing: {
        '3xs': 'var(--space-3xs)',
        '2xs': 'var(--space-2xs)',
        'xs-2': 'var(--space-xs-2)',
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'sm-2': 'var(--space-sm-2)',
        'md': 'var(--space-md)',
        'md-2': 'var(--space-md-2)',
        'lg': 'var(--space-lg)',
        'lg-2': 'var(--space-lg-2)',
        'xl': 'var(--space-xl)',
        'xl-2': 'var(--space-2xl)',
        'xl-3': 'var(--space-xl-3)',
      },
    },
  },
  plugins: [],
}

