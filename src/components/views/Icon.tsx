import React from "react";
import styled from "styled-components";

const Span = styled.span`
  display: flex;
`;

interface Props {
  name: string;
}

export const Icon: React.FC<Props> = ({ name }) => {
  return (
    <Span>
      <i className={`icofont-${name}`}></i>
    </Span>
  );
};
