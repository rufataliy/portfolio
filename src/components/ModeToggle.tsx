import React from "react";
import { Toggle } from "./views";
import styled from "styled-components";
import { sun, moon } from "../__mocks__/img";

const Icon = styled.img`
  height: 22px;
  margin: 0 10px;
  display: inline-block;
  transform: rotate(-30deg);
`;

const Wrapper = styled.div`
  position: fixed;
  padding: 6px 10px;
  background-color: ${(props) => props.theme.colors.bg};
  box-shadow: 0px 3px 9px -3px rgba(0, 0, 0, 0.7);
  border-radius: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  right: 2%;
  top: 1%;
  z-index: 100;
`;

interface Props {
  onClick: () => void;
  on: boolean;
}

export const ModeToggle: React.FC<Props> = ({ onClick, on }) => {
  return (
    <Wrapper>
      <Icon src={sun} />
      <Toggle on={on} onClick={onClick} />
      <Icon src={moon} />
    </Wrapper>
  );
};
