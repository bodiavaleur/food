import styled from "styled-components";
import { AppLink } from "../atoms";

export const DishList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 17rem);
  grid-gap: 0.5rem;
  justify-content: center;
  padding-bottom: 2rem;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    grid-template-columns: repeat(auto-fill, 12rem);
  }
`;

export const DishListItem = styled(AppLink)`
  width: 17rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.3rem;
  border-radius: 0.75rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px 2px ${({ theme }) => theme.colors.shadowGray};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 12rem;
    height: 15rem;
  }
`;
