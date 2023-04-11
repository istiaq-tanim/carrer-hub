import React from 'react';

const Blogs = () => {
    return (
        <div className='md:flex'>
            <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                <div class="card-body items-center text-center bg-teal-400 rounded-lg">
                <h2 class="card-title text-xl">When should you use context API?</h2>
                <p className='text-lg'>The Context API in React is a powerful tool that should be used when you need to create a flexible and reusable component hierarchy.Here are some scenarios where you might consider using the Context API:
                <li>When you need to pass data or functions down to multiple levels of nested components.</li>
                <li>When you have global data or state that needs to be accessed by many components.</li>
                </p>
                </div>
            </div>
            <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                <div className="card-body items-center text-center bg-red-300 rounded-lg">
                <h2 className="card-title text-xl">What is a custom hook?</h2>
                <p className='text-lg'>Hooks are function which use repeatedly,you have a piece of logic that is used by multiple components in your React application, you can extract that logic to a custom hook to make it reusable and more modular.Custom Hooks start with "use". Example: useFetch.</p>
                </div>
            </div>
            <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                <div className="card-body items-center text-center bg-blue-200 rounded-lg">
                <h2 className="card-title text-xl">What is useRef?
                </h2>
                <p  className='text-lg'>useRef is a built-in hook in React that provides a way to store and access mutable values that are associated with a component instance. It returns a reference object that can be used to access and modify the value of a DOM node or any other mutable value without triggering a re-render of the component.</p>
                </div>
            </div>

            <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                <div className="card-body items-center text-center bg-indigo-400 rounded-lg">
                <h2 className="card-title text-xl">What is useMemo?</h2>
                <p className='text-lg'>useMemo is a built-in hook in React that allows you to optimize the performance of your application by memoizing the result of an expensive computation.The useMemo Hook only runs when one of its dependencies update.This can update your performance</p>
                
                </div>
            </div>
        </div>
    );
};

export default Blogs;