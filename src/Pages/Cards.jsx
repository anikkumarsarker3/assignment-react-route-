import React from 'react';
import DownIcon from '../assets/icon-downloads.png'
import RatIcon from '../assets/icon-ratings.png'
import { Link, useNavigate } from 'react-router-dom';

const Cards = ({ item }) => {
    const navigate = useNavigate()
    const handleCardClick = (id) => {
        navigate(`/card-details/${id}`);
    };
    const { id, image, title, size, ratingAvg } = item;
    return (
        <Link onClick={() => handleCardClick(id)}>
            <div className="card bg-base-100 shadow-md m-2 p-5 transition-transform duration-400 hover:scale-105 hover:shadow-xl">
                <figure>
                    <img
                        className='w-full h-60'
                        src={image}
                        alt={title} />
                </figure>
                <h3 className='text-left text-lg font-semibold my-3'>{title}</h3>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-between items-center bg-gray-100 p-2 gap-2 rounded-md'>
                        <img className='w-3.5' src={DownIcon} alt="" />
                        <p>{size}M</p>

                    </div>
                    <div className='flex justify-between items-center bg-[#fff0e1] p-2 gap-2 rounded-md'>
                        <img className='w-3.5' src={RatIcon} alt="" />
                        <p>{ratingAvg}</p>

                    </div>
                </div>

            </div>
        </Link>
    );
};

export default Cards;