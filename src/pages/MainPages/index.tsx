import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from "@mui/material"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Example from "./Components";
import LandingPage from "./Components";
import imagessss from '../../assets/images/04.jpg'
import TBox from "../../components/TBox";
import React from "react";
import Carousel from "react-material-ui-carousel";

const data = [
    {
        src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        channel: 'Don Diablo',
        views: '396k views',
        createdAt: 'a week ago',
    },
    {
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Queen - Greatest Hits',
        channel: 'Queen Official',
        views: '40M views',
        createdAt: '3 years ago',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130M views',
        createdAt: '10 months ago',
    },
];

interface MediaProps {
    loading?: boolean;
}

function Item({ item }: { item: { description: string } }) {
    return (
        <div style={{ width: "100%", height: "100%", color: 'black.main' }}>{item.description}</div>
    );
}

const MainPage = () => {
    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    var items = [
        {
            name: "Random Name #1",
            description: "1 - Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "2- Hello World!"
        },
        {
            name: "Random Name #3",
            description: "3 - Hello World!"
        }
    ];

    const [index, setIndex] = React.useState(0);

    const handleChange = (newIndex: any, prev: any) => {
        setIndex(newIndex);
        console.log(newIndex, prev);
    };

    return (
        <>
                  <LandingPage/>
        </>
    )
}
export default MainPage