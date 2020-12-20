import React from "react";
import { MenuLink } from "../../ui/atoms";
import { NavigationMenu } from "../../ui/molecules";

export function NavMenu() {
  const path = process.env.PUBLIC_URL;
  return (
    <NavigationMenu>
      <MenuLink to={path + "/categories"}>Categories</MenuLink>
      <MenuLink to={path + "/cuisines"}>Cuisines</MenuLink>
      <MenuLink to={path + "/random"}>Random dish</MenuLink>
    </NavigationMenu>
  );
}
