import "./CheckoutProduct.css";
import basketContext from "../../Store/ContextApi";
import { useContext } from "react";
const CheckoutProduct = (props) => {
  const cartContext = useContext(basketContext);

  // cartContext.basket.map(item=>{})
  console.log("basket title" + props.title);
  const onRemoveHandle = () => {
    console.log("remove");
    cartContext.removeItem(props.id);
  };
  return (
    <div className="chekout__product">
      <img className="checkoutProduct__image" src={props.image} alt="" />
      <div className="chekout__product__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="chekoutproduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={onRemoveHandle}>Remove From Basket</button>
      </div>
    </div>
  );
};
export default CheckoutProduct;
