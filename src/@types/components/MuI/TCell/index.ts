import TTableCellRoot from "../../../../components/Ttable/TtableCell/TTableCellRoot";
import { TableCellProps, SxProps } from "@mui/material";

export interface ITTableCellOptions {
    width?: string;
    color?: "white" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | any;
    variant?: "text" | "contained" | "outlined" | "gradient" | any;
    size?: "small" | "medium" | "large";
    children?: React.ReactNode;
    sx?: SxProps
    bgColor?: string
    root?: boolean | string
    roothead?: boolean | string
    main?: boolean | string
}

export type ITTableCell = TableCellProps & ITTableCellOptions;
export type TTableCellType = typeof TTableCellRoot;