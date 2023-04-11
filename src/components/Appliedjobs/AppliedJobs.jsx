import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import ReviewJobs from './../ReviewJobs/ReviewJobs';

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);

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
    return (
        <div className="my-container">
            <h3 className="text-center my-20 font-bold text-2xl text-[rgba(26,25,25,1)]">Applied Jobs</h3>
            {/* <select className="select w-96 pl-50">
                <option disabled selected>Pick your favorite Simpson</option>
                <option>Homer</option>
                <option>Marge</option>
            </select> */}
            {
                jobs.map(job => <ReviewJobs key={job.id} job={job}></ReviewJobs>)
            }
        </div>
    );
};

export default AppliedJobs;