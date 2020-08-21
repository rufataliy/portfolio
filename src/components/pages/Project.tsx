import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Content, Title } from "components/views";
import { Project as Model } from "models";
import Markdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";

export const Project = () => {
  const [project, setProject] = useState<Model>();
  const { url } = useRouteMatch();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [url]);

  return (
    <Content>
      <Title>{project?.title}</Title>
      <img src={project?.img[0].url} alt="" />
      <Markdown renderers={{ code: CodeBlock }} source={project?.content} />
    </Content>
  );
};
