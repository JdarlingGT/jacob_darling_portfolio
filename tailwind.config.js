/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: "var(--color-border)", /* Subtle white border */
        input: "var(--color-input)", /* Input background */
        ring: "var(--color-ring)", /* Electric blue focus rings */
        background: "var(--color-background)", /* Deep black */
        foreground: "var(--color-foreground)", /* Maximum contrast white */
        primary: {
          DEFAULT: "var(--color-primary)", /* Professional foundation slate-800 */
          foreground: "var(--color-primary-foreground)", /* White text on primary */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* Supporting structure slate-600 */
          foreground: "var(--color-secondary-foreground)", /* White text on secondary */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* Clear problem indication red-500 */
          foreground: "var(--color-destructive-foreground)", /* White text on destructive */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* Subtle depth variation */
          foreground: "var(--color-muted-foreground)", /* Reduced contrast gray-400 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* Strategic highlights blue-500 */
          foreground: "var(--color-accent-foreground)", /* White text on accent */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* Subtle depth variation */
          foreground: "var(--color-popover-foreground)", /* White text on popovers */
        },
        card: {
          DEFAULT: "var(--color-card)", /* Subtle depth variation */
          foreground: "var(--color-card-foreground)", /* White text on cards */
        },
        success: {
          DEFAULT: "var(--color-success)", /* Achievement celebration emerald-500 */
          foreground: "var(--color-success-foreground)", /* White text on success */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* Important attention amber-500 */
          foreground: "var(--color-warning-foreground)", /* Dark text on warning */
        },
        error: {
          DEFAULT: "var(--color-error)", /* Clear problem indication red-500 */
          foreground: "var(--color-error-foreground)", /* White text on error */
        },
        // Brand-specific colors
        brand: {
          primary: "var(--color-brand-primary)", /* Deep black */
          secondary: "var(--color-brand-secondary)", /* Subtle depth variation */
        },
        surface: {
          DEFAULT: "var(--color-surface)", /* Slightly lighter background */
          foreground: "var(--color-surface-foreground)", /* White text on surface */
        },
        canvas: "var(--color-background-canvas)", /* Content area background */
        conversion: {
          DEFAULT: "var(--color-conversion-accent)", /* Electric blue CTAs */
          foreground: "var(--color-conversion-accent-foreground)", /* Dark text on electric blue */
        },
        trust: {
          DEFAULT: "var(--color-trust-builder)", /* Success green */
          foreground: "var(--color-trust-builder-foreground)", /* White text on success */
        },
        cta: {
          warm: "var(--color-cta-warm)", /* Warm amber */
          "warm-foreground": "var(--color-cta-warm-foreground)", /* Dark text on warm amber */
        },
        text: {
          primary: "var(--color-text-primary)", /* Maximum contrast white */
          secondary: "var(--color-text-secondary)", /* Reduced contrast gray-400 */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%": {
            "box-shadow": "0 0 0 0 rgba(0, 212, 255, 0.3)",
          },
          "70%": {
            "box-shadow": "0 0 0 10px rgba(0, 212, 255, 0)",
          },
          "100%": {
            "box-shadow": "0 0 0 0 rgba(0, 212, 255, 0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s infinite",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'brand': '0 4px 20px rgba(0, 212, 255, 0.1)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'strong': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '300': '300ms',
        '200': '200ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}