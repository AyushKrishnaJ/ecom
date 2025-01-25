import React, { useState } from 'react';

export const ProductComponent = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Smartphone X",
      brand: "TechBrand",
      price: "$799.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      brand: "SoundBrand",
      price: "$199.99",
      image: "/samsung galaxy.webp",
    },
  ]);

  const addProduct = (productId) => {
    alert(`Added product with ID: ${productId} to cart`);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap :"2rem",margin:"2rem" }}>
      {products.map((product) => (
        <div className="Card" key={product.id} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '1rem', width: '200px' }}>
          <div className="ProductImage" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          </div>
          <span className="ProductName" style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
            {product.name}
          </span>
          <span className="ProductBrand" style={{ color: '#555', display: 'block', marginBottom: '0.5rem' }}>
            {product.brand}
          </span>
          <span className="ProductPrice" style={{ fontSize: '1.2rem', color: '#333', display: 'block', marginBottom: '1rem' }}>
            {product.price}
          </span>
          <button
            onClick={() => addProduct(product.id)}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
