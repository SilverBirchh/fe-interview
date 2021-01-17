import { Dispatch } from "../context/bills-context";
import { Merchant } from "../Types/shared";

export default async function updateBill(
  dispatch: Dispatch,
  merchantId: string,
  isBill: boolean,
  merchants: Merchant[]
) {
  dispatch({ type: "LOADING" });

  try {
    await fetch(`http://localhost:3002/merchants/${merchantId}`, {
      method: "PATCH",
      body: JSON.stringify({ isBill }),
    });

    const updatedMerchant = merchants.find(
      (merchant) => merchant.id === merchantId
    );

    const updatedMerchants = merchants.filter(
      (merchant) => merchant.id !== merchantId
    );

    updatedMerchants.push({ ...(updatedMerchant as Merchant), isBill });

    dispatch({ type: "SUCCESS", data: updatedMerchants });
  } catch (err) {
    dispatch({ type: "ERROR", error: err });
  }
}
