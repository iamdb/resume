const Color = require('color');
const defaultTheme = require('tailwindcss/defaultTheme');

const colors = {
	darkgrey: new Color('#1c1916'),
	lightgrey: new Color('#312b25'),
	khaki: new Color('#E3C3A2'),
	lightkhaki: new Color('#f3e4d5'),
	perry: new Color('#a2c2e3'),
	powder: new Color('#f2f6fb')
};

const config = {
	content: ['./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow', ...defaultTheme.fontFamily.sans],
				serif: ['Abril Fatface', ...defaultTheme.fontFamily.serif],
				mono: ['Fira Mono', ...defaultTheme.fontFamily.mono]
			},
			colors: {
				darkgrey: colors.darkgrey.hex(),
				khaki: colors.khaki.hex(),
				lightgrey: colors.lightgrey.hex(),
				lightkhaki: colors.lightkhaki.hex(),
				perry: colors.perry.hex(),
				powder: colors.powder.hex()
			}
		}
	},
	plugins: []
};

module.exports = config;
