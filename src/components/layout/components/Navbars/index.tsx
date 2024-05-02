import * as React from 'react';
import { Box, Toolbar, IconButton, MenuItem, Grid, Drawer, List, Modal, ListItemButton, Menu, } from '@mui/material';
import colors from '../../../../assets/theme/base/colors';
import { ListRoute } from '../../../../@types/components/App/routes.types'
import { MenuList } from '@mui/material';
import { navList, ProfileList } from "./navList";
import { styled } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useState } from "react";
import Logo from '../../../../assets/images/download.png'
import MIconButton from '../../../../CustomMui/MiconButton';
import SortIcon from '@mui/icons-material/Sort';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MInput from "../../../../CustomMui/Minput";
import LanguageIcon from '@mui/icons-material/Language';
import Fade from '@mui/material/Fade';

const urlSplit = (path: string): string => {
    const splitUrl = path.split("/");
    const newText = splitUrl[1];
    return newText;
};

const drawerWidth = 200;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { lg: 600, xs: 250, sm: 350, md: 500 },
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 1,
    pt: 2,
    px: 4,
    pb: 3,
};

function Navbars() {
    const Cook = React.useState(true)
    const navigate = useNavigate()
    const { pathname } = useLocation();
    const [anchorElCityList, setAnchorElCityList] = React.useState<null | HTMLElement>(null);
    const [openModalCityList, setopenModalCityList] = React.useState(false)
    const opensCityList = Boolean(anchorElCityList);
    const { t, i18n } = useTranslation();
    const handleClickModalCityList = (item: any) => {

        setopenModalCityList(!openModalCityList)
    };

    const handleCloseCityList = () => {
        setopenModalCityList(false)
    }

    const handleClickCityList = (event: React.MouseEvent<HTMLElement>) => {

        setAnchorElCityList(event.currentTarget);
    };

    const handleClosesCityList = () => {
        setAnchorElCityList(null);
    };
    const LogoutUser = () => {
        // navigate('/UserExists')
    }

    const [isOpen, setIsOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        window.addEventListener('click', () => { setIsOpen(!isOpen) })
    };

    const handleDrawerClose = () => {
        setIsOpen(!isOpen);
    };

    if (isOpen) {
        window.addEventListener('click', handleDrawerClose)
    }

    const [open, setopen] = useState(false)
    const handleClicks = (event: React.MouseEvent<HTMLElement>) => {
        setopen(!open);
    };




    const [inputValue, setInputValue] = React.useState('');

    const handleKeyPress = (event: any) => {
        if (inputValue.length > 0) {
            if (event.key === 'Enter') {
                navigate(`/Search/${inputValue}`)
            }
        } else {
            navigate('/')
        }

    };

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
        if (event.target.value.length > 1) {
            navigate(`/Search/${event.target.value}`)
        } else {
            navigate('/')
        }
    };


    const [anchorElCountry, setAnchorElCountry] = React.useState<null | HTMLElement>(null);
    const openShowCountry = Boolean(anchorElCountry)
    const ShowCountry = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElCountry(event.currentTarget);
    }
    const handleChangeLng = () => {
        const CurrentLng = i18n.language;
        const lng = CurrentLng === 'en' ? 'gr' : 'en';
        i18n.changeLanguage(lng);
        setAnchorElCountry(null);
    }
    const closeShowCountry = () => {
        setAnchorElCountry(null);
    }
    return (
        <AppBar sx={{ bgcolor: '#ffffff00', boxShadow: 2, position: 'static' }}>
            <Toolbar>
                <Grid p={2} item container lg={12} md={12} justifyContent={"space-evenly"}>
                    <Grid item container lg={1} md={3} sx={{ display: { xs: 'none', md: 'flex' }, opacity: "100%" }}>
                        <Grid item container lg={7} justifyContent={"start"} alignItems={'center'}>
                            <Link to='/'>
                                <img src={Logo} alt='logo' about='logo for website' />
                                {/* <span>{t('pages.MainPage.s')}</span> */}
                            </Link>
                        </Grid>
                    </Grid>


                    {/* <button onClick={handleChangeLng}>{i18n.language}</button> */}

                    {/*Responsive*/}
                    <Grid item container justifyContent={'space-between'} sx={{ display: { lg: 'none', md: 'none' } }} alignItems={'center'}>

                        <Grid item container xs={1} sm={1} justifyContent={'end'}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleDrawerOpen}
                                color="inherit"
                            >
                                {/* <MenuIcon /> */}
                            </IconButton>
                            <Drawer
                                sx={{
                                    backgroundColor: '#1E1E1E',
                                    width: drawerWidth,
                                    flexShrink: 0,
                                    '& .MuiDrawer-paper': {
                                        backgroundColor: '#1E1E1E',
                                        width: drawerWidth,
                                        boxSizing: 'border-box',
                                    },
                                }}
                                variant="persistent"
                                anchor="left"
                                open={isOpen}
                            >

                                <List>
                                    <React.Fragment>
                                        {navList.map((item: ListRoute, index) => (
                                            <React.Fragment key={index}>
                                                <MenuList onClick={() => {
                                                    navigate(item.path)
                                                    setIsOpen(false)
                                                }}>
                                                    <MenuItem sx={{
                                                        cursor: "pointer",
                                                        fontFamily: 'Yekan Bakh Medium',
                                                        color: `${urlSplit(pathname) === urlSplit(item.path) ? colors.kaarnas.yellow : 'white.main'}`
                                                    }}>
                                                        {item.text}
                                                    </MenuItem>
                                                </MenuList>
                                            </React.Fragment>
                                        ))}
                                    </React.Fragment>

                                    {Cook && (
                                        <>
                                            <MenuItem onClick={handleClicks} sx={{
                                                cursor: "pointer",
                                                fontFamily: 'Yekan Bakh Medium',
                                                color: open ? 'kaarnas.yellow' : 'white.main'
                                            }}>
                                                تنظیمات
                                                <IconButton onClick={handleDrawerClose}>
                                                    {/*<ChevronLeftIcon />*/}
                                                    {/* {open ? <KeyboardArrowDownIcon sx={{ color: 'kaarnas.yellow' }} /> :
                                                        <ChevronLeftIcon sx={{ color: 'kaarnas.yellow' }} />} */}
                                                    {/*<ChevronLeftIcon/>*/}
                                                </IconButton>
                                            </MenuItem>
                                        </>
                                    )}


                                    <React.Fragment>
                                        {ProfileList.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <MenuItem
                                                    sx={{
                                                        display: open ? 'block' : 'none',
                                                        p: 2,
                                                        fontFamily: 'Yekan Bakh Medium',
                                                        color: `${urlSplit(pathname) === urlSplit(item.path) ? colors.kaarnas.yellow : 'white.main'}`
                                                    }}
                                                    onClick={() => {
                                                        navigate(item.path)
                                                        setIsOpen(false)
                                                    }}
                                                >
                                                    {item.text}
                                                </MenuItem>
                                            </React.Fragment>
                                        ))}
                                    </React.Fragment>
                                    {Cook && (
                                        <React.Fragment>
                                            <MenuItem sx={{ fontFamily: 'Yekan Bakh Medium', color: 'white.main' }} onClick={LogoutUser}>
                                                خروج
                                            </MenuItem>
                                        </React.Fragment>
                                    )}

                                </List>
                            </Drawer>

                        </Grid>
                        <Grid item container xs={10} sm={10} justifyContent={'center'} >
                            <MInput
                                value={inputValue}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                                sx={{
                                    width: '95%', outline: 'none',
                                    backgroundColor: 'white.main',
                                    borderRadius: 2,
                                    height: '3rem',
                                    "& .MuiFormHelperText-root": {
                                        fontFamily: 'Yekan Bakh Medium',
                                        color: colors.red[500] + "!important",
                                    },
                                    "& .MuiInputLabel-root": {
                                        background: colors.white.main + "!important",
                                        color: colors.black.main + "!important"
                                    },
                                    // height: '55px'
                                }} search={'true'} id="outlined-basic" label="جست و جو . . ." variant="outlined" />

                        </Grid>
                        <Grid item container xs={1} justifyContent={'start'}>
                            {!Cook &&
                                <IconButton sx={{ borderRadius: 0 }} aria-label="fingerprint" color="secondary">
                                    <Link to={'/UserExists'}>
                                        <Avatar sx={{ width: 40, height: 32, backgroundColor: 'kaarnas.main', borderRadius: 1, border: '1px solid black' }}>
                                            {/* <LoginIcon /> */}
                                        </Avatar>
                                    </Link>
                                </IconButton>
                            }
                            {Cook && (
                                <React.Fragment>
                                    <Tooltip sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }} title="Account">
                                        <MIconButton onClick={handleClickCityList} sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }} >
                                            <Avatar sx={{ width: 32, height: 32 }}>
                                                {/* <AddLocationAltIcon /> */}
                                            </Avatar>
                                        </MIconButton>
                                    </Tooltip>
                                    <Modal
                                        open={opensCityList}
                                        onClose={handleClosesCityList}
                                        aria-labelledby="parent-modal-title"
                                        aria-describedby="parent-modal-description"
                                    >
                                        <React.Fragment>
                                            <Box sx={{ ...style, }}>
                                                <React.Fragment>
                                                    <Grid item container lg={12} minHeight={'40vh'} maxHeight={'40vh'}
                                                        overflow={'auto'} justifyContent={'end'}>

                                                        <ListItemButton sx={{ display: 'flex', flexDirection: 'column' }} onClick={handleClickModalCityList}>
                                                            {/*<ListItemIcon>*/}
                                                            {/*    <InboxIcon />*/}
                                                            {/*</ListItemIcon>*/}
                                                            {/*<ListItemText primary="Inbox" />*/}
                                                        </ListItemButton>
                                                    </Grid>

                                                    {/*</ListItemButton>*/}
                                                    <Modal
                                                        open={openModalCityList}
                                                        onClose={handleCloseCityList}
                                                        aria-labelledby="child-modal-title"
                                                        aria-describedby="child-modal-description"
                                                    >
                                                        <Box sx={{ ...style, width: 200 }}>
                                                            <React.Fragment>

                                                            </React.Fragment>
                                                        </Box>
                                                    </Modal>
                                                </React.Fragment>
                                            </Box>
                                        </React.Fragment>

                                    </Modal>
                                </React.Fragment>
                            )}


                        </Grid>





                    </Grid>
                    {/*EndResponsive*/}

                    <Grid item container lg={8} md={5} justifyContent={"center"}>
                        <Grid item container lg={12} md={12} alignItems={"center"} justifyContent={'space-evenly'} >
                            <React.Fragment>
                                {navList.map((item: ListRoute, index: any) => (
                                    <React.Fragment key={index}>
                                        <MenuList onClick={() => navigate(item.path)}>
                                            <MenuItem
                                                sx={{
                                                    fontSize: 16,
                                                    cursor: "pointer",
                                                    color: `${urlSplit(pathname) === urlSplit(item.path) ? colors.kaarnas.yellow : colors.black.main}`
                                                }}
                                            >
                                                {item.text}
                                            </MenuItem>
                                        </MenuList>
                                    </React.Fragment>
                                ))}
                            </React.Fragment>

                        </Grid>
                    </Grid>

                    < Grid sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }} item container lg={1} md={3}
                        justifyContent={'space-evenly'} alignItems={'center'}>

                        <MIconButton onClick={ShowCountry} location={'true'} sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }} >
                            <LanguageIcon />
                        </MIconButton>
                        <Menu
                            id="fade-menu"
                            sx={{ marginTop: 2 }}
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorElCountry}
                            open={openShowCountry}
                            onClose={closeShowCountry}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleChangeLng}>De</MenuItem>
                            <MenuItem onClick={handleChangeLng}>En</MenuItem>
                        </Menu>

                        <MIconButton location={'true'} sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }} >
                            <TravelExploreIcon />
                        </MIconButton>

                        <MIconButton onClick={handleDrawerOpen} location={'true'} sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }} >
                            <SortIcon />
                        </MIconButton>
                    </Grid>


                </Grid>
            </Toolbar>
            <Drawer
                sx={{
                    backgroundColor: '#1E1E1E',
                    width: 350,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#1E1E1E',
                        width: 350,
                        boxSizing: 'border-box',
                    },
                }}
                variant="temporary"
                anchor="left"
            >

                <List>
                    <React.Fragment>
                        {navList.map((item: ListRoute, index) => (
                            <React.Fragment key={index}>
                                <MenuList onClick={() => {
                                    navigate(item.path)
                                    setIsOpen(false)
                                }}>
                                    <MenuItem sx={{
                                        cursor: "pointer",
                                        fontFamily: 'Yekan Bakh Medium',
                                        color: `${urlSplit(pathname) === urlSplit(item.path) ? colors.kaarnas.yellow : 'white.main'}`
                                    }}>
                                        {item.text}
                                    </MenuItem>
                                </MenuList>
                            </React.Fragment>
                        ))}
                    </React.Fragment>

                    {Cook && (
                        <>
                            <MenuItem onClick={handleClicks} sx={{
                                cursor: "pointer",
                                fontFamily: 'Yekan Bakh Medium',
                                color: open ? 'kaarnas.yellow' : 'white.main'
                            }}>
                                تنظیمات
                                <IconButton onClick={handleDrawerClose}>
                                    {/*<ChevronLeftIcon />*/}
                                    {/* {open ? <KeyboardArrowDownIcon sx={{ color: 'kaarnas.yellow' }} /> :
                                                        <ChevronLeftIcon sx={{ color: 'kaarnas.yellow' }} />} */}
                                    {/*<ChevronLeftIcon/>*/}
                                </IconButton>
                            </MenuItem>
                        </>
                    )}


                    <React.Fragment>
                        {ProfileList.map((item, index) => (
                            <React.Fragment key={index}>
                                <MenuItem
                                    sx={{
                                        display: open ? 'block' : 'none',
                                        p: 2,
                                        fontFamily: 'Yekan Bakh Medium',
                                        color: `${urlSplit(pathname) === urlSplit(item.path) ? colors.kaarnas.yellow : 'white.main'}`
                                    }}
                                    onClick={() => {
                                        navigate(item.path)
                                        setIsOpen(false)
                                    }}
                                >
                                    {item.text}
                                </MenuItem>
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                    {Cook && (
                        <React.Fragment>
                            <MenuItem sx={{ fontFamily: 'Yekan Bakh Medium', color: 'white.main' }} onClick={LogoutUser}>
                                خروج
                            </MenuItem>
                        </React.Fragment>
                    )}

                </List>
            </Drawer>
        </AppBar>

    )
}

export default Navbars
