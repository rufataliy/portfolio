import styled from "styled-components";

export const boxCommon = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow:  ${({ theme }) => theme.colors.shadow.default};
  box-sizing: border-box;
  padding: 1vw;
  height: 250px;
  width: 500px;
  transition: 0.2s linear;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px;
  max-width: 100%;

  & > a {
    display: inline-block;
    height: 100%;
    width: 100%;
  }
  .page-card-img {
    height: 100%;
    position: absolute;
    right: 0;
    bottom: -11%;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.colors.shadow.hover};
  }
}
  @media screen and (min-width: 1440px) {
    height: 30vh;
    width: 30vw;
  }
`;

export const Box = styled(boxCommon)`
  animation: shadowPop 0.9s 1 cubic-bezier(0.36, 0.51, 0.49, 1.59) backwards;

  .project-card-img {
    width: 100%;
    border-radius: 5px;
  }

  @keyframes shadowPop {
    0% {
      box-shadow: 0px 2px 17px -6px rgba(0, 0, 0, 0.7);
    }
    100% {
      box-shadow: ${({ theme }) => theme.colors.shadow.default};
    }
  }
`;
