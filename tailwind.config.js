module.exports = {
	purge: [],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#F6E012",
				mainBlack: "#323232",
				darkBg: "#1C1C1C",
			},

			fill: (theme) => ({
				mainYellow: theme("#F6E012"),
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
