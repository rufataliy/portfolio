import { Page } from "../models";
import { profile, project, contact, blog } from "./img";

export const pages: Page[] = [
  {
    id: "1",
    title: "About",
    path: "about",
    type: "regular",
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
    id: "2",
    title: "Projects",
    path: "projects",
    type: "extended",
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
    id: "4",
    title: "Contact",
    path: "contact",
    type: "extended",
    content: "contact content",
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
  {
    id: "3",
    title: "Blog",
    path: "blogs",
    type: "regular",
    content: "",
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
];
