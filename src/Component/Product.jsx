import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CardsData from "./CardsData";
// import styled from 'styled-components'
import "./Product.css";
import { addCart } from "../Redux/actions/action";
import { NavLink } from "react-router-dom";
// import { Connect } from 'react-redux'
// import Cart from './Cart'

const Product = () => {
  const [data, setData] = useState(CardsData);
  // const [cartData, setCartData] = useState([]); // to cart component
  
  // console.log(cartData);
  //  console.log(data)

  // const dispatch = useDispatch(); 

  //cart button
  // const addProduct = (e) => {
  //   dispatch(addCart(e));
  //   setCartData([...cartData, e]);
  // };

  // {cartItem.map((item)=>{
  //   <Cart />
  // })}

  //Saving data to Local Storage

  // useEffect(() => {
  //   localStorage.setItem("cartData", JSON.stringify(cartData));
  // }, [cartData]);
  const cardItem =(val)=>{
    return(
      <div className="card cart_responsive" key={val.id}>
  
                <img src={val.ProductImg} alt="image" className="card_img responsive" />
                <div className="card_info">
                  <span className="card_category">{val.Description} </span>
                  <br />
                  <h4>{val.itemName}</h4>
                  <h4 className="card_price">₹ {val.price}.00</h4>
                  <a href="" target="_blank" />
                   {/* <button onClick={() => addProduct(val)} className="btn">
                    Add to cart
                  </button>  */}
                  <div className="Details">
                      <NavLink to={`/details/${val.id}`}> Details</NavLink>
                  </div>
                </div>
              </div> 
    )
  }

  return (
    <>
      <div className="cards">
        <div className="card_second">
          {data.map(cardItem)}
              {/* <div className="card cart_responsive" key={val.id}>
                <img src={val.ProductImg} alt="image" className="card_img responsive" />
                <div className="card_info">
                  <span className="card_category">{val.Description} </span>
                  <br />
                  <h4>{val.itemName}</h4>
                  <h4 className="card_price">₹ {val.price}.00</h4>
                  <a href="" target="_blank" />
                   <button onClick={() => addProduct(val)} className="btn">
                    Add to cart
                  </button> 
                  <div className="Details">
                      <NavLink to={`/details/${val.id}`}> Details</NavLink>
                  </div>
                </div>
              </div> */}
           
        </div>
      </div>
    </>
  );
};

export default Product;
