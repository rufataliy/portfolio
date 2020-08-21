import { Page } from "../models";
import { contact, profile, project, blog } from "./img";

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
  {
    title: "Blog",
    path: "blog",
    id: "1",
    img: [
      {
        url: blog,
        formats: {
          thumbnail: {
            url: blog,
          },
          large: {
            url: blog,
          },
          medium: {
            url: blog,
          },
          small: {
            url: blog,
          },
        },
      },
    ],
  },
  {
    title: "Contact",
    path: "contact",
    id: "1",
    img: [
      {
        url: contact,
        formats: {
          thumbnail: {
            url: contact,
          },
          large: {
            url: contact,
          },
          medium: {
            url: contact,
          },
          small: {
            url: contact,
          },
        },
      },
    ],
  },
];
