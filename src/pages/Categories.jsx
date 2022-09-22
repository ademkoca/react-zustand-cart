import React from 'react';
import { categories } from '../products';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="container mt-5 fullScreen">
      <>
        <h2 className="display-5 pt-4">Explore all categories</h2>
        <div className="container d-flex justify-content-evenly row">
          {categories.map((cat) => (
            <Link
              to={`/category/${cat.catId}`}
              className="col-md-6 col-sm-12 col-lg-4 col-xl-3 mx-2 pt-2 px-2 mb-4 card-link"
            >
              <div key={cat.catId} className="card">
                <img src={cat.catImg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text text-center">{cat.catName}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </>
    </div>
  );
};

export default Categories;
