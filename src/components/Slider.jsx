import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide mb-4"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="images/slides/slide1.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="text-dark">ON SALE NOW</h2>
            <Link
              to="/collection/new"
              className="btn btn-outline-dark btn-lg my-3"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="images/slides/slide2.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>NEW ARRIVALS</h2>
            <Link
              to="/collection/new"
              className="btn btn-outline-light btn-lg my-3"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="images/slides/slide3.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="text-light">AUTMN-WINTER</h2>
            <Link
              to="/collection/new"
              className="btn btn-outline-dark btn-lg my-3"
            >
              Shop now
            </Link>
          </div>
        </div>
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
