import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ProductTable from "../ProductTable/ProductTable";
import Products from "../../fakeData/products.json";

const Home = ({
  handleChecked,
  handleQuantity,
  handleCart,
  checkedProduct,
  productQuantity,
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
    if (size === "Size" && category) {
      updateData = updateData.filter(
        (c) => c.category === category && size === c.size
      );
    }
    if (category === "Categories" && size) {
      updateData = updateData.filter(
        (s) => s.size === size && category === s.category
      );
    }
    if (size === "Size" && category === "Categories") {
      updateData = products;
    }
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
        handleQuantity={handleQuantity}
        filterProducts={filterProducts}
        products={products}
        handleChecked={handleChecked}
        productQuantity={productQuantity}
      />
    </div>
  );
};

export default Home;
