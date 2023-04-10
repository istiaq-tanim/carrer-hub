import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeaturedJob = ({ job }) => {
    const { id, job_title, company_logo, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = job
    return (
        
        <div className="card card-compact border-[#E8E8E8] border-2">
            <img className='text-left p-5 w-fit' src={company_logo} />
            <div className="card-body">
                <h2 className="card-title mt-2 text-[#474747] font-semibold text-x">{job_title}</h2>
                <p className='text-[#757575] font-semibold text-lg pt-3'>{company_name}</p>
                <div className='flex gap-4 pt-3'>
                    <button className='btn-second'>{remote_or_onsite}</button>
                    <button className='btn-second'>{fulltime_or_parttime}</button>

                </div>
                <div className='flex pt-3'>
                    <p className='text-lg flex gap-2 text-[rgba(117,117,117,1)] font-bold items-center'><span><MapPinIcon className="h-6 w-6 text-[rgba(117,117,117,1)]" /></span> {location}</p>
                    <p className='text-lg text-[rgba(117,117,117,1)] font-bold flex gap-2 items-center'><span><CurrencyDollarIcon className="h-6 w-6" /></span>{salary}</p>
                </div>

                <div className="card-actions pt-3">
                    <Link to={`/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;