import React, { useContext } from "react";
// import { StorefrontIcon, ShoppingBasketIcon } from "@mui/icons-material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import basketContext from "../../Store/ContextApi";

const Header = () => {
  const cartContext = useContext(basketContext);
  console.log("basket title" + cartContext.basket);
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoicon" fontSize="large" />

          <h2 className="header__logoTitle">E-Shop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemline1">Hello Guest</span>
          <span className="nav__itemline2">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemline1">Your Shop</span>
          <span className="nav__itemline2">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__item nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemline2 nav__basketCount">
              {cartContext.basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
