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
  const handleChecked = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedProduct([...checkedProduct, value]);
    } else {
      setCheckedProduct(checkedProduct.filter((e) => e !== value));
    }
  };
  // cart function
  const handleCart = () => {
    setCheckout(checkedProduct);
  };
  // console.log(checkedProduct);

  // handleQuantity
  const handleQuantity = (value) => {
    // console.log(value);

    const newCart = [...productQuantity, value];
    setQuantity(newCart);
  };

  // console.log(productQuantity);
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
