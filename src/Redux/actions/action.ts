export const addCart =(item:any)=>{
    // console.log("action", product)
    return{
        type : "ADD",
        payload : item
    }
}

// For delete item from cart
export const delCart =(id:string)=>{
    return{
        type : "DELETE",
        payload : id
    }
}


interface addItemAction  {
    type: "ADD"
    payload:number
  }
  interface delItemAction  {
    type: "DELETE"
    payload:number
  }
  
 
  export type Action = addItemAction | delItemAction 