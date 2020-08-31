import { rest } from "msw";
import { pages } from "./pages";
import { about } from "./about";
import { projects } from "./projects";
import { contact } from "./contact";
import { counts } from "./counts";
import { resume } from "./resume";
import { blogs } from "./blogs";

export const handler = [
  rest.get("/pages", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pages));
  }),
  rest.get("/about", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(about));
  }),
  rest.get("/projects", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(projects));
  }),
  rest.get("/projects/:id", (req, res, ctx) => {
    const { id } = req.params;
    const project = projects.find((project) => project.id === id);
    return res(ctx.status(200), ctx.json({ ...project }));
  }),
  rest.get("/contact", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(contact));
  }),
  rest.get("/counts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(counts));
  }),
  rest.get("/resume", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(resume));
  }),
  rest.get("/blogs", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(blogs));
  }),
  rest.get("/blogs/:id", (req, res, ctx) => {
    const { id } = req.params;
    const blog = blogs.find((blog) => blog.id === id);
    return res(ctx.status(200), ctx.json(blog));
  }),
];
