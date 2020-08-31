import React, { useState, useEffect, useContext } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { Blog } from "./Blog";
import { BoxLoader } from "components/views";
import { Context } from "Context";
import { BlogCard } from "./BlogCard";
import { api } from "../../../util";
import { Blog as Model } from "models";

export const Blogs: React.FC = React.memo(() => {
  const [blogs, setBlogs] = useState<Model[]>([]);
  const [fetching, setFetching] = useState(false);
  const { url, path } = useRouteMatch();
  const counts: { [key: string]: any } = useContext(Context);

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}${path}`, setBlogs, setFetching);
  }, [path]);

  const loading = blogs.length < 1 || fetching;

  return (
    <>
      <Route exact path={`${url}/:blogid`}>
        <Blog />
      </Route>
      <Route exact path={url}>
        <BoxLoader count={counts?.blogs || 0} loading={loading}>
          {blogs.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </BoxLoader>
      </Route>
    </>
  );
});
