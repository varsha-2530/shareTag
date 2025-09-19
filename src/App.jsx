// src/App.jsx
import React from 'react';
import ProductCard from './components/ProductCard';
import products from './data/products';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default App;
