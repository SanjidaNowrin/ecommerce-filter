import React, { useState } from "react";
import { GrCart } from "react-icons/gr";
import { ImSmile2 } from "react-icons/im";
const ProductTable = ({ handleChecked, filterProducts }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col" style={{ width: "25%" }}>
              Name
            </th>
            <th scope="col">Size</th>
            <th scope="col">Stock</th>
            <th scope="col">Price</th>
            <th scope="col" className="text-end">
              Buy
            </th>
          </tr>
        </thead>

        {filterProducts?.map((product, index) => {
          const { name, img, price, id, stock, quantity, size } = product;
          return (
            <tbody key={id}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={img}
                    alt="product"
                    width={80}
                    className="img-fluid"
                  />
                </td>
                <td>{name}</td>
                <td>{size}</td>
                <td>
                  <ImSmile2 className="me-2" />
                  {stock}
                </td>
                <td>${price}</td>
                <td>
                  <div className="d-flex justify-content-around align-items-center">
                    {quantity}
                    <GrCart
                      onChange={(e) => handleChecked(e.target.checked.id)}
                    />
                    <input
                      type="checkbox"
                      value={id}
                      className="form-check-input"
                      onChange={handleChecked}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ProductTable;