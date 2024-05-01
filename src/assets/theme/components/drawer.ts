import { DrawerClasses, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import pxToRem from "../functions/pxToRem";

const drawer: {
    styleOverrides?: Partial<OverridesStyleRules<keyof DrawerClasses, "MuiDrawer", Omit<Theme, "components">>>;
} = {
    styleOverrides: {
        root: {
            width: pxToRem(260),
            whiteSpace: "nowrap",
            border: "none",
            backgroundColor: 'red',
            height: "100%",
        },
        paper: {
            width: pxToRem(260),
            backgroundColor: "white",
            border: "none",
            position: "absolute",
        },
        paperAnchorDockedLeft: {
            borderRight: "none",
        },
    },
};
export default drawer;
