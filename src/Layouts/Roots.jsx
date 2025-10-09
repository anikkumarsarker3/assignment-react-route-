import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Roots = () => {
    // useEffect(() => {
    //     const DataKiAche = localStorage.getItem();
    //     if (!DataKiAche) {
    //         localStorage.getItem('softList', '[]');
    //     }
    // }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-329px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Roots;