// src/components/ProductCard.jsx
import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [showShare, setShowShare] = useState(false);

  const toggleShare = () => {
    setShowShare(!showShare);
  };

  const shareOnWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(product.url)}`;
    window.open(url, "_blank");
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(product.url)}`;
    window.open(url, "_blank");
  };

  const copyLink = (platform) => {
    navigator.clipboard.writeText(product.url).then(() => {
      alert(`Link copied! You can paste it in ${platform}.`);
    });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="share-icon" onClick={toggleShare}>
        <i className="fas fa-share-alt"></i>
      </div>

      {showShare && (
        <div className="share-options">
          <button onClick={shareOnWhatsApp}><i className="fab fa-whatsapp"></i></button>
          <button onClick={shareOnFacebook}><i className="fab fa-facebook"></i></button>
          <button onClick={() => copyLink('Instagram')}><i className="fab fa-instagram"></i></button>
          <button onClick={() => copyLink('Snapchat')}><i className="fab fa-snapchat"></i></button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
