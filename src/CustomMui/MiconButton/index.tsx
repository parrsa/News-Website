import React, { forwardRef } from "react";
import MButtonRoot from "./MiconButtonRoot";
import PropTypes from "prop-types";
import { SxProps } from "@mui/material";

interface MButtonProps {
    common?: boolean;
    width?: string;
    color?: "white" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
    variant?: "text" | "contained" | "outlined" | "gradient";
    size?: "small" | "medium" | "large";
    circular?: boolean;
    iconOnly?: boolean;
    border?: string;
    borderRadius?: string;
    positon?: string;
    bgColor?: any;
    login?: boolean;
    submit?: boolean;
    darkMode?: boolean;
    fullWidth?: boolean;
    sx?: SxProps
    children: React.ReactNode;
}

const MIconButton = forwardRef<HTMLButtonElement, any>(
    (
        {
            width,
            color,
            variant,
            size,
            circular,
            iconOnly,
            border,
            borderRadius,
            bgColor,
            login,
            submit,
            common,
            darkMode,
            children,
            fullWidth,
            sx,
            ...rest
        },
        ref
    ) => (
        <MButtonRoot
            {...rest}
            ref={ref}
            color="primary"
            variant={variant === "gradient" ? "contained" : variant}
            size={size}
            ownerState={{
                common,
                width,
                color,
                submit,
                variant,
                size,
                circular,
                iconOnly,
                border,
                bgColor,
                borderRadius,
                login,
                darkMode,
                fullWidth,
                sx,
                ...rest,
            }}
        >
            {children}
        </MButtonRoot>
    )
);



export default MIconButton;
