import TInputRoot from "../../../../components/TInput/TInputRoot";
import { TextFieldProps, SxProps } from "@mui/material";
import * as CSS from "csstype";

export interface ITInputOptions {
    fullwidth?: boolean | string;
    fullheight?: boolean | string;
    width?: CSS.Property.Width | number;
    height?: CSS.Property.Height | number;
    color?: "white" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | any;
    variant?: "text" | "contained" | "outlined" | "gradient" | any | 'baskool' ;
    size?: "small" | "medium" | "large";
    children?: React.ReactNode;
    sx?: SxProps
    bgColor?: string
    logins?: boolean | string;
    search?:boolean | string
    error?: boolean | string
    success?: boolean | string
    warning?: boolean | string
    textarea?: boolean | string
}

export type ITInput = TextFieldProps & ITInputOptions;
export type TInputType = typeof TInputRoot;