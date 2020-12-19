import styled, { css } from "styled-components";

const buttonDefaults = css`
  width: auto;
  height: 2.5rem;
  border: none;
  font-size: 1rem;
  background: none;
`;

export const ButtonText = styled.button`
  ${buttonDefaults}
  min-width: 5rem;
`;

export const ButtonOutline = styled(ButtonText)`
  border: 1px solid red;
  border-radius: 1rem;
`;

export const ButtonIcon = styled.button`
  ${buttonDefaults}

  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.75rem;
  line-height: 1.75rem;
`;
