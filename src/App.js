import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut";
import { useState } from "react";

function App() {
  const [checkout, setCheckout] = useState([]);
  const [checkedProduct, setCheckedProduct] = useState([]);
  // checked function
  const handleChecked = (e) => {
    const { value, checked } = e.target;
    // const { product } = checkedProduct;
    // console.log(`${value} is ${checked}`);
    if (checked) {
      setCheckedProduct([...checkedProduct, value]);
    } else {
      setCheckedProduct(checkedProduct.filter((e) => e !== value));
    }
  };
  console.log(checkedProduct);
  const handleCart = () => {
    setCheckout(checkedProduct);
  };
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleCart={handleCart}
                checkedProduct={checkedProduct}
                handleChecked={handleChecked}
              />
            }
          />

          <Route path="checkout" element={<CheckOut checkout={checkout} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
