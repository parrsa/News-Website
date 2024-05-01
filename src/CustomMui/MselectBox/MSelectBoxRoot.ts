import { styled } from "@mui/material/styles";
import { Select, Theme } from "@mui/material";

interface owner {
    fullWidth?: boolean
    helperText?: string
    border?: string
    error?: string
    bgColor?: boolean
    direction?: boolean
    login?: string
    value?: string
    popup?: string
    internShip?: boolean
    form?: boolean
    fullHeight?: boolean
}

interface InputProps {
    ownerState: owner;
    theme?: Theme;
}

export default styled(Select)(({ theme, ownerState }: any) => {
    const { border, direction, login, form, bgColor, fullHeight, popup, internShip, error, fullWidth, height } = ownerState
    function formStyle() {
        return (
            {
                "& .MuiOutlinedInput-input": {
                    color: "black",
                    border: "0px solid black",
                },
                '& .MuiSelect-root': {
                    color: " !important",
                    fontSize: "50rem",
                    fontWeight: "bold",
                    // padding: "0.1rem 0 !important",
                    // border: "1px solid black",
                    // height: "10px",
                },
                "& .MuiSelect-select": {
                    border: error ? "1px solid red" : "1px solid black",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    backgroundColor: theme.palette.white.main + "!important",
                    alignItems: "center",
                    display: "flex",
                    height: "2rem !important",
                    width: "100% !important",
                },
                "& .MuiSelect-icon": {
                    marginRight: "80%",
                    color: "black"
                },
                '.MuiOutlinedInput-notchedOutline': {
                    border: "none !important",
                    backgroundColor: "transparent !important"
                }
            }
        )
    }



    return {
        width: fullWidth && "100%",
        // height: fullHeight ? "100%" : height,
        fontWeight: "bold",
        direction: direction,
        backgroundColor: bgColor + "!important",
        ...(form && formStyle()),
    }
})
