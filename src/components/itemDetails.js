import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function ItemDetails() {
  const [item, setItem] = useState({})
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

      // fetch certain item from fake store api
  const fetchItem = async () => {
    fetch(`https://fakestoreapi.com/products/${ id }`)
    .then(res=>res.json())
    .then(json=> {setItem(json)})
  }

  return (
    <div className="item-details">
      <img src={item.image} alt={item.title}></img>
      <div class="info">
        <h1>{ item.title }</h1>
        <p>${ item.price }</p>
        <p>{ item.description}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ItemDetails;