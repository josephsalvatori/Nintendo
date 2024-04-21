/** @type {import('tailwindcss').Config} */
const responsive = {
	xxs: "360px",
	xs: "480px",
	sm: "640px",
	md: "768px",
	tb: "769px",
	lg: "1024px",
	dk: "1025px",
	xl: "1280px",
	xxl: "1440px",
	xxxl: "1680px",
	xxxxl: "1920px"
};

const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: ["class"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: responsive
		},
		screens: responsive,
		extend: {},
	},
	plugins: [],
}

export default config;