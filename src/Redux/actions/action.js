// export const Add =(item)=>{
//     return{
//         type : "ADD_CART",
//         payload: item
//     }
// }
// For Add item to cart
export const addCart =(product)=>{
    // console.log("action", product)
    return{
        type : "ADDITEM",
        payload : product
    }
}

// For delete item from cart
export const delCart =(product)=>{
    // console.log("actionDelete", product)

    return{
        type : "DELITEM",
        payload : product
    }
}