/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: ["./**/*.{html,js}"],
    content: ["./*.html"],
    theme: {
	extend: {
	    screens: {
		'3xl': '1920px',
		'4xl': '2048px',
		'5xl': '2560px',
		'6xl': '3840px',
		'7xl': '4096px',
	    },
	    fontSize: {
		'2xs': ['0.7rem', '0.95rem'],
		'3xs': ['0.575rem', '0.8rem'],
		'4xs': ['0.45rem', '0.5rem'],
		'5xs': ['0.325rem', '0.45rem'],
		'6xs': ['0.2rem', '0.3rem'],
		'7xs': ['0.075rem', '0.11rem'],
	    },
	},
    },
    safelist: [
	'3xl',
	'4xl',
	'5xl',
	'6xl',
	'7xl',
    ],
    plugins: [],
}
