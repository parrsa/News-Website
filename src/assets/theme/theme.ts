/* This TypeScript code snippet is importing `ThemeOptions` and `createTheme` from the `@mui/material`
library. It then defines an empty `themeOptions` object with a `components` property. After that, it
creates a theme using the `createTheme` function with the `themeOptions` object as a parameter.
Finally, it exports both the `theme` and `themeOptions` objects for use in other parts of the
codebase. */
import { ThemeOptions, createTheme } from "@mui/material";
import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import button from "./components/button";
import iconButton from "./components/iconButton";
import Typography from "./base/typography";
import appBar from "./components/appBar";
import table from "./components/table";

const themeOptions: ThemeOptions = {
    palette: { ...colors },
    breakpoints: { ...breakpoints },
    components: {
        MuiButton: { ...button },
        MuiIconButton: { ...iconButton },
        MuiTypography: { ...Typography },
        MuiAppBar: { ...appBar },
        MuiTable: { ...table },
    },
}


const theme = createTheme(themeOptions);
export { theme, themeOptions };
