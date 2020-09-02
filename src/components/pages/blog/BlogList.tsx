import React, { useState, useEffect, useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { BoxLoader } from "components/views";
import { Context } from "Context";
import { BlogCard } from "./BlogCard";
import { api } from "../../../util";
import { Blog as Model } from "models";

export const BlogList: React.FC = React.memo(() => {
  const [blogs, setBlogs] = useState<Model[]>([]);
  const [fetching, setFetching] = useState(false);
  const { path } = useRouteMatch();
  const counts: { [key: string]: any } = useContext(Context);

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}${path}`, setBlogs, setFetching);
  }, [path]);

  const loading = blogs.length < 1 || fetching;

  return (
    <BoxLoader count={counts?.blogs || 0} loading={loading}>
      {blogs.map((blog) => {
        return <BlogCard key={blog.id} blog={blog} />;
      })}
    </BoxLoader>
  );
});
