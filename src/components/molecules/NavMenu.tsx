import React from "react";
import { MenuLink } from "../../ui/atoms";
import { NavigationMenu } from "../../ui/molecules";

export function NavMenu() {
  return (
    <NavigationMenu>
      <MenuLink to='/categories'>Categories</MenuLink>
      <MenuLink to='/cuisines'>Cuisines</MenuLink>
      <MenuLink to='/random'>Random dish</MenuLink>
    </NavigationMenu>
  );
}
