import React, { useState, useEffect } from 'react';
import './cartcomponent.css';
import iPhoneImage from '../assets/iphone.png';
import Navbar from '../components/Navbar';
import axios from 'axios';

const CartComponent = () => {
  // State to store products and cart
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
  // Fetch products data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  // Add or update the product quantity in the cart
  const updateQuantity = (productId, action) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: action === 'add' ? item.quantity + 1 : item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      <Navbar />
      <div className="checkout_bar">
        <div className="items"><h2>Items:</h2><span>{cart.length}</span></div>
        <div className="total"><h2>Total:</h2><span>${cart.reduce((total, item) => total + (item.price * item.quantity), 0)}</span></div>
        <button className="checkout">Checkout</button>
      </div>
      <h2 className="heading">CART</h2>
      <div className="cart_section">
        {cart.map((item) => (
          <div className="cart_card" key={item.id}>
            <div className="leftimg">
              <div className="image">
                <img src={iPhoneImage} alt={item.name} />
              </div>
              <h3 className="quantity">Quantity</h3>
              <span>
                <button onClick={() => updateQuantity(item.id, 'subtract')}><i className="minus ri-subtract-line"></i></button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, 'add')}><i className="plus ri-add-line"></i></button>
              </span>
            </div>
            <div className="rightcart">
              <h2 className="name">{item.name}</h2>
              <h3 className="price">${item.price}</h3>
              <button className="remove" onClick={() => removeFromCart(item.id)}>
                Delete<i className="bin ri-delete-bin-line"></i>
              </button>
              <button className="buynow">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartComponent;
