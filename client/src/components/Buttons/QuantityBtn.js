import React from 'react';
import './Buttons.css';

export const QuantityBtn = ({ children, type }) => (
  <div className="d-inline m-2">
    <i className={type === "plus" ? "fas fa-plus text-success" : "fas fa-minus text-danger"}></i>
  </div>
);