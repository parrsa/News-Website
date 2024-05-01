import { ListRoute } from '../../../../@types/components/App/routes.types'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Avatar from '@mui/material/Avatar';
import Logout from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import HelpIcon from '@mui/icons-material/Help';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HistoryIcon from '@mui/icons-material/History';
import Settings from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
const navList: ListRoute[] = [
    {
        text: "Home",
        path: "/dashboard",
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
