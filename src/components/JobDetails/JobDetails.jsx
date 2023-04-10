import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
const JobDetails = () => {
    const [job, setJob] = useState({});
    const dynamic = useParams();
    const featureJobs = useLoaderData();
    useEffect(() => {
        let selectJob = featureJobs.find(job => job.id == dynamic.id)
        setJob(selectJob);
    }, [])

    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title } = job
    return (
        <div className='my-container my-5'>
            <h3 className='text-[#1A1919] text-center my-20 text-2xl font-bold'>Job Details</h3>

            <div className='grid grid-cols-3 gap-8'>
                <div class="col-span-2">
                    <p className='text-[rgba(117,117,117,1)] my-5'><span className='font-bold text-[#1A1919]'>Job Description :</span> {job_description}</p>
                    <p className='text-[rgba(117,117,117,1)] my-5'><span className='font-bold text-[#1A1919]'>Job Description :</span> {job_responsibility}</p>
                    <span className='font-bold text-[#1A1919]'>Educational Requirements:</span>
                    <p className='text-[rgba(117,117,117,1)] my-5'>{educational_requirements}</p>

                    <span className='font-bold text-[#1A1919]'>Educational Requirements:</span>
                    <p className='text-[rgba(117,117,117,1)] mt-5'>{experiences}</p>

                </div>

                <div className='border bg-[rgba(152,115,255,0.1)] p-6'>
                    <h3 className='mb-5 font-bold '>Job Details</h3>
                    <p className='border-b-2 text-[rgba(152,115,255,1)]'></p>
                    <p className='flex gap-2 mt-5'><span><CurrencyDollarIcon className="h-6 w-6 text-[rgba(126,144,254,1)]" /></span>{salary} (Per Month)</p>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;