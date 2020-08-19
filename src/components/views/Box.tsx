import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
  box-sizing: border-box;
  padding: 2vw;
  height: 250px;
  width: 500px;
  box-shadow: ${({ theme }) =>
    `${theme.colors.shadow.value}  ${theme.colors.shadow.color}`};
  transition: 0.2s linear;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px;
  order: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0px 0px 10px 0px white;
  animation: shadowPop 0.5s 1 ease-out forwards;

  .page-card-img {
    height: 100%;
    position: absolute;
    right: 0;
    bottom: -11%;
  }

  .portfolio-card-img {
    width: 100%;
    border-radius: 5px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 9px 25px -15px ${({ theme }) => theme.colors.shadow.hover};
  }

  @keyframes shadowPop {
    0% {
      box-shadow: 0px 0px 10px 0px white;
    }
    100% {
      box-shadow: 0px 9px 25px -15px ${({ theme }) => theme.colors.shadow.hover};
    }
  }
`;
