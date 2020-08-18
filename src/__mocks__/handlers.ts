import { rest } from "msw";
import { pages } from "./pages";
import { about } from "./about";
import { portfolios } from "./portfolios";
import { portfolioContents } from "./portfolioContents";

export const handler = [
  rest.get("/pages", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pages));
  }),
  rest.get("/about", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(about));
  }),
  rest.get("/portfolios", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(portfolios));
  }),
  rest.get("/portfolios/:id", (req, res, ctx) => {
    const { id } = req.params;
    const content = portfolioContents[id];
    return res(ctx.status(200), ctx.json({ body: content }));
  }),
];
