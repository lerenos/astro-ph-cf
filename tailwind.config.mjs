/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;


/* Harmony: Compound
#F5405E rose-500
#E440F5 ~fuchsia-500
#40F5C8 ~teal-300
#40F562 ~green-400
*/
// Compound - teal-300, green-400, orange-400, red-500
/* Split Complementary: emerald, orange, red */

// Color pallete reference here: https://tailwindcss.com/docs/customizing-colors
let customColors = {
	primary: colors.rose,
	secondary: colors.teal,
	accent: colors.orange,
	success: colors.red,
	error: colors.green,

	neutral: colors.gray,
}


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		colors: {
			...colors,
			primary:{
				DEFAULT: customColors.primary[500],
	    		content: 'white',
			  	...customColors.primary,
			},
			accent:{
				DEFAULT: customColors.accent[500],
	    		content: 'white',
			  	...customColors.accent,
			},
			success: {
				DEFAULT: customColors.success[500],
				content: 'white',
				...customColors.success,
			},
			error: {
			  DEFAULT: customColors.error[500],
			  content: 'white',
			  ...customColors.error,
			},
			base: {
				bg: 'white',
				content: customColors.neutral[700],
				heading: customColors.neutral[800],
				
				alt: customColors.primary[50],
				dark: customColors.primary[900],
				
				primary: customColors.primary[50],
				accent: customColors.accent[50],
				success: customColors.success[50],
				error: customColors.error[50],
			},
		},
		extend: {
			borderRadius:{
				btn: '0.5rem',
				img: '1rem',
				box: '0',
			},
			keyframes: {
				'in-by-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'in-by-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'fade-in': {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				'floating':{
					'0%, 100%': { 
						transform: 'translateY(0)',
					},
					'50%': { 
						transform: 'translateY(10%)',
					}
				},
				'floating-shadow': {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: 1,
						'box-shadow': '0 20px 20px 1px rgba(0,0,0,0.7)'
					},
					'50%': { 
						transform: 'scale(0.8)',
						opacity: 0.5,
						'box-shadow': '0 20px 20px 1px rgba(0,0,0,0.5)' 
					},
				}
			},
			animation: {
				'in-by-left': 'in-by-left 2s ease-out',
				'in-by-right': 'in-by-right 2s ease-out',
				'fade-in': 'fade-in 2s ease-out',
				'floating': 'floating 3s ease-in-out infinite',
				'floating-shadow': 'floating-shadow 3s ease-in-out infinite'
			},
		},
	},
}