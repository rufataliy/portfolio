import styled from "styled-components";

interface Props {
  on: boolean;
}

export const Toggle = styled.div<Props>`
  width: 60px;
  height: 20px;
  border: 1px solid grey;
  border-radius: 50px;
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    transition: 0.3s;
    animation: ${(props) => (props.on ? "goLeft" : "goRight")} 0.2s 1
      cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    height: 16px;
    width: 16px;
    border-radius: 100%;
    background: grey;
    top: 50%;
    transform: translateY(-50%);
  }

  @keyframes goLeft {
    0% {
      right: 3%;
    }
    100% {
      right: 67%;
    }
  }

  @keyframes goRight {
    0% {
      left: 3%;
    }
    100% {
      left: 67%;
    }
  }
`;
