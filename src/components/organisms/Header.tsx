import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { FaHamburger } from "react-icons/fa";
import { AppLink, ButtonIcon } from "../../ui/atoms";
import { AppHeader } from "../../ui/organisms";
import { toggleMenuSidebar } from "../../redux/actions/uiActions";
import { NavMenu } from "../molecules";
import logo from "../../assets/logo.svg";
import logoActive from "../../assets/logoActive.svg";

export function Header() {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });
  const isRoot = useRouteMatch("/")?.isExact;

  const toggleMenu = () => dispatch(toggleMenuSidebar());

  return (
    <AppHeader>
      <AppLink to='/'>
        {isRoot ? (
          <img src={logoActive} alt='logo' />
        ) : (
          <img src={logo} alt='logo' />
        )}
      </AppLink>

      {isDesktop ? (
        <NavMenu />
      ) : (
        <ButtonIcon onClick={toggleMenu}>
          <FaHamburger />
        </ButtonIcon>
      )}
    </AppHeader>
  );
}
