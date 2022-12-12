import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../Redux/actions/action";
import './Details.css' ;
import CardsData from "./CardsData";


const Details = () => {
  const [cartData, setCartData] = useState([]); // to cart component
  console.log("cartData",cartData)
  // const [quantity, setQuantity]= useState(10)
  // console.log(quantity)
  const proid = useParams();
  // console.log(proid);
  const proDetails = CardsData.filter((x) => x.id == proid.id);
  const productji = proDetails[0];
  // console.log(productji);


  const dispatch = useDispatch ();

//cart button
const addProduct = (e) => {
  dispatch(addCart (e));
  setCartData([...cartData,  e]);
};

// `quantity:${quantity}`,

  //  Quantaty increment and decrement
  // const handleDecrement =()=>{
  //   if(quantity > 1){
  //     setQuantity(prevCount => prevCount -1);
  //   }
  // }
  // const handleIncrement =()=>{
  //   setQuantity(prevCount => prevCount +1);
  // }

  //Saving data to Local Storage

  useEffect (() => { 
    const data = localStorage.getItem("cartData");
  // console.log(data)
  if (data) {



    
  // console.log("data",data)
  // console.log("cartData",cartData)
  } 
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);



  return <>
      <div className="containor">
        <div className="img">
        <img src={`../${productji.ProductImg}`} alt="image" className="ItemImages"/>
        </div>
        <div className="details">
        <u><h3>Item Detail</h3></u>
        <p> {productji.Description}</p>
        <p>{productji.itemName}</p><br/>



        {/* <button type="button" onClick={handleDecrement} className="input_button">-</button> &nbsp; */}


                  <input type="text" className="Quantity" value={productji.qty} />&nbsp;


                  
                  {/* <button type="button" onClick={handleIncrement} className="input_button">+</button>  */}
                  <br/><br/>



                 <b><p>Price : ₹ {productji.price}</p></b> <br/>
                  <button onClick={() => addProduct(productji)} className="btn">
                    Add to cart
                  </button>
         
        </div>
      </div>
    </>
};

export default Details;