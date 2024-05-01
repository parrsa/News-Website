import { Button, TableCell, Theme, styled, tableCellClasses, useTheme } from "@mui/material";
import { ITTableCellOptions } from "../../../@types/components/MuI/TCell";
import colors from "../../../assets/theme/base/colors";
const TTableCellRoot = styled(TableCell)<{ ownerState: ITTableCellOptions }>(({ ownerState }) => {
    const { variant, roothead, bgColor, color, root, main } = ownerState;
    const theme = useTheme() as Theme;


    const RootTableCell = () => {
        return (
            {
                '&.MuiTableCell-head': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    fontWeight: 'bold',
                    border: '1px solid #DDDFE1'
                },

                '& .MuiTableCell-body': {
                    fontSize: 14,
                },

                '& .MuiTableFooter-root': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    fontWeight: 'bold',
                    border: '1px solid #DDDFE1'
                }
            }
        )
    }


    const RootTableCells = () => {
        return (
            {
                '&.MuiTableCell-head': {
                    backgroundColor: '#ABAFB3',
                    color: 'white',
                    fontWeight: 'bold',
                    border: '0.5px solid #DDDFE1',
                },

                '& .MuiTableCell-body': {
                    fontSize: 14,
                },

                '& .MuiTableFooter-root': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    fontWeight: 'bold',
                    border: '1px solid #DDDFE1'
                }
            }
        )
    }


    const TableCellMain = () => {
        return (
            {
                '&.MuiTableCell-head': {

                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',

                },

                '& .MuiTableCell-body': {
                    fontSize: 14,
                },
                '& .MuiTableCell-footer': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    fontWeight: 'bold',
                    border: '1px solid black'
                }

            }
        )
    }

    return {
        backgroundColor: bgColor + "!important",
        variants: variant,
        ...(root && RootTableCell()),
        ...(main && TableCellMain()),
        ...(roothead && RootTableCells()),

    };
});
export default TTableCellRoot;



