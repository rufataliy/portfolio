import React from "react";
import styled from "styled-components";
import { light } from "../../assests/img";

const Container = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  width: 60px;
  transition: 0.2s;
`;

export const Options = () => {
  return (
    <Container className="options">
      <img src={light} alt="more options" />
    </Container>
  );
};
