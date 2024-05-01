import { Tab, Tabs, Theme, styled, useTheme } from "@mui/material";
import { ITTabOptions } from "../../@types/components/MuI/Tab";
import colors from "../../assets/theme/base/colors";
const TtabRoot = styled(Tab)<{ ownerState: ITTabOptions }>(({ ownerState }) => {
    const { variant, color, fullwidth, width, fullheight, height, base } = ownerState;
    const theme = useTheme() as Theme;

    function Based() {
        return (
            {
                '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    borderRadius: 2,
                    borderBottom: 'none',
                },
            }
        )
    }

    return {
        width: fullwidth ? "100%" : width,
        height: fullheight ? '100%' : height,
        variants: variant,
        ...(base && Based()),

    };
});
export default TtabRoot;
