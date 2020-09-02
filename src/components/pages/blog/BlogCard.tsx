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
  @media screen and (min-width: 1440px) {
    height: 20vh;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  line-height: 1;
  & > * {
    margin-bottom: 1rem;
  }
`;

export const BlogCard: React.FC<Props> = React.memo(({ blog }) => {
  const { url } = useRouteMatch();

  return (
    <Box>
      <Link to={`${url}/${blog.id}`}>
        <Wrapper>
          <h2>{blog.title}</h2>
          <p>{blog.desc}</p>
        </Wrapper>
      </Link>
    </Box>
  );
});
