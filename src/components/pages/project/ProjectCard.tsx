import React from "react";
import { Box, Title } from "../../views";
import { Project as Model } from "models";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

interface Props {
  project: Model;
}

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
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

export const ProjectCard: React.FC<Props> = React.memo(({ project }) => {
  const { url } = useRouteMatch();

  return (
    <Box>
      <Link to={`${url}/${project.id}`}>
        <Title>{project.title}</Title>
        <ImgWrapper>
          <img
            src={process.env.REACT_APP_API_URL + project.img[0].url}
            alt={project.title}
          />
        </ImgWrapper>
      </Link>
    </Box>
  );
});
