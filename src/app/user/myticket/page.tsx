"use client";
import { callAPI } from "@/config/axios";
import * as React from "react";

export default function MyTicketPage() {
  const getTickets = async () => {
    try {
      const res = await callAPI.get("/transaction");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getTickets();
  }, []);

  return <div className="text-4xl font-bold uppercase">my tickets page</div>;
}
