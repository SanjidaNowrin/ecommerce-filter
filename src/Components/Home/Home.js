import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ProductTable from "../ProductTable/ProductTable";
import Products from "../../fakeData/products.json";

const Home = ({
  handleChecked,
  handleQuantity,
  handleCart,
  checkedProduct,
  // productQuantity,
}) => {
  const [products, setProducts] = useState(Products);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [search, setSearch] = useState("");

  // filters function

  var updateData = products;
  const filterData = () => {
    if (category) {
      updateData = updateData.filter((f) => f.category === category);
    }
    if (size) {
      updateData = updateData.filter((f) => f.size === size);
    }
    if (search) {
      updateData = updateData.filter((f) =>
        f.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    // if (size === "All") {
    //   updateData = updateData.filter((s) => s.category === category);
    // }
    // if (category === "Categories") {
    //   updateData = updateData.filter((c) => c.size === size);
    // }
    // if (size === "All" && category === "Categories") {
    //   updateData = products;
    // }
    // console.log(updateData);
    setFilterProducts(updateData);
  };
  useEffect(() => {
    filterData();
  }, [category, size, updateData, products, search]);

  // reset button
  const handleReset = () => {
    setFilterProducts(products);
  };

  return (
    <div>
      {/* navbar filter */}
      <Navbar
        checkedProduct={checkedProduct}
        setCategory={setCategory}
        handleReset={handleReset}
        setSize={setSize}
        setSearch={setSearch}
        handleCart={handleCart}
      />
      {/* product table filter */}
      <ProductTable
        // productQuantity={productQuantity}
        handleQuantity={handleQuantity}
        filterProducts={filterProducts}
        products={products}
        handleChecked={handleChecked}
      />
    </div>
  );
};

export default Home;
