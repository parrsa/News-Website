import { LayoutsInterface } from '../../@types/components/App/components.type'
import { Grid } from "@mui/material";
import Navbars from './components/Navbars';

const Layout: React.FC<LayoutsInterface> = ({ children }: LayoutsInterface) => {
    return (
        <>
            <Grid>
                <>
                    <Navbars />
                    {children}
                </>
            </Grid>
        </>
    )
}
export default Layout
