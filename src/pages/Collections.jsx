import React from 'react';
import { collections } from '../products';
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <div className="container mt-5 fullScreen">
      <>
        <h2 className="display-5 pt-4">Explore all collections</h2>
        <div className="container d-flex justify-content-evenly row">
          {collections.map((col) => (
            <Link
              to={`/collection/${col.colId}`}
              className="col-md-6 col-sm-12 col-lg-4 col-xl-3 mx-2 pt-2 px-2 mb-4 card-link"
            >
              <div key={col.colId} className="card">
                <img src={col.colImg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text text-center">{col.colName}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </>
    </div>
  );
};

export default Collections;
