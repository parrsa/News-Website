import { forwardRef } from "react";
import {  ITBadge } from "../../@types/components/MuI/TBadge";
import TBadgeRoot from "./TBadgeRoot";

const TBadge = forwardRef<HTMLButtonElement, ITBadge>((props, ref) => {
    const { children} = props;
    return (
    <TBadgeRoot ownerState={props} ref={ref} {...props}>
        {children}
    </TBadgeRoot>
    )
})
export default TBadge;
TBadge.displayName='TBadge'
