import React from 'react';
import AppErrorIcon from '../assets/App-Error.png'

const AppError = () => {
    return (
        <div className='p-5'>
            <img className='mx-auto' src={AppErrorIcon} alt="" />
            <h2 className='text-4xl font-semibold text-center my-5'>Opps,App Not Found</h2>

        </div>
    );
};

export default AppError;