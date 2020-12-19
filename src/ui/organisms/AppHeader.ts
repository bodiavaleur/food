import styled from "styled-components";

export const AppHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  padding: 0 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.transparentWhite};
  backdrop-filter: blur(20px) saturate(180%);
`;
