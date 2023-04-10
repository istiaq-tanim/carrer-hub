import React from 'react';

const Job = ({item}) => {
    const {Category,logo,jobsAvailable}=item
    return (
        <div className="card w-96 bg-[rgba(152,115,255,0.05)] shadow-md">
        <figure className="px-10 pt-10">
          <img src={logo} alt="Shoes" className="rounded-xl h-14 object-contain object-center" />
        </figure>
        <div className="card-body items-center text-center p-4">
          <h2 className="card-title">{Category}</h2>
          <p className='text-[rgba(163,163,163,1)]'>{jobsAvailable} Jobs Available</p>
        </div>
      </div>
    );
};

export default Job;