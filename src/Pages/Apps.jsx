import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Cards from './Cards';
import AppError from './AppError';
import LoadingPage from './LoadingPage';

const Apps = () => {

    const Data = useLoaderData();
    const [softwareData, setSoftwareData] = useState([]);
    useEffect(() => {
        setSoftwareData(Data);
    }, [Data])
    // console.log(softwareData)
    const handleChange = (e) => {
        console.log(e.target.value)
        const filtered = Data.filter(data => data.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setSoftwareData(filtered)
    }
    return (
        <>
            {
                <div className='bg-gray-100'>
                    <div className='text-center py-10 max-w-7xl mx-auto'>
                        <h1 className='text-5xl font-semibold'>Our All Applications</h1>
                        <p className='text-gray-400 my-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
                        <div className='flex justify-between items-center px-5 my-2'>
                            <h2 className='text-2xl font-semibold'>({softwareData.length})Apps Found</h2>
                            <div>
                                <input onChange={handleChange} className='p-1 border border-gray-300 focus:outline-none' type="text" placeholder='Search Apps' />
                            </div>
                        </div>
                        <div className='max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3.5 px-10 mx-auto'>
                            {

                                softwareData.length ?
                                    softwareData.map(item => <Cards key={item.id} item={item}></Cards>)
                                    : <div className='col-span-4'><AppError></AppError></div>
                            }

                        </div>
                    </div>
                </div>
            }
        </>

    );
};

export default Apps;