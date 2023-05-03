import React, {useState, useEffect} from 'react';
import Card from './card';

function Shopping() {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    fetchItems();
  },[]);

  // fetch from fake store api
  const fetchItems = async () => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> {setItems(json)})
}

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

export default Shopping;
