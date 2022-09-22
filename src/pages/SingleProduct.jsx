import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products';
import { useItemseStore } from '../store';
import parse from 'html-react-parser';

const SingleProduct = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [checked, setChecked] = useState(false);
  const items = useItemseStore((state) => state.items);
  const addItemToCart = useItemseStore((state) => state.addToCart);
  const updateItem = useItemseStore((state) => state.updateCart);
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);
  const [size, setSize] = useState('');
  console.log(PF + product.productImg);
  //   console.log('Size is: ' + size);
  const addToCart = (e) => {
    e.preventDefault();
    //check if item already in cart
    //if not
    if (size !== '') {
      const itemExists = items.find((x) => x.itemName === product.productName);

      const sizeExists = items.find(
        (x) => x.itemName === product.productName && x.size === size
      );
      if (itemExists === undefined) {
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
  //   console.log(typeof id);
  return (
    <div className="container d-flex flex-wrap mt-5 pt-4 fullScreen">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            {product.salePrice !== 0 && (
              <span className="position-absolute top-0 start-0 translate-middle badge bg-danger sale product-sale">
                SALE!
              </span>
            )}
            <img
              src={PF + product.productImg}
              className="img-fluid rounded-start position-relative"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">{product.productDesc}</p>
              <div className="d-flex align-items-center justify-content-start my-3">
                {product.salePrice !== 0 && (
                  <span>
                    <del>${product.price}</del>
                  </span>
                )}
                <h2
                  className={`card-text ms-2 ${
                    product.salePrice !== 0 ? 'text-danger' : ''
                  }`}
                >
                  ${product.salePrice !== 0 ? product.salePrice : product.price}
                </h2>
              </div>
              <div className="card-text d-flex flex-column">
                <p>
                  Please choose a size: <strong>{size}</strong>
                </p>
                <div
                  className="btn-group me-2"
                  role="group"
                  aria-label="First group"
                >
                  {product.size.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        setSize(s.toString());
                      }}
                    >
                      {s.toString()}
                    </button>
                  ))}
                </div>
                <a
                  href="#"
                  className="btn btn-primary w-50 ms-auto me-2 mt-4"
                  onClick={(e) => addToCart(e)}
                >
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small>{parse(product.longDesc)}</small>
    </div>
  );
};

export default SingleProduct;
