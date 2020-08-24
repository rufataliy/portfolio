import React from "react";
import { Box, Title } from "../views";
import { Project as Model } from "../../models";
import { Link, useRouteMatch } from "react-router-dom";

interface Props {
  project: Model;
}

export const ProjectCard: React.FC<Props> = React.memo(({ project }) => {
  const { url } = useRouteMatch();

  return (
    <Link to={`${url}/${project.id}`}>
      <Box>
        <Title>{project.title}</Title>
        <img
          className="project-card-img"
          src={process.env.REACT_APP_API_URL + project.img[0].url}
          alt={project.title}
        />
      </Box>
    </Link>
  );
});
