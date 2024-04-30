/* This TypeScript code snippet is importing `ThemeOptions` and `createTheme` from the `@mui/material`
library. It then defines an empty `themeOptions` object with a `components` property. After that, it
creates a theme using the `createTheme` function with the `themeOptions` object as a parameter.
Finally, it exports both the `theme` and `themeOptions` objects for use in other parts of the
codebase. */
import { ThemeOptions, createTheme } from "@mui/material";
import colors from "./base/colors";
import breakpoints from "./base/breakpoints";

const themeOptions: ThemeOptions = {
    palette: { ...colors },
    breakpoints: { ...breakpoints },
    components: {
    },
}


const theme = createTheme(themeOptions);
export { theme, themeOptions };
