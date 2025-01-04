import React, { useState, useEffect } from 'react';
import '../styles/ProductsPage.css';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="products-page">
      <h1>Products</h1>
      {loading ? <p>Loading...</p> : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <strong>${product.price}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductsPage;

