import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Dowlmg from '../assets/icon-downloads.png'
import RatingIcon from '../assets/icon-ratings.png'
import RivewIcon from '../assets/icon-review.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import AppError from './AppError';
import { ToastContainer, toast } from 'react-toastify';
import LoadingPage from './LoadingPage';
import { addSoftware } from '../utility/readlocalstore';


const CardDetails = () => {
    const { id } = useParams();

    const handleInstallButton = () => {
        setFixed(true);
        toast('Installed app');
        addSoftware(id)
    }

    useEffect(() => {
        const array = JSON.parse(localStorage.getItem('softList'));
        if (array.includes(String(id)) || array.includes(Number(id))) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }, [id]);



    const [fixed, setFixed] = useState(false);
    const [softwareData, setSoftwareData] = useState([]);
    useEffect(() => {
        fetch('/software.json')
            .then(res => res.json())
            .then(data => setSoftwareData(data))
    }, [])

    const singleItem = softwareData.find(item => item.id === Number(id));

    return (
        <>
            <div>
                {!softwareData.length ? (<div>
                    <AppError></AppError>
                </div>
                ) : singleItem ? (
                    <div className='bg-base-200 max-w-7xl mx-auto p-4'>
                        <div className='flex flex-col md:flex-row gap-7'>
                            <figure>
                                <img className='w-full h-64' src={singleItem.image} alt="" />
                            </figure>

                            <div className='flex-1'>
                                <div className='border-b border-gray-400 pb-7'>
                                    <h1 className='text-lg font-semibold'>{singleItem.title}</h1>
                                    <p>Develop by <span className='text-[#632EE3] font-semibold'>{singleItem.companyName}</span></p>

                                </div>
                                <div className='flex justify-baseline items-center gap-7 mt-3'>
                                    <div>
                                        <img src={Dowlmg} alt="" />
                                        <p>Downloads</p>
                                        <h1 className='text-lg font-bold'>{singleItem.downloads}</h1>
                                    </div>
                                    <div>
                                        <img src={RatingIcon} alt="" />
                                        <p>Average Ratings</p>
                                        <h1 className='text-lg font-bold'>{singleItem.ratingAvg}</h1>
                                    </div>
                                    <div>
                                        <img src={RivewIcon} alt="" />
                                        <p>Total Reviews</p>
                                        <h1 className='text-lg font-bold'>{singleItem.reviews}</h1>
                                    </div>
                                </div>
                                <button onClick={() => handleInstallButton()} disabled={fixed} className="btn btn-success mt-4">{fixed ? 'Installed' : `Install Now (${singleItem.size} MB)`}</button>
                            </div>
                        </div>
                        <div className='py-10'>
                            <ResponsiveContainer width='100%' height={300}>

                                <BarChart layout="vertical" data={[...singleItem.ratings].reverse()}>
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <XAxis type="number" dataKey="count" stroke="#8884d8" />
                                    <YAxis type="category" dataKey="name" stroke="#8884d8" />
                                    <Tooltip />
                                    <Bar dataKey="count" fill="#FF8811" barSize={30} />
                                </BarChart>
                            </ResponsiveContainer>


                        </div>
                        <div className='py-10'>
                            <h2 className='text-lg font-semibold'>Description:</h2>
                            <p>{singleItem.description}</p>
                        </div>


                    </div>
                ) : (
                    <AppError></AppError>
                )}
            </div >

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
        </>

    );
};

export default CardDetails;