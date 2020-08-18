import React from "react";
import { Box } from "./views";
import { Page } from "../models";
import { Link } from "react-router-dom";

interface Props {
  page: Page;
}

export const PageCard: React.FC<Props> = ({ page }) => {
  return (
    <Link to={page.path}>
      <Box>
        <h1>{page.title}</h1>
        <img src={page.thumbnail} alt={page.title} />
      </Box>
    </Link>
  );
};
