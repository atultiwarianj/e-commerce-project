export const addCart =(item)=>{
    // console.log("action", product)
    return{
        type : "ADDITEM",
        payload : item
    }
}

// For delete item from cart
export const delCart =(id)=>{
    return{
        type : "DELITEM",
        payload : id
    }
}