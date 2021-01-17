import { Dispatch } from "../context/bills-context";

export default async function fetchMerchants(dispatch: Dispatch) {
  dispatch({ type: "LOADING" });
  try {
    const response = await fetch("http://localhost:3002/merchants");
    const data = await response.json();
    dispatch({ type: "SUCCESS", data });
  } catch (err) {
    dispatch({ type: "ERROR", error: err });
  }
}
