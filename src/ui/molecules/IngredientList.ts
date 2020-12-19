import styled from "styled-components";
import { AppLink } from "../atoms";

export const IngredientList = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 1rem 0;
  list-style: none;
`;

export const IngredientItem = styled(AppLink)`
  min-width: 3rem;
  margin: 0.25rem 0.5rem;
  padding: 0.4rem 0.6rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.snowWhite};
`;
