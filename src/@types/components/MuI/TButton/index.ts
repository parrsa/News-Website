import TButtonRoot from "../../../../components/TButton/TButtonRoot";
import { ButtonProps , SxProps } from "@mui/material";
import * as CSS from "csstype";

export interface ITButtonOptions {
    fullwidth?:boolean | string;
    fullheight?:boolean | string;
    width?: CSS.Property.Width | number;
    height?: CSS.Property.Height | number;
    color?: "white" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | any;
    variant?: "text" | "contained" | "outlined" | "gradient";
    size?: "small" | "medium" | "large";
    children?: React.ReactNode;
    sx?: SxProps
    bgcolor?: string
    addclient?:boolean | string
    ReportBtn?:boolean
    icon?:any
    iconend?:any
    gradientbtn?:boolean | string
    submit?:boolean | string
    btnimg?:boolean | string
    error?: boolean | string
    success?: boolean | string
    warning?: boolean | string
}

export type ITButton = ButtonProps & ITButtonOptions;
export type TButtonType = typeof TButtonRoot;