import { forwardRef } from "react";
import { ITTableRow, TTableRowType } from "../../../@types/components/MuI/TRow";
import TTableRowRoot from "./TTableRowRoot";

const TtableRow = forwardRef<HTMLTableRowElement, ITTableRow>((props, ref) => {
    const { children, color, width, size } = props;
    return (
        <TTableRowRoot  {...props}  ownerState={props} ref={ref} >
            {children}
        </TTableRowRoot>
    );
});
export default TtableRow;
TtableRow.displayName = 'TtableRow'