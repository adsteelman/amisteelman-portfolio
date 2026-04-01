/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				brand: "#1c90c5",
				brandLight: "#aad4e9",
				primary: "#1c90c5",
				primaryLight: "#aad4e9",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
