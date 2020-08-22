import React from "react";
import styled from "styled-components";
import { Icon } from "./views";
import { ModeToggle } from "./ModeToggle";
import { home } from "../__mocks__/img";
import { Link } from "react-router-dom";

const Bar = styled.div`
  display: flex;
  justify-content: center;
  img::selection {
    background: transparent;
  }
`;

const ToggleWrapper = styled.div`
  padding: 6px 10px;
  background-color: ${(props) => props.theme.colors.bg};
  box-shadow: 0px 3px 9px -3px rgba(0, 0, 0, 0.7);
  border-radius: 50px;
  display: inline-block;
`;

interface Props {
  on: boolean;
  toggle: () => void;
}

export const Header: React.FC<Props> = ({ on, toggle }) => {
  return (
    <Bar>
      <ToggleWrapper>
        <Link to={"/"}>
          <Icon src={home} />
        </Link>
        <ModeToggle on={on} onClick={toggle} />
      </ToggleWrapper>
    </Bar>
  );
};
