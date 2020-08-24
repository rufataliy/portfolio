import styled from "styled-components";

export const Title = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 5%;
  padding: 0.5rem 1.4rem;
  background: white;
  transition: 0.2s linear;
  box-shadow: 0px 3px 9px -3px rgba(0, 0, 0, 0.7);
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.fontColors.medium};
  border-radius: 0.5rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  font-size: 1.8rem;
  margin: 0;
`;
