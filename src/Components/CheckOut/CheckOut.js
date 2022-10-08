import React, { useState, useEffect } from "react";
import CheckOutTable from "./CheckOutTable";
import CheckOutCart from "./CheckOutCart";
const CheckOut = ({ checkout, productQuantity }) => {
  // console.log(checkout);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const cart = productQuantity.filter(({ id, name, price }) =>
      checkout.includes(id)
    );
    setCartProduct(cart);
  }, [checkout, productQuantity]);

  // increase product
  const handleIncrement = (productId) => {
    setCartProduct((cartProduct) =>
      cartProduct.map((item) =>
        productId === item.id
          ? {
              ...item,
              value:
                parseInt(item.value) +
                (parseInt(item.value) > parseInt(1) ? 1 : 0),
            }
          : item
      )
    );
  };
  // decrease product
  const handleDecrement = (productId) => {
    setCartProduct((cartProduct) =>
      cartProduct.map((item) =>
        productId === item.id
          ? {
              ...item,
              value:
                parseInt(item.value) -
                (parseInt(item.value) > parseInt(1) ? 1 : 0),
            }
          : item
      )
    );
  };
  // count subtotal
  const total = cartProduct.map((item) => {
    return item.value * parseInt(item.price);
  });
  const sum = total.reduce((a, b) => a + b, 0);

  // delete product
  const handleDelete = (productId) => {
    const deleteItem = cartProduct.filter((c) => c.id === productId);
    setCartProduct(deleteItem);
  };
  return (
    <div className="row mt-5 gx-5">
      <div className="col-md-8">
        <CheckOutTable
          handleDelete={handleDelete}
          cartProduct={cartProduct}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </div>
      <div className="col-md-4">
        <CheckOutCart sum={sum} />
      </div>
    </div>
  );
};

export default CheckOut;
