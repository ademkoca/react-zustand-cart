import React, { useState } from 'react';
import { useItemseStore } from '../store';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [openCart, setOpenCart] = useState(false);
  const items = useItemseStore((state) => state.items);
  // console.log(items[0].itemImg);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  let total = 0;
  items.forEach((item) => (total += item.itemPrice * item.qty));
  // console.log(total);
  // console.log(items);
  const removeItem = useItemseStore((state) => state.removeItem);
  return (
    <div
      className={`offcanvas offcanvas-end ${openCart ? 'show' : ''}`}
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          Your cart{total === 0 ? ' is empty' : ': $' + total}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        {items.map((item) => (
          <div className="card my-3" style={{ width: '100%' }} key={item.id}>
            <img
              src={item.itemImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.itemName}</h5>
              <p className="card-text">{item.itemDesc}</p>
              <p className="card-text mb-0">
                Price: <strong>${item.itemPrice}</strong>
              </p>

              <p className="card-text mb-0">
                Qty: <strong>x{item.qty}</strong>
              </p>
              <p className="card-text">
                Size: <strong>{item.size}</strong>
              </p>
              <h4 className="card-text mb-5">
                Total: ${item.itemPrice * item.qty}
              </h4>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeItem(item.id)}
              >
                Remove from cart
              </button>
            </div>
          </div>
        ))}
        {total !== 0 && (
          <Link
            onClick={() => setOpenCart(false)}
            to="/checkout"
            className="btn btn-success w-100"
          >
            Proceed to checkout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
