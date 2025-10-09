import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import DownIcon from '../assets/icon-downloads.png'
import RatIcon from '../assets/icon-ratings.png'
import { removeSoftware } from '../utility/readlocalstore';


const InstallCard = ({ data, setItemData, setInstallApp }) => {
    const [dataValue, setDataValue] = useState([]);
    useEffect(() => {
        setDataValue(data);
    }, [data])
    const removeLocalStorage = (id) => {
        toast('Uninstall, Remove from local Storge')
        removeSoftware(id);
        setInstallApp((prev) => prev.filter((app) => app.id !== id));
        setItemData((prev) => prev.filter((storedId) => Number(storedId) !== Number(id)));
    }

    return (
        <div>
            <div className='flex items-center justify-between my-3 bg-base-100 p-2'>
                <div className='flex items-center gap-3.5'>
                    <img className='w-20' src={dataValue.image} alt="Niks" />
                    <div>
                        <h3 className='text-lg font-semibold'>{dataValue.title}</h3>
                        <div className='flex items-center gap-2.5'>
                            <p className='flex justify-center items-center gap-1'>
                                <img className='w-4' src={DownIcon} alt="" />
                                <span className='text-green-700'>{dataValue.
                                    downloads}</span>
                            </p>
                            <p className='flex justify-center items-center gap-1'>
                                <img className='w-4' src={RatIcon} alt="" />
                                <span className='text-orange-500'>{dataValue.ratingAvg}</span>
                            </p>
                            <p className='text-gray-500'>{dataValue.size} MB</p>
                        </div>
                    </div>
                </div>
                <Link onClick={() => removeLocalStorage(dataValue.id)} className='btn btn-success text-white'>Uninstall</Link>
            </div>

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
        </div>
    );
};

export default InstallCard;