import TTableRowRoot from "../../../../components/Ttable/TtableRow/TTableRowRoot";
import { TableRowProps, SxProps } from "@mui/material";

export interface ITTableRowOptions {
    width?: string;
    color?: "white" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | any;
    variant?: "text" | "contained" | "outlined" | "gradient";
    size?: "small" | "medium" | "large";
    children?: React.ReactNode;
    sx?: SxProps
    bgColor?: string
    root?:boolean | string
}

export type ITTableRow = TableRowProps & ITTableRowOptions;
export type TTableRowType = typeof TTableRowRoot;