import Theme, { Font } from './interface';

const sansSerifFont: Font = {
  family: 'Roboto, sans-serif'
};

export const AvailableColors = {
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
  oil: '#313330',
  //
  brightGrey: '#606164',
  // disabled
  silver: '#C4C4C4',
  // light-grey
  lightGrey: '#FAFAFA'
};

export type AvailableColors = keyof typeof AvailableColors;

export const theme: Theme = {
  name: 'default',
  color: AvailableColors,
  mediaQueries: {
    whenMobileL: '@media (min-width: 320px)',
    whenTablet: '@media (min-width: 768px)',
    whenDesktop: '@media (min-width: 1024px)',
    whenDesktopXL: '@media (min-width: 1280px)'
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
        color: '#75dfc0',
        radius: 4,
        width: 0
      },
      color: '#313330',
      background: '#75dfc0',
      font: {
        ...sansSerifFont,
        size: 16,
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
        color: '#75dfc0',
        radius: 4,
        width: 1
      },
      color: '#75dfc0',
      background: '#fff',
      font: {
        ...sansSerifFont,
        size: 16,
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
      color: '#C4C4C4'
    },
    font: {
      ...sansSerifFont,
      size: 16
    }
  },
  label: {
    font: {
      ...sansSerifFont,
      size: 1,
      weight: 600
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
    xxl: {
      size: 60
    },
    xl: {
      size: 48
    },
    l: {
      size: 36
    },
    m: {
      size: 32
    },
    s: {
      size: 24
    },
    xs: {
      size: 20
    },
    xxs: {
      size: 18
    }
  },
  font: {
    sans: sansSerifFont
  },
  footer: {
    maxWidth: 1320
  }
};

export default theme;
