import React from "react";
import { GrCart } from "react-icons/gr";
import { ImSmile2 } from "react-icons/im";
const ProductTable = ({
  handleChecked,
  filterProducts,
  handleQuantity,
  productQuantity,
}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col" style={{ width: "30%" }}>
              Name
            </th>
            <th scope="col">Size</th>
            <th scope="col">Stock</th>
            <th scope="col">Price</th>
            <th scope="col" className="text-end" style={{ width: "25%" }}>
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
                  <div className="text-success">
                    <ImSmile2 className="me-2" />
                    {stock}
                  </div>
                </td>
                <td>${price}</td>
                <td>
                  <div className="d-flex justify-content-evenly align-items-center">
                    <input
                      size={1}
                      defaultValue="1"
                      type="number"
                      onBlur={(e) =>
                        handleQuantity({
                          quantity: e.target.value,
                          id: id,
                          name: name,
                          price: price,
                          img: img,
                        })
                      }
                    />
                    <GrCart
                      onChange={(e) =>
                        handleChecked({ value: e.target.checked.id, id: id })
                      }
                    />
                    <input
                      type="checkbox"
                      // value={{ id: id, name: name, price: price, img: img }}
                      className="form-check-input"
                      onChange={(e) =>
                        handleChecked({
                          value: e.target.value,
                          checked: e.target.checked,
                          id: id,
                          name: name,
                          price: price,
                          img: img,
                          // productQuantity: productQuantity.quantity,
                        })
                      }
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
