import { Action } from '../actions/action'
const initialStore ={
  cart : [],
}
const handleCart = (state:any = initialStore, action:any) => {
  const product = action.payload

  switch (action.type) {
    case "ADD":
      const itemIndex = state.cart.findIndex((item:any)=>item.id=== action.payload.id)
      if(itemIndex >= 0){
        state.cart[itemIndex].qty += 1
      } else {
        const temp = { ...action.payload, qty : 1}
         return {
                ...state,
                cart: [ ...state.cart, temp],
              }
      }
      break
      case "DELETE":
        const data = state.cart.filter((el:any)=> el.id !== action.payload)
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
