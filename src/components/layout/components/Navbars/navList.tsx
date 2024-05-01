import { ListRoute } from '../../../../@types/components/App/routes.types'
const navList: ListRoute[] = [
    {
        text: "Home",
        path: "/",
        name: "home",
        id: 1
    },
    {
        text: "Page",
        path: "/Page",
        name: "users",
        id: 2
    },
    {
        text: "Lifestyle",
        path: "/Lifestyle",
        name: "users",
        id: 2
    },
    {
        text: "Foods",
        path: "/Foods",
        name: "users",
        id: 2
    },
    {
        text: "Business",
        path: "/Business",
        name: "users",
        id: 2
    },
    {
        text: "Travel",
        path: "/Travel",
        name: "users",
        id: 2
    },
    {
        text: "Blog",
        path: "/Blog",
        name: "users",
        id: 2
    },
]

const ProfileList: ListRoute[] = [
    {
        text: "داشبورد",
        path: "/dashboard",
        name: "home",
        id: 1
    },
    {
        text: "لیست ورود و خروج",
        path: "/users",
        name: "users",
        id: 2
    },

];
export { navList, ProfileList }
