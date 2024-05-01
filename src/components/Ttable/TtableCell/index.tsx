import { forwardRef } from "react";
import { ITTableCell, TTableCellType } from "../../../@types/components/MuI/TCell";
import TTableCellRoot from "./TTableCellRoot";

const TtableCell = forwardRef<HTMLTableCellElement, ITTableCell>((props, ref) => {
    const { children, color, width, size } = props;
    return (
        <TTableCellRoot  {...props} size={size} ownerState={props} ref={ref} >
            {children}
        </TTableCellRoot>
    );
});
export default TtableCell;
TtableCell.displayName = 'TtableCell'