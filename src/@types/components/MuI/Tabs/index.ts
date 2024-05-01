import TtabsRoot from "../../../../components/Ttabs/TtabsRoot";
import { TabsProps } from "@mui/material";
import { SxProps } from "@mui/material";
import * as CSS from "csstype";

export interface ITTabsOptions {
    variant?: string;
    fullwidth?: boolean | string;
    fullheight?: boolean | string;
    color?: "white" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | any;
    width?: CSS.Property.Width | number;
    height?: CSS.Property.Height | number;
    sx?: SxProps;
    borderRadius?: string;
    children?: React.ReactNode;
    position?: CSS.Property.Position;
    base?: boolean | string;
}

export type ITTabs = TabsProps & ITTabsOptions;
export type TTabsType = typeof TtabsRoot;
