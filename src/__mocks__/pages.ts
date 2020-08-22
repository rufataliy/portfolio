import { Page } from "../models";
import { profile, project, blog } from "./img";

export const pages: Page[] = [
  {
    id: "1",
    title: "About",
    path: "about",
    img: [
      {
        url: profile,
        formats: {
          thumbnail: {
            url: profile,
          },
          large: {
            url: profile,
          },
          medium: {
            url: profile,
          },
          small: {
            url: profile,
          },
        },
      },
    ],
  },
  {
    id: "1",
    title: "Projects",
    path: "projects",
    img: [
      {
        url: project,
        formats: {
          thumbnail: {
            url: project,
          },
          large: {
            url: project,
          },
          medium: {
            url: project,
          },
          small: {
            url: project,
          },
        },
      },
    ],
  },
];
