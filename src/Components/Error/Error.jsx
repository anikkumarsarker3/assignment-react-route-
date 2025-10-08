import React from 'react';
import ErrorPage from '../../assets/error-404.png'
import { Link, useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center flex-col mt-10'>
            <img className='mx-auto' src={ErrorPage} alt="" />
            <h1 className='my-3 text-2xl font-semibold'>Opps,Page Not Found</h1>
            <p className='text-gray-500 mb-3'>The page you are looking for is not available.</p>
            <Link onClick={() => navigate(-1)}>
                <button className='btn btn-primary'>Go Back</button>
            </Link>
        </div>
    );
};

export default Error;