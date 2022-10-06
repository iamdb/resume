const Color = require("color") 

const colors = {
  black: new Color("#111111"),
  grey: new Color("#333333"),
  white: new Color("#EEEEEE"),
  green: new Color("#25be6a"),
  blue: new Color("#0088ff"),
} 

const config =  {
	content: ['./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    fontFamily: {
      'sans': 'SF Pro Display, Arial, Noto Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    },
    colors: {
      black: colorSpectrum(colors.black),
      white: colorSpectrum(colors.white),
      grey: colorSpectrum(colors.grey),
      green: colorSpectrum(colors.green),
      blue: colorSpectrum(colors.blue)
    },
		extend: {},
	},
	plugins: [],
}

console.log(config.theme.colors)

function colorSpectrum(color) {
  const tailwind_color = {}

  if (color.isDark()) {
    let light = color.whiten(0.4)

    for (let index = 0; index < 9; index++) {
      tailwind_color[(index + 1) * 100] = light.blacken(index * 0.1).hex()
    }
  } else {
    let light = color.lighten(0.4)

    for (let index = 0; index < 9; index++) {
      tailwind_color[(index + 1) * 100] = light.darken(index * 0.1).hex()
    }
  }

  return tailwind_color
}

module.exports = config
