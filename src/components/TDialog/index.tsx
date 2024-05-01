import { forwardRef } from "react";
import { ITDialog, TDialogType } from "../../@types/components/MuI/TDialog";
import TDialogRoot from "./TDialogRoot";


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

const TDialog = forwardRef<HTMLDialogElement, ITDialog>((props, ref) => {
    const {  children, color, width,  } = props;
    return (
        <TDialogRoot  {...props}  ownerState={props}  >
            {children}
        </TDialogRoot>  
    );
});
export default TDialog;
TDialog.displayName='TDialog'
