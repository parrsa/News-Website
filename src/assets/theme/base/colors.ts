import { PaletteOptions } from "@mui/material/styles";


/* This TypeScript code snippet is defining a color palette named `colors` using the `PaletteOptions`
interface from the Material-UI library (`@mui/material/styles`). The color palette includes various
color options for different themes and components such as primary, dark, white, transparent, gray,
gradients, secondary, third, info, success, warning, and error. */


let colors: PaletteOptions = {
  primary: {
    main: "#9A56FF",
    light: "light",
    dark: "black",
    lite: '#D78AFD',
    gradiant1: "#F48665",
    gradiant2: '#FDA23F',
    border: '#D7D7D7'
  },
  dark: {
    main: '#333333',
    light: '#666666',
  },

  white: {
    main: "#ffff",
    focus: "#e2d8d8",
  },


  transparent: {
    main: "#ffffff00",
    light: "light",
    dark: "dark",
    lite: '#D78AFD',
    gradiant1: "#F48665",
    gradiant2: '#FDA23F',
    border: '#D7D7D7'
  },
  gray: {
    main: "#E6E6E6",
    light: "#959595",
    dark: "#E8E8E8",
    border: '#ABAFB3',
    gradiant1: '#FAFAFA'
  },
  gradients: {
    main: "#F48665",
    light: "light",
    dark: "#008A85",
    gradiant1: "#E36CD9",
    gradiant2: '#FE60AE'
  },
  secondary: {
    main: "#F48665",
    light: "light",
    dark: "#F664BC",
    lite: '#FDA23F',
    gradiant1: "#753CCB",
    gradiant2: '#86559E',
  },
  third: {
    main: "#23BDB8",
    light: "light",
    dark: "#008A85",
    gradiant1: "#23BDB8",
    gradiant2: '#43E794'
  },

  info: {
    main: "#1875F0",
    light: "light",
    dark: "#008A85",
  },

  success: {
    main: "#4CAF50",
    light: "light",
    dark: "#008A85",
  },

  warning: {
    main: "#DFA700",
    light: "light",
    dark: "#008A85",
  },

  error: {
    main: "#FF2A22",
    light: "light",
    dark: "#008A85",
  },


};

export default colors;
