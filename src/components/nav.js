import React from 'react';
import { Link } from 'react-router-dom'

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
                <Link to="/shopping">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;