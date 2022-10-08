import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const CheckOutTable = ({
  cartProduct,
  productQuantity,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  return (
    <div>
      {cartProduct.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{ width: "50%" }}>
                Product
              </th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          {cartProduct?.map((product, index) => {
            const { name, img, price, id, quantity, value } = product;
            return (
              <tbody key={id}>
                <tr>
                  <td className="d-flex align-items-center ">
                    <AiOutlineClose
                      onClick={() => handleDelete(id)}
                      className="me-3"
                    />
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
                      <div className="form-control text-center">{quantity}</div>
                      <button
                        type="button"
                        className="input-group-text"
                        onClick={() => handleIncrement(id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${quantity * parseInt(price)}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        <div>
          <h1>Didn't select any product</h1>
        </div>
      )}
      {/* </table> */}
    </div>
  );
};

export default CheckOutTable;
