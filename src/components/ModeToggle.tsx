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
  right: 10%;
  top: 2%;
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
