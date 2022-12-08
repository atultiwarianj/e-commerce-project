import React from 'react'
import Card from './Card'
import CardsData from './CardsData'
// import styled from 'styled-components'
import './Product.css'
const Product = () => {

  // const Button
  return (
    <>
    <div className='cards'>
   <div className='card_second'>
    {
      CardsData.map((val) => {
                  return <Card id={val.id} price={val.price} qty={val.qty} ProductImg={val.ProductImg} itemName={val.itemName} Description={val.Description} />

                })
              }
              </div>
              </div>
    </>
  )
}

export default Product
