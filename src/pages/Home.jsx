import React, { useState, useEffect } from 'react';
import HomeProduct from '../components/HomeProduct';
import CategoryDropdown from '../components/CategoryDropdown';
import { products, categories } from '../products';
import Slider from '../components/Slider';
import Popular from '../components/Popular';
import Join from '../components/Join';
// import { Helmet } from 'react-helmet';

const Home = () => {
  // const [content, setContent] = useState(products);
  const [category, setCategory] = useState('');
  // console.log(category);
  const filtered = products.filter((p) => p.category === category);
  // console.log(filtered);
  // useEffect(() => {
  //   setContent(content.filter((product) => product.category === category));
  // }, []);

  // console.log(categories);
  return (
    <>
      {/* <Helmet> */}
      {/* <title>Shup | Home</title> */}
      {/* </Helmet> */}
      <div className="container-fluid px-0">
        <Slider />
      </div>
      <div className="container-fluid px-4">
        <Popular />
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Choose category
          </button>
          <ul className="dropdown-menu">
            <li key={0}>
              <button className="dropdown-item" onClick={() => setCategory('')}>
                All items
              </button>
            </li>
            {categories.map((c) => (
              <li key={c.catId}>
                <button
                  className="dropdown-item"
                  onClick={() => setCategory(c.catName)}
                >
                  {c.catName}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container d-flex flex-wrap row justify-content-around justify-content-lg-start mw-100 p-1 mx-0 mx-lg-2">
        {filtered.length === 0 || category === ''
          ? products.map((p) => <HomeProduct product={p} key={p.id} />)
          : filtered.map((f) => <HomeProduct product={f} key={f.id} />)}
      </div>
      {/* <Join /> */}
    </>
  );
};

export default Home;
