import React from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../Jobs/Jobs';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;