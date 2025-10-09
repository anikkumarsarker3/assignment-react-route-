import React from 'react';
import Cards from './Cards';
import { Link } from 'react-router';

const TrendingCard = ({ softwareData }) => {
    // console.log(softwareData)
    return (
        // {!softwareData.length ? () : singleItem ? () : ()}
        <div className='text-center bg-gray-100 py-10'>
            <h1 className='text-5xl font-semibold'>Trending Apps</h1>
            <p className='text-gray-400 my-2'>Explore All Trending Apps on the Market developed by us</p>
            <div className='max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3.5 px-10 mx-auto'>
                {
                    softwareData.slice(0, 8).map(item => <Cards key={item.id} item={item}></Cards>)
                }
            </div>
            <Link to='apps' className='btn bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white'>Show All</Link>
        </div>
    );
};

export default TrendingCard;