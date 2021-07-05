import IMTheme, { Font } from './IMInterface';

const sansSerifFont: Font = {
  family: 'Roboto, sans-serif'
};
const BentonLight: Font = {
  family: 'BentonSans',
  weight: 300
};
const BentonRegular: Font = {
  family: 'BentonSans',
  weight: 400
};
const BentonMedium: Font = {
  family: 'BentonSans',
  weight: 500
};
const BentonBold: Font = {
  family: 'BentonSans',
  weight: 700
};
const BentonBlack: Font = {
  family: 'BentonSans',
  weight: 900
};

const colors = {
  // primary
  primary: '#054256',
  // secondary
  secondary: '#F7B628',
  // dark green
  niagara: '#20AD90',
  // branding green
  downy: '#75DFC0',
  // warning
  parisDaisy: '#FFE44C',
  // default background
  white: '#FFFFFF',
  // required, error
  flamePea: '#B75C50',
  // font default
  oil: '#444444',
  //
  brightGrey: '#606164',
  // disabled
  silver: '#C4C4C4',
  // light-grey
  lightGrey: '#FAFAFA',
  // lighter-gray
  whiteGrey: '#E5E5E5',
  // lighter-gray
  lighterGrey: '#f3f3f3',
  // grey
  grey: '#9E9E9E',
  // dark grey
  dark: '#323330',
  // dark grey for button
  grayscale: '#8F8F8F',
  // black
  black: '#000000',
  // light shade of cyan
  cyan: '#6DC4CD',
  // silverDark
  silverDark: '#666666',
  // darkMailContent
  darkMailContent: '#323330',
  // faux-blanched almond:
  almond: '#FBEEC7',
  // USP background light gray color
  lightGreyBG: '#F9F9F9',
  // lightBackground
  lightBackground: '#F9F9F9',
  // secondaryBlack
  secondaryBlack: '#333333',
  // text
  typography: '#363636',
  // typo
  typo: '#575756',
  // error colour
  signal: '#FF0000',
  //aler color
  orange: '#F78B28',
  // turquoise, used in radio buttons, very similar to niagara
  bermuda: '#76DFBF',
  // one more shade of light grey
  alabaster: '#F7F7F7',
  //turqoise
  turquoise: '#6EC4CE',
  //turqoise text
  turquoiseText: '#29929e',
  //turqoise opacity
  turquoiseOpacity: 'rgba(110, 196, 206, 0.4)',
  //java
  java: '#21939f'
};

export type IMAvailableColors = keyof typeof colors;

export const imTheme: IMTheme = {
  name: 'default',
  fontSize: {
    lg: '1.125',
    normal: '1',
    sm: '0.7'
  },
  color: colors,
  mediaQueries: {
    whenMobile: '@media (max-width: 575px)',
    whenMobileL: '@media (min-width: 576px)',
    whenTablet: '@media (min-width: 768px)',
    whenDesktop: '@media (min-width: 1024px)',
    whenDesktopL: '@media (min-width: 1280px)',
    whenDesktopXL: '@media (min-width: 1440px)',
    whenDesktopXXL: '@media (min-width: 1680px)'
  },
  table: {
    outerBorder: {
      color: '#C4C4C4',
      width: 2,
      radius: 4
    },
    innerBorder: {
      color: '#C4C4C4',
      width: 1,
      radius: 0
    },
    head: {
      font: {
        ...sansSerifFont,
        size: 12,
        height: 28,
        spacing: 0.4,
        weight: 500
      },
      background: '#FFFFFF'
    },
    body: {
      font: {
        ...sansSerifFont,
        size: 12,
        height: 28,
        spacing: 0.4
      },
      background: '#FFFFFF'
    },
    foot: {
      font: {
        ...sansSerifFont,
        size: 12,
        height: 28,
        spacing: 0.4,
        weight: 500
      },
      background: '#FFFFFF'
    }
  },
  card: {
    border: {
      radius: 4
    },
    shadow: '0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.1)'
  },
  button: {
    primary: {
      border: {
        color: colors.primary,
        width: 0
      },
      color: colors.white,
      background: colors.primary,
      padding: '0.8125rem 3rem',
      font: {
        ...sansSerifFont,
        size: 1,
        weight: 600,
        spacing: 0
      },
      hover: {
        shadow: '0 0.25rem 0.25rem rgba(0, 0 ,0, 0.1)'
      },
      active: {
        shadow: 'inset 0px 0.125rem 0.125rem rgba(0, 0, 0, 0.05);'
      },
      disabled: {
        opacity: 0.5
      }
    },
    secondary: {
      border: {
        color: colors.secondary,
        width: 0
      },
      color: colors.oil,
      background: colors.secondary,
      padding: '0.8125rem 3rem',
      font: {
        ...BentonBold,
        size: 1,
        weight: 600,
        spacing: 0
      },
      hover: {
        shadow: '0 0.25rem 0.25rem rgba(0, 0 ,0, 0.1)'
      },
      active: {
        shadow: 'inset 0px 0.125rem 0.125rem rgba(0, 0, 0, 0.05);'
      },
      disabled: {
        opacity: 0.5
      }
    },
    grayscaleDark: {
      border: {
        color: colors.secondary,
        width: 0
      },
      color: colors.whiteGrey,
      background: colors.grayscale,
      padding: '0.8125rem 3rem',
      font: {
        ...BentonBold,
        size: 1,
        weight: 600,
        spacing: 0
      },
      hover: {
        shadow: '0 0.25rem 0.25rem rgba(0, 0 ,0, 0.1)'
      },
      active: {
        shadow: 'inset 0px 0.125rem 0.125rem rgba(0, 0, 0, 0.05);'
      },
      disabled: {
        opacity: 0.5
      }
    },
    grayscale: {
      border: {
        color: colors.white,
        width: 0
      },
      color: colors.oil,
      background: colors.white,
      padding: '0.8125rem 3rem',
      font: {
        ...sansSerifFont,
        size: 1,
        weight: 600,
        spacing: 0
      },
      hover: {
        shadow: '0 0.25rem 0.25rem rgba(0, 0 ,0, 0.1)'
      },
      active: {
        shadow: 'inset 0px 0.125rem 0.125rem rgba(0, 0, 0, 0.05);'
      },
      disabled: {
        opacity: 0.5
      }
    },
    outlined: {
      border: {
        color: colors.secondary,
        width: 0.1225
      },
      color: colors.oil,
      background: colors.white,
      padding: '0.8125rem 3rem',
      font: {
        ...sansSerifFont,
        size: 1,
        weight: 600,
        spacing: 0
      },
      hover: {
        shadow: '0 0.25rem 0.25rem rgba(0, 0 ,0, 0.1)'
      },
      active: {
        shadow: 'inset 0px 0.125rem 0.125rem rgba(0, 0, 0, 0.05);'
      },
      disabled: {
        opacity: 0.5
      }
    },
    ternary: {
      border: {
        color: colors.primary,
        width: 0
      },
      color: colors.primary,
      background: colors.turquoiseOpacity,
      padding: '0.8125rem 3rem',
      font: {
        ...sansSerifFont,
        size: 1,
        weight: 600,
        spacing: 0
      },
      hover: {
        shadow: '0 0.25rem 0.25rem rgba(0, 0 ,0, 0.1)'
      },
      active: {
        shadow: 'inset 0px 0.125rem 0.125rem rgba(0, 0, 0, 0.05);'
      },
      disabled: {
        opacity: 0.5
      }
    }
  },
  input: {
    border: {
      width: 1,
      color: '#BBBBBB'
    },
    font: {
      ...BentonRegular,
      size: 16
    }
  },
  label: {
    font: {
      ...BentonRegular,
      size: 1
    },
    // line-height css rule
    line: {
      height: 1.15
    },
    // letter-spacing css rule
    letter: {
      spacing: 0.01
    }
  },
  heading: {
    h1Mobile: 32,
    h1: 48,
    h2Mobile: 24,
    h2: 32,
    h3Mobile: 18,
    h3: 24,
    h4Mobile: 18,
    h4: 18
  },
  font: {
    sans: sansSerifFont,
    bentonLight: BentonLight,
    bentonRegular: BentonRegular,
    bentonMedium: BentonMedium,
    bentonBold: BentonBold,
    bentonBlack: BentonBlack
  },
  footer: {
    maxWidth: 1320
  }
};

export default imTheme;
