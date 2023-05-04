import React, {useState, useEffect} from 'react';
import Card from './card';
import { Bars } from 'react-loading-icons'

function Cart({cartItems, increaseQuantity, decreaseQuantity}) {
    
  const [loading, setLoading] = useState(true);
    console.log(cartItems)
//   if (loading) {
//     return <Bars className='loading' />
//   } else {
      return (
      <div className="shopping">
        <h1>Cart</h1>
        <div className='items'>
            {cartItems.map(item => {
                return (
                <div className='cart-item' key={item.item.id}>
                    <p>{item.item.title}</p>
                    <div className="quantity">
                        <button onClick={()=> decreaseQuantity(item)}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={()=>increaseQuantity(item)}>+</button>
                    </div>
                </div>
                )
            })}
        </div>
      </div>
      );

}

export default Cart;
