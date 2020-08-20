import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Content, Title } from "components/views";
import { Portfolio as Model } from "models";
import Markdown from "react-markdown";

export const Portfolio = () => {
  const [portfolio, setPortfolio] = useState<Model>();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    fetch("http://localhost:1337" + url)
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, [url]);
  console.log(portfolio);

  return (
    <Content>
      <Title>{portfolio?.title}</Title>
      <img src={"http://localhost:1337" + portfolio?.img[0].url} alt="" />
      <Markdown source={portfolio?.content} />
    </Content>
  );
};
