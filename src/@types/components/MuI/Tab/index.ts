import TBoxRoot from "../../../../components/TBox/TBoxRoot";
import { TabProps } from "@mui/material";
import {SxProps} from "@mui/material";
import * as CSS from "csstype";

export interface ITTabOptions {
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
    base?:boolean | string;
}

export type ITTab = TabProps & ITTabOptions;
export type TTabType = typeof TBoxRoot;
