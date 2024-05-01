import TBadgeRoot from "../../../../components/TBadge/TBadgeRoot";
import { BadgeProps } from "@mui/material";
import {SxProps} from "@mui/material";
import * as CSS from "csstype";

export interface ITBadgeOptions {
    variant?:string;
    fullwidth?:boolean;
    fullheight?:boolean;
    color?: "white" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | any;
    width?: CSS.Property.Width | number;
    height?: CSS.Property.Height | number;
    sx?: SxProps;
    borderRadius?:string;
    children?: React.ReactNode;
    position?: CSS.Property.Position;
    test?:boolean|string
    avatar?:boolean |string
}

export type ITBadge = BadgeProps & ITBadgeOptions;
export type TBadgeType = typeof TBadgeRoot;
