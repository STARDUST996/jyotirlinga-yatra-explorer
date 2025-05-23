
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,tsx,jsx}",
		"./components/**/*.{js,ts,tsx,jsx}",
		"./app/**/*.{js,ts,tsx,jsx}",
		"./src/**/*.{js,ts,tsx,jsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for Jyotirlinga theme
				saffron: {
					light: '#FFCC80',
					DEFAULT: '#FF9800',
					dark: '#EF6C00',
				},
				spiritual: {
					light: '#90CAF9', 
					DEFAULT: '#2196F3',
					dark: '#0D47A1',
				},
				sacred: {
					light: '#FFD700',
					DEFAULT: '#DAA520',
					dark: '#B8860B',
				},
				earth: {
					light: '#A1887F',
					DEFAULT: '#795548',
					dark: '#4E342E',
				},
				leaf: {
					light: '#C5E1A5',
					DEFAULT: '#8BC34A',
					dark: '#558B2F',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'shine': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
				'shine': 'shine 3s linear infinite'
			},
			backgroundImage: {
				'sacred-pattern': "url('/sacred-pattern.svg')",
				'temple-gradient': 'linear-gradient(135deg, rgba(255,152,0,0.5) 0%, rgba(33,150,243,0.3) 100%)',
				'spiritual-glow': 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(255,255,255,0) 70%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
