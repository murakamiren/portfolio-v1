module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#F6E012",
				mainBlack: "#323232",
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
