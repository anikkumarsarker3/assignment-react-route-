import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import TrendingCard from './TrendingCard';

const Home = () => {
    const softwareData = useLoaderData();
    // console.log(softwareData)
    return (
        <div>
            <Banner></Banner>
            <TrendingCard softwareData={softwareData}></TrendingCard>
        </div>
    );
};

export default Home;