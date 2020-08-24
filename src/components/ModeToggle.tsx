import React from "react";
import { Toggle, Icon } from "./views";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  on: boolean;
}

interface WrapperProps {
  on: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  & i {
    &[class$="sun-alt"] {
      ${(props) => props.on && `color: ${props.theme.colors.accents.primary}`};
    }
    &[class$="moon"] {
      ${(props) => !props.on && `color: ${props.theme.colors.accents.primary}`};
    }
  }
`;

export const ModeToggle: React.FC<Props> = ({ onClick, on }) => {
  return (
    <Wrapper on={on}>
      <Icon name={"sun-alt"} />
      <Toggle on={on} onClick={onClick} />
      <Icon name={"moon"} />
    </Wrapper>
  );
};
