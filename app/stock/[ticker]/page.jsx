/*
TODO: Figure out how to switch between balance sheet, income statement, and cash flow statement
without having to make a new page for each one. Maybe make client component that takes in the currentData
and the table would be another client component that has a useEffect for that same data, this data changes
depending on what button the user clicks on.

You might have to implement both and compare the runtimes
*/

import StockHeader from "@/components/StockHeader";

async function Stock({ params }) {
  return (
    <div className="p-12 overflow-y-scroll scrollbar-hide h-screen">
      <StockHeader ticker={params?.ticker} />
    </div>
  );
}

export default Stock;
