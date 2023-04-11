import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ReviewJobs = ({ job }) => {
    const { company_name, remote_or_onsite, company_logo, job_title, fulltime_or_parttime, location, salary,id } = job;
    return (
        <div className='border-2 rounded-md md:py-5 md:pr-5 p-5 my-5'>
            <div className='md:grid grid-cols-4 md:text-left text-center'>

                <div className='bg-[#F4F4F4] h-48 w-48 flex justify-center items-center p-10 mx-auto'>
                    <img src={company_logo} alt="" />
                </div>

                <div className='col-span-3 md:flex justify-between'>
                <div>
                    <p className='text-[rgba(71,71,71,1)] font-bold text-2xl mb-2'>{job_title}</p>
                    <p className='text-[rgba(117,117,117,1)] font-medium text-2xl'>{company_name}</p>
                    <div className='flex justify-evenly md:justify-start gap-4 pt-5'>
                        <button className='btn-second'>{remote_or_onsite}</button>
                        <button className='btn-second'>{fulltime_or_parttime}</button>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:items-start pt-5 gap-5 '>
                    <p className='text-lg flex gap-1 text-[rgba(117,117,117,1)] font-bold items-center'><span><MapPinIcon className="h-6 w-6 text-[rgba(117,117,117,1)]" /></span> {location}</p>
                    <p className='text-lg text-[rgba(117,117,117,1)] font-bold flex gap-1 items-center'><span><CurrencyDollarIcon className="h-6 w-6" /></span>{salary}</p>
                    </div>
                    
                </div>
                <div className="md:pt-20 pt-5" >
                <Link to={`/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
                </div>
                
            </div>

        </div>
    );
};

export default ReviewJobs;