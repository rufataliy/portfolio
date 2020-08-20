import React, { useEffect, useState } from "react";
import { Portfolio as Model } from "../../models";
import { PortfolioCard } from "./PostfolioCard";
import { Portfolio } from "./Portfolio";
import { BoxWrapper } from "../views";
import { Page } from "../Page";
import { Route, useRouteMatch } from "react-router-dom";

export const PortfolioList: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Model[]>([]);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    fetch("http://localhost:1337" + path)
      .then((res) => res.json())
      .then((data) => setPortfolios(data));
  }, [path]);

  return (
    <BoxWrapper>
      {portfolios.map((portfolio) => {
        return (
          <Route exact path={url}>
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          </Route>
        );
      })}
      <Route path={`${url}/:portfolioid`}>
        <Page>
          <Portfolio />
        </Page>
      </Route>
    </BoxWrapper>
  );
};
