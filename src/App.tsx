import React from "react";
import { Route, Switch } from "react-router-dom";
import Bills from "./components/bills/Bills";
import Tabs from "./components/shared/tabs/Tabs";
import { BillProvider } from "./context/bills-context";

export default function App() {
  return (
    <BillProvider>
      <Tabs />
      <Switch>
        <Route path="/">
          <Bills />
        </Route>
      </Switch>
    </BillProvider>
  );
}
