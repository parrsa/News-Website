import { Button, TableCell, TableRow, Theme, styled, useTheme } from "@mui/material";
import { ITTableRowOptions } from "../../../@types/components/MuI/TRow";
import colors from "../../../assets/theme/base/colors";
const TTableRowRoot = styled(TableRow)<{ ownerState: ITTableRowOptions }>(({ ownerState }) => {
    const { variant, bgColor, color, root } = ownerState;
    const theme = useTheme() as Theme;


    const RootTableCell = () => {
        return (
            {
                '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.action.hover,
                },

                '&:last-child td, &:last-child th': {
                    border: 0,
                },
            }
        )

    }

    return {
        backgroundColor: bgColor + "!important",
        variants: variant,
        ...(root && RootTableCell())
    };
});
export default TTableRowRoot;
