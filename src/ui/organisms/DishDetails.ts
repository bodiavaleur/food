import styled from "styled-components";

export const DishDetails = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 0;
`;
