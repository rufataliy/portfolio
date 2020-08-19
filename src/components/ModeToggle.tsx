import React from "react";
import { Toggle } from "./views";
import styled from "styled-components";

const Icon = styled.span`
  font-size: 1.4rem;
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
      <Icon>&#9728;</Icon>
      <Toggle on={on} onClick={onClick} />
      <Icon>&#9790;</Icon>
    </Wrapper>
  );
};
