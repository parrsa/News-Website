/**
 * The function `linearGradient` generates a CSS linear gradient string with specified colors and
 * angle.
 * @param {string} color - The `color` parameter in the `linearGradient` function represents the
 * starting color of the linear gradient.
 * @param {string} colorState - The `colorState` parameter in the `linearGradient` function represents
 * the second color in the linear gradient. It is the color that the gradient transitions to after the
 * initial color specified by the `color` parameter.
 * @param [angle=195] - The `angle` parameter in the `linearGradient` function represents the direction
 * of the gradient. In this case, it is set to a default value of 195 degrees.
 * @returns The function `linearGradient` is returning a CSS linear gradient string with the specified
 * angle and colors passed as arguments.
 */
function linearGradient(color: string, colorState: string, angle = 195) {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

export default linearGradient;
