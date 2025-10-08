import React from 'react';
import logo from '../../assets/logo.png'
import XIcon from '../../assets/Xicon.png'
import LinkdinIcon from '../../assets/LinkdinIcon.png'
import Fb from '../../assets/Fb.png'


const Footer = () => {
    return (
        <div className='bg-neutral text-neutral-content py-10'>

            <footer className="flex justify-between p-10">
                <aside className='flex items-center justify-center'>
                    <img className='w-10 h-10' src={logo} alt="" />
                    <p className='text-lg font-semibold '>
                        HERO.IO
                    </p>
                </aside>
                <nav>
                    <h6 className="text-lg font-semibold">Social Links</h6>
                    <div className="grid grid-flow-col gap-4 my-2.5">
                        <a>
                            <img className='w-8' src={XIcon} alt="" />
                        </a>
                        <a>
                            <img className='w-8' src={LinkdinIcon} alt="" />
                        </a>
                        <a>
                            <img className='w-8' src={Fb} alt="" />
                        </a>
                    </div>
                </nav>

            </footer>
            <p className='text-center'>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;