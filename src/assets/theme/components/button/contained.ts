import colors from "../../base/colors"
import pxToRem from "../../functions/pxToRem";
const { secondary } = colors;

const contained = {
  base: {
    backgroundColor: 'secondary',
    color: 'white',

    "&:hover": {
      backgroundColor: 'secondary',
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(20)} !important`,
    },
  },

  small: {
    // minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    // fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(20)} !important`,

    },
  },

  large: {
    // minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    // fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: ' primary',

    "&:hover": {
      backgroundColor: ' primary',
    },

    "&:focus:not(:hover)": {
      backgroundColor: ' primary',
    },
  },

  secondary: {
    backgroundColor: 'secondary',

    "&:hover": {
      backgroundColor: 'secondary',
    },

    "&:focus:not(:hover)": {
      backgroundColor: 'secondary',
    },
  },

  secondary: {
    backgroundColor: 'secondary',
    color: 'white',
    "&:hover": {
      backgroundColor: 'secondary.dark',
    },

    "&:focus:not(:hover)": {
      backgroundColor: 'secondary',
    },
  },
  gradients: {
    background: 'linear-gradient(60deg, #F48665 0%, #FDA23F 0%)',
    color: 'white',
    "&:hover": {
      backgroundColor: 'secondary.dark',
    },

    "&:focus:not(:hover)": {
      backgroundColor: 'secondary',
    },
  }
};

export default contained;
