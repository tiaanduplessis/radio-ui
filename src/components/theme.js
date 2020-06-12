const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      },
    }),
  )

export const space = [0, '4px', '8px', '16px', '32px', '64px', '128px', '256px', '512px']

export const fontSizes = [
  '0.5em',
  '0.625em',
  '0.75em',
  '0.875em',
  '1em',
  '1.25em',
  '1.5em',
  '2em',
  '3em',
  '4em',
  '5em',
]
const fontSizeAliases = [
  'xxxsmall',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
]
addAliases(fontSizes, fontSizeAliases)

export const colors = {
  white: '#fff',
  gray: ['#EEF2F4', '#E7EDF3', '#B9C4CF', '#B0BBC7', '#9FACB9', '#6B7B8C', '#5C6C7F', '#4A5B6D'],
  black: '#212325',
  transparent: 'transparent',
  blue: ['#E2F0F5', '#379CC1'],
  pink: ['#FF5AB6'],
  red: ['#f6bdbb', '#ed7470', '#e53933', '#9f1814', '#71110e'],
  purple: ['#A168FF'],
}

colors.primary = colors.blue[1]
colors.secondary = colors.pink[0]
const blueColorAliases = ['primaryLight', 'primary']
addAliases(colors.blue, blueColorAliases)

const grayColorAliases = [
  'xxlight',
  'xlight',
  'light',
  'default',
  'dark',
  'xdark',
  'xxdark',
  'xxxdark',
]
addAliases(colors.gray, grayColorAliases)

const fallbackFontStack = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`
export const fonts = ['Roboto'].map(font => `${font}, ${fallbackFontStack}`)
const fontsAliases = ['Roboto']
addAliases(fonts, fontsAliases)

export const fontWeights = [100, 200, 300, 400, 500, 600, 700]
const fontWeightsAliases = ['hairline', 'thin', 'light', 'medium', 'semi', 'bold', 'extrabold']
addAliases(fontWeights, fontWeightsAliases)

export const lineHeights = [1, 1.25, 1.375, 1.5, 1.625, 2]
const lineHeightsAliases = ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose']
addAliases(lineHeights, lineHeightsAliases)

export const letterSpacings = ['-0.05em', '-0.025em', '0', '0.025em', '0.05em', '0.1em']
const letterSpacingsAliases = ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest']
addAliases(letterSpacings, letterSpacingsAliases)
const shadowColor = 'rgba(0, 0, 0, 0.12)'
const baseShadow = '0 0 2px 0 rgba(0,0,0,.0625),'
export const shadows = [
  `${baseShadow}0 2px 4px 0 ${shadowColor}`,
  `${baseShadow}0 4px 8px 0 ${shadowColor}`,
  `${baseShadow}0 12px 12px 0 ${shadowColor}`,
  `${baseShadow}0 24px 24px 0 ${shadowColor}`,
]

export const radii = [0, '2px', '5px', '12px', '20px', '30px', '9999px']
const radiiAliases = ['none', 'xsmall', 'small', 'large', 'xlarge', 'xxlarge', 'full']
addAliases(radii, radiiAliases)

export const zIndices = [1, 2, 3, 4, 5]

export const breakpoints = ['20em', '40em', '52em', '64em', '80em']
export const mediaQueries = breakpoints.map(val => `@media screen and (min-width: ${val})`)
const mediaQueriesAliases = ['xsmall', 'small', 'medium', 'large', 'xlarge']
addAliases(mediaQueries, mediaQueriesAliases)

const buttons = {
  primary: {
    color: colors.white,
    backgroundColor: colors.primary,
    boxShadow: shadows[2],
    fontWeight: fontWeights[5],
  },
  secondary: {
    color: colors.primary,
    backgroundColor: colors.blue[0],
    boxShadow: shadows[2],
    fontWeight: fontWeights[5],
  },

  minimal: {
    color: colors.primary,
    backgroundColor: colors.transparent,
    fontWeight: fontWeights[5],
  },
  danger: {
    color: colors.white,
    backgroundColor: colors.secondary,
    boxShadow: shadows[2],
    fontWeight: fontWeights[5],
  },
}

const theme = {
  space,
  fontSizes,
  colors,
  fonts,
  fontWeights,
  lineHeights,
  letterSpacings,
  shadows,
  radii,
  zIndices,
  breakpoints,
  mediaQueries,
  buttons,
}

export default theme
