import React, {useState, useEffect} from 'react';
import Card from './card';
import { Bars } from 'react-loading-icons'

function Cart(props) {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Bars className='loading' />
  } else {
      return (
      <div className="shopping">
        <h1>Shopping</h1>
        <div className='items'>
        </div>
      </div>
      );
  }
}

export default Cart;
