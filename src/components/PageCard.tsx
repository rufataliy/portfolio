import React from "react";
import { Box, Title } from "./views";
import { Page } from "../models";
import { Link } from "react-router-dom";

interface Props {
  page: Page;
}

export const PageCard: React.FC<Props> = ({ page }) => {
  return (
    <Box>
      <Link to={page.path}>
        <Title>{page.title}</Title>
        <img
          className="page-card-img"
          src={`${process.env.REACT_APP_API_URL}${page.img.data.attributes.url}`}
          alt={page.title}
        />
      </Link>
    </Box>
  );
};
