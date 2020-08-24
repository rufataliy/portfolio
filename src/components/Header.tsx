import React from "react";
import styled from "styled-components";
import { Icon } from "./views";
import { ModeToggle } from "./ModeToggle";
import { Link as ReactLink } from "react-router-dom";

const Bar = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  img::selection {
    background: transparent;
  }
`;

const NavLink = styled(ReactLink)`
  height: 22px;
  color: ${(props) => props.theme.colors.fontColors.medium};
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.accents.primary};
  }
`;

const Wrapper = styled.div`
  padding: 6px 10px;
  background-color: ${(props) => props.theme.colors.bg};
  box-shadow: 0px 3px 9px -3px rgba(0, 0, 0, 0.7);
  border-radius: 50px;
  display: flex;
  align-items: center;
`;

interface Props {
  on: boolean;
  toggle: () => void;
}

export const Header: React.FC<Props> = ({ on, toggle }) => {
  return (
    <Bar>
      <Wrapper>
        <NavLink to={"/"}>
          <Icon name={"ui-home"} />
        </NavLink>
        <ModeToggle on={on} onClick={toggle} />
      </Wrapper>
    </Bar>
  );
};
