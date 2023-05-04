import React, {useState, useEffect} from 'react';
import Card from './card';
import { Bars } from 'react-loading-icons'

function Cart({cartItems, increaseQuantity, decreaseQuantity}) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

    return (
    <div className="shopping">
    <h1>Cart</h1>
    <div className='items'>
        {cartItems.map(i => {
            return (
            <div className='cart-item' key={i.item.id}>
                <img src={i.item.image} alt={i.item.title}></img>
                <p>{i.item.title}</p>
                <p>{formatter.format(i.item.price)}</p>
                <div className="quantity">
                    <button onClick={()=> decreaseQuantity(i)}>-</button>
                    <p>{i.quantity}</p>
                    <button onClick={()=>increaseQuantity(i)}>+</button>
                </div>
            </div>
            )
        })}
    </div>
    </div>
    );
}

export default Cart;
