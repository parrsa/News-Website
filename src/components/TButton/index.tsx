import { forwardRef } from "react";
import { ITButton, TButtonType } from "../../@types/components/MuI/TButton";
import TButtonRoot from "./TButtonRoot";


// const TButton = (options, ref) => (
//     <TButtonRoot ownerState={options} ref={ref} {...options}>
//         {options.children}
//     </TButtonRoot>
// )
// export default forwardRef<ITButton, TButtonType>(TButton);

// const TButton = forwardRef((props: ITButton, ref:any ) => (
//     <TButtonRoot ownerState={props} ref={ref}  {...props}>
//         {props.children}
//     </TButtonRoot>
// ));
// export default TButton;

const TButton = forwardRef<HTMLButtonElement, ITButton>((props, ref) => {
    const { icon, children, color, width, size, iconend } = props;
    return (
        <TButtonRoot variant="gradient"  {...props} size={size} ownerState={props} ref={ref} startIcon={icon} endIcon={iconend}>
            {children}
        </TButtonRoot>  
    );
});
export default TButton;
TButton.displayName='TButton'
