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
    return <div>TERIMA KASIH TELAH BERTRANSAKSI DENGAN KAMI</div>;
};
export default TransactionComplete;
