import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import InstallCard from './InstallCard';
import { getSoftware, removeSoftware } from '../utility/readlocalstore';
import LoadingPage from './LoadingPage';
import AppError from './AppError';
import DownIcon from '../assets/icon-downloads.png'
import RatIcon from '../assets/icon-ratings.png'
import { ToastContainer, toast } from 'react-toastify';

const Installation = () => {

    const handleSort = (sortOrder) => {
        const sortedApps = [...installApp].sort((a, b) => {
            if (sortOrder === "asc") return a.downloads - b.downloads;
            if (sortOrder === "desc") return b.downloads - a.downloads;
        });
        setInstallApp(sortedApps)
    }
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
                        <li><Link onClick={() => handleSort('desc')}>High-Low</Link></li>
                        <li><Link onClick={() => handleSort('asc')}>Low-High</Link></li>
                    </ul>
                </div>
            </div>
            {
                !installApp.length ? (<AppError></AppError>) : installApp ? (installApp.map(data => <InstallCard key={data.id} itemData={itemData} setItemData={setItemData} installApp={installApp} data={data} setInstallApp={setInstallApp}></InstallCard>)) : (<LoadingPage></LoadingPage>)

            }

        </div>
    );
};

export default Installation;