import contained from "./contained";
import outlined from "./outlined";
import { ComponentsOverrides } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material";
import { ComponentsProps } from "@mui/material/styles/props";
import { ComponentsVariants } from "@mui/material/styles/variants";

interface asd {
    root: any
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        gradient: true;
    }
}


const button: {
    defaultProps?: ComponentsProps['MuiButton'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiButton'] | asd | any;
    variants?: ComponentsVariants['MuiButton'];
    
} = {

    defaultProps: {
        disableRipple: false,
    },
    styleOverrides: {
        contained: { ...contained.base },
        containedSizeSmall: { ...contained.small },
        containedSizeLarge: { ...contained.large },
        containedPrimary: { ...contained.primary },
        containedSecondary: { ...contained.secondary },
        containedThird: { ...contained.third },
        containedGradients: { ...contained.gradients },
        outlined: {...outlined.base},
        outlinedSizeSmall: {...outlined.small},
        outlinedSizeLarge: {...outlined.large},
        outlinedPrimary: {...outlined.primary},
        outlinedSecondary: {...outlined.secondary},
    },

    variants: [
        {
            props: { variant: 'gradient' },
            style: {
                textTransform: 'none',

            },
        },
    ]
};

export default button;
