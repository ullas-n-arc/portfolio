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
        // Swordigo Palette
        'cavern': '#0a0f1a',          // Deep cavern dark-blue bg
        'forest':  '#0b1a10',          // Deep forest green bg
        'magic-blue': '#3b82f6',       // Magic Blue - spells/buttons (tailwind blue-500 base)
        'magic-glow': '#60a5fa',       // Lighter magic glow
        'sword-silver': '#c8d6e5',     // Sword Silver - primary text
        'power-shard': '#7c3aed',      // Power Shard purple glow
        'energy-gold': '#f59e0b',      // Gold accents
        'corrupt': '#1a0a0a',          // Corrupt Grove red-dark
        'corrupt-red': '#7f1d1d',      // Corrupt accent
        'hud-border': '#1e3a5f',       // HUD panel border
        'hud-bg': 'rgba(10,15,26,0.85)',
        'xp-green': '#22c55e',
      },
      fontFamily: {
        'fantasy': ['Cinzel', 'Georgia', 'Times New Roman', 'serif'],
        'hud': ['Rajdhani', 'Orbitron', 'monospace'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'cavern-gradient': 'linear-gradient(180deg, #0a0f1a 0%, #0b1a10 50%, #0a0f1a 100%)',
        'magic-glow-radial': 'radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)',
        'power-shard-glow': 'radial-gradient(ellipse at center, rgba(124,58,237,0.4) 0%, transparent 70%)',
        'hud-panel': 'linear-gradient(135deg, rgba(10,15,26,0.9) 0%, rgba(14,28,20,0.9) 100%)',
      },
      boxShadow: {
        'magic': '0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(59,130,246,0.2)',
        'power-shard': '0 0 25px rgba(124,58,237,0.6), 0 0 50px rgba(124,58,237,0.3)',
        'sword': '0 0 15px rgba(245,158,11,0.6)',
        'hud': 'inset 0 0 30px rgba(30,58,95,0.3), 0 0 1px rgba(59,130,246,0.5)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-magic': 'pulseMagic 2s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'glow-pulse': 'glowPulse 1.5s ease-in-out infinite',
        'sword-fill': 'swordFill 0.3s ease-out forwards',
        'corrupt-flicker': 'corruptFlicker 0.1s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseMagic: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(59,130,246,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(59,130,246,0.8), 0 0 60px rgba(59,130,246,0.4)' },
        },
        swordFill: {
          from: { height: '0%' },
          to: { height: 'var(--fill-height)' },
        },
        corruptFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
export default config
