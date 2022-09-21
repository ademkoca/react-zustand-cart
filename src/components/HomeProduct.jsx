import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useItemseStore } from '../store';

const HomeProduct = ({ product }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const items = useItemseStore((state) => state.items);
  const addItemToCart = useItemseStore((state) => state.addToCart);
  const updateItem = useItemseStore((state) => state.updateCart);
  const [size, setSize] = useState('Size');
  const getPrice = () => {
    return product.salePrice !== 0 ? product.salePrice : product.price;
  };

  const addToCart = (e) => {
    e.preventDefault();
    //check if item already in cart
    //if not
    if (size !== 'Size') {
      const itemExists = items.find((x) => x.itemName === product.productName);

      const sizeExists = items.find(
        (x) => x.itemName === product.productName && x.size === size
      );
      if (itemExists === undefined) {
        addItemToCart({
          id: Math.ceil(Math.random() * 1000000),
          itemName: product.productName,
          itemDesc: product.productDesc,
          itemImg: product.productImg,
          itemPrice:
            product.salePrice !== 0 ? product.salePrice : product.price,
          size: size,
          qty: 1,
        });

        //if yes
      } else {
        if (!sizeExists) {
          addItemToCart({
            id: Math.ceil(Math.random() * 1000000),
            itemName: product.productName,
            itemDesc: product.productDesc,
            itemImg: PF + product.productImg,
            itemPrice:
              product.salePrice !== 0 ? product.salePrice : product.price,
            size: size,
            qty: 1,
          });
        } else updateItem(product.productName);
      }
    } else alert('Please choose size!');
  };
  return (
    <div
      className="card col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 p-2 my-1 mx-0 mx-xl-2 position-relative list-card"
      //   style={{ width: '18rem' }}
      key={product.id}
    >
      {product.salePrice !== 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge bg-danger sale">
          SALE!
        </span>
      )}
      <Link to={`/product/${product.id}`}>
        <img src={product.productImg} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product.id}`}>
          <h5 className="card-title">{product.productName}</h5>
        </Link>
        <p className="card-text mb-4">{product.productDesc}</p>
        <div className="container d-flex justify-content-between px-0">
          <div className="btn-group">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {size}
            </button>
            <ul className="dropdown-menu">
              {product.size.map((s) => (
                <li
                  key={s}
                  className="dropdown-item"
                  onClick={() => setSize(`${s}`)}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <a href="#" className="btn btn-primary" onClick={(e) => addToCart(e)}>
            Add to Cart
          </a>
        </div>

        <div className="d-flex align-items-center justify-content-end mt-3">
          {product.salePrice !== 0 && (
            <span>
              <del>${product.price}</del>
            </span>
          )}
          <h4
            className={`card-text text-end ms-2 ${
              product.salePrice !== 0 ? 'text-danger' : ''
            }`}
          >
            ${product.salePrice !== 0 ? product.salePrice : product.price}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
