import { forwardRef } from "react";
import { TTabsType, ITTabs } from "../../@types/components/MuI/Tabs";
import TtabsRoot from "./TtabsRoot";

const Ttabs = forwardRef<HTMLInputElement, ITTabs>((props, ref) => {
    const { children } = props;
    return (
        <TtabsRoot
            ownerState={props}
            ref={ref}
            {...props}
            // variant={"outlined"}
        />
    )
})
export default Ttabs;
Ttabs.displayName = 'Ttabs'