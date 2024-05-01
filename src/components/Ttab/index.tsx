import { forwardRef } from "react";
import { TTabType, ITTab } from "../../@types/components/MuI/Tab";
import TtabRoot from "./TtabRoot";

const Ttab = forwardRef<HTMLInputElement, ITTab>((props, ref) => {
    const { children } = props;
    return (
        <TtabRoot
            ownerState={props}
            ref={ref}
            {...props}
        // variant={"outlined"}
        />
    )
})
export default Ttab;
Ttab.displayName = 'Ttab'