import basketContext from "../../Store/ContextApi";
import CheckoutProduct from "./ChekoutProduct";
import SubTotal from "../SubTotal/SubTotal";
import "../Checkout/Checkout.css";
import deal from "../../asset/deals.jpg";
import { useContext } from "react";
// import CartItem from "./CartItem";

const Checkout = (props) => {
  const cartContext = useContext(basketContext);

  // const c = cartContext.basket.map((item) => console.log(item));
  // console.log("map out" + c);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={deal}></img>
        <div>
          <h2 className="chekout__title">Your Shopping Basket</h2>
          {/* <CheckoutProduct title={cartContext.basket.title} /> */}

          {cartContext.basket.map((i) => (
            <CheckoutProduct
              id={i.id}
              title={i.title}
              price={i.price}
              image={i.image}
              rating={i.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};
export default Checkout;
