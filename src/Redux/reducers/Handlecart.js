// const INIT_STATE = {
//     carts :[ ]
// };

// export const cartReducer =(state=INIT_STATE,action)=>{
//     switch(action.type){
//         case "ADD_CART":
//             return{
//                 ...state,
//                 carts:[...state.carts,action.payload]
//             }
//             default :
//              return state
//     }
// }

const cart = [];
const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // check if product is already exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // increase the qty
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

      break;
    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
