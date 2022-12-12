import React, { useState } from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { delCart } from "../Redux/actions/action";
import { useSelector } from "react-redux";

const getCartData = () => {
  const data = localStorage.getItem("cartData");
  // console.log(data);
  if (data) {
    return JSON.parse(data);
  } else return [];
};

const Cart = () => {
  const [newData, setNewData] = useState(getCartData());
  const [cartDataa, setCartDataa] = useState([]); // to cart component
  const state = useSelector((state) => state.addItem);

  // console.log("newData", newData);

  const dispatch = useDispatch();

  const handleRemoceFromCart = (e) => {
    dispatch(delCart(e));
    console.log(e.target.value);
  };

  const cartItem =(props)=>{
    return(
      // <div  key={props.id}>
      <tr>
        <td>
          <div className="cart-info" key={props.id}>
            <img src={props.ProductImg} alt="Product" className="ItemImages1" />
          </div>
        </td>
        <td>
          <p>{props.itemName}</p>
        </td>
        <td>{props.qty}</td>
        <td>{props.price}</td>

        <td>
          <button
            className="remove"
            onClick={() => handleRemoceFromCart(props)}
          >
            Remove
          </button>
        </td>
      </tr>
      // </div>
    );

    }


  return (
    <>
      <div className="containor_cart">
        <table width="100%">
          <thead>
            <tr>
              <th>Product Image</th>
              <th> Item Name</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {newData.map(cartItem)}
              
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" align="right">
                Total
              </td>
              <td>{newData.price}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};
export default Cart;
