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
        <img src={portfolio.thumbnail} alt={portfolio.title} />
      </Box>
    </Link>
  );
};
