// import { Box, Grid, Typography } from "@mui/material";
// import colors from "../../../../Assets/theme/base/colors";
// import MInput from "../../../../CustomMui/Minput";
// import SearchImages from '../../../../Assets/images/Search.png'
// import MIconButton from "../../../../CustomMui/MiconButton";
// const LandingPage = () => {
//     return (
//         <Grid container about="landing pages" zIndex={-10} className="p" sx={{ backgroundSize: { xs: 'cover', md: "cover", lg: 'cover' } }} height={{ lg: "100vh", xs: '95vh', md: '100vh' }} justifyContent={"center"} alignItems={"center"} md={12}>
//             <Grid item container position={"absolute"} mt={{ lg: 12 }} lg={12} justifyContent={"center"} alignItems={"start"} gap={5} >
//                 <Grid container item lg={8} alignItems={"center"} flexDirection={"column"}>
//                     <Typography variant="h3" fontSize={{ lg: "65px", xs: '35px', md: "50px" }}>هر حرفه ایی که لازم داری </Typography>
//                     <Typography variant="h1" fontSize={{ lg: "150px", xs: '35px', md: "50px" }}>با کارناس پیدا کن</Typography>
//                 </Grid>
//                 <Grid container item lg={12} md={12} mt={{ lg: '10px' }} height={{ lg: "15vh", md: '15vh', xs: "15vh" }} justifyContent={"center"}>
//                     <Grid item container lg={6} md={6} >
//                         <Grid item container justifyContent={"center"} alignItems={"center"} flexDirection={"column"} lg={12} md={12} >
//                             <Box sx={{ width: '80%', height: '55px', borderRadius: '20rem', backgroundColor: '#2A2A2A', border: `1px solid ${colors.kaarnas.yellow}`, display: 'flex' }} justifyContent={""} alignItems={"center"}>
//                                 <MInput sx={{
//                                     width: '91.5%',
//                                     "& .MuiInputBase-root": {
//                                         color: colors.white.main + "!important"
//                                     },
//                                 }} search id="outlined-basic" label="جست و جو . . ." variant="outlined" />
//                                 <MIconButton suze={"small"} SearchBox  >
//                                     <img src={SearchImages} alt="icons" width={"25px"} height={"25px"} />
//                                 </MIconButton>
//                             </Box>
//                             <Typography variant="subtitle2" mt={{ lg: 2 }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</Typography>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>

//         </Grid>
//     )
// }
// export default LandingPage


