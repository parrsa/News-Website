import { IconButtonClasses, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

const iconButton: {
    styleOverrides?: Partial<OverridesStyleRules<keyof IconButtonClasses, "MuiIconButton", Omit<Theme, "components">>>;
} = {
    styleOverrides: {
        root: {
            backgroundColor: 'transparent',
        },
    },
};
export default iconButton