import styled from "styled-components";

export const BoxOpen = styled.div`
  @keyframes open {
    0% {
      top: 10%;
      height: 250px;
      width: 500px;
    }
    100% {
      top: 0;
      height: 100vh;
      width: 100vw;
    }
  }
  box-shadow: ${({ theme }) => `${theme.colors.shadow.value}  grey`};
  opacity: 1;
  height: 250px;
  width: 500px;
  position: fixed;
  top: 10%;
  margin: auto;
  z-index: 10;
  animation: open 0.4s cubic-bezier(0.97, 0.19, 1, 0.41);
  animation-fill-mode: forwards;
  overflow: auto;
`;
