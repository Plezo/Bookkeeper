import React from "react";
import TradingViewWidget from "../TradingViewWidget";

function OverviewView({ ticker }) {
  return (
    <div>
      <TradingViewWidget ticker={ticker} />
    </div>
  );
}

export default OverviewView;
