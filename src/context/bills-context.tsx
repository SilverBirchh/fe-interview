import React, { createContext, useReducer, useContext, useEffect } from "react";
import fetchMerchants from "../modules/fetch-merchants";
import { FetchStatus, Merchant } from "../Types/shared";

type Bills = {
  pendingBills: Merchant[] | undefined;
  paidBills: Merchant[] | undefined;
  status: FetchStatus;
  error: string | undefined;
};

type Actions =
  | { type: "LOADING" }
  | { type: "ERROR"; error: string }
  | { type: "SUCCESS"; data: Merchant[] };

export type Dispatch = (action: Actions) => void;

const initialState: Bills = {
  pendingBills: undefined,
  paidBills: undefined,
  status: "IDLE",
  error: undefined,
};

const BillsStateProvider = createContext(initialState);

const BillsDispatchProvider = createContext<Dispatch | undefined>(undefined);

function BillsReducer(state: Bills, action: Actions): Bills {
  switch (action.type) {
    case "LOADING":
      return { ...state, status: "LOADING" };
    case "SUCCESS":
      const pendingBills = action.data.filter((merchant) => merchant.isBill);
      const paidBills = action.data.filter((merchant) => !merchant.isBill);
      return {
        ...state,
        status: "SUCCESS",
        pendingBills,
        paidBills,
        error: undefined,
      };
    case "ERROR":
      return { ...state, error: action.error, status: "ERROR" };
  }
}

export function BillProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(BillsReducer, initialState);

  useEffect(() => {
    fetchMerchants(dispatch);
  }, []);

  return (
    <BillsStateProvider.Provider value={state}>
      <BillsDispatchProvider.Provider value={dispatch}>
        {children}
      </BillsDispatchProvider.Provider>
    </BillsStateProvider.Provider>
  );
}

export const useBillsState = (): Bills => {
  const context = useContext(BillsStateProvider);
  if (context === undefined) {
    throw new Error("useBillsState must be used within a BillsProvider");
  }
  return context;
};

export const useBillsDispatch = (): React.Dispatch<Actions> => {
  const context = useContext(BillsDispatchProvider);
  if (context === undefined) {
    throw new Error("useBillsState must be used within a BillsProvider");
  }
  return context;
};
