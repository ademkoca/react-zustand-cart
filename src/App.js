import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useItemseStore } from './store';

const App = () => {
  // const items = useItemseStore((state) => state.items);

  
  const remove = useItemseStore((state) => state.removeAllItems);
  const [itemName, setItemName] = useState('');
  
  const [openCart, setOpenCart] = useState(true);
  return (
    <>
      <Navbar openCart={openCart} setOpenCart={setOpenCart} />
      <Home />
      {openCart && <Cart />}
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
