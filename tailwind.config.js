/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0f1e',
          soft: '#1a2338',
          muted: '#5a6478',
        },
        brand: {
          50: '#eef3ff',
          100: '#dce6ff',
          200: '#bccfff',
          300: '#8fadff',
          400: '#5c81ff',
          500: '#2f5bff', // electric blue (from logo)
          600: '#1d42f0',
          700: '#1731c9',
          800: '#182ca3',
          900: '#1a2c81',
          950: '#0a0f2e',
        },
        accent: {
          DEFAULT: '#c6f24e', // lime / chartreuse (from reference designs)
          300: '#e4fa9c',
          400: '#d4f84a',
          500: '#c6f24e',
          600: '#a7d92f',
          700: '#7f9f20',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f6f8fd',
          muted: '#eef2fa',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(47,91,255,0.12), 0 20px 60px -20px rgba(47,91,255,0.45)',
        card: '0 1px 2px rgba(10,15,30,0.04), 0 12px 32px -12px rgba(10,15,30,0.12)',
        'card-hover': '0 2px 4px rgba(10,15,30,0.05), 0 24px 56px -16px rgba(47,91,255,0.28)',
        float: '0 30px 80px -24px rgba(10,15,30,0.35)',
        panel: '0 40px 120px -40px rgba(29,66,240,0.3)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(10,15,30,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,15,30,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseDot: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.5)' },
          '50%': { boxShadow: '0 0 0 6px rgba(34,197,94,0)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        float: 'float 7s ease-in-out infinite',
        pulseDot: 'pulseDot 2s infinite',
      },
    },
  },
  plugins: [],
}
