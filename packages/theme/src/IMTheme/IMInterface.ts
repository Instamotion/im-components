type HexColor = string;

type Heading = {
  h1Mobile: number;
  h1: number;
  h2Mobile: number;
  h2: number;
  h3Mobile: number;
  h3: number;
  h4Mobile: number;
  h4: number;
};

interface Border {
  color: HexColor;
  width: number;
  radius?: number;
}

interface Line {
  height: number;
}

interface Letter {
  spacing: number;
}

export interface Font {
  family: string;
  size?: number;
  height?: number;
  spacing?: number;
  weight?: number;
}

interface TableSection {
  font: Font;
  background: HexColor;
}

interface Button {
  border: Border;
  font: Font;
  color: HexColor;
  background: HexColor;
  padding: string;
  hover: {
    shadow: string;
  };
  active: {
    shadow: string;
  };
  disabled: {
    opacity: number;
  };
}

export type ColorLibrary = {
  primary: HexColor;
  secondary: HexColor;
  niagara: HexColor;
  downy: HexColor;
  parisDaisy: HexColor;
  white: HexColor;
  flamePea: HexColor;
  oil: HexColor;
  brightGrey: HexColor;
  silver: HexColor;
  lightGrey: HexColor;
  whiteGrey: HexColor;
  lighterGrey: HexColor;
  grey: HexColor;
  dark: HexColor;
  grayscale: HexColor;
  black: HexColor;
  cyan: HexColor;
  silverDark: HexColor;
  darkMailContent: HexColor;
  almond: HexColor;
  lightGreyBG: HexColor;
  lightBackground: HexColor;
  secondaryBlack: HexColor;
  typography: HexColor;
  typo: HexColor;
  signal: HexColor;
};

export type FontSizes = {
  lg: string;
  normal: string;
  sm: string;
};

export default interface IMTheme {
  name: string;
  color: ColorLibrary;
  fontSize: FontSizes;
  mediaQueries: {
    whenMobile: string;
    whenMobileL: string;
    whenTablet: string;
    whenDesktop: string;
    whenDesktopL: string;
    whenDesktopXL: string;
    whenDesktopXXL: string;
  };
  table: {
    outerBorder: Border;
    innerBorder: Border;
    head: TableSection;
    body: TableSection;
    foot: TableSection;
  };
  card: {
    border: {
      radius: number;
    };
    shadow: string;
  };
  heading: Heading;
  button: {
    primary: Button;
    secondary: Button;
    grayscaleDark: Button;
    grayscale: Button;
    outlined: Button;
  };
  input: {
    border: Border;
    font: Font;
  };
  label: {
    font: Font;
    line: Line;
    letter: Letter;
  };
  font: {
    sans: Font;
    bentonLight: Font;
    bentonRegular: Font;
    bentonMedium: Font;
    bentonBold: Font;
    bentonBlack: Font;
  };
  footer: {
    maxWidth: number;
  };
}
