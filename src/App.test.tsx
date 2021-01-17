import React from "react";
import { MemoryRouter } from "react-router-dom";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { handlers } from "./test-helpers/handlers";
import { rest } from "msw";

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("loads the inital app showing unpaid bills", async () => {
  render(<App />, { wrapper: MemoryRouter });
  await waitForElementToBeRemoved(() =>
    screen.getByRole("img", {
      name: /loading\.\.\./i,
    })
  );

  const skyBill = screen.getByText(/sky tv/i);
  const skyCount = screen.getAllByText(/Number of transactions: 5/i)[0];
  expect(skyBill).toBeInTheDocument();
  expect(skyCount).toBeInTheDocument();
});

test("can switch and show paid bill", async () => {
  render(<App />, { wrapper: MemoryRouter });
  await waitForElementToBeRemoved(() =>
    screen.getByRole("img", {
      name: /loading\.\.\./i,
    })
  );

  userEvent.click(screen.getByText(/paid/i));
  const vodafonePaid = screen.getByText(/vodafone/i);
  expect(vodafonePaid).toBeInTheDocument();
});

test("can expand and show transactions for a merchant", async () => {
  render(<App />, { wrapper: MemoryRouter });
  await waitForElementToBeRemoved(() =>
    screen.getByRole("img", {
      name: /loading\.\.\./i,
    })
  );

  const showTransactionButton = screen.getAllByText(/show transactions/i)[0];
  userEvent.click(showTransactionButton);

  expect(screen.getByText(/hide transactions/i)).toBeInTheDocument();
  expect(screen.getByText(/- Spent £82.17 on 2018-01-01/i)).toBeInTheDocument();
});

test("can move a bill in to paid", async () => {
  render(<App />, { wrapper: MemoryRouter });
  await waitForElementToBeRemoved(() =>
    screen.getByRole("img", {
      name: /loading\.\.\./i,
    })
  );

  const removeSkyButton = screen.getAllByText(/remove bill/i)[0];
  userEvent.click(removeSkyButton);

  await waitForElementToBeRemoved(() => screen.getByText(/sky tv/i));

  const missingSkyTv = screen.queryByText(/sky tv/i);
  expect(missingSkyTv).not.toBeInTheDocument();

  userEvent.click(screen.getByText(/paid/i));

  const skyTv = screen.getByText(/sky tv/i);
  expect(skyTv).toBeInTheDocument();
});

test("shows an error message server returns an error", async () => {
  server.use(
    rest.get("http://localhost:3002/merchants", async (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<App />, { wrapper: MemoryRouter });

  await waitForElementToBeRemoved(() =>
    screen.getByRole("img", {
      name: /loading\.\.\./i,
    })
  );

  expect(
    screen.getByText(/Sorry! Something has gone wrong. Please try again./i)
  ).toBeInTheDocument();
});

test("shows the user there is nothing in the list when merchants is empty", async () => {
  server.use(
    rest.get("http://localhost:3002/merchants", async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json([]));
    })
  );

  render(<App />, { wrapper: MemoryRouter });

  await waitForElementToBeRemoved(() =>
    screen.getByRole("img", {
      name: /loading\.\.\./i,
    })
  );

  expect(screen.getByText(/Nothing to see here!/i)).toBeInTheDocument();
});
