import React from "react";

const CheckOutTable = ({
  cartProduct,
  productQuantity,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ width: "5%" }}>
              #
            </th>
            <th scope="col" style={{ width: "50%" }}>
              Product
            </th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>

        {cartProduct?.map((product, index) => {
          const { name, img, price, id, value } = product;
          return (
            <tbody key={id}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td className="d-flex align-items-center ">
                  <img
                    src={img}
                    alt="product"
                    width={80}
                    className="img-fluid"
                  />
                  <h6 className="text-start ms-3">{name}</h6>
                </td>

                <td>${price}</td>
                <td>
                  <div className="input-group">
                    <button
                      type="button"
                      className="input-group-text"
                      onClick={() => handleDecrement(id)}
                    >
                      -
                    </button>
                    <div className="form-control text-center">{value}</div>
                    <button
                      type="button"
                      className="input-group-text"
                      onClick={() => handleIncrement(id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${value * parseInt(price)}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default CheckOutTable;
