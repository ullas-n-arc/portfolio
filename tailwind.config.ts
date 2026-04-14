import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-deep': '#020309',
        'midnight-core': '#08102A',
        'midnight-surface': '#0F1C3A',
        'mana-blue': '#00E5FF',
        'mana-light': '#33EEFF',
        'mana-dark': '#00B8D4',
        'mana-purple': '#7C3AED',
        'mana-violet': '#4F46E5',
        'mana-lavender': '#A78BFA',
        'text-primary': '#F0F6FF',
        'text-secondary': '#94AAC8',
        'text-muted': '#4A5E7A',
        'card-bg': '#0D1B35',
        'card-border': '#1A2E52',
        'card-hover': '#112040',

        // HUD / game theme (keep existing)
        'cavern': '#06080F',
        'hud-border': '#1E3A5F',
        'xp-green': '#22c55e',
        'energy-gold': '#F59E0B',
        'sword-silver': '#94A3B8',
        'magic-glow': '#67E8F9',
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
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
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0,229,255,0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(0,229,255,0.5), 0 0 50px rgba(124,58,237,0.2)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
