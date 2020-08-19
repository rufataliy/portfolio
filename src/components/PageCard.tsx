import React from "react";
import { Box, Title } from "./views";
import { Page } from "../models";
import { Link } from "react-router-dom";

interface Props {
  page: Page;
}

export const PageCard: React.FC<Props> = ({ page }) => {
  return (
    <Link to={page.path}>
      <Box>
        <Title>{page.title}</Title>
        <img className="page-card-img" src={page.thumbnail} alt={page.title} />
      </Box>
    </Link>
  );
};
