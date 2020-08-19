import { rest } from "msw";
import { pages } from "./pages";
import { about } from "./about";
import { portfolios } from "./portfolios";

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
    const portfolio = portfolios.find((portfolio) => portfolio.id === id);
    return res(ctx.status(200), ctx.json({ ...portfolio }));
  }),
];
