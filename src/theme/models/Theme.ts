import { FontColors } from "./FontColors";
import { Bg } from "./Bg";
import { Shadow } from "./Shadow";
import { Accents } from "./Accents";

export interface Theme {
  colors: {
    fontColors: FontColors;
    bg: Bg;
    shadow: Shadow;
    accents: Accents;
  };
}
