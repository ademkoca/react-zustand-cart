import React from 'react';
import { useState } from 'react';
import { useItemseStore } from '../store';
import { products } from '../products';

const Navbar = ({ openCart, setOpenCart }) => {
  const items = useItemseStore((state) => state.items);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState({});
  const [inputFocus, setInputFocus] = useState(false);
  // console.log(inputFocus);
  console.log(searchQuery);
  const search = (e, val) => {
    setSearchQuery(val);
    e.preventDefault();
    // setSearchQuery(val);
    setTimeout(
      () =>
        setSearchResult(
          products.filter((p) =>
            p.productName.toUpperCase().startsWith(searchQuery.toUpperCase())
          )
        ),
      2000
    );
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 position-relative"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => search(e, e.target.value)}
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
            />
            <button
              className="btn btn-outline-success"
              onClick={(e) => search(e, searchQuery)}
            >
              Search
            </button>
          </form>
          {searchQuery !== '' && inputFocus && (
            <ul className="list-group position-absolute search-results">
              {searchResult.length !== 0 ? (
                searchResult.map((res) => (
                  <li key={res.id} className="list-group-item">
                    {res.productName}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No results</li>
              )}
            </ul>
          )}

          {/* <i
            className="bi bi-cart2 fs-2 ms-2 position-relative"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            onClick={() => setOpenCart(true)}
          >
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </i> */}
        </div>
        <div className="inline-container">
          <button
            type="button"
            className="btn btn-success mx-2"
            onClick={() => setOpenCart(true)}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
          >
            Cart <span className="badge text-bg-secondary">{items.length}</span>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
