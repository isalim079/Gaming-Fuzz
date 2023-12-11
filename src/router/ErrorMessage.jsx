/* eslint-disable no-unused-vars */
import React from 'react';
import caveman from '../assets/images/caveMan-01.png'
import { Link } from 'react-router-dom';

const ErrorMessage = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center border border-black h-screen'>
                <h2 className='text-8xl  font-orbitron'>404</h2>
                <img className='w-1/5' src={caveman} alt="" />
                <h3 className='font-josefinSans text-3xl '>Oops!! You are in a wrong place!</h3>
                <p className='font-josefinSans text-lg'>The page you are looking for not available</p>
                <Link to='/'><button className='px-4 py-2 bg-green-500 text-white text-lg font-semibold font-josefinSans mt-4'>Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorMessage;