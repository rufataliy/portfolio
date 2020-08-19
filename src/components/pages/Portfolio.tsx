import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Content, Title } from "components/views";
import { Portfolio as Model } from "models";

export const Portfolio = () => {
  const [portfolio, setPortfolio] = useState<Model>();
  const { url } = useRouteMatch();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, [url]);
  console.log(portfolio);

  return (
    <Content>
      <Title>{portfolio?.title}</Title>
      <img src={portfolio?.thumbnail} alt="" />
      {portfolio?.content}
    </Content>
  );
};
