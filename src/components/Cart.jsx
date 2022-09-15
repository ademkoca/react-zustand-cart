import React, { useState } from 'react';
import { useItemseStore } from '../store';

const Cart = () => {
  const [openCart, setOpenCart] = useState(false);
  const items = useItemseStore((state) => state.items);
  let total = 0;
  items.forEach((item) => (total += item.itemPrice));
  // console.log(total);
  //   console.log(items);
  const removeItem = useItemseStore((state) => state.removeItem);
  return (
    // <div>
    //   Total items in the cart: {items.length}
    //   {openCart && (
    //     <div>
    //       {items.map((item) => (
    //         <div key={item.id}>
    //           <p>{item.itemName}</p>
    //           <span>
    //             <button onClick={() => removeItem(item.id)}>
    //               Remove from cart
    //             </button>
    //           </span>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    //   {items.length !== 0 && (
    //     <button onClick={() => setOpenCart((prev) => !prev)}>
    //       {!openCart ? 'Show' : 'Hide'} cart items
    //     </button>
    //   )}
    // </div>
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          Your Cart: ${total}
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
          <div
            className="card"
            style={{ width: '100%' }}
            key={item.id}
          >
            <img
              src={`images/${item.itemImg}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.itemName}</h5>
              <p className="card-text">{item.itemDesc}</p>
              <p className="card-text">${item.itemPrice}</p>
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
      </div>
    </div>
  );
};

export default Cart;
