import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../featuredJob/FeaturedJob';

const Jobs = () => {
    const [show,setShow]=useState(false)
    const featuredJob=useLoaderData();

    const handleShow=()=>
    {
        setShow(!show)
    }
    return (
        <div>
            <div className='my-container my-10'>
            <h3 className='text-4xl text-[rgba(26,25,25,1)] font-bold pb-3 text-center'>Featured Jobs</h3>
                <p className='text-[#757575] font-medium text-center mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
             <div className='grid md:grid-cols-2 gap-5 mt-10'>
             {
                
                featuredJob.slice(0,show?6:4).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
             }
             
             </div>
             <div className='flex justify-center mt-10'>
             {!show && <button className='btn-primary' onClick={handleShow}>See All Jobs</button>}
             </div>
            </div>
        </div>
    );
};

export default Jobs;