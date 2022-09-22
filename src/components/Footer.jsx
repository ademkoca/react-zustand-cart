import React from 'react';
import { Link } from 'react-router-dom';
import { categories, collections } from '../products';

const Footer = () => {
  return (
    <div className="container">
      <footer className="pt-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Categories</h5>
            <ul className="nav flex-column">
              {categories.map((cat) => (
                <li key={cat.catId} className="nav-item mb-2">
                  <Link
                    to={`/category/${cat.catId}`}
                    className="nav-link p-0 text-muted"
                  >
                    {cat.catName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Collections</h5>
            <ul className="nav flex-column">
              {collections.map((col) => (
                <li key={col.colId} className="nav-item mb-2">
                  <Link
                    to={`/collection/${col.colId}`}
                    className="nav-link p-0 text-muted"
                  >
                    {col.colName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>About</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Our Story
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Shipping
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Return policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => alert('Thank you for subscribing!')}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
          <p>&copy; 2022 Šopkiličica. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
