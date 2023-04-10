import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Layout/Root';
import AppliedJobs from './components/Appliedjobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import JobDetails from './components/JobDetails/JobDetails';

const router =createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("featuredJob.json")
        
      },
      {
          path:"/:id",
          element:<JobDetails></JobDetails>,
          loader:({params})=>fetch("/featuredJob.json")
      },
      {
         path:"/jobs",
         element:<AppliedJobs></AppliedJobs>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
