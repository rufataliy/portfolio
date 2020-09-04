import React, { useState, useEffect, useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { Project as Model } from "../../../models";
import { ProjectCard } from "./ProjectCard";
import { BoxLoader, BoxWrapper } from "components/views";
import { api } from "../../../util";
import { Context } from "Context";

export const ProjectList: React.FC = React.memo(() => {
  const [projects, setProjects] = useState<Model[]>([]);
  const [fetching, setFetching] = useState(false);
  const { path } = useRouteMatch();
  const counts: { [key: string]: any } = useContext(Context);

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}${path}`, setProjects, setFetching);
  }, [path]);

  const loading = projects.length < 1 || fetching;

  return (
    <BoxLoader count={counts?.projects || 0} loading={loading}>
      <BoxWrapper>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </BoxWrapper>
    </BoxLoader>
  );
});
