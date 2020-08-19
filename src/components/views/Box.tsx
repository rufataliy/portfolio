import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
  box-sizing: border-box;
  padding: 2vw;
  height: 250px;
  width: 500px;
  transition: 0.2s linear;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px;
  order: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0px 2px 17px -6px ${({ theme }) => theme.colors.shadow.color};
  animation: shadowPop 0.5s 1 ease-out forwards;
  animation-delay: 0.1s;
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

  @keyframes shadowPop {
    0% {
      box-shadow: 0px 2px 17px -6px ${({ theme }) => theme.colors.shadow.color};
    }
    100% {
      box-shadow: ${({ theme }) =>
        `${theme.colors.shadow.value} ${theme.colors.shadow.color}`};
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px -9px 25px -15px ${({ theme }) => theme.colors.shadow.hover};
  }
`;
