import React from 'react'
import './cartcomponent.css';
import iPhoneImage from '../assets/iphone.png';
import Navbar from '../components/Navbar'
const CartComponent = () => {
  return (
    <>
      <Navbar />
      <div className="checkout_bar">
        <div className="items"><h2>Items:</h2><span>10</span></div>
        <div className="total"><h2>Total:</h2><span>$100</span></div>
        <button className="checkout">Checkout</button>
      </div>
      <h2 className='heading'>CART</h2>
      <div className='cart_section'>
        <div className="cart_card">
          <div className="leftimg">
            <div className="image"><img src={iPhoneImage} alt="dvhjksh" /></div>
            <h3 className='quantity'>Quantity</h3>
            <span><button><i class="minus ri-subtract-line"></i></button>1 <button><i class="plus ri-add-line"></i></button></span>
          </div>
          <div className="rightcart">
            <h2 className="name">Iphone</h2>
            <h3 className='price'>$5</h3>
            <button className="remove">Delete<i class="bin ri-delete-bin-line"></i></button>
            <button className='buynow'>Buy Now</button>
          </div>
        </div>
        <div className="cart_card">
          <div className="leftimg">
            <div className="image"><img src={iPhoneImage} alt="dvhjksh" /></div>
            <h3 className='quantity'>Quantity</h3>
            <span><button><i class="minus ri-subtract-line"></i></button>1 <button><i class="plus ri-add-line"></i></button></span>
          </div>
          <div className="rightcart">
            <h2 className="name">Iphone</h2>
            <h3 className='price'>$5</h3>
            <button className="remove">Delete<i class="bin ri-delete-bin-line"></i></button>
            <button className='buynow'>Buy Now</button>
          </div>
        </div>
        <div className="cart_card">
          <div className="leftimg">
            <div className="image"><img src={iPhoneImage} alt="dvhjksh" /></div>
            <h3 className='quantity'>Quantity</h3>
            <span><button><i class="minus ri-subtract-line"></i></button>1 <button><i class="plus ri-add-line"></i></button></span>
          </div>
          <div className="rightcart">
            <h2 className="name">Iphone</h2>
            <h3 className='price'>$5</h3>
            <button className="remove">Delete<i class="bin ri-delete-bin-line"></i></button>
            <button className='buynow'>Buy Now</button>
          </div>
        </div>
        <div className="cart_card">
          <div className="leftimg">
            <div className="image"><img src={iPhoneImage} alt="dvhjksh" /></div>
            <h3 className='quantity'>Quantity</h3>
            <span><button><i class="minus ri-subtract-line"></i></button>1 <button><i class="plus ri-add-line"></i></button></span>
          </div>
          <div className="rightcart">
            <h2 className="name">Iphone</h2>
            <h3 className='price'>$5</h3>
            <button className="remove">Delete<i class="bin ri-delete-bin-line"></i></button>
            <button className='buynow'>Buy Now</button>
          </div>
        </div>
        <div className="cart_card">
          <div className="leftimg">
            <div className="image"><img src={iPhoneImage} alt="dvhjksh" /></div>
            <h3 className='quantity'>Quantity</h3>
            <span><button><i class="minus ri-subtract-line"></i></button>1 <button><i class="plus ri-add-line"></i></button></span>
          </div>
          <div className="rightcart">
            <h2 className="name">Iphone</h2>
            <h3 className='price'>$5</h3>
            <button className="remove">Delete<i class="bin ri-delete-bin-line"></i></button>
            <button className='buynow'>Buy Now</button>
          </div>
        </div>
        <div className="cart_card">
          <div className="leftimg">
            <div className="image"><img src={iPhoneImage} alt="dvhjksh" /></div>
            <h3 className='quantity'>Quantity</h3>
            <span><button><i class="minus ri-subtract-line"></i></button>1 <button><i class="plus ri-add-line"></i></button></span>
          </div>
          <div className="rightcart">
            <h2 className="name">Iphone</h2>
            <h3 className='price'>$5</h3>
            <button className="remove">Delete<i class="bin ri-delete-bin-line"></i></button>
            <button className='buynow'>Buy Now</button>
          </div>
        </div>
        <div className="cart_card">
          <div className="leftimg">
            <div className="image"><img src={iPhoneImage} alt="dvhjksh" /></div>
            <h3 className='quantity'>Quantity</h3>
            <span><button><i class="minus ri-subtract-line"></i></button>1 <button><i class="plus ri-add-line"></i></button></span>
          </div>
          <div className="rightcart">
            <h2 className="name">Iphone</h2>
            <h3 className='price'>$5</h3>
            <button className="remove">Delete<i class="bin ri-delete-bin-line"></i></button>
            <button className='buynow'>Buy Now</button>
          </div>
        </div>
        <div className="cart_card">
          <div className="leftimg">
            <div className="image"><img src={iPhoneImage} alt="dvhjksh" /></div>
            <h3 className='quantity'>Quantity</h3>
            <span><button><i class="minus ri-subtract-line"></i></button>1 <button><i class="plus ri-add-line"></i></button></span>
          </div>
          <div className="rightcart">
            <h2 className="name">Iphone</h2>
            <h3 className='price'>$5</h3>
            <button className="remove">Delete<i class="bin ri-delete-bin-line"></i></button>
            <button className='buynow'>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartComponent
