import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ModeToggle } from "./ModeToggle";
import { Link as ReactLink } from "react-router-dom";
import { Resume } from "models";
import { api } from "../util";

const Bar = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  min-height: 2.7rem;
  img::selection {
    background: transparent;
  }
`;

const NavLink = styled(ReactLink)`
  color: ${(props) => props.theme.colors.fontColors.medium};
  &.text {
    height: 2rem;
  }
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.accents.primary};
  }
`;

const Wrapper = styled.div`
padding 0 1.5rem;
  background-color: ${(props) => props.theme.colors.bg};
  box-shadow: 0px 3px 9px -3px rgba(0, 0, 0, 0.7);
  border-radius: 50px;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  min-height: 2.2rem;
  & > div:nth-child(2) {
    margin: 0 2rem;
  }
  & > * {
    padding: 0.5rem;
    line-height: 1;
  }
`;

interface Props {
  on: boolean;
  toggle: () => void;
}

export const Header: React.FC<Props> = ({ on, toggle }) => {
  const [resume, setResume] = useState<Resume>();

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}/resume`, setResume);
  }, []);

  return (
    <Bar>
      <Wrapper>
        <NavLink className="text" to={"/"}>
          Home
        </NavLink>
        <ModeToggle on={on} onClick={toggle} />
        <NavLink
          className="text"
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
