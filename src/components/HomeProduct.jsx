import React from 'react';
import { useItemseStore } from '../store';

const HomeProduct = ({ product }) => {
  const increase = useItemseStore((state) => state.addToCart);
  const addToCart = (e) => {
    e.preventDefault();
    increase({
      id: Math.ceil(Math.random() * 1000000),
      itemName: product.productName,
      itemDesc: product.productDesc,
      itemImg: product.productImg,
      itemPrice: product.price,
    });
  };
  return (
    <div
      className="card col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3"
      //   style={{ width: '18rem' }}
      key={product.id}
    >
      <img
        src={`images/${product.productImg}`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{product.productName}</h5>
        <p className="card-text">{product.productDesc}</p>
        <a href="#" className="btn btn-primary" onClick={(e) => addToCart(e)}>
          Add to Cart
        </a>
        <p className="card-text text-end">
          <small className="text-muted">${product.price}</small>
        </p>
      </div>
    </div>
  );
};

export default HomeProduct;
