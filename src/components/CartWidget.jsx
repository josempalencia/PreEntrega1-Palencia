import React from "react";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="badge bg-danger rounded-pill">3</span>
    </div>
  );
};

export default CartWidget;