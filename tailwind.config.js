/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // DHCW palette (docs/BUILD_BRIEF.md Section 3).
        navy: '#1B294A',
        'dhcw-blue': '#12A3C9',
        'nhs-wales-blue': '#325083',
        yellow: '#F8CA4D',
        // Neutral scale for text, borders and backgrounds.
        ink: {
          900: '#1B2330',
          700: '#3A4453',
          500: '#5A6675',
          300: '#9AA4B2',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F4F6F9',
          muted: '#E8EDF3',
        },
        border: {
          DEFAULT: '#D6DCE5',
          strong: '#B6C0CD',
        },
      },
      fontFamily: {
        // DHCW digital interface font is Roboto, with a system fallback.
        sans: [
          'Roboto',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      borderRadius: {
        card: '0.75rem',
      },
    },
  },
  plugins: [],
};
