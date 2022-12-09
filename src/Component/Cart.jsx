import React, { useState } from 'react';
import './Cart.css'

const getCartData=()=>{
  const data = localStorage.getItem('cartData');
  // console.log(data)
  if(data){
  return JSON.parse(data); 
}else
return []
}
const Cart = () => {
const [newData, setNewData] =useState(getCartData())
  
  return (
    <>

    
   <div className='small-container cart-page'>
    <table>
      <tr>
        <th> Item Name</th>
        <th>Qty</th>
        <th>subtotal</th>
      </tr>
       <tr>
        <td>

        {
      newData.map((val, id) => {
                  return  <div className='card' key={val.id}>
       <img src={val.ProductImg} alt='image' className='card_img' />
       <div className='card_info'>
       <span className='card_category'>{val.Description} </span>
       <h3>Item Name- {val.itemName}</h3>
       <h5> <button>-</button> Qty-{val.qty}<button>+</button></h5>
       <h5 className='card_price'>Price-{val.price}</h5>
       <a href='' target="_blank"/>

       </div>
       </div>
                })
              }

        <div className='cart-info'>
        {newData.length < 1 && <div> No items are added yet</div>}
          <img src='test' alt='image' />
          <div>
            <p>Red Printed T-Shirt</p>
            <small> price:50.00</small>
            <br/>
            <a href=''>Remove</a>
          </div>
        </div>
        </td>
        <td> <input type="number" value= "1"/></td>
        <td> 50.00</td>
       
      </tr>
    </table>
    <div className='total_price'>
    <table>
      <tr>
        <td> Subtotal</td>
        <td>200.00</td>
      </tr>
      <tr>
        <td> tax</td>
        <td>20.00</td>
      </tr>
      <tr>
        <td> Total</td>
        <td>300.00</td>
      </tr>
    </table>

    </div> 
    </div> 
    </>
  )
}

export default Cart;
