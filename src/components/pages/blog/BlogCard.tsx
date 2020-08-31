import React from "react";
import { Box as BoxDefault } from "../../views";
import { Blog as Model } from "models";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

interface Props {
  blog: Model;
}

const Box = styled(BoxDefault)`
  height: 150px;
`;

const ImgWrapper = styled.div`
  height: 100%;
  width: 40%;
  max-width: 40%;
  float: right;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  & > img {
    width: auto;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
`;

export const BlogCard: React.FC<Props> = React.memo(({ blog }) => {
  const { url } = useRouteMatch();

  return (
    <Link to={`${url}/${blog.id}`}>
      <Box>
        <Wrapper>
          <h2>{blog.title}</h2>
          <p>{blog.desc}</p>
        </Wrapper>
      </Box>
    </Link>
  );
});
