type HexColor = string;

interface Heading {
  size: number;
}

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
  hover: {
    shadow: string;
  };
}

export default interface Theme {
  name: string;
  color: {
    niagara: HexColor;
    downy: HexColor;
    parisDaisy: HexColor;
    white: HexColor;
    flamePea: HexColor;
    oil: HexColor;
    brightGrey: HexColor;
    silver: HexColor;
    lightGrey: HexColor;
  };
  mediaQueries: {
    whenTablet: string;
    whenDesktop: string;
    whenMobileL: string;
    whenDesktopXL: string;
  };
  table: {
    outerBorder: Border;
    innerBorder: Border;
    head: TableSection;
    body: TableSection;
    foot: TableSection;
  };
  card: {
    border: Border;
  };
  heading: {
    xxl: Heading;
    xl: Heading;
    l: Heading;
    m: Heading;
    s: Heading;
    xs: Heading;
    xxs: Heading;
  };
  button: {
    primary: Button;
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
  };
  footer: {
    maxWidth: number;
  };
}
