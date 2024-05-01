import { forwardRef } from "react";
import { TBoxType, ITBox } from "../../@types/components/MuI/TBox";
import TBoxRoot from "./TBoxRoot";

const TBox = forwardRef<HTMLDivElement, ITBox>((props, ref) => {
    const { children} = props;
    return (
    <TBoxRoot ownerState={props} ref={ref} {...props}>
        {children}
    </TBoxRoot>
    )
})
export default TBox;
TBox.displayName='TBox'