import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { images } from "./CarouselData";
import { Box, Grid, Typography, } from "@mui/material";
import "./style.css";
import colors from "../../../assets/theme/base/colors";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MInput from "../../../CustomMui/Minput";
import MIconButton from "../../../CustomMui/MiconButton";
import SearchImages from "../../../assets/images/Search.png";
// import imagessss from '../../../../../assets/images/banner.svg'
import imagessss from '../../../assets/images/04.jpg'
const LandingPage = () => {
    const navigate = useNavigate()
    const [currImg, setCurrImg] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrImg(prev => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(intervalId);
    }, [currImg, images.length]);

    const [value, setValue] = React.useState();
    // const SearchC = zirsenf.filter(product =>
    //     product.title && product.title.toLowerCase().includes((value ?? '').toLocaleLowerCase().slice(0, 12))
    // );

    const HandelSearch = () => {
        navigate(`/Search/${value}`)
    }




    return (
        <>
            <Grid container about="landing pages" zIndex={-10} sx={{ backgroundSize: { xs: 'cover', md: "cover", lg: 'cover' } }} height={{ lg: "80vh", xs: '35vh', sm: '40vh', md: '100vh' }} justifyContent={"center"} alignItems={"start"} md={12}>
                <Grid item container height={{ lg: "70vh", xs: '28vh', sm: '35vh', md: '100vh' }} >
                    <div className="carousel">
                        <div
                            className="carouselInner"
                        >
                            <div className="carouselInner1"
                                // onClick={() => navigate(`/dashboard/${images[currImg].id}`)}
                                style={{
                                    // backgroundImage: `url(${images[currImg].img})`,
                                    cursor: 'pointer',
                                    color: 'white',
                                    backgroundColor: 'gray',
                                    backgroundSize: 'cover', // Make sure the image covers the area without being stretched
                                    backgroundPosition: 'center', // Center the background image
                                    width: '100%', // Ensure the div takes the full width of its parent
                                    height: '100%' // Ensure the div takes the full height of its parent
                                }}
                            >
                                <img alt={'images'} src={imagessss} width={'100%'} height={'100%'} />
                                {/* <Typography
                                    sx={{
                                        color: 'white',
                                        position: 'absolute',
                                        top: '50%', // Position the text vertically in the middle
                                        left: '50%', // Position the text horizontally in the middle
                                        transform: 'translate(-50%, -50%)', // Center the text properly
                                        zIndex: 1, // Ensure text is above the image
                                        textAlign: 'center' // Center text horizontally
                                    }}
                                >
                                    parsaaa
                                </Typography> */}
                            </div>
                            {/* </Link> */}
                            {/*    <img src={images[currImg].img} width={"100%"} height={"100%"} alt="icons" />*/}
                            {/* <img src={images[currImg].img} /> */}
                            <div
                                className="left"
                                onClick={() => {
                                    currImg > 0 && setCurrImg(currImg - 1);
                                }}
                            >
                                <ArrowBackIcon sx={{ color: colors.black.main }} />
                            </div>
                            <div
                                className="right"
                                onClick={() => {
                                    currImg < images.length - 1 && setCurrImg(currImg + 1);
                                }}
                            >
                                <ArrowForwardIcon sx={{ color: colors.black.main }} />
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item position={'relative'} mb="50px" container lg={8} height="10vh" justifyContent={"center"} sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }} alignItems={"start"}>
                    <Grid item container lg={9} xs={12} height={{ lg: '18vh' }} borderRadius={'1rem'} mt={{ lg: -5 }} bgcolor={colors.white.main} boxShadow={'0px 0px 1px 1px #e8e7e7'} >
                        {/* <Grid item container lg={12} bgcolor={colors.red[500]}></Grid>
                        <Grid item container lg={12} bgcolor={colors.green[500]}></Grid> */}
                        <Grid item container lg={12} >
                            <Grid item container justifyContent={"center"} alignItems={"center"} flexDirection={"column"} lg={12} md={12}>
                                <Box sx={{
                                    width: '90%',
                                    height: '55px',
                                    // borderRadius: '20rem',
                                    backgroundColor: 'white.main',
                                    border: 'none',
                                    outline: 'none',
                                    borderBottom: `1px solid ${colors.kaarnas.graybox}`,
                                    color: colors.red[500],
                                    display: 'flex'
                                }} justifyContent={""} alignItems={"center"}>
                                    <MInput
                                        value={value}
                                        onChange={(e: any) => setValue(e.target.value)}
                                        sx={{
                                            width: '95%', outline: 'none',
                                            "& .MuiFormHelperText-root": {
                                                fontFamily: 'Yekan Bakh Medium',
                                                color: colors.red[500] + "!important",
                                            },
                                            "& .MuiInputLabel-root": {
                                                background: colors.white.main + "!important",
                                                color: colors.black.main + "!important"
                                            },
                                            // height: '55px'
                                        }} search id="outlined-basic" label="search" variant="outlined" />
                                    <MIconButton onClick={HandelSearch} style={{ width: '35px', height: '35px' }} SearchBox>
                                        <img src={SearchImages} alt="icons" width={"20px"} height={"20px"} />
                                    </MIconButton>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item container lg={12} justifyContent={'center'} >
                            <Typography variant="subtitle2">
                            Lorem Ipsum is a mock text with an unintelligible simplicity produced by the printing industry
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>


    )
}
export default LandingPage
