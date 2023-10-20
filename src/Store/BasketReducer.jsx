import { useReducer } from "react";
import ContextApi from "./ContextApi";
const initialState = {
  basket: [],
};

// export const getbasketTotal = (basket) => {
//   return basket?.basketReducer((amount, item) => item.price + amount, 0);
// };

const basketReducer = (state, action) => {
  if (action.type === "ADD_TO_BASKET") {
    // console.log("action" + action.item.title);
    // console.log("basketState" + state.basket.price);
    const item = action.item;
    item.totalPrice = item.price * item.quantity;

    return {
      ...state,
      basket: [...state.basket, item],
    };
  }
  if (action.type == "REMOVE_FROM_BASKET") {
    const index = state.basket.findIndex(
      (basketItem) => basketItem.id === action.id
    );
    const exstingItem = state.basket[index];
    const updateTotalAmount = state.totalPrice - exstingItem.price;
    let updateBaskets;
    if (exstingItem.totalPrice === 1) {
      updateBaskets = state.basket.filter((item) => item.id !== action.id);
    } else {
      const updateBasket = {
        ...exstingItem,
        totalPrice: (exstingItem.totalPrice = 1),
      };
      updateBaskets = [...state.basket];
      updateBaskets[index] = updateBasket;
    }
    return {
      basket: updateBaskets,
      totalPrice: updateTotalAmount,
    };
  }
  return state;
};
const Basketprovider = (props) => {
  const [basketState, dispatchBasketAction] = useReducer(
    basketReducer,
    initialState
  );
  const addItemToBasket = (item) => {
    console.log("log" + item.title);
    dispatchBasketAction({ type: "ADD_TO_BASKET", item: item });
  };
  const removeItemFromBasket = (id) => {
    dispatchBasketAction({ type: "REMOVE_FROM_BASKET", id: id });
  };
  const basketContext = {
    basket: basketState.basket,
    addItem: addItemToBasket,
    removeItem: removeItemFromBasket,
  };
  console.log("basket" + basketContext.basket);
  return (
    <ContextApi.Provider value={basketContext}>
      {props.children}
    </ContextApi.Provider>
  );
};
export default Basketprovider;
