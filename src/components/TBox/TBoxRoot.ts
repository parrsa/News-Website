import { Box,  styled,  } from "@mui/material";
import { ITBoxOptions } from "../../@types/components/MuI/TBox";

const TBoxRoot = styled(Box)<{ ownerState: ITBoxOptions }>(({ ownerState }) => {
    const { variant, width, fullwidth, fullheight, height, header,  circle,  globalbox, box, modal, borderRadius, position, boxlist, boxgradient } = ownerState;


    const BoxListing = () => {
        return {
            width: '11rem',
            height: '8rem',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.1)'
        }
    }


    const BoxGradient = () => {
        return {
            width: '11rem',
            height: '4rem',
            color: 'white',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
        }
    }



    const BoxGlobal = () => {
        return variant === "gradinet" ? {
            width: fullwidth ? "100%" : width ? width : '100%',
            height: fullheight ? "100%" : height ? width : '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
        }
            : variant === "glass" ? {
                width: fullwidth ? "100%" : width ? width : '100%',
                height: fullheight ? "100%" : height ? width : '100%',
                background: `rgba(0,0,0,0.2)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                borderRadius: '1rem'
            } : variant === "table" ? {
                width: fullwidth ? "100%" : width ? width : '100%',
                height: fullheight ? "100%" : height ? width : '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                borderRadius: '1rem'
            } : {
                
                display: 'flex',
                alignItems: 'center',
                border: 'none',
            }
    }


    const BoxModal = () => {
        return variant === "gradinet" ? {
            height: fullheight ? "100%" : height ? height : '9vh',
            background: `linear-gradient(90deg, ${'#D78AFD'} 100%, ${'#9A56FF'} 100%)`,
            display: 'flex',
            alignItems: 'center',
            border: 'none',
        } : {
            height: fullheight ? "100%" : height ? height : '100vh',
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            border: 'none',
        } as React.CSSProperties

    }

    // return variant === "outlined" ? {
    //     width: '8rem',
    //     color:'white',
    //     height: '2.5rem',
    //     border:`1px solid ${theme.palette[color]?.border}`,
    // } : {
    //         fontFamily: 'iranSans',
    //         width: '8rem',
    //         padding: '10px',
    //         fontWeight: "900",
    //         height: '2.5rem',
    // }


    const Box = () => {
        return {
            height: '4rem',
            color: 'black',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        }
    }


    const HeaderTable = () => {
        return {
            height: '4rem',
            color: 'black',
            background: `white `,
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid black',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.2)'
        }
    }


    const CircleBox = () => {
        return {
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            color: 'black',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        }
    }


    return {
        width: fullwidth ? "100%" : width,
        height: fullheight ? '100%' : height,
        borderRadius,
        position,
        variants: variant,
        ...(boxlist && BoxListing()),
        ...(boxgradient && BoxGradient()),
        ...(globalbox && BoxGlobal()),
        ...(box && Box()),
        ...(header && HeaderTable()),
        ...(modal && BoxModal()),
        ...(circle && CircleBox())

    };
});
export default TBoxRoot;
