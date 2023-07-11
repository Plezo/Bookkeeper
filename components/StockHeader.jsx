"use client";

import {
  OverviewView,
  BalanceView,
  IncomeView,
  CashFlowView,
} from "@/components/views";

import { useState } from "react";

function StockHeader({ ticker }) {
  const [view, setView] = useState("overview");

  return (
    <div>
      <div className="pb-20 flex gap-x-4 text-gray-500">
        <button
          onClick={() => setView("overview")}
          className="p-4 hover:text-white"
        >
          <h1>Overview</h1>
        </button>
        <button
          onClick={() => setView("income")}
          className="p-4 hover:text-white"
        >
          <h1>Income Statement</h1>
        </button>
        <button
          onClick={() => setView("balance")}
          className="p-4 hover:text-white"
        >
          <h1>Balance Sheet</h1>
        </button>
        <button
          onClick={() => setView("cashflow")}
          className="p-4 hover:text-white"
        >
          <h1>Cash flow statement</h1>
        </button>
      </div>

      <section className="h-screen">
        {view === "overview" && <OverviewView ticker={ticker} />}
        {view === "income" && <IncomeView ticker={ticker} />}
        {view === "balance" && <BalanceView ticker={ticker} />}
        {view === "cashflow" && <CashFlowView ticker={ticker} />}
      </section>
    </div>
  );
}

export default StockHeader;
