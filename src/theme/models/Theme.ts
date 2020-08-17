import { FontColors } from "./FontColors";
import { Bg } from "./Bg";
import { Shadow } from "./Shadow";

export interface Theme {
  colors: {
    fontColors: FontColors;
    bg: Bg;
    shadow: Shadow;
  };
}
