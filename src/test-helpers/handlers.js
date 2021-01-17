import { rest } from "msw";
import merchants from "./data/merchants";

const handlers = [
  rest.get("http://localhost:3002/merchants", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(merchants));
  }),
  rest.patch("http://localhost:3002/merchants/:id", async (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

export { handlers };
