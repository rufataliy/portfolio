import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "./views";
import { ModeToggle } from "./ModeToggle";
import { Link as ReactLink } from "react-router-dom";
import { Resume } from "models";
import { api } from "../util";

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
  const [resume, setResume] = useState<Resume>();
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}/resume`, setResume, setFetching);
  }, []);

  return (
    <Bar>
      <Wrapper>
        <NavLink to={"/"}>
          <Icon name={"ui-home"} />
        </NavLink>
        <ModeToggle on={on} onClick={toggle} />
        <NavLink
          target={"_blank"}
          to={(location) => ({
            ...location,
            pathname: `${process.env.REACT_APP_API_URL}${resume?.file[0].url}`,
          })}
        >
          Resume
        </NavLink>
      </Wrapper>
    </Bar>
  );
};
