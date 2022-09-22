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
import Categories from './pages/Categories';
import Category from './pages/Category';
import Collections from './pages/Collections';
import Collection from './pages/Collection';
import Error from './pages/Error';
import { Helmet } from 'react-helmet';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

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
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:cat" element={<Category />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collection/:col" element={<Collection />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile/:username" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {openCart && <Cart />}
        {/* </Helmet> */}
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
