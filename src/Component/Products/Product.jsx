import { useContext } from "react";
import basketContext from "../../Store/ContextApi";
import "../Products/Product.css";
// import bag from "../../asset/bag.jpg";

const Product = (props) => {
  const cartCtx = useContext(basketContext);
  const addToBasket = () => {
    console.log("click" + props.title);
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      image: props.image,
      price: props.price,
      rating: props.rating,
    });
    console.log(cartCtx.basket);
  };

  return (
    <>
      <div className="product">
        <div className="product__info">
          <p>{props.title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className="product__rating">
            {Array(props.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={props.image} alt="Product Image" />
        <button onClick={addToBasket}>Add To Basket</button>
      </div>
    </>
  );
};
export default Product;
