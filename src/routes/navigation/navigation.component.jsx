import React, { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context.jsx";
import { cartDropDownContext } from "../../contexts/cart-dropdown.context.jsx";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { SignOutUser } from "..//../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
import CartIcon from "..//../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { dropDown } = useContext(cartDropDownContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={SignOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        {dropDown ? <CartDropDown /> : null}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
