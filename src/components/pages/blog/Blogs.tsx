import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import { Blog } from "./Blog";
import { BlogList } from "./BlogList";

export const Blogs: React.FC = React.memo(() => {
  const { url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${url}/:blogid`}>
          <Blog />
        </Route>
        <Route exact path={url}>
          <BlogList />
        </Route>
      </Switch>
    </>
  );
});
