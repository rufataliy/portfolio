import React from "react";
import { Box } from "./views";

interface Page {
  title: string;
  path: string;
  thumbnail: string;
  content: string;
}

export const Page: React.FC = ({ children }) => {
  return <Box>{children}</Box>;
};
