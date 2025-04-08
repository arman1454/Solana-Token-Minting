import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  	extend: {
		  fontFamily: {
			  prata: ["Prata", "serif"],
			  raleway: ["Raleway", "sans-serif"],
		  },
  		colors: {
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
	plugins: [require("tailwindcss-animate"), heroui({
		themes: {
			"purple-dark": {
				extend: "dark", // <- inherit default values from dark theme
				colors: {
					background: "#1b1c1d",
					foreground: "#ffffff",
					primary: {
						50: "#3B096C",
						100: "#520F83",
						200: "#7318A2",
						300: "#9823C2",
						400: "#c031e2",
						500: "#DD62ED",
						600: "#F182F6",
						700: "#FCADF9",
						800: "#FDD5F9",
						900: "#FEECFE",
						foreground: "#ffffff",
					},
					focus: "#F182F6",
				},
				layout: {
					disabledOpacity: "0.3",
					radius: {
						small: "4px",
						medium: "6px",
						large: "8px",
					},
					borderWidth: {
						small: "1px",
						medium: "2px",
						large: "3px",
					},
				},
			},
		},
	}),],
} satisfies Config;
