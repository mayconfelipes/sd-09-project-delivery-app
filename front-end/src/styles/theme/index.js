const colorNames = {
  // Color name references from:
  // https://www.schemecolor.com/
  // Color styles
  bangladeshGreen: '#036b52', // primary
  mountainMeadow: '#2fc18c', // secondary
  blueViolet: '#421981', // tertiary
  brandeisBlue: '#056cf9', // quaternary
  // Text
  richBlack: '#001813', // dark
  webAzure: '#f2fffc', // light
  oldSilver: '#828282',
  // Order colors
  caribbeanGreen: '#00cc9b', // delivered
  kiwi: '#8cd940', // preparing
  sandstorm: '#d9ca40', // pending
};

const theme = {
  colors: {
    primary: colorNames.bangladeshGreen,
    secondary: colorNames.mountainMeadow,
    tertiary: colorNames.blueViolet,
    quaternary: colorNames.brandeisBlue,
    dark: colorNames.richBlack,
    light: colorNames.webAzure,
    textLight: colorNames.oldSilver,
    delivered: colorNames.caribbeanGreen,
    preparing: colorNames.kiwi,
    pending: colorNames.sandstorm,
  },
};

export default theme;
