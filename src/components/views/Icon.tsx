import React from "react";
import styled from "styled-components";

const Span = styled.span`
  height: 22px;
  margin: 0 10px;
  display: inline-block;
  font-size: 1.1rem;
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
