const initialStore ={
  cart : [],
}

const handleCart = (state = initialStore, action) => {
  const product = action.payload

  switch (action.type) {
    case "ADDITEM":
      const itemIndex = state.cart.findIndex((item)=>item.id=== action.payload.id)
      if(itemIndex >= 0){
        state.cart[itemIndex].qty += 1
      } else {
        const temp = { ...action.payload, qty : 1}
         return {
                ...state,
                cart: [ ...state.cart, temp],
              }
      }
      
      case "DELITEM":
        const data = state.cart.filter((el)=> el.id !== action.payload)
        return {
        ...state,
        cart : data,
        }
        default:
          return state
    }

      return state;
    
};

export default handleCart;
