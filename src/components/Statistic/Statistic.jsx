import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    const assignments =
        [
            { name: 'Assignment 1', number: 57 },
            { name: 'Assignment 2', number: 60 },
            { name: 'Assignment 3', number: 60 },
            { name: 'Assignment 4', number: 60 },
            { name: 'Assignment 5', number: 60 },
            { name: 'Assignment 6', number: 60 },
            { name: 'Assignment 7', number: 60 },
            { name: 'Assignment 8', number: 60 }
        ];

    return (
        <div className='my-container mt-10'>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart width={500}
                    height={400}
                    data={assignments}>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Area dataKey="number"></Area>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistic;