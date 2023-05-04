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

  // increase the amount of a single item user wants to buy
  const increaseQuantity = (item) => {
    let updatedItem = cartItems.find(i => i === item)
    updatedItem.quantity += 1;
    // now set state
    setCartItems([...cartItems.map(it => {return (it !== item) ? it : updatedItem})])
  }

  // decrease the amount of a single item user wants to buy
  const decreaseQuantity = (item) => {
    let updatedItem = cartItems.find(i => i === item)
    updatedItem.quantity -= 1;
    // if the item's quantity is zero, just remove it from the cartItems list, eelse update it as normal
    if (updatedItem.quantity <= 0) {
      // note yes it is item.item which is kind of confusing. But that's because the item is an object with keys of item and quantity. the item key holds the item info
      setCartItems([...cartItems.filter(it => it.item.id !== item.item.id)])
    } else {
      setCartItems([...cartItems.map(it => {return (it.item.id !== item.item.id) ? it : updatedItem})])
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
          <Route path="/cart" element={<Cart cartItems={cartItems} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
