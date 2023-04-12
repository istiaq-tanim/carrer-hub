import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import ReviewJobs from './../ReviewJobs/ReviewJobs';

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filterJob, setFilterJob] = useState([]);
    const [select, setSelect] = useState("");
    const [isSorted, setIsSorted] = useState(false);
    const allJobs = useLoaderData()
    useEffect(() => {
        const storedItem = getShoppingCart();
        const apply = []
        for (const id in storedItem) {
            const storedApply = allJobs.find(job => job.id == id);
            if (storedApply) {
                apply.push(storedApply)
            }
        }
        setJobs(apply)
    }, [])

    const handleChangeRemote = () => {
        setIsSorted(true);
        const filtered = jobs.filter(job => job.remote_or_onsite === "Remote");
        setFilterJob(filtered);

    }

    const handleChangeOnsite = () => {
        setIsSorted(true);
        const filtered = jobs.filter(job => job.remote_or_onsite === "Onsite");
        setFilterJob(filtered);
    }
    return (
        <div className="my-container">
            <h3 className="text-center my-20 font-bold text-2xl text-[rgba(26,25,25,1)]">Applied Jobs</h3>
            <div className='text-right'>

                <button onClick={handleChangeRemote} className='btn-primary mr-2'>Remote</button>
                <button onClick={handleChangeOnsite} className='btn-primary'>Onsite</button>
            </div>
            {
                isSorted ? filterJob.map(job => <ReviewJobs key={job.id} job={job}></ReviewJobs>) : jobs.map(job => <ReviewJobs key={job.id} job={job}></ReviewJobs>)
            }
        </div>
    );
};

export default AppliedJobs;