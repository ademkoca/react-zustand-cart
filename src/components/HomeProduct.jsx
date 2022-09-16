import React from 'react';
import { useItemseStore } from '../store';

const HomeProduct = ({ product }) => {
  const items = useItemseStore((state) => state.items);
  const addItemToCart = useItemseStore((state) => state.addToCart);
  const updateItem = useItemseStore((state) => state.updateCart);
  const addToCart = (e) => {
    e.preventDefault();
    //check if item already in cart
    //if not
    const itemExists = items.find((x) => x.itemName === product.productName);
    if (itemExists === undefined) {
      addItemToCart({
        id: Math.ceil(Math.random() * 1000000),
        itemName: product.productName,
        itemDesc: product.productDesc,
        itemImg: product.productImg,
        itemPrice: product.price,
        qty: 1,
      });
      // console.log('addItem function fired');
      //if yes
    } else {
      updateItem(product.productName);
    }
  };

  return (
    <div
      className="card col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 p-2 my-1"
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

        <h4 className="text-muted card-text text-end">${product.price}</h4>
      </div>
    </div>
  );
};

export default HomeProduct;
