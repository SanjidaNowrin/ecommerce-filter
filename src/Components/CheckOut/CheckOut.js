import React, { useState, useEffect } from "react";
import CheckOutTable from "./CheckOutTable";
import CheckOutCart from "./CheckOutCart";
const CheckOut = ({ checkout, productQuantity }) => {
  // console.log(checkout);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    // const cart = checkout.filter(({ id, name, price }) =>
    //   productQuantity.includes(id)
    // );
    const result = checkout.map((itemA) => {
      return productQuantity
        .filter((itemB) => itemB.id === itemA.id)
        .reduce((combo, item) => ({ ...combo, ...item }), {
          name: itemA.name,
          img: itemA.img,
          price: itemA.price,
          quantity: "",
        });
    });

    console.log(result);
    setCartProduct(result);
  }, [checkout, productQuantity]);

  // increase product
  const handleIncrement = (productId) => {
    setCartProduct((cartProduct) =>
      cartProduct.map((item) =>
        productId === item.id
          ? {
              ...item,
              quantity:
                parseInt(item.quantity) +
                (parseInt(item.quantity) > parseInt(0) ? 1 : 0),
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
              quantity:
                parseInt(item.quantity) -
                (parseInt(item.quantity) > parseInt(1) ? 1 : 0),
            }
          : item
      )
    );
  };
  // count subtotal
  const total = cartProduct.map((item) => {
    return item.quantity * parseInt(item.price);
  });
  const sum = total.reduce((a, b) => a + b, 0);

  // delete product
  const handleDelete = (productId) => {
    const deleteItem = cartProduct.filter((c) => c.id !== productId);
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
