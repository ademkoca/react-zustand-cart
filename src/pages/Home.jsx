import React, { useState, useEffect } from 'react';
import HomeProduct from '../components/HomeProduct';
import CategoryDropdown from '../components/CategoryDropdown';
import { products, categories } from '../products';

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
      {/* <CategoryDropdown
        categories={categories}
        content={content}
        setContent={setContent}
      /> */}
      <div className="container-fluid">
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
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setCategory('')}
              >
                All items
              </a>
            </li>
            {categories.map((c) => (
              <li key={c.catId}>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setCategory(c.catName)}
                >
                  {c.catName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-lg d-flex flex-wrap row justify-content-around justify-content-lg-start mw-100 p-1 mx-0 mx-lg-2">
        {filtered.length === 0 || category === ''
          ? products.map((p) => <HomeProduct product={p} key={p.id} />)
          : filtered.map((f) => <HomeProduct product={f} key={f.id} />)}
      </div>
    </>
  );
};

export default Home;
