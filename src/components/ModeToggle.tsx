import React from "react";
import { Toggle } from "./views";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  on: boolean;
}

interface WrapperProps {
  isLightMode: boolean;
}

const SUN = "sun-alt";
const MOON = "moon";

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 100%;
  align-items: center;
  min-height: 1rem;
  & i {
    &[class$="sun-alt"] {
      ${(props) =>
        props.isLightMode && `color: ${props.theme.colors.accents.primary}`};
    }
    &[class$="moon"] {
      ${(props) =>
        !props.isLightMode && `color: ${props.theme.colors.accents.primary}`};
    }
  }
`;

export const ModeToggle: React.FC<Props> = ({ onClick, on }) => {
  return (
    <Wrapper isLightMode={on}>
      <Toggle
        isOn={on}
        className={`icofont-${on ? SUN : MOON}`}
        onClick={onClick}
      />
    </Wrapper>
  );
};
