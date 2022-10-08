import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut";
import { useState } from "react";
function App() {
  const [checkout, setCheckout] = useState([]);
  const [checkedProduct, setCheckedProduct] = useState([]);
  const [productQuantity, setQuantity] = useState([]);

  // checked function
  const handleChecked = (product) => {
    // const { product, checked } = e.target;
    if (product.checked) {
      const newCheck = [...checkedProduct, product];
      setCheckedProduct(newCheck);
    } else {
      setCheckedProduct([]);
    }
  };
  // cart function
  const handleCart = () => {
    setCheckout(checkedProduct);
  };
  console.log(checkedProduct);

  // handleQuantity
  const handleQuantity = (value) => {
    // console.log(value);

    const newCart = [...productQuantity, value];
    setQuantity(newCart);
  };

  // console.log(checkout);
  console.log(productQuantity);
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleQuantity={handleQuantity}
                handleCart={handleCart}
                // productQuantity={productQuantity}
                checkedProduct={checkedProduct}
                handleChecked={handleChecked}
              />
            }
          />

          <Route
            path="checkout"
            element={
              <CheckOut productQuantity={productQuantity} checkout={checkout} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
