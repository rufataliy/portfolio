import React from "react";
import { Toggle } from "./views";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  on: boolean;
}

interface WrapperProps {
  on: boolean;
}

const SUN = "sun-alt";
const MOON = "moon";

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 100%;
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
      <Toggle
        on={on}
        className={`icofont-${on ? SUN : MOON}`}
        onClick={onClick}
      />
    </Wrapper>
  );
};
