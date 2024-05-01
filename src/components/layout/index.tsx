import { LayoutsInterface } from '../../@types/components/App/components.type'
import { Grid } from "@mui/material";

const Layout: React.FC<LayoutsInterface> = ({ children }: LayoutsInterface) => {
    return (
        <>
            <Grid>
                <>
                    {children}
                </>
            </Grid>
        </>
    )
}
export default Layout
