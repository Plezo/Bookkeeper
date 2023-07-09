"use client";

import { useEffect, useState } from "react";

import { getBalanceSheet } from "@/lib/actions";
import { camelToTitle, formatNum } from "@/lib/utils";

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

function BalanceView({ ticker }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (ticker) => {
    const res = await getBalanceSheet(ticker)
      .then((res) => {
        return res;
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData(ticker);
  }, [ticker]);

  if (loading) return "Loading...";
  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div className=" space-y-8">
      <h1 className="text-3xl text-center">Balance Sheet for {ticker}</h1>

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
          {data[0] &&
            Object.entries(data[0]).map(([key, value]) => {
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
    </div>
  );
}

export default BalanceView;
