/**
 * The function `hexToRgb` converts a hexadecimal color code to an RGBA color value.
 * @param {string} hex - The function `hexToRgb` takes a hexadecimal color code as a string input and
 * converts it to an RGBA color representation. The input parameter `hex` should be a string
 * representing a valid hexadecimal color code, such as "#RRGGBB" or "#RGB".
 * @returns The function `hexToRgb` takes a hexadecimal color code as input and converts it to an RGBA
 * color value. It then returns the RGBA color value as a string.
 */
function hexToRgb(hex: string) {
  var c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)"
    );
  }
  throw new Error("Bad Hex");
}

export default hexToRgb;
