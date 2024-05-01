import { ListRoute } from "../@types/components/App/routes.types";
import MainPage from "../pages/MainPages";

const navList: ListRoute[] = [
    {
        text: "Home",
        path: "/",
        name: "home",
        component:<MainPage/>,
        id: 1
    },
    {
        text: "Aboute",
        path: "/Aboute",
        name: "Aboute",
        id: 2
    },
]



export { navList }



