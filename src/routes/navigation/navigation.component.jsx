import { Fragment, useContext, useEffect, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../context/user.context";
import { CartDropdownContext } from "../../context/cart-drawer.context";

import { signOutUser } from "../../../src/utils/firebase/firebase.utils";
import {NavigationContainer, LogoContainer, NavLinkContainer, NavLink} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { dropdownState } = useContext(CartDropdownContext);

  const signOutHandler = async () => {
    await signOutUser();
  };
  const navigate = useNavigate();
  const navigate1 = useCallback(() => currentUser ? navigate("/") : navigate("/auth"), [currentUser]);

  useEffect(() =>{
    navigate1();
  },[navigate1,])

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {dropdownState && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
