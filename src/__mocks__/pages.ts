import { Page } from "../models";
import { profile, project, contact } from "./img";

export const pages: Page[] = [
  {
    id: "1",
    title: "About",
    path: "about",
    type: "section",
    content: `
My name is Rufat and I am a Canada-based professional front-end developer that has a strong bias for making things happen and loves the team aspect of software development. I am a purist at heart-preferring to handcraft solutions from the ground up when possible rather than relying on frameworks, plugins, and libraries. I am versed in the latest front-end technologies and behind my love for clean design and code, 

Projects that I've worked on can be viewed on my [projects page](https://rufataliyev.com/projects).

I consider myself a person who follows modern web development practices and new technologies; a person who never stops learning; a person who is trustworthy, responsible, respects deadlines, and knows that customer satisfaction is the key to success.

### Let's create together.`,
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
    type: "link",
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
    type: "flip",
    content:
      "+1 613 879 5442\n\nrufataliyevbakou@gmail.com\n\n[Github](https://github.com/rufataliy)\n\n[Linkedin](https://www.linkedin.com/in/rufat-aliyev/)",
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
  // {
  //   id: "3",
  //   title: "Blog",
  //   path: "blogs",
  //   type: "link",
  //   content: "",
  //   img: [
  //     {
  //       url: blog,
  //       formats: {
  //         thumbnail: {
  //           url: blog,
  //         },
  //         large: {
  //           url: blog,
  //         },
  //         medium: {
  //           url: blog,
  //         },
  //         small: {
  //           url: blog,
  //         },
  //       },
  //     },
  //   ],
  // },
];
