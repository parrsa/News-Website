import { Tabs, Theme, styled, useTheme } from "@mui/material";
import { ITTabsOptions } from "../../@types/components/MuI/Tabs";
import colors from "../../assets/theme/base/colors";
const TtabsRoot = styled(Tabs)<{ ownerState: ITTabsOptions }>(({ ownerState }) => {
    const { variant, color, fullwidth, width, fullheight, height, base } = ownerState;
    const theme = useTheme() as Theme;

    function Based() {
        return (
            {
                backgroundColor: "#E6E6E6",
                color: 'black',
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
export default TtabsRoot;
