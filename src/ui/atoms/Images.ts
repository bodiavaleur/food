import styled from "styled-components";

export const ImagePreview = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 10rem;
    height: 10rem;
  }
`;

export const ImageFull = styled.img`
  width: 17rem;
  height: 17rem;
  border-radius: 1rem;
`;
