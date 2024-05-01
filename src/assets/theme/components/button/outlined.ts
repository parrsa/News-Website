import pxToRem from "../../functions/pxToRem";


const outlined = {
    base: {
        minHeight: pxToRem(40),
        padding: `${pxToRem(10)} ${pxToRem(24)}`,
        "&:hover": {
            opacity: 0.75,
        },

        "& .material-icon, .material-icons-round, svg": {
            fontSize: `${pxToRem(16)} !important`,
        },
    },

    primary: {
        color:'white',
        border:'1px solid white',
    
        "&:hover": {
          backgroundColor: ' primary',
        },
    
        "&:focus:not(:hover)": {
          backgroundColor: ' primary',
        },
      },

      secondary: {
        backgroundColor: 'secondary',
        borderColor: 'secondary',

        "&:hover": {
            backgroundColor: 'secondary',
        },
    },

    small: {
        minHeight: pxToRem(32),
        padding: `${pxToRem(6)} ${pxToRem(16)}`,

        "& .material-icon, .material-icons-round, svg": {
            fontSize: `${pxToRem(12)} !important`,
        },
    },

    large: {
        minHeight: pxToRem(47),
        padding: `${pxToRem(12)} ${pxToRem(28)}`,

        "& .material-icon, .material-icons-round, svg": {
            fontSize: `${pxToRem(22)} !important`,
        },
    },


};

export default outlined;
