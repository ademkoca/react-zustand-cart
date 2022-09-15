import React, { useState } from 'react';
import { useItemseStore } from '../store';

const Cart = () => {
  const [openCart, setOpenCart] = useState(false);
  const items = useItemseStore((state) => state.items);
  //   console.log(items);
  const removeItem = useItemseStore((state) => state.removeItem);
  return (
    <div>
      Total items in the cart: {items.length}
      {openCart && (
        <div>
          {items.map((item) => (
            <div key={item.id}>
              <p>{item.itemName}</p>
              <span>
                <button onClick={() => removeItem(item.id)}>
                  Remove from cart
                </button>
              </span>
            </div>
          ))}
        </div>
      )}
      {items.length !== 0 && (
        <button onClick={() => setOpenCart((prev) => !prev)}>
          {!openCart ? 'Show' : 'Hide'} cart items
        </button>
      )}
    </div>
  );
};

export default Cart;
