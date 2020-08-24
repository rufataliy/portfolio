import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Content, Title } from "components/views";
import { Project as Model } from "models";
import Markdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";

export const Project = () => {
  const [project, setProject] = useState<Model>();
  const [fetching, setFetching] = useState<boolean>(false);
  const { url } = useRouteMatch();

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}${url}`, setProject, setFetching);
  }, [url]);

  return (
    <Content>
      <Title>{project?.title}</Title>
      <img src={project?.img[0].url} alt="" />
      <Markdown renderers={{ code: CodeBlock }} source={project?.content} />
    </Content>
  );
};
