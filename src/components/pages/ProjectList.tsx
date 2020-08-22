import React, { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { Project as Model } from "../../models";
import { ProjectCard } from "./ProjectCard";
import { Project } from "./Project";

export const ProjectList: React.FC = () => {
  const [project, setProject] = useState<Model[]>([]);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  }, [path]);

  return (
    <>
      {project.map((project) => {
        return (
          <Route exact path={url}>
            <ProjectCard key={project.id} project={project} />
          </Route>
        );
      })}
      <Route path={`${url}/:projectid`}>
        <Project />
      </Route>
    </>
  );
};
