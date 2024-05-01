import { Button, Theme, styled, useTheme } from "@mui/material";
import { ITButtonOptions } from "../../@types/components/MuI/TButton";
import colors from "../../assets/theme/base/colors";
const TButtonRoot = styled(Button)<{ ownerState: ITButtonOptions }>(({ ownerState }) => {
    const { variant, bgcolor, addclient, ReportBtn, width, fullwidth, fullheight, height, color, error, btnimg, gradientbtn, submit } = ownerState;
    const theme = useTheme() as Theme;
    function AddClients() {
        return (
            {
                fontFamily: 'iranSans',
                width: fullwidth ? "100%" : width ? width : '9.5rem',
                padding: '10px',
                fontWeight: "900",
                height: '2.1rem',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }
        )
    }
    function ReportBtns() {
        return (
            {
                fontFamily: 'iranSans',
                width: '6rem',
                padding: '10px',
                fontWeight: "900",
                height: '2.3rem',
            }
        )
    }
    const bg = () => {
        return variant === "gradient" ? {
            width: fullwidth ? "100%" : width ? width : '5.5rem',

            height: fullheight ? "100%" : height ? width : '2.3rem',
            color: 'white',
        } : {}
    }
    const SubmitBtn = () => {
        return variant === "outlined" ? {
            width: width ? width : '8rem',
            color: color ? color : 'white',
            height: '2.5rem',
        } : {
            fontFamily: 'iranSans',
            width: fullwidth ? "100%" : width ? width : '8rem',
            height: fullheight ? "100%" : height ? width : '2.5rem',
            padding: '10px',
            fontWeight: "900",
        }
    }

    function SelectImages() {
        return (
            {
                '&.Mui-disabled': {
                    opacity: 0.5,
                },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: error ? "1px dashed red" : "1.2px dashed #C4C4C4",
                // borderRadius: '0.5rem',
                backgroundColor: 'transparent',
                padding: "1rem 0 !important",
                width: "20rem",
                // height:'55px',
                fontSize: '0.90rem',
                fontWeight: 'bold',
                color: 'black',
                "&:hover": {
                    // color: colors.white.main + "!important",
                    backgroundColor: 'white',
                    border: `1px solid white`
                },

                "&:focus": {
                    color: 'white',
                    backgroundColor: 'transparent',
                    border: `1px solid ${colors.success}`
                }
            }

        )
    }
    return {
        backgroundColor: bgcolor + "!important",
        variants: variant,
        ...(addclient && AddClients()),
        ...(ReportBtn && ReportBtns()),
        ...(gradientbtn && bg()),
        ...(submit && SubmitBtn()),
        ...(btnimg && SelectImages()),

    };
});
export default TButtonRoot;
