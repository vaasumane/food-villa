import React from 'react';
import AppLogo from '../assets/food-villa-logo.jpg';
import cartLogo from '../assets/cart.png';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="header">
                <div>
                    <Link to="/">
                        <img src={AppLogo} className='header-logo' />
                    </Link>
                </div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    {/* <li><Link to='/contact'>Contact</Link></li> */}
                    <li className='d-flex'><img src={cartLogo} className='cart-logo' />Cart</li>
                    {/* <li>Cart</li> */}
                </ul>
            </div>
        </>
    );
}

export default Header;
