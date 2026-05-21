import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
			fontFamily: {
				headline: ['var(--font-headline)'],
				headline2: ['var(--font-headline2)'],
				body: ['var(--font-body)'],
				body2: ['var(--font-body2)'],
				body3: ['var(--font-body3)'],
				mono: ['Roboto Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'brand-primary': {
					DEFAULT: 'hsl(var(--brand-primary))',
					foreground: 'hsl(var(--brand-primary-foreground))'
				},
				'brand-secondary': {
					DEFAULT: 'hsl(var(--brand-secondary))',
					foreground: 'hsl(var(--brand-secondary-foreground))'
				},
				'brand-grass': {
					DEFAULT: 'hsl(var(--brand-grass))',
					foreground: 'hsl(var(--brand-grass-foreground))'
				},
				'brand-poppy': {
					DEFAULT: 'hsl(var(--brand-poppy))',
					foreground: 'hsl(var(--brand-poppy-foreground))'
				},
				'brand-stone': {
					DEFAULT: 'hsl(var(--brand-stone))',
					foreground: 'hsl(var(--brand-stone-foreground))'
				},
				'brand-moss': {
					DEFAULT: 'hsl(var(--brand-moss))',
					foreground: 'hsl(var(--brand-moss-foreground))'
				},
				'brand-hydrangea': {
					DEFAULT: 'hsl(var(--brand-hydrangea))',
					foreground: 'hsl(var(--brand-hydrangea-foreground))'
				},
				'brand-black': {
					DEFAULT: 'hsl(var(--brand-black))',
					foreground: 'hsl(var(--brand-black-foreground))'
				},
				'brand-white': {
					DEFAULT: 'hsl(var(--brand-white))',
					foreground: 'hsl(var(--brand-white-foreground))'
				},
				'issue-01': {
					DEFAULT: 'hsl(var(--issue-01))',
					foreground: 'hsl(var(--issue-01-foreground))'
				},
				'issue-02': {
					DEFAULT: 'hsl(var(--issue-02))',
					foreground: 'hsl(var(--issue-02-foreground))'
				},
				'issue-02-secondary': {
					DEFAULT: 'hsl(var(--issue-02-secondary))',
					foreground: 'hsl(var(--issue-02-secondary-foreground))'
				},
				'issue-02-accent': {
					DEFAULT: 'hsl(var(--issue-02-accent))',
					foreground: 'hsl(var(--issue-02-accent-foreground))'
				},
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
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'button': 'var(--shadow-button)',
				'elegant': 'var(--shadow-elegant)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
