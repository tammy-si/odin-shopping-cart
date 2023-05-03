import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Bars } from 'react-loading-icons'


function ItemDetails() {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
    setTimeout(() => setLoading(false), 350);
  }, []);

      // fetch certain item from fake store api
  const fetchItem = async () => {
    fetch(`https://fakestoreapi.com/products/${ id }`)
    .then(res=>res.json())
    .then(json=> {setItem(json)})
  }

  if (loading) {
    return <Bars className='loading' />
  } else {
    return (
      <div className="item-details">
        <img src={item.image} alt={item.title}></img>
        <div className="info">
          <h1>{ item.title }</h1>
          <p>${ item.price }</p>
          <p>{ item.description}</p>
          <button>Add to cart</button>
        </div>
      </div>
    );  
  }
}

export default ItemDetails;