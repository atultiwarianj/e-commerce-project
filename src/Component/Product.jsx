import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CardsData from './CardsData'
// import styled from 'styled-components'
import './Product.css'
import { addCart } from '../Redux/actions/action'
// import { Connect } from 'react-redux'
// import Cart from './Cart'

const Product = () => {
  const [data, setData] = useState(CardsData);
  const [cartData, setCartData]= useState([]); // to cart component
  console.log(cartData)
  //  console.log(data)
  




   const dispatch = useDispatch();


   //cart button
  const addProduct = (e)=> {
    // console.log(e);
    // e.preventDefault();
    dispatch(addCart (e));
    setCartData([...cartData, e])
    
  }

  // {cartItem.map((item)=>{
  //   <Cart />
  // })}


  //Saving data to Local Storage

  useEffect(()=>{
localStorage.setItem('cartData',JSON.stringify(cartData))
  
},[cartData])


  return (
    <>
    <div className='cards'>
   <div className='card_second'>
    {
      data.map((val, id) => {
                  return  <div className='card' key={val.id}>
       <img src={val.ProductImg} alt='image' className='card_img' />
       <div className='card_info'>
       <span className='card_category'>{val.Description} </span>
       <h3>Item Name- {val.itemName}</h3>
       <h5> <button>-</button> Qty-{val.qty}<button>+</button></h5>
       <h5 className='card_price'>Price-{val.price}</h5>
       <a href='' target="_blank"/>
       <button onClick={()=>addProduct(val)}  className='btn'>Add to cart</button>
       </div>
       </div>
                })
              }
              </div>
              </div>
        
</>
  )
}

export default Product
