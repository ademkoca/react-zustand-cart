import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="px-4 py-5 my-5 text-center error-screen">
      <h1 className="display-5 fw-bold text-dark">NOT FOUND</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4 text-dark">
          It looks like the page you requested doesn't exist. 
        </p>
        <p className="lead mb-4 text-dark">
          You can go back and see other products in our shop
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
