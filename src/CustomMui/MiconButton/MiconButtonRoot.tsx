import { styled } from "@mui/material/styles";
import { IconButton, SxProps, Theme, useTheme } from "@mui/material";
import colors from "../../assets/theme/base/colors";

interface owner {
    width?: string
    height?: string
    color?: string
    variant?: string
    size?: string
    circular?: boolean
    iconOnly?: boolean
    border?: string
    borderRadius?: string
    bgColor?: string
    positon?: string
    darkMode?: boolean
    fullWidth?: boolean
    fullHeight?: boolean
    SearchBox?: boolean
    location?: boolean
    icons?: boolean
    sx?: SxProps
}

interface styledProps {
    theme?: Theme
    ownerState: owner
}

export default styled(IconButton)(({ ownerState }: any) => {
    const theme = useTheme<Theme>()
    const {
        fullWidth,
        fullHeight,
        positon,
        borderRadius,
        iconOnly,
        variant,
        circular,
        color,
        size,
        darkMode,
        bgColor,
        width,
        height,
        SearchBox,
        location,
        icons
    } = ownerState
    let { palette, functions, boxShadow } = theme as any;

    const Locations = () => {
        return (
            {
                '&.MuiIconButton-root': {
                    width: '2.2rem',
                    height: '2.2rem',
                },
                backgroundColor: "black",
                color: "white",
                width: "50px",
                height: '50px',
                borderRadius: '50%',
                "&:hover": {
                    color: colors.black.main + "!important",
                    // backgroundColor: colors.kaarnas.yellow,
                    border: `1px solid ${colors.white.main}`
                },
                // "&:focus": {
                //     color: colors.black.main,
                //     backgroundColor: colors.kaarnas.main,
                //     border: `1px solid ${colors.success}`
                // }
            }

        )
    }

    const Icon = () => {
        return (
            {
                '&.MuiIconButton-root': {
                    width: '2.2rem',
                    height: '2.2rem',
                },
                backgroundColor: colors.white.main,
                color: "white",
                width: "50px",
                height: '50px',
                boxShadow: "-1px 1px 3px 0px rgba(189,178,189,1)",

                "&:hover": {
                    // color: colors.black.main + "!important",
                    backgroundColor: colors.white.main,
                    // border: `1px solid ${colors.white.main}`
                },
                // "&:focus": {
                //     color: colors.black.main,
                //     backgroundColor: colors.kaarnas.main,
                //     border: `1px solid ${colors.success}`
                // }
            }

        )
    }
    function SearchInButton() {
        return (
            {
                '&.MuiIconButton-root': {
                },
                border: `1px solid ${colors.kaarnas.yellow}`,
                backgroundColor: colors.kaarnas.yellow,
                color: "white",
                width: "50px",
                height: '50px',
                borderRadius: '50%',
                "&:hover": {
                    color: colors.black.main + "!important",
                    backgroundColor: "transparent",
                    border: `1px solid ${colors.white.main}`
                },
                // "&:focus": {
                //     color: colors.black.main,
                //     backgroundColor: colors.kaarnas.main,
                //     border: `1px solid ${colors.success}`
                // }
            }

        )
    }

    return {
        backgroundColor: bgColor + "!important",
        // width: fullWidth ? "100% !important" : width,
        // height: fullHeight ? "100% !important" : height,
        ...(SearchBox && SearchInButton()),
        ...(location && Locations()),
        ...(icons && Icon())
    }
})
