import { RgbaColor } from "../../types";
import { clampHsva } from "../hsva/parse";
import { hsvaToRgba } from "../hsva/convert";

const hsvaMatcher = /hsva?\((-?\d+\.?\d*),\s*(-?\d+\.?\d*)%?,\s*(-?\d+\.?\d*)%?,?\s*(-?\d+\.?\d*)?\)/i;

export const parseHsvaString = (input: string): RgbaColor | null => {
  const match = hsvaMatcher.exec(input);

  if (!match) return null;

  const hsla = clampHsva({
    h: Number(match[1]),
    s: Number(match[2]),
    v: Number(match[3]),
    a: match[4] === undefined ? 1 : Number(match[4]),
  });

  return hsvaToRgba(hsla);
};
