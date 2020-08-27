import React from "react";
import { Title } from ".";
import { boxCommon } from "./Box";
import styled from "styled-components";

const Box = styled(boxCommon)`
  box-shadow: 0px 2px 17px -6px rgba(0, 0, 0, 0.7);
  &:hover {
    transform: scale(1);
    box-shadow: 0px 2px 17px -6px rgba(0, 0, 0, 0.7);
  }
`;

export const MockBox: React.FC = () => {
  return (
    <Box>
      <Title>Loading</Title>
    </Box>
  );
};
