import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import InstallCard from './InstallCard';
import { getSoftware } from '../utility/readlocalstore';
import LoadingPage from './LoadingPage';
import AppError from './AppError';

const Installation = () => {
    const [softData, setSoftData] = useState([]);
    useEffect(() => {
        fetch('/software.json')
            .then(res => res.json())
            .then(data => setSoftData(data));
    }, [])

    const [itemData, setItemData] = useState([])
    const [installApp, setInstallApp] = useState([])

    useEffect(() => {
        const itemData = getSoftware()
        // console.log(itemData)
        setItemData(itemData);

    }, [])

    useEffect(() => {
        if (softData.length !== 0) {
            const similarItems = softData.filter(item1 =>
                itemData.some(item2 => Number(item2) === item1.id)
            );
            setInstallApp(similarItems);
        }
    }, [itemData, softData])



    return (
        <div className='bg-gray-100 py-10 max-w-7xl px-5 mx-auto'>
            <div className='text-center  '>
                <h1 className='text-5xl font-semibold'>Your Installed Apps</h1>
                <p className='text-gray-400 my-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl font-semibold'>{itemData.length} Apps Found</h2>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by Size</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-28 p-2 shadow-sm">
                        <li><a>High-Low</a></li>
                        <li><a>Low-High</a></li>
                    </ul>
                </div>
            </div>
            {
                !installApp.length ? (<AppError></AppError>) : installApp ? (installApp.map(data => <InstallCard data={data}></InstallCard>)) : (<LoadingPage></LoadingPage>)

            }

        </div>
        // <InstallCard></InstallCard>
    );
};

export default Installation;