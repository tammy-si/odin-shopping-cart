import React, {useState} from 'react';
import Nav from './components/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/about';
import Shopping from './components/shopping';
import Home from './components/home';
import './style.css'
import ItemDetails from './components/itemDetails';
import Cart from './components/cart';

function App() {
  const [cartItems, setCartItems] = useState([])
  
  const addItemToCart = (item) => {
    // check if the item is already in the cart
    // if so just increase quantity, else add it with a quanitiy of 1
    let check = cartItems.find(i => i.item.id === item.id)
    if (check !== undefined ) {
      check.quantity += 1;
      // update the state
      // if item isn't the one we modified leave it alone
      setCartItems([...cartItems.map(it => { return (it.item.id !== item.id) ? it : check})])
    } else {
      let newCartItem = {item: item, quantity: 1}
      setCartItems([...cartItems, newCartItem])
    }
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shopping />} />
          <Route path="/shop/:id" element={<ItemDetails addItemToCart={addItemToCart}/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
