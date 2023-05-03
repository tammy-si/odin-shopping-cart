import React from 'react';
import { Link } from 'react-router-dom'

function Card({item}) {
  return (
    <Link to={`/shop/${ item.id }`}>
        <div className="item" key={item.id}>
            <img src={item.image} alt={item.title}></img>
            <p>{item.title}</p>
            <p>${item.price}</p>
        </div>
    </Link>
  );
}

export default Card;