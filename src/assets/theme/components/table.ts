import { ComponentsProps } from "@mui/material/styles/props";
import { ComponentsOverrides } from "@mui/material/styles/overrides";
import { ComponentsVariants } from "@mui/material/styles/variants";
import { Theme } from "@mui/material";

const table: {
    defaultProps?: ComponentsProps['MuiTable'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTable'];
    variants?: ComponentsVariants['MuiTable'];
} = {
    styleOverrides: {
        root: {
            backgroundColor: "white",
            borderRadius: "0rem 0rem .6rem .6rem",
            textAlign: "center",
            width: "100%",
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.2)',
            '& thead': {
                borderBottom: "1px solid #ccc",
                padding: ".2rem",
                backgroundColor: "#f6f5f5",
                '& th': {
                    textAlign: "center",
                }
            },

            '& tbody': {
                '& td': {
                    textAlign: "center",
                    border: '0.5px solid #DDDFE1'
                }
            }

        },
    },
}

export default table