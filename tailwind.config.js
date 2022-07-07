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
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
			colors: {
				aboutMe: "#101010",
				background: "#151515",
				white: "#ffffff",
				accent: "#5bff3a",
				linkAccent: "#5bff3acc",
			},
		},
	},
	plugins: [],
};
