import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import { useItemseStore } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Order from './pages/Order';

const App = () => {
  // const items = useItemseStore((state) => state.items);

  const remove = useItemseStore((state) => state.removeAllItems);
  const [itemName, setItemName] = useState('');

  const [openCart, setOpenCart] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Navbar openCart={openCart} setOpenCart={setOpenCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order" element={<Order />} />
        </Routes>
        {openCart && <Cart />}
      </BrowserRouter>
      {/* <form>
        <h1>Add new item to the cart:</h1>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button onClick={(e) => addToCart(e)}>Add to cart</button>
      </form>

      <button onClick={remove}>Remove all items</button> */}
    </>
  );
};

export default App;
