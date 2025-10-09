import React from 'react';
import AppErrorIcon from '../assets/App-Error.png'
import { useNavigate } from 'react-router';

const AppError = () => {
    const navigate = useNavigate()
    return (
        <div className='p-5'>
            <img className='mx-auto' src={AppErrorIcon} alt="" />
            <h2 className='text-4xl font-semibold text-center my-5'>Opps,App Not Found</h2>
            <div className='flex justify-center items-center'>

                <button className='btn btn-primary text-white ' onClick={() => navigate(-1)}>Go Back</button>
            </div>

        </div>
    );
};

export default AppError;