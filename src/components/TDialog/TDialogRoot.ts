import { Button, Dialog, Theme, styled, useTheme } from "@mui/material";
import { ITDialogptions } from "../../@types/components/MuI/TDialog";
import colors from "../../assets/theme/base/colors";
const TDialogRoot = styled(Dialog)<{ ownerState: ITDialogptions }>(({ ownerState }) => {
    const { variant, color } = ownerState;
    const theme = useTheme() as Theme;


    const RootTableCell = () => {
        return (
            {
                '& .MuiDialogContent-root': {
                    color: 'red',
                    padding: 2,
                },
                '& .MuiDialogActions-root': {
                    padding: 2,
                },
            }
        )

    }

    return {
        variants: variant,

    };
});
export default TDialogRoot;
