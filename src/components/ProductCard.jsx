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

  const openInstagram = () => {
    window.open("https://www.instagram.com/", "_blank");
  };

  const openSnapchat = () => {
    window.open("https://www.snapchat.com/", "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(product.url).then(() => {
      alert("Product link copied to clipboard!");
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
          <button onClick={shareOnWhatsApp} title="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </button>
          <button onClick={shareOnFacebook} title="Facebook">
            <i className="fab fa-facebook"></i>
          </button>
          <button onClick={openInstagram} title="Instagram">
            <i className="fab fa-instagram"></i>
          </button>
          <button onClick={openSnapchat} title="Snapchat">
            <i className="fab fa-snapchat"></i>
          </button>
          <button onClick={copyToClipboard} title="Copy Link">
            <i className="fas fa-link"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
