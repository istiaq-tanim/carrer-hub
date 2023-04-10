import React from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../featuredJob/FeaturedJob';

const Home = () => {
    const featuredJob=useLoaderData();
    console.log(featuredJob)
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <div className='my-container my-10'>
            <h3 className='text-4xl text-[rgba(26,25,25,1)] font-bold pb-3 text-center'>Featured Jobs</h3>
                <p className='text-[#757575] font-medium text-center mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
             <div className='grid md:grid-cols-2 gap-5 mt-10'>
             {
                
                featuredJob.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
             }
             
             </div>
             <div className='flex justify-center mt-10'>
             <button className='btn-primary'>See All Jobs</button>
             </div>
            </div>
        </div>
    );
};

export default Home;