/**
 * The function `hexToRgb` converts a hexadecimal color code to an RGBA color value.
 * @param {string} hex - The function `hexToRgb` takes a hexadecimal color code as a string input and
 * converts it to an RGBA color representation. The input parameter `hex` should be a string
 * representing a valid hexadecimal color code, such as "#RRGGBB" or "#RGB".
 * @returns The function `hexToRgb` takes a hexadecimal color code as input and converts it to an RGBA
 * color value. It then returns the RGBA color value as a string.
 */
/**
 * The function `boxShadow` generates a CSS box-shadow property value based on the provided offset,
 * radius, color, opacity, and inset parameters.
 * @param offset - The `offset` parameter in the `boxShadow` function represents the horizontal and
 * vertical distance of the shadow. It is an array containing two values: the horizontal offset (x) and
 * the vertical offset (y) of the shadow.
 * @param radius - The `radius` parameter in the `boxShadow` function represents the blur radius and
 * spread radius of the box shadow. It is an array containing two values: the blur radius and the
 * spread radius. The blur radius determines the blurriness of the shadow, while the spread radius
 * determines how far the
 * @param {string} color - The `color` parameter in the `boxShadow` function represents the color of
 * the shadow that will be applied. It should be a string value representing a color, such as hex, RGB,
 * or color name.
 * @param {string | number} opacity - The `opacity` parameter in the `boxShadow` function determines
 * the transparency level of the shadow being applied. It can be specified as a number between 0
 * (completely transparent) and 1 (completely opaque), or as a string representing a percentage value.
 * This parameter controls how see-through
 * @param [inset] - The `inset` parameter in the `boxShadow` function is used to specify whether the
 * shadow should be an inset shadow or not. If the `inset` parameter is provided with a non-empty
 * string value, it indicates that the shadow should be an inset shadow. If the `inset
 * @returns The `boxShadow` function is returning a string value that represents a CSS box shadow
 * property. The format of the returned string is as follows:
 */
import rgba from "./rgba";
import pxToRem from "./pxToRem";

function boxShadow(
  offset = [],
  radius = [],
  color: string,
  opacity: string | number,
  inset = "",
) {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity,
  )}`;
}

export default boxShadow;
