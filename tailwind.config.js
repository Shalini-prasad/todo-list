/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"custom-image": "url('./assets/bg-mobile-light.jpg')",
				"custom-image-desktop": "url('./assets/bg-desktop-light.jpg')",
			},
			colors: {
				"very-light-gray": "hsl(0, 0%, 98%)",
				"very-light-grayish-blue": "hsl(236, 33%, 92%)",
				"light-grayish-blue": "hsl(233, 11%, 84%)",
				"dark-grayish-blue": "hsl(236, 9%, 61%)",
				"very-dark-grayish-blue": "hsl(235, 19%, 35%)",
			},
		},
	},
	plugins: [],
};
