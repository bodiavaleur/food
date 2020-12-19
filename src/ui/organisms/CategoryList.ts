import styled from "styled-components";
import { AppLink } from "../atoms";

interface CategoryProps {
  thumb?: string;
}

export const CategoryList = styled.ul`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, 100%);
  justify-content: center;
  padding-bottom: 2rem;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    grid-template-columns: repeat(auto-fill, 10rem);
  }
`;

export const CategoryItem = styled(AppLink)`
  width: 100%;
  height: 7rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  line-height: 7rem;
  font-weight: 600;
  font-size: 1.25rem;
  box-shadow: 0 0 7.5px 2px ${({ theme }) => theme.colors.shadowGray};
  background: linear-gradient(
      270deg,
      rgba(90, 200, 250, 0.25) 0%,
      rgba(90, 200, 250, 1) 100%
    ),
    url(${({ thumb }: CategoryProps) => thumb});
  background-size: cover;
  color: ${({ theme }) => theme.colors.snowWhite};

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 10rem;
    height: 5rem;
    line-height: 5rem;
  }
`;
