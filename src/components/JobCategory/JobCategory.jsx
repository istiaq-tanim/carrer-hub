import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const JobCategory = () => {
    const [category,setCategory]=useState([]);
    useEffect(()=>{
      fetch("category.json")
      .then(res => res.json())
      .then(data => setCategory(data))
    },[])
    return (
        <div className='my-container mt-10'>
            <div className='text-center'>
                <h3 className='text-4xl text-[rgba(26,25,25,1)] font-bold pb-3'>Job Category List</h3>
                <p className='text-[#757575] font-medium mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div  className='md:flex justify-between mt-10 gap-5'>
                    {
                        category.map(item => <Job key={item.id} item={item}></Job>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default JobCategory;