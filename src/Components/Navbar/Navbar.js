import React from "react";
import { BiUndo } from "react-icons/bi";
import { Link } from "react-router-dom";
const category = [
  "Sneaker",
  "Pant",
  "Boot",
  "Shirt",
  "Bag",
  "Cap",
  "Earphone",
  "Bottle",
];
const size = ["S", "M", "L", "XL"];
const Navbar = ({
  setSize,
  setCategory,
  setSearch,
  handleReset,
  handleCart,
  checkedProduct,
  setCheckout,
}) => {
  return (
    <div className="row mb-4 mt-4">
      <div className="col-md-6 justify-content-start d-flex align-items-center">
        {/* categories options */}
        <select
          className="rounded p-1 me-3"
          onChange={(e) => setCategory(e.target.value)}
        >
          {category?.map((c, index) => (
            <option key={index} value={c}>
              {c}
            </option>
          ))}
        </select>
        {/* size options */}
        <select
          className="rounded p-1"
          onChange={(e) => setSize(e.target.value)}
        >
          {size?.map((s, index) => (
            <option key={index} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button className="btn btn ms-1" onClick={handleReset}>
          <BiUndo /> Reset
        </button>
      </div>
      <div className="col-md-6 justify-content-end d-flex align-items-center">
        <p className="mb-0 me-2">Search:</p>
        <input
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "40%" }}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <Link to="checkout">
          <button
            className="btn btn-outline-success p-1 rounded-0"
            onClick={handleCart}
          >
            Add To Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
