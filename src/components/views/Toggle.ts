import styled from "styled-components";

interface Props {
  isOn: boolean;
}

export const Toggle = styled.div<Props>`
  width: 2.8rem;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.fontColors.medium};
  border-radius: 50px;
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: ${(props) =>
      props.isOn
        ? props.theme.colors.fontColors.medium
        : props.theme.colors.accents.primary};
    animation: ${(props) => (props.isOn ? "goLeft" : "goRight")} 0.2s 1
      cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 100%;
    background: ${(props) => props.theme.colors.bg};
    border: 1px solid ${(props) => props.theme.colors.fontColors.medium};
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
