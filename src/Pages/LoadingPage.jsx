import React from 'react';
import { SyncLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <SyncLoader></SyncLoader>
        </div>
    );
};

export default LoadingPage;