import React from 'react';
import Gplay from '../assets/GPlay.png'
import AppIcon from '../assets/AppIcon.png'
import HeroImg from '../assets/hero.png'

import { Link } from 'react-router';

const Banner = () => {
    return (
        <>

            <div className='bg-gray-100 pt-7'>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold'>We Build <br /> <span className='text-[#632EE3] font-bold'>Productive</span> Apps</h1>
                    <p className='text-gray-500 mt-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex justify-center mt-7 gap-4'>
                    <Link to='https://play.google.com/store/' target='_blank' className='btn'><img src={Gplay} alt="" />Google Play</Link>
                    <Link to='https://www.apple.com/app-store/' target='_blank' className='btn'><img src={AppIcon} alt="" />App Store</Link>
                </div>
                <figure className='mt-7'>
                    <img className='mx-auto' src={HeroImg} alt="" />
                </figure>
            </div>
            <div className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] py-10">
                <h1 className='text-white text-5xl text-center font-semibold px-5 md:px-0'>Trusted by Millions, Built for You</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 text-center mt-7 '>
                    <div className='text-white'>
                        <p>Total Downloads</p>
                        <h1 className='text-6xl'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-white'>
                        <p>Total Reviews</p>
                        <h1 className='text-6xl'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='text-white'>
                        <p>Active Apps</p>
                        <h1 className='text-6xl'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;