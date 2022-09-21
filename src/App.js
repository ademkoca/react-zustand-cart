import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import { useItemseStore } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Order from './pages/Order';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import { Helmet } from 'react-helmet';

const App = () => {
  // const items = useItemseStore((state) => state.items);

  const remove = useItemseStore((state) => state.removeAllItems);
  const [itemName, setItemName] = useState('');

  const [openCart, setOpenCart] = useState(true);
  return (
    <>
      {/* <Helmet> */}
      <BrowserRouter>
        <Navbar openCart={openCart} setOpenCart={setOpenCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order" element={<Order />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {openCart && <Cart />}
      </BrowserRouter>
      {/* </Helmet> */}
    </>
  );
};

export default App;
