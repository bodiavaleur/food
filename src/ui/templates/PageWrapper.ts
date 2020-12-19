import styled from "styled-components";

export const PageWrapper = styled.main`
  width: 100%;
  height: auto;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  min-height: 100%;
  margin: 0 auto;
  padding: 4rem 1rem 0 1rem;

  &::after {
    content: "";
    width: 100%;
    height: 3rem;
    position: fixed;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;
