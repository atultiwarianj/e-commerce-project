import React from 'react'
import { useDispatch } from 'react-redux'


import { addCart } from '../Redux/actions/action';

const Card = (props) => {

  const dispatch = useDispatch();
  const addProduct = (props)=> {
    console.log(props);
    dispatch(addCart (props));
  }


  // const dispatch = useDispatch

  // const send=(e)=>{
  //   // console.log(e);
  //   dispatch (Add(e));
  // }
  return (
    
<>

   <div className='card' key={props.id}>
       <img src={props.ProductImg} alt='image' className='card_img' />
       <div className='card_info'>
       <span className='card_category'>{props.Description} </span>
       <h3>Item Name- {props.itemName}</h3>
       <h5> <button>-</button> Qty-{props.qty}<button>+</button></h5>
       <h5 className='card_price'>Price-{props.price}</h5>
       <a href='' target="_blank"/>
       <button onClick={()=>addProduct(props)} className='btn'>Add to card</button>
       </div>
       </div>
  
</>
  )
}

export default Card;
