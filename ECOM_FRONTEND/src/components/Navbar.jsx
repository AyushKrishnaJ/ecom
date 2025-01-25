import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <header className='header'>
            <h1>TAAS</h1>
            <div className="searchbar">
                <input type="text" placeholder='Search Products' />
                <button className="search"><i class="ri-search-line"></i></button>
            </div>
            <nav>
                <div className="cart">
                    <i class="ri-shopping-cart-line"></i>
                    <span>Cart</span>
                </div>
                <div className="user">
                    <i class=" user ri-user-line"></i>
                    <span>Accounts<i class=" downri-arrow-drop-down-line"></i></span>
                </div>
            </nav>

        </header>
    )
}

export default Navbar