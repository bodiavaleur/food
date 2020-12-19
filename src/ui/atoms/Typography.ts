import styled from "styled-components";

export const TopicTitle = styled.h1`
  width: 100%;
  min-height: 3rem;
  margin: 1rem 0;
  line-height: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const TopicSubtitle = styled(TopicTitle)`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const OptionalSubtitle = styled.h2`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 300;
  text-align: center;
  color: ${(props) => props.theme.colors.textOptional};
`;

export const PreviewName = styled.p`
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
`;

export const Instructions = styled.p`
  font-size: 1rem;
`;
