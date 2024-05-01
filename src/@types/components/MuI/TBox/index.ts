import TBoxRoot from "../../../../components/TBox/TBoxRoot";
import { BoxProps } from "@mui/material";
import {SxProps} from "@mui/material";
import * as CSS from "csstype";

export interface ITBoxOptions {
    variant?:string;
    fullwidth?:boolean | string;
    fullheight?:boolean | string;
    bgcolor?:"white" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | any;
    color?: "white" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | any;
    width?: CSS.Property.Width | number;
    height?: CSS.Property.Height | number;
    sx?: SxProps;
    borderRadius?:string | number;
    children?: React.ReactNode;
    position?: CSS.Property.Position;
    boxlist?:boolean|string;
    boxgradient?:boolean|string;
    globalbox?:boolean | string
    box?:boolean |string
    header?: boolean | string
    modal?: boolean | string
    circle?: boolean | string
}

export type ITBox = BoxProps & ITBoxOptions;
export type TBoxType = typeof TBoxRoot;
