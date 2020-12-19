import styled from "styled-components";

export const Input = styled.input`
  width: 15rem;
  height: 2rem;
  display: block;
  margin: 1rem auto;
  padding-left: 0.3rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.border};
  }
`;
