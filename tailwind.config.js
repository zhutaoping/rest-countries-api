/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				elementsDark: "var(--elements-darkMode)",
				inputLight: "var(--input-lightMode)",
				textLight: "var(--text-lightMode)",
				bgLight: "var(--bg-lightMode)",
				bgDark: "var(--bg-darkMode)",
				pureWhite: "var(--pureWhite)",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
