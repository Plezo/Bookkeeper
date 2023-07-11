/*

Consider putting the screener in this page instead of a seperate tab

*/

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function StockPage() {
  const router = useRouter();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/stock/${query}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center w-2/3">
        <input
          value={query || ""}
          onChange={(e) => setQuery(e.target.value)}
          className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-lg focus:outline-none focus:ring-[2px] focus:ring-green-700 placeholder:text-zinc-400"
          placeholder="AAPL"
        />
      </form>
    </div>
  );
}

export default StockPage;
