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
      },
    },
  },
  plugins: [],
}

