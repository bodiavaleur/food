import React from "react";
import { useDispatch } from "react-redux";
import {
  MenuItemIcon,
  MenuItemLabel,
  MenuItem,
  MenuPanel,
  SideMenu,
} from "../../ui/organisms";
import { AppLink, Shade } from "../../ui/atoms";
import { toggleMenuSidebar } from "../../redux/actions/uiActions";
import { BiFoodMenu, BiDice5 } from "react-icons/bi";
import { AiOutlineFlag } from "react-icons/ai";

export function SidebarMenu() {
  const dispatch = useDispatch();

  const toggleMenu = () => dispatch(toggleMenuSidebar());

  const links = [
    { path: "/categories", label: "Categories", icon: <BiFoodMenu /> },
    { path: "/cuisines", label: "Cuisines", icon: <AiOutlineFlag /> },
    { path: "/random", label: "Random dish", icon: <BiDice5 /> },
  ];

  return (
    <>
      <Shade onClick={toggleMenu} />
      <SideMenu>
        <MenuPanel>
          <AppLink to=''>Sign Up</AppLink>
        </MenuPanel>
        {links.map((link, idx) => (
          <MenuItem to={link.path} onClick={toggleMenu} key={idx}>
            <MenuItemIcon>{link.icon}</MenuItemIcon>
            <MenuItemLabel>{link.label}</MenuItemLabel>
          </MenuItem>
        ))}
      </SideMenu>
    </>
  );
}
