import styled from "styled-components";
import { MenuLink } from "../atoms/";

export const SideMenu = styled.div`
  width: 15rem;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 0 1rem;
  background: white;
  border-left: 1px solid #e6e6e6;
`;

export const MenuPanel = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

export const MenuItem = styled(MenuLink)`
  width: 100%;
  height: 3rem;
  display: grid;
  grid-template-columns: 3rem 10rem;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
`;

export const MenuItemIcon = styled.div`
  grid-column: 1 / 2;
  justify-self: center;
`;

export const MenuItemLabel = styled.p`
  grid-column: 2 / -1;
`;
