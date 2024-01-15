import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Product.css';

const Product = ({ product }) => {
  const { id, name, price, image } = product;
  const [hovered, setHovered] = useState(false);

  return (
    <div className="text-center m-4 relative product-container">
      <Link to={`/item/${product.id}`}>
        <div
          className="max-w-full h-auto mb-4 rounded-lg product-image-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-auto rounded-lg product-image"
          />
          {hovered && (
            <div className="absolute inset-0 bg-black bg-opacity-75 transition-opacity duration-300 flex flex-col justify-center items-center product-overlay">
              <h3 className="text-lg font-semibold mb-2 text-white" style={{ fontFamily: 'Race, san-serif' }}>{name}</h3>
              <p className="text-white">Precio: ${price}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Product;




