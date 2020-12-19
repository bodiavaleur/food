import styled from "styled-components";

export const Shade = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background: ${({ theme }) => theme.colors.transparentBlack};
`;
