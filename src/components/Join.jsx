import React from 'react';

const Join = () => {
  return (
    <div className="container-fluid d-flex align-items-center px-5 py-2 my-3 bg-secondary justify-content-around">
      <div className="container col-xl-6 row flex-lg-row-reverse flex-column-reverse align-items-center g-5 py-5 w-100">
        <div className="col-10 col-sm-8 col-lg-6 d-flex mt-sm-3 mt-lg-5 justify-content-center justify-content-lg-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 ">
            Sign up for free
          </button>
        </div>
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold lh-1 mb-3 text-sm-center text-white">
            Join our club and get 20% off
          </h2>

          <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
        </div>
      </div>
    </div>
  );
};

export default Join;
