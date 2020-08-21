import { rest } from "msw";
import { pages } from "./pages";
import { about } from "./about";
import { projects } from "./projects";

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
];
