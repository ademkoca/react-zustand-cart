import React from 'react';

const Popular = () => {
  return (
    <div className="container-fluid">
      <h1 className="display-6 text-center mb-4 mt-5">Popular right now</h1>
      <div className="container-sm d-flex justify-content-center mb-5">
        <button className="btn btn-outline-dark mx-lg-4 mx-sm-1">
          Jackets
        </button>
        <button className="btn btn-outline-dark mx-md-4 mx-1">Coats</button>
        <button className="btn btn-outline-dark mx-md-4 mx-1">Boots</button>
        <button className="btn btn-outline-dark mx-md-4 mx-1">Hats</button>
      </div>
    </div>
  );
};

export default Popular;
