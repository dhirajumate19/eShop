import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import basketContext from "../../Store/ContextApi";
import { useContext, useState } from "react";

const SubTotal = () => {
  const [basketTotal, setbasketTotal] = useState(0);
  const { basket } = useContext(basketContext);

  console.log("logger" + basket.length);
  function calculateTotalAmount(cart) {
    console.log(cart);
    return cart.reduce((total, item) => item.price + total, 0);
  }

  const totalAmount = calculateTotalAmount(basket);
  const totalBasketAmount = totalAmount.toFixed();
  console.log("total amount" + totalBasketAmount);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtoatl ({basket.length} items):{" "}
              <strong>${totalBasketAmount}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={""}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button>Proceed To Chekout</button>
    </div>
  );
};
export default SubTotal;

// import { useReducer } from "react";
// import CartContext from "./CartContext";

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };
// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     const updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.amount;

//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.item.id
//     );
//     const existingCartItem = state.items[existingCartItemIndex];

//     let updatedItems;
//     if (existingCartItem) {
//       const updatedItem = {
//         ...existingCartItem,
//         amount: existingCartItem.amount + action.item.amount,
//       };
//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = updatedItem;
//     } else {
//       updatedItems = state.items.concat(action.item);
//     }

//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }
//   if (action.type === "REMOVE") {
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.id
//     );
//     const existingItem = state.items[existingCartItemIndex];
//     const updatedtotalAmount = state.totalAmount - existingItem.price;
//     let updatedItems;
//     if (existingItem.amount === 1) {
//       updatedItems = state.items.filter((item) => item.id !== action.id);
//     } else {
//       const updatedItem = {
//         ...existingItem,
//         amount: existingItem.amount - 1,
//       };
//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = updatedItem;
//     }
//     return {
//       items: updatedItems,
//       totalAmount: updatedtotalAmount,
//     };
//   }
//   if (action.type === "CLEAR") {
//     return defaultCartState;
//   }
//   return defaultCartState;
// };

// const CartProvider = (props) => {
//   const [cartState, dispatchCartAction] = useReducer(
//     cartReducer,
//     defaultCartState
//   );
//   const addItemInCartContextHandler = (item) => {
//     dispatchCartAction({ type: "ADD", item: item });
//   };
//   const removeItemFromCartContextHandler = (id) => {
//     dispatchCartAction({ type: "REMOVE", id: id });
//   };
//   const clearCartHandler = () => {
//     dispatchCartAction({ type: "CLEAR" });
//   };
//   const cartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItem: addItemInCartContextHandler,
//     removeItem: removeItemFromCartContextHandler,
//     clearCart: clearCartHandler,
//   };

//   return (
//     <CartContext.Provider value={cartContext}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };
