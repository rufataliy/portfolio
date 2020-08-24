import React, { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { Project as Model } from "../../models";
import { ProjectCard } from "./ProjectCard";
import { Project } from "./Project";
import { BoxLoader } from "components/views";

export const ProjectList: React.FC = () => {
  const [project, setProject] = useState<Model[]>([]);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  }, [path]);

  const loading = false

  return (
    <>
      <Route exact path={`${url}/:projectid`}>
        <Project />
      </Route>
      <Route exact path={url}>
        <BoxLoader loading={loading}>
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </BoxLoader>
      </Route>
    </>
  );
});
