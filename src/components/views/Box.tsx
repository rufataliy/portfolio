import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
  box-sizing: border-box;
  padding: 2vw;
  height: 250px;
  width: 500px;
  box-shadow: 0px 9px 17px -6px ${({ theme }) => theme.colors.shadow.color};
  transition: 0.2s linear;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px;
  order: 2;
  display: flex;
  justify-content: space-between;
  alig-items: flex-start;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 9px 25px -15px ${({ theme }) => theme.colors.shadow.hover};
  }
`;
