import React, { useState, useEffect } from "react";
import products from "../../fakeData/products.json";
const CheckOut = ({ checkout }) => {
  console.log(checkout);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const cart = products.filter(({ id, name, price }) =>
      checkout.includes(id)
    );
    setCartProduct(cart);
  }, [checkout]);

  console.log(cartProduct);
  return (
    <div>
      {cartProduct?.map((v) => (
        <div>{v.name}</div>
      ))}
    </div>
  );
};

export default CheckOut;
