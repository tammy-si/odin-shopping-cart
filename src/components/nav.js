import React from 'react';
import { Link } from 'react-router-dom'
import cart_img from './cart.png';

function Nav() {
    return (
        <nav>
            <Link to="/">
                <h3>Fake Store</h3>
            </Link>
            <ul>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                <img 
                    src={cart_img}
                    className='cart-icon'
                    alt="shopping cart"/>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;