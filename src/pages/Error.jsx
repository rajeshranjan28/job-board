import{Link } from "react-router-dom";
import React from 'react'


const Error = () => {
   const error = useRouteError();
   console.log(error);
  return (
    <div>
      <h1> Error </h1>
      <Link to = '/DashboardLayout'> Go back To Home</Link>
    </div>

  )
}

export default Error;