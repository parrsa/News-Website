import { TextField, Theme, styled, useTheme } from "@mui/material";
import { ITInputOptions } from "../../@types/components/MuI/TInput";
import colors from "../../assets/theme/base/colors";
const TInputRoot = styled(TextField)<{ ownerState: ITInputOptions }>(({ ownerState }) => {
    const { variant, bgColor, color, logins, error, fullwidth, search, width, textarea, fullheight, height, success, warning } = ownerState;
    const theme = useTheme() as Theme;

    function popupStyle() {
        return (
            {

                '& .MuiFormHelperText-root': {
                    border: 'none',
                    color: error ? "error" : success ? `${theme.palette.success.main}` : warning ? `${theme.palette.warning.main}` : 'black',
                    fontWeight: "bold",
                    fontSize: "0.5rem",
                },
                "& .MuiInputBase-root": {
                    border: 'none',
                    borderColor: 'transparent',
                    fontWeight: "bold",
                    fontSize: "0.9rem",

                    backgroundColor: '#F0F0F2' + "!important",
                },
                '& .Mui-focused': {
                    border: 'none',
                    color: error ? "error" : success ? `${theme.palette.success.main}` : warning ? `${theme.palette.warning.main}` : 'black',
                    backgroundColor: '#F0F0F2' + "!important",
                    borderColor: 'transparent',
                },
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                        color: error ? "error" : success ? `${theme.palette.success.main}` : warning ? `${theme.palette.warning.main}` : 'black',

                        border: error ? "1px solid error" : success ? `1px solid ${theme.palette.success.main}` : warning ? `1px solid ${theme.palette.warning.main}` : '1px solid black',
                        borderColor: error ? " error" : success ? ` ${theme.palette.success.main}` : warning ? ` ${theme.palette.warning.main}` : '1px solid black',
                    },
                },
                "& .MuiInputLabel-root": {
                    fontSize: "1rem",
                    backgroundColor: '#F0F0F2' + "!important",
                    padding: "0.1rem 0 !important",
                    border: 'none',
                    fontWeight: "bold !important",
                    borderRadius: "10px !important",
                    color: error ? "error" : success ? `${theme.palette.success.main}` : warning ? `${theme.palette.warning.main}` : 'third',
                },
                "& .MuiOutlinedInput-notchedOutline": {

                    color: 'black',
                    border: error ? "1px solid error" : success ? `1px solid ${theme.palette.success.main}` : warning ? `1px solid ${theme.palette.warning.main}` : '0px solid black',
                    borderColor: error ? " error" : success ? ` ${theme.palette.success.main}` : warning ? ` ${theme.palette.warning.main}` : '1px solid black',
                }

            }
        )
    }

    function StyleSearchBox() {
        return variant === "text" ? {
            "& .MuiInputBase-root": {
                fontSize: '1.2rem',
                color: '#00FF00 !important',
                fontFamily: 'iransans',
                height: '2.5rem !important',
                border: error ? "1px solid error" : success ? `1px solid ${theme.palette.success.main}` : warning ? `1px solid ${theme.palette.warning.main}` : '1px solid #DDDFE1',
                borderColor: error ? " error" : success ? ` ${theme.palette.success.main}` : warning ? ` ${theme.palette.warning.main}` : '1px solid #DDDFE1',

            },
            "& .Mui-disabled": {
                border: '0px solid #DDDFE1',
                fontSize: '1.2rem',
                color: '#00FF00 !important',
                fontFamily: 'iransans',
                height: '2.5rem !important',
            }
        } : {
            "& .Mui-disabled": {
                border: '0px solid #DDDFE1',
                fontSize: '1.2rem',
                color: '#00FF00 !important',
                fontFamily: 'iransans',
                height: '2.5rem !important',
            },
            "& .MuiInputBase-root": {
                fontSize: '.8rem',
                color: 'black !important',
                fontFamily: 'iransans',
                height: '2.5rem !important',
                border: error ? "1px solid error" : success ? `1px solid ${theme.palette.success.main}` : warning ? `1px solid ${theme.palette.warning.main}` : '1px solid #DDDFE1',
                borderColor: error ? " error" : success ? ` ${theme.palette.success.main}` : warning ? ` ${theme.palette.warning.main}` : '1px solid #DDDFE1',

            },
            '& .MuiFormHelperText-root': {
                color: 'white !important',
                fontSize: '.8rem',
                fontWeight: 'bold',
                fontFamily: 'iransans',
                height: '10px',
                border: error ? "1px solid error" : success ? `1px solid ${theme.palette.success.main}` : warning ? `1px solid ${theme.palette.warning.main}` : '1px solid black',
                borderColor: error ? " error" : success ? ` ${theme.palette.success.main}` : warning ? ` ${theme.palette.warning.main}` : '1px solid #DDDFE1',

            },
            '& .Mui-focused': {
                color: error ? "error" : success ? `${theme.palette.success.main}` : warning ? `${theme.palette.warning.main}` : 'black',
                border: error ? "1px solid error" : success ? `1px solid ${theme.palette.success.main}` : warning ? `1px solid ${theme.palette.warning.main}` : '1px solid #DDDFE1',
                borderColor: error ? " error" : success ? ` ${theme.palette.success.main}` : warning ? ` ${theme.palette.warning.main}` : '1px solid #DDDFE1',

            },
            "& .MuiOutlinedInput-notchedOutline": {
                fontFamily: 'iransans',
                border: error ? "1px solid error" : success ? `1px solid ${theme.palette.success.main}` : warning ? `1px solid ${theme.palette.warning.main}` : '1px solid #DDDFE1',
                borderColor: error ? " error" : success ? ` ${theme.palette.success.main}` : warning ? ` ${theme.palette.warning.main}` : '1px solid #DDDFE1',

            },


            "& .MuiInputLabel-root": {
                fontFamily: 'iransans',
                borderRadius: '10px !important',
                color: 'black  !important',
                // Centering the label
                display: 'flex',
                justifyContent: 'center',
                border: error ? "1px solid error" : success ? `1px solid ${theme.palette.success.main}` : warning ? `1px solid ${theme.palette.warning.main}` : '1px solid #DDDFE1',
                borderColor: error ? " error" : success ? ` ${theme.palette.success.main}` : warning ? ` ${theme.palette.warning.main}` : '1px solid #DDDFE1',

                alignItems: 'center', // Center vertically
            },
        }

    }


    function TextArea() {
        return (
            {

                '& .MuiFormHelperText-root': {
                    color: theme.palette.error.light + "!important",
                    fontSize: ".84rem",
                    fontWeight: "bold",
                    padding: "1rem 0 !important",
                    fontFamily: 'Yekan Bakh Hairline',
                    height: "10px",
                },
                "& .MuiInputBase-root": {
                    border: error ? "1px solid red" : "0px solid #DDDFE1",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    backgroundColor: 'white' + "!important",
                    padding: '15px',
                    fontFamily: 'Yekan Bakh Hairline',

                    // width: '20rem',
                    // height: "4rem !important"
                },
                '& .Mui-focused': {
                    border: '0px',
                },
                "& .MuiInputLabel-root": {
                    fontFamily: 'Yekan Bakh Hairline',
                    fontSize: "1rem",
                    fontWeight: "bold !important",
                    background: 'white' + "!important",
                    borderRadius: "10px !important",
                    color: 'black' + "!important",
                    padding: "0 10px !important",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    fontFamily: 'Yekan Bakh Hairline',
                    borderColor: error ? " red" : "",
                    backgroundColor: "transparent !important"
                }
            }
        )
    }


    return {
        width: fullwidth ? "100%" : width,
        height: fullheight ? '100%' : height,
        backgroundColor: bgColor + "!important",
        variants: variant,
        ...(logins && popupStyle()),
        ...(search && StyleSearchBox()),
        ...(textarea && TextArea())

    };
});
export default TInputRoot
