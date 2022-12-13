import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../Redux/actions/action";
import "./Details.css";
import CardsData from "./CardsData";

const Details = () => {
  const [cartData, setCartData] = useState([]); // to cart component
  const proid = useParams();
  const proDetails = CardsData.filter((x) => x.id == proid.id);
  const product = proDetails[0];

  const dispatch = useDispatch();
  //cart button
  const addProduct = (e) => {
    dispatch(addCart(e));
    setCartData([...cartData,e]);
  };

  //Saving data to Local Storage

  useEffect(() => {
    const data = localStorage.getItem("cartData");
    if (data) {
      // console.log("data",data)

    }
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <>
      <div className="containor">
        <div className="img">
          <img
            src={`../${product.ProductImg}`}
            alt="image"
            className="ItemImages"
          />
        </div>
        <div className="details">
          <u>
            <h3>Item Detail</h3>
          </u>
          <p> {product.Description}</p>
          <p>
            
            <h3>{product.itemName}</h3>
          </p>
          <br />
          <input type="text" className="Quantity" value={product.qty} />
          &nbsp;
          <br />
          <br />
          <b>
            <p>Price : ₹ {product.price}</p>
          </b>
          <br />
          <button onClick={() => addProduct(product)} className="btn">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
