import React from "react";
import { contentLoader } from "../../assests/img";
import styled from "styled-components";

interface Props {
  loading: boolean;
}

const Wrapper = styled.div`
  overflow: hidden;
  height: 100%;
  img {
    width: 100%;
    border-radius: 5px;
    max-height: 800px;
  }
`;

export const ContentLoader: React.FC<Props> = ({ loading, children }) => {
  return (
    <>
      {loading ? (
        <Wrapper>
          <img src={contentLoader} />
        </Wrapper>
      ) : (
        children
      )}
    </>
  );
};
