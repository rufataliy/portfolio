import { Page } from "../models";
import { contact, profile, project, blog } from "./img";

export const pages: Page[] = [
  {
    title: "About",
    path: "about",
    thumbnail: profile,
  },
  {
    title: "Portfolio",
    path: "portfolios",
    thumbnail: project,
  },
  {
    title: "Blog",
    path: "blog",
    thumbnail: blog,
  },
  {
    title: "Contact",
    path: "contact",
    thumbnail: contact,
  },
];
