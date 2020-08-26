import React, { useState, useEffect, useContext } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { Project as Model } from "../../models";
import { ProjectCard } from "./ProjectCard";
import { Project } from "./Project";
import { BoxLoader } from "components/views";
import { api } from "../../util";
import { Context } from "Context";

export const ProjectList: React.FC = React.memo(() => {
  const [projects, setProjects] = useState<Model[]>([]);
  const [fetching, setFetching] = useState(false);
  const { url, path } = useRouteMatch();
  const counts: { [key: string]: any } = useContext(Context);

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}${path}`, setProjects, setFetching);
  }, [path]);

  const loading = projects.length < 1 || fetching;

  return (
    <>
      <Route exact path={`${url}/:projectid`}>
        <Project />
      </Route>
      <Route exact path={url}>
        <BoxLoader count={counts?.projects || 0} loading={loading}>
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </BoxLoader>
      </Route>
    </>
  );
});
