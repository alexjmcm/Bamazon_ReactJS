import React from 'react';
import './Buttons.css';

export const QuantityBtn = ({ children, type, product, handleUpdateQuantity }) => (
  <div onClick={() => handleUpdateQuantity(product, type)} className="d-inline m-2">
    <i className={type === "plus" ? "fas fa-plus text-success" : "fas fa-minus text-danger"}></i>
  </div>
);