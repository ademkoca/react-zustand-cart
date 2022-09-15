import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import { useItemseStore } from './store';

function App() {
  // const items = useItemseStore((state) => state.items);

  const increase = useItemseStore((state) => state.addToCart);
  const remove = useItemseStore((state) => state.removeAllItems);
  const [itemName, setItemName] = useState('');
  const addToCart = (e) => {
    e.preventDefault();
    if (!itemName) return alert('Please add item name');
    increase({
      id: Math.ceil(Math.random() * 1000000),
      itemName: itemName,
    });
    setItemName('');
  };
  return (
    <>
      <div className="App">
        <Cart />
      </div>
      <form>
        <h1>Add new item to the cart:</h1>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button onClick={(e) => addToCart(e)}>Add to cart</button>
      </form>
      {/* <button onClick={increase}>Increase</button> */}
      <button onClick={remove}>Remove all items</button>
      {/* <button onClick={() => localStorage.clear()}>Clear local storage</button> */}
    </>
  );
}

export default App;
