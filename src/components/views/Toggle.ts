import styled from "styled-components";

interface Props {
  isOn: boolean;
}

export const Toggle = styled.div<Props>`
  width: 3rem;
  height: 100%;
  box-shadow: inset 0 0 5px 0px black;
  border-radius: 50px;
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:before {
    content: "";
    padding: 2px;
    box-shadow: 0 0 3px 0.5px black,
      inset 0 0 3px 3px ${(props) => props.theme.colors.bg},
      inset 0 0 0px 3px black;
    position: absolute;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) =>
      props.isOn
        ? props.theme.colors.fontColors.high
        : props.theme.colors.accents.primary};
    font-size: 1rem;
    animation: ${(props) => (props.isOn ? "goLeft" : "goRight")} 0.2s 1
      cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    height: 1.3rem;
    width: 1.3rem;
    font-size: 0.9rem;
    border-radius: 100%;
    background: ${(props) => props.theme.colors.bg};
    top: 50%;
    transform: translateY(-50%);
  }

  @keyframes goLeft {
    0% {
      right: 0%;
    }
    100% {
      right: 50%;
    }
  }

  @keyframes goRight {
    0% {
      left: 0%;
    }
    100% {
      left: 50%;
    }
  }
`;
