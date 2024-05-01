import TBoxRoot from "../../../../components/TBox/TBoxRoot";
import { DialogProps } from "@mui/material";
import {SxProps} from "@mui/material";
import * as CSS from "csstype";

export interface ITDialogptions {
    variant?:string;
    fullwidth?:boolean | string;
    fullheight?:boolean | string;
    color?: "white" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | any;
    width?: CSS.Property.Width | number;
    height?: CSS.Property.Height | number;
    sx?: SxProps;
    borderRadius?:string;
    children?: React.ReactNode;
    position?: CSS.Property.Position;
    boxlist?:boolean|string;
    boxgradient?:boolean|string;
    globalbox?:boolean | string
    box?:boolean |string
}

export type ITDialog = DialogProps & ITDialogptions;
export type TDialogType = typeof TBoxRoot;
