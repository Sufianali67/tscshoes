const defaultState = {
  allProducts: [],
  cart: [],
};

const product = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS": {
      return {
        ...state,
        allProducts: action.res.products,
      };
    }
    case "ADD_TO_CART": {
      // state.cart.find(obj => obj._id === action.product._id);
      // console.log(
      //   "state.cart:: ",
      //   state.cart.find((obj, idx) => {
      //     console.log("obj :: ", obj);
      //     return obj._id === action.product._id ? idx : false;
      //   })
      // );
      return {
        ...state,
        cart: [action.product, ...state.cart],
      };

      //   return {
      //     ...state,
      //     cart: state.currentPeople.map(person => {
      //         if (person.id === action.payload.id) {
      //            return [action.product, ...state.cart];
      //         }

      //         return [action.product, ...state.cart];
      //     }),
      // };
    }
    default:
      return state;
  }
};

export default product;
