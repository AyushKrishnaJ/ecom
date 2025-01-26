import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
const ProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch products and their image data
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/products') // Fetch all products
      .then((response) => {
        const productsWithImages = response.data.map(async (product) => {
          const imageUrl = await fetchImage(product.id); // Fetch the image for each product
          return { ...product, imageUrl }; // Attach the image URL to the product object
        });

        // Wait for all image fetch requests to finish
        Promise.all(productsWithImages).then((productsWithImages) => {
          setProducts(productsWithImages); // Update state with products and images
          setLoading(false); // Stop loading once everything is fetched
        });
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  // Function to fetch product image using Axios
  const fetchImage = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/product/${productId}/image`, { responseType: 'arraybuffer' });
      const imageBlob = new Blob([response.data], { type: 'image/jpeg' }); // Convert the byte data to a Blob
      return URL.createObjectURL(imageBlob); // Generate a URL for the image Blob
    } catch (error) {
      console.error('Error fetching image:', error);
      return null; // Return null if there's an error
    }
  };

  // Function to handle product card click
  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the product detail page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem',  }}>
        <Navbar/>
      {products.map((product) => (
        <div
          key={product.id}
          className="Card"
          style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '1rem',
            marginLeft:'1rem',
            width: '200px',
            backgroundColor: '#f8f8f8', // Light background
            cursor: 'pointer',
          }}
          onClick={() => handleCardClick(product.id)}
        >
          <div className="ProductImage" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
          </div>
          <span
            className="ProductName"
            style={{
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '0.5rem',
              color: 'black', // Black text color
            }}
          >
            {product.name}
          </span>
          <span
            className="ProductBrand"
            style={{
              color: 'black', // Black text color
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            {product.brand}
          </span>
          <span
            className="ProductPrice"
            style={{
              fontSize: '1.2rem',
              color: 'black', // Black text color
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            ${product.price}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;
