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
  const state = useSelector((state) => state.addItem);

  // console.log("newData", newData);

  const handleRemoceFromCart = (id) => {
    const updatedItems= newData.filter((elem)=>{
return elem.id !== id
    })
    
    setNewData([updatedItems]);

  };

  const cartItem =(props)=>{
    return(
  
      <tr>
        <td>
          <div className="cart-info" key={props.id}>
          {console.log(props.id)}
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
            onClick={() => handleRemoceFromCart(props.id)}
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
             
             
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};
export default Cart;
