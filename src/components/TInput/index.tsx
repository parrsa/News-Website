import { forwardRef } from "react";
import { TInputType, ITInput } from "../../@types/components/MuI/TInput";
import TInputRoot from "./TInputRoot";

const TInput = forwardRef<HTMLInputElement, ITInput>((props, ref) => {
    const { children } = props;
    return (
        <TInputRoot
            ownerState={props}
            ref={ref}
            {...props}
            variant={"outlined"}
        />
    )
})
export default TInput;
TInput.displayName = 'TInput'