/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				back: '#ffffff',
				dark: '#1A1A1A',
				light: '#555555',
				primary: '#D10000',
			},
		},
	},
	plugins: [],
};
