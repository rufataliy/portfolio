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
  color: "rgba(0, 0, 0, 0.7)",
  value: "0px 9px 17px -6px",
  hover: "rgba(0, 0, 0, 0.9)",
};

const shadowLight = {
  color: "rgba(0, 0, 0, 0.7)",
  value: "0px 9px 17px -6px",
  hover: "rgba(0, 0, 0, 0.9)",
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
