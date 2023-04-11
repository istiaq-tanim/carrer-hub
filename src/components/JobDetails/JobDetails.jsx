import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { CalendarIcon, CurrencyDollarIcon, PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { addToDb } from '../../utilities/fakedb';
const JobDetails = () => {
    const [job, setJob] = useState({});
    const dynamic = useParams();
    const featureJobs = useLoaderData();
    useEffect(() => {
        let selectJob = featureJobs.find(job => job.id == dynamic.id)
        setJob(selectJob);
    }, [])

    const handleAddData = (id) =>
    {
        addToDb(id);
    }

    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, email, phone, location,id } = job
    return (
        <div className='my-container mt-5'>
            <h3 className='text-[#1A1919] text-center my-10 text-2xl font-bold'>Job Details</h3>

            <div className='grid grid-cols-3 gap-4'>
                <div className="col-span-2">
                    <p className='text-[rgba(117,117,117,1)] my-5'><span className='font-bold text-[#1A1919]'>Job Description :</span> {job_description}</p>
                    <p className='text-[rgba(117,117,117,1)] my-5'><span className='font-bold text-[#1A1919]'>Job Description :</span> {job_responsibility}</p>
                    <span className='font-bold text-[#1A1919]'>Educational Requirements:</span>
                    <p className='text-[rgba(117,117,117,1)] my-5'>{educational_requirements}</p>

                    <span className='font-bold text-[#1A1919]'>Educational Requirements:</span>
                    <p className='text-[rgba(117,117,117,1)] mt-5'>{experiences}</p>

                </div>

                <div className='mt-10'>
                <div className='border bg-[rgba(152,115,255,0.1)] p-6 rounded-md'>
                    <h3 className='mb-5 font-bold'>Job Details</h3>
                    <p className='border-b-2 text-[rgba(152,115,255,1)]'></p>
                    <div>
                        <p className='flex gap-1 mt-5 font-bold'><span><CurrencyDollarIcon className="h-6 w-6 text-[rgba(126,144,254,1)]" /></span>Salary : <span className='text-[rgba(117,117,117,1)] font-medium'>{salary} (Per Month)</span></p>

                        <p className='flex gap-1 mt-5 font-bold'><span><CalendarIcon className="h-6 w-6 text-[rgba(126,144,254,1)]" /></span>Job : <span className='text-[rgba(117,117,117,1)] font-medium'>{job_title}</span></p>
                    </div>
                    <h3 className='my-5 font-bold'>Contact Info</h3>
                    <p className='border-b-2 text-[rgba(152,115,255,1)]'></p>
                    <div>
                        <p className='flex gap-2 mt-5 font-bold'><span><PhoneIcon className="h-6 w-6 text-[rgba(126,144,254,1)]" /></span>Phone : <span className='text-[rgba(117,117,117,1)] font-medium'>{phone}</span></p>
                        <p className='flex gap-2 mt-5 font-bold'><span><EnvelopeIcon className="h-6 w-6 text-[rgba(126,144,254,1)]" /></span>Email : <span className='text-[rgba(117,117,117,1)] font-medium'>{email}</span></p>
                        <p className='flex gap-2 mt-5 font-bold'><span><MapPinIcon className="h-6 w-6 text-[rgba(126,144,254,1)]" /></span>Address : <span className='text-[rgba(117,117,117,1)] font-medium'>{location}</span></p>
                    </div>
                </div>
                <button onClick={() => handleAddData(id)} className='btn-primary w-full mt-5'>Apply Now</button>
                </div>
                
            </div>
        </div>
    );
};

export default JobDetails;