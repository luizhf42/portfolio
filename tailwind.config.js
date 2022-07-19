/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./assets/**/*.css",
		"./components/*.{vue,js}",
		"./components/**/*.{vue,js}",
		"./pages/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./*.{vue,js,ts}",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
			},
			screens: {
				xs: { max: "350px" },
				sm: "660px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
			colors: {
				contentWrapper: "#101010",
				background: "#151515",
				white: "#ffffff",
				accent: "#5bff3a",
				linkAccent: "#5bff3acc",
			},
			gridTemplateRows: {
				4: "repeat(4, 1fr)",
				2: "repeat(2, 1fr)",
			},
			gridTemplateColumns: {
				1: "repeat(1, min(100%, 350px))",
				2: "repeat(2, 1fr)",
			},
		},
	},
	plugins: [],
};
