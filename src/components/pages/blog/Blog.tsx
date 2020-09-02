import React, { useState, useEffect, Suspense } from "react";
import { useRouteMatch } from "react-router-dom";
import { Content, ContentLoader } from "components/views";
import { Blog as Model } from "models";
import { CodeBlock } from "components/views";
import { api } from "../../../util";

const Markdown = React.lazy(() => import("react-markdown"));

export const Blog = () => {
  const [blog, setBlog] = useState<Model>();
  const [fetching, setFetching] = useState<boolean>(false);
  const { url } = useRouteMatch();

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}${url}`, setBlog, setFetching);
  }, [url]);

  return (
    <Content>
      <ContentLoader loading={fetching}>
        <Suspense fallback={<p>loading</p>}>
          <Markdown renderers={{ code: CodeBlock }} source={blog?.desc} />
        </Suspense>
      </ContentLoader>
    </Content>
  );
};
