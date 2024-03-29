import React from "react";
import { Box, Options, RoundedMenu, Title } from "../../views";
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

const Delimiter = styled.span`
  margin: 0 10px;
`;

export const ProjectCard: React.FC<Props> = React.memo(({ project }) => {
  const { url } = useRouteMatch();

  return (
    <Box className="project-card">
      <Title>{project.title}</Title>
      <ImgWrapper>
        <img
          src={
            process.env.REACT_APP_API_URL +
            project.img.data[0].attributes.formats.small.url
          }
          alt={project.title}
        />
      </ImgWrapper>
      <RoundedMenu>
        <div className="links">
          {project.link && (
            <h2 className="card-nav-link">
              <a href={project.link}>Demo</a>
            </h2>
          )}
          {project.code_link && (
            <h2 className="card-nav-link">
              <Delimiter>|</Delimiter>
              <a href={project.code_link}>Code</a>
            </h2>
          )}
          {project.about && (
            <h2 className="card-nav-link">
              <Delimiter>|</Delimiter>
              <Link to={`${url}/${project.id}`}>About</Link>
            </h2>
          )}
        </div>
        <Options />
      </RoundedMenu>
    </Box>
  );
});
