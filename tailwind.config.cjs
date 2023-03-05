const Color = require("color")

const colors = {
  black: new Color("#111111"),
  grey: new Color("#333333"),
  white: new Color("#EEEEEE"),
  green: new Color("#25be6a"),
  blue: new Color("#5088c1"),
  khaki: new Color("#E3C3A2"),
  lightkhaki: new Color("#f1e1d0"),
  raisin: new Color("#2C4553"),
  spaceblue: new Color("#111D4A"),
  darkgrey: new Color("#252321"),
  lightgrey: new Color("#3A3A3A"),
  red: new Color("#C1505B"),
  salmon: new Color("#eb626f"),
  seafoam: new Color("#71AA95"),
  cyan: new Color("#50c1b6"),
  darkblue: new Color("#3e6a96"),
  lightblue: new Color("#71b4d6"),
}

const config = {
  content: ['./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'sans': 'Barlow, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'serif': '"Abril Fatface", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
    },
    colors: {
      black: colorSpectrum(colors.black),
      white: colorSpectrum(colors.white),
      grey: colorSpectrum(colors.grey),
      green: colorSpectrum(colors.green),
      blue: colors.blue.hex(),
      khaki: colors.khaki.hex(),
      lightkhaki: colors.lightkhaki.hex(),
      raisin: colors.raisin.hex(),
      spaceblue: colors.spaceblue.hex(),
      darkgrey: colors.darkgrey.hex(),
      seafoam: colors.seafoam.hex(),
      red: colors.red.hex(),
      salmon: colors.salmon.hex(),
      cyan: colors.cyan.hex(),
      darkblue: colors.darkblue.hex(),
      lightblue: colors.lightblue.hex(),
      lightgrey: colors.lightgrey.hex(),
    },
    extend: {},
  },
  plugins: [],
}

function colorSpectrum(color) {
  const tailwind_color = {}

  if (color.isDark()) {
    let light = color.lighten(0.4)

    for (let index = 0; index < 9; index++) {
      tailwind_color[(index + 1) * 100] = light.darken(index * 0.1).hex()
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
