import React from "react";
import { Box, Title } from "../views";
import { Portfolio as Model } from "../../models";
import { Link, useRouteMatch } from "react-router-dom";

interface Props {
  portfolio: Model;
}

export const PortfolioCard: React.FC<Props> = ({ portfolio }) => {
  const { url } = useRouteMatch();

  return (
    <Link to={`${url}/${portfolio.id}`}>
      <Box>
        <Title>{portfolio.title}</Title>
        <img
          className="portfolio-card-img"
          src={"http://localhost:1337" + portfolio.img[0].url}
          alt={portfolio.title}
        />
      </Box>
    </Link>
  );
};
