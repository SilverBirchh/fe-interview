import { Route } from "../Types/shared";

export const StyleConstants = {
  colors: {
    blue: "#0815FF",
    yellow: "#F7BF31",
    gray: "#CBD5E0",
  },
};

export const APIConstants = {
  base: "http://localhost:3002/",
};

export const Routes: Route[] = [
  {
    route: "/",
    name: "Bills",
  },
  {
    route: "/paid",
    name: "Paid",
  },
];
