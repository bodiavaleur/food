import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const linkDefaults = css`
  text-decoration: none;
  font-size: 1rem;
`;

export const AppLink = styled(Link)`
  ${linkDefaults}
`;

export const MenuLink = styled(NavLink)`
  ${linkDefaults}

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;

    p,
    svg {
      color: ${({ theme }) => theme.colors.primary};
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;
