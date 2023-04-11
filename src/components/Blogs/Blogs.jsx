import React from 'react';

const Blogs = () => {
    return (
        <div className='md:flex my-container'>
            <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                <div class="card-body items-center text-center bg-teal-400 rounded-lg">
                <h2 class="card-title text-xl">Purpose of useEffect other than fetching data?</h2>
                <p className='text-lg'>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems.how to fetch data when a component mounts,how to run code when state changes or when a prop changes,how to set up timers or intervals.</p>
                </div>
            </div>
            <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                <div className="card-body items-center text-center bg-red-300 rounded-lg">
                <h2 className="card-title text-xl">Props vs State?</h2>
                <p className='text-lg'>Props are Read Only,whether state is both read and write.Props are passed outside a components.States are passed inside a component.</p>
                </div>
            </div>
            <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                <div className="card-body items-center text-center bg-blue-200 rounded-lg">
                <h2 className="card-title text-xl">How does useState work?
                </h2>
                <p  className='text-lg'>Each time components render,useState gives you an array which contains two values.first one is state variable,second one is setter function which can update the state variable and trigger React to render the component again</p>
                </div>
            </div>

            <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                <div className="card-body items-center text-center bg-indigo-400 rounded-lg">
                <h2 className="card-title text-xl">How Does React work?</h2>
                <p className='text-lg'>React usually maintains a tree and it will do efficient diff computations on the nodes.Our HTML codes are as like tree. In fact, that is exactly how the browser treats DOM.React only push those changes to the DOM which have actually occurred.</p>
                
                </div>
            </div>
        </div>
    );
};

export default Blogs;