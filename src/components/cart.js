import React, {useState, useEffect} from 'react';
import Card from './card';
import { Bars } from 'react-loading-icons'

function Cart({cartItems, increaseQuantity, decreaseQuantity}) {
  const [cost, setCost] = useState(0);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    calculateTotalCost();
  })

  // calculate the total cost in the cart
  const calculateTotalCost = () => {
    let totalCost = cartItems.reduce(function(a, b) {
      return a + b.quantity * b.item.price;
    }, 0);
    setCost(totalCost);
  }

  return (
  <div className="shopping">
  <h1>Cart</h1>
  <div className='cart-items'>
      {cartItems.map(i => {
          return (
          <div className='cart-item' key={i.item.id}>
              <img src={i.item.image} alt={i.item.title}></img>
              <div class="cart-item-info">
                <p>{i.item.title}</p>
                <p>{formatter.format(i.item.price)}</p>
                <div className="quantity">
                    <button onClick={()=> decreaseQuantity(i)}>-</button>
                    <p>{i.quantity}</p>
                    <button onClick={()=>increaseQuantity(i)}>+</button>
                </div>
              </div>
          </div>
          )
      })}
      <div className='checkout'>
        <button>Checkout</button>
        <p>Total: {formatter.format(cost)}</p>
      </div>
  </div>
  </div>
  );
}

export default Cart;
