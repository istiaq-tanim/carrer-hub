import React from 'react';

const Banner = () => {
    return (
        <div className='md:flex my-container'>
            <div className='mt-16 w-auto-fit'>
                <h1 className='text-[#1A1919] text-7xl leading-snug text-left md:pl-5' >One Step <br/> Closer To Your <br /> <span className='text-[rgba(152,115,255,1)]'> Dream Job</span></h1>
                <p className='text-[#757575] font-normal mt-3 text-lg'>Explore thousands of job opportunities with all the <br/> information you need. Its your future. Come find it. Manage all your job application from start to finish</p>
                <button className='btn-primary mt-5'>Get Started</button>
            </div>
            <div>
                <img className='h-fit w-fit' src="../../../public/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;