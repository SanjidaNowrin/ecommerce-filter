import React from "react";

const CheckOutCart = ({ sum }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Cart totals</h4>

        <p className="card-text">Subtotal :{sum}</p>
        <hr />
        <h6>Total: {sum}</h6>
      </div>
    </div>
  );
};

export default CheckOutCart;
