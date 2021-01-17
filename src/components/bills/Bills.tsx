import React, { useCallback } from "react";
import { useBillsDispatch, useBillsState } from "../../context/bills-context";
import Loading from "../shared/Loading";
import Error from "../shared/Error";
import { useLocation } from "react-router-dom";
import List from "../shared/merchant-list/List";
import updateBill from "../../modules/update-bill";

export default function Bills() {
  const { status, paidBills, pendingBills } = useBillsState();

  const dispatch = useBillsDispatch();

  const { pathname } = useLocation();

  const handleBillChange = useCallback(
    (isBill: boolean, merchantId: string) => {
      updateBill(dispatch, merchantId, isBill, [
        ...(paidBills || []),
        ...(pendingBills || []),
      ]);
    },
    [dispatch, paidBills, pendingBills]
  );

  if (status === "ERROR") {
    return <Error />;
  }

  if (pendingBills === undefined || paidBills === undefined) {
    return <Loading />;
  }

  const merchants = pathname === "/" ? pendingBills : paidBills;

  const isBill = pathname === "/" ? true : false;

  return (
    <List
      merchants={merchants}
      isBill={isBill}
      handleBillChange={handleBillChange}
    />
  );
}
