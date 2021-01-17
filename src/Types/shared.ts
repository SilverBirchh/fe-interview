export type Route = {
  route: string;
  name: string;
};

export type FetchStatus = "IDLE" | "LOADING" | "SUCCESS" | "ERROR";

export type Transaction = {
  amount: number;
  date: string;
  id: number;
};

export type Merchant = {
  categoryId: number;
  iconUrl: string;
  id: string;
  isBill: boolean;
  name: string;
  transactions: Transaction[];
};
