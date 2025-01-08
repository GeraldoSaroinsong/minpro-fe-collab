import { callAPI } from "@/config/axios";
import * as React from "react";

interface ITransactionComplete {}

const TransactionComplete: React.FunctionComponent<
  ITransactionComplete
> = () => {
  // const updateTransaction = async () => {
  //   try {
  //     const res = await callAPI.patch(`/transaction/${}`)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return <div>terima kasih telah membeli psk kami</div>;
};
export default TransactionComplete;
