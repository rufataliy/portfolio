import { DefaultTheme } from "styled-components";

const fontColorsDark = {
  high: "#b1b4b9",
  medium: "#ccced1",
  low: "#e7e8e9",
};

const fontColorsLight = {
  high: "#3f4349",
  medium: "#5f6368",
  low: "#7c8188",
};

const shadowDark = {
  default: "0px 9px 17px -6px rgba(0, 0, 0, 0.8)",
  hover: "0px 14px 35px -20px rgba(0, 0, 0, 0.7)",
};

const shadowLight = {
  default: "0px 9px 17px -6px rgba(0, 0, 0, 0.8)",
  hover: "0px 14px 35px -20px rgba(0, 0, 0, 0.7)",
};

const accents = {
  primary: "#fdb415",
};

const bgDark = "#35363a";
const bgLight = "#ffffff";

const darkColors = {
  accents,
  fontColors: fontColorsDark,
  shadow: shadowDark,
  bg: bgDark,
};

const lightColors = {
  accents,
  fontColors: fontColorsLight,
  shadow: shadowLight,
  bg: bgLight,
};

export const LightTheme: DefaultTheme = {
  colors: lightColors,
};

export const DarkTheme: DefaultTheme = {
  colors: darkColors,
};
