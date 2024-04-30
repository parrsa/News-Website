/**
 * The function `pxToRem` converts a pixel value to a rem value based on a specified base number.
 * @param {number} number - The `number` parameter in the `pxToRem` function represents the value in
 * pixels that you want to convert to rems.
 * @param [baseNumber=16] - The `baseNumber` parameter in the `pxToRem` function represents the base
 * font size in pixels that you want to use for converting pixel values to rem values. By default, the
 * `baseNumber` is set to 16 pixels if not provided when calling the function.
 * @returns The `pxToRem` function is returning a string that represents the input `number` converted
 * to a value in rems. The conversion is done by dividing the `number` by the `baseNumber` (defaulted
 * to 16 if not provided) and appending "rem" to the result.
 */
function pxToRem(number: number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}

export default pxToRem;
