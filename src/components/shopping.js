import React, {useState, useEffect} from 'react';
import Card from './card';
import { Bars } from 'react-loading-icons'

function Shopping() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchItems();
    setTimeout(() => setLoading(false), 200);
  },[]);

  // fetch from fake store api
  const fetchItems = async () => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> {setItems(json)})
  }

  if (loading) {
    return <Bars className='loading' />
  } else {
      return (
      <div className="shopping">
        <h1>Shopping</h1>
        <div className='items'>
        {items.map((item) => {
          return <Card item = {item}/>
        })}
        </div>
      </div>
      );
  }
}

export default Shopping;
