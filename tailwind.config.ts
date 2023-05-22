import { type Config } from 'tailwindcss'
const makeColor = (hue: number, saturation: number, lightness: number) => {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}
const _getHslValues = (color: string) => {
  const match = color.match(/hsla?\((\d+), (\d+)%?, (\d+)%?,? ?(\d+)?\)/)
  if (!match) return null
  const [, hue, saturation, lightness, alpha] = match
  if (!hue || !saturation || !lightness) return null
  return {
    hue: parseInt(hue),
    saturation: parseInt(saturation),
    lightness: parseInt(lightness),
    alpha: alpha ? parseFloat(alpha) : 1,
  }
}
const _make = {
  hue: (saturation: number, lightness: number, min: number, max: number, steps = 10) => {
    const step = (max - min) / steps
    const hues: Record<string, string> = {}
    for (let i = 0; i < steps; i++) {
      hues[((1000 / steps) * i).toString()] = makeColor(min + i * step, saturation, lightness)
    }
    return hues
  },
  saturation: (hue: number, lightness: number, min: number, max: number, steps = 10) => {
    const step = (max - min) / steps
    const saturations: Record<string, string> = {}
    for (let i = 0; i < steps; i++) {
      saturations[((1000 / steps) * i).toString()] = makeColor(hue, min + i * step, lightness)
    }
    return saturations
  },
  lightness: (hue: number, saturation: number, min: number, max: number, steps = 10) => {
    const step = (max - min) / steps
    const light: Record<string, string> = {}
    for (let i = 0; i < steps; i++) {
      light[((1000 / steps) * i).toString()] = makeColor(hue, saturation, min + i * step)
    }
    return light
  },
}
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsla(var(--border) / <alpha-value>)',
        input: 'hsla(var(--input) / <alpha-value>)',
        ring: 'hsla(var(--ring) / <alpha-value>)',
        background: {
          DEFAULT: 'hsla(var(--background) / <alpha-value>)',
          2: `hsla(var(--background-2) / <alpha-value>)`,
          3: `hsla(var(--background-3) / <alpha-value>)`,
        },

        foreground: 'hsla(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsla(var(--primary) / <alpha-value>)',
          foreground: 'hsla(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsla(var(--secondary) / <alpha-value>)',
          foreground: 'hsla(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsla(var(--destructive) / <alpha-value>)',
          foreground: 'hsla(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsla(var(--muted) / <alpha-value>)',
          foreground: 'hsla(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsla(var(--accent) / <alpha-value>)',
          foreground: 'hsla(var(--accent-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsla(var(--popover) / <alpha-value>)',
          foreground: 'hsla(var(--popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsla(var(--card) / <alpha-value>)',
          foreground: 'hsla(var(--card-foreground) / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        '0sm': '0 0 4px 2px rgba(0, 0, 0, 0.3)',
        '0md': '0 0 8px 4px rgba(0, 0, 0, 0.3)',
        '0lg': '0 0 16px 8px rgba(0, 0, 0, 0.3)',
        '0xl': '0 0 32px 16px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
