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

const CardInfo = styled.div`
  opacity: 0;
  transform: translateY(-20px);
  transition: 0.3s;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 10;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.colors.bg};
  a {
    transition: 0.3s ease-out;
    text-decoration: underline;
  }
  a:hover {
    color: ${(props) => props.theme.colors.accents.primary};
  }
`;

const Delimiter = styled.span`
  margin: 0 10px;
`;

export const ProjectCard: React.FC<Props> = React.memo(({ project }) => {
  const { url } = useRouteMatch();

  return (
    <Box>
      <RoundedMenu>
        <div className="links">
          {project.link && (
            <h2 className="card-nav-link">
              <a href={project.link}>Demo</a>
              <Delimiter>|</Delimiter>
            </h2>
          )}
          {project.code_link && (
            <h2 className="card-nav-link">
              <a href={project.code_link}>Code</a>
              <Delimiter>|</Delimiter>
            </h2>
          )}
          <h2 className="card-nav-link">
            <Link to={`${url}/${project.id}`}>About</Link>
          </h2>
        </div>
        <Options />
      </RoundedMenu>
      <Title>{project.title}</Title>
      <ImgWrapper>
        <img
          src={process.env.REACT_APP_API_URL + project.img[0].url}
          alt={project.title}
        />
      </ImgWrapper>
    </Box>
  );
});
