import React from 'react';
import { useState } from 'react';
import { useItemseStore } from '../store';
import { useUserStore } from '../user';
import { products, collections, categories } from '../products';
import { Link } from 'react-router-dom';

const Navbar = ({ openCart, setOpenCart }) => {
  const items = useItemseStore((state) => state.items);
  const user = useUserStore((state) => state.user);
  // console.log(JSON.stringify(user));
  const logoutUser = useUserStore((state) => state.logout);
  // console.log(user);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState({});
  const [inputFocus, setInputFocus] = useState(false);
  // console.log(inputFocus);
  // console.log(searchQuery);
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
  const handleSignout = () => {
    logoutUser();
    window.location.href = '/';
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Shopkiličica
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                {categories.map((cat) => (
                  <li key={cat.catId}>
                    <Link
                      to={`category/${cat.catId}`}
                      className="dropdown-item"
                    >
                      {cat.catName}
                    </Link>
                  </li>
                ))}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="categories">
                    All categories
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Collections
              </a>
              <ul className="dropdown-menu">
                {collections.map((col) => (
                  <li key={col.colId}>
                    <Link
                      to={`collection/${col.colId}`}
                      className="dropdown-item"
                      href="#"
                    >
                      {col.colName}
                    </Link>
                  </li>
                ))}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="collections">
                    All collections
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 position-relative"
              type="search"
              placeholder="Search"
              aria-label="Search"
              // onChange={(e) => search(e, e.target.value)}
              // onFocus={() => setInputFocus(true)}
              // onBlur={() => setInputFocus(false)}
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
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span className="visually-hidden">unread messages</span>
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
          {JSON.stringify(user) !== '{}' ? (
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle me-2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.username}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to={`/profile/${user.username}`}
                    className="dropdown-item"
                    href="#"
                  >
                    My Profile
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    onClick={handleSignout}
                    className="dropdown-item"
                    href="#"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary me-2">Sign in</button>
            </Link>
          )}
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
