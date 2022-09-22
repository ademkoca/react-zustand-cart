import React from 'react';
import { Link } from 'react-router-dom';
import { collections } from '../products';

const Slider = () => {
  // console.log(collections);
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide mb-4"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        {collections.map((col, idx) => (
          <button
            // onClick={console.log(idx)}
            key={idx}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={idx}
            className="active"
            aria-current="true"
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {collections.map((col, idx) => (
          <div
            key={idx}
            className={`carousel-item ${idx === 0 ? 'active' : ''}`}
          >
            <img src={col.colImg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2 className={`text-${idx % 2 !== 0 ? 'white' : 'dark'}`}>
                {col.colName}
              </h2>
              <Link
                to={`/collection/${col.colId}`}
                className={`btn btn-outline-${
                  idx % 2 !== 0 ? 'light' : 'dark'
                } btn-lg my-3"`}
              >
                Shop now
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev text-dark"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next text-dark"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
