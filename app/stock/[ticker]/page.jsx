import {
  getBalanceSheet,
  getIncomeSheet,
  getCashFlowStatement,
} from "@/lib/fmp";
import { camelToTitle, formatNum } from "@/lib/utils";

// probably move this to a utils file or parse it in fmp.js initially
const balanceSheetExclude = new Set([
  "date",
  "symbol",
  "reportedCurrency",
  "cik",
  "fillingDate",
  "acceptedDate",
  "calendarYear",
  "period",
  "link",
  "finalLink",
]);

async function Stock({ params }) {
  const data = await getBalanceSheet(params?.ticker);

  return (
    <div className="p-12 overflow-y-scroll scrollbar-hide h-screen">
      <section className=" space-y-8">
        <h1 className="text-3xl text-center">
          Balance Sheet for {params?.ticker}
        </h1>
        <table className="whitespace-nowrap border-separate border-spacing-6 text-sm font-light">
          <thead className="border-b font-medium border-neutral-500">
            <tr>
              <th scope="col" className="">
                All values USD Millions
              </th>
              {data.map((obj, i) => {
                return (
                  <th key={i} scope="col" className=" text-left w-8">
                    {obj.date.slice(0, 4)}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {Object.entries(data[0]).map(([key, value]) => {
              if (!balanceSheetExclude.has(key)) {
                return (
                  <tr key={key} className="">
                    <td className="font-medium">{camelToTitle(key)}</td>
                    {data.map((obj, i) => {
                      return (
                        <td key={i} className="">
                          {formatNum(obj[key] / 1000000)}
                        </td>
                      );
                    })}
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Stock;
