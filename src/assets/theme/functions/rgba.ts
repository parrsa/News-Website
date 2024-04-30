/**
 * The function `rgba` converts a hexadecimal color code to an RGBA color with the specified opacity.
 * @param {string} color - The `color` parameter in the `rgba` function is a string representing a
 * color value. It can be in various formats such as hex (#RRGGBB), rgb (rgb(255, 0, 0)), or named
 * colors (e.g., "red").
 * @param {string | number} opacity - The `opacity` parameter in the `rgba` function represents the
 * transparency level of the color. It can be a value between 0 (completely transparent) and 1
 * (completely opaque), or it can be specified as a percentage between 0% and 100%.
 * @returns The `rgba` function is being exported, which takes a color string and an opacity value as
 * parameters. It then converts the color from hexadecimal to RGB using the `hexToRgb` function
 * imported from the `hexToRgb` module, and returns the color in RGBA format with the specified
 * opacity.
 */
import hexToRgb from "./hexToRgb";

function rgba(color: string, opacity: string | number) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
