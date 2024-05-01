import { Badge, Box, Theme, styled, useTheme } from "@mui/material";
import { ITBadgeOptions } from "../../@types/components/MuI/TBadge";

const TBadgeRoot = styled(Badge)<{ ownerState: ITBadgeOptions }>(({ ownerState }) => {
    const { variant, width, fullwidth, fullheight, height, test, color, avatar } = ownerState;
    const theme = useTheme() as Theme;

    const Teesting = () => {
        return {
            '& .MuiBadge-badge': {
                backgroundColor: '#FDA23F',
                color: '#FDA23F',
                '&::after': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    animation: 'ripple 1.2s infinite ease-in-out',
                    border: '1px solid currentColor',
                    content: '""',
                },
            },

            '@keyframes ripple': {
                '0%': {
                    transform: 'scale(.8)',
                    opacity: 1,
                },
                '100%': {
                    transform: 'scale(2.4)',
                    opacity: 0,
                },
            },


        }
    }


    const TestOn = () => {
        return {
            '& .MuiBadge-badge': {
                backgroundColor: '#44b700',
                color: '#44b700',
                '&::after': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    animation: 'ripple 1.2s infinite ease-in-out',
                    border: '1px solid currentColor',
                    content: '""',
                },
            },
            '@keyframes ripple': {
                '0%': {
                    transform: 'scale(.8)',
                    opacity: 1,
                },
                '100%': {
                    transform: 'scale(2.4)',
                    opacity: 0,
                },
            },
        }
    }


    return {
        width: fullwidth ? "100%" : width,
        height: fullheight ? '100%' : height,
        variants: variant,
        ...(test && Teesting()),
        ...(avatar && TestOn())
    };
});
export default TBadgeRoot;
