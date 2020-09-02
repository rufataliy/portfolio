import React, { useState, useEffect, Suspense } from "react";
import { useRouteMatch } from "react-router-dom";
import { Content, ContentLoader, CodeBlock } from "components/views";
import { Project as Model } from "models";
import { api } from "../../../util";
const Markdown = React.lazy(() => import("react-markdown"));

export const Project = () => {
  const [project, setProject] = useState<Model>();
  const [fetching, setFetching] = useState<boolean>(false);
  const { url } = useRouteMatch();

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}${url}`, setProject, setFetching);
  }, [url]);

  return (
    <Content>
      <ContentLoader loading={fetching}>
        <Suspense fallback={<p>loading</p>}>
          <Markdown renderers={{ code: CodeBlock }} source={project?.content} />
        </Suspense>
      </ContentLoader>
    </Content>
  );
};
