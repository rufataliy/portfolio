import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { Project } from "./Project";
import { ProjectList } from "./ProjectList";

export const Projects: React.FC = React.memo(() => {
  const { url } = useRouteMatch();

  return (
    <>
      <Route exact path={`${url}/:projectid`}>
        <Project />
      </Route>
      <Route exact path={url}>
        <ProjectList />
      </Route>
    </>
  );
});
