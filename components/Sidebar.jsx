"use client";

import {
  BuildingLibraryIcon,
  ChartBarIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Sidebar() {
  const router = useRouter();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/stock/${query}`);
  };

  return (
    <div className="text-gray-500 p-12 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll  scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-36">
      <div className="space-y-4">
        <button
          className="p-4 flex items-center space-x-2 hover:text-white"
          onClick={() => router.push("/")}
        >
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button
          className="p-4 flex items-center space-x-2 hover:text-white"
          onClick={() => router.push("/stock")}
        >
          <ChartBarIcon className="h-5 w-5" />
          <p>Analyze</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <form onSubmit={handleSubmit} className="flex justify-center w-2/3">
          <input
            value={query || ""}
            onChange={(e) => setQuery(e.target.value)}
            className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-lg focus:outline-none focus:ring-[2px] focus:ring-green-700 placeholder:text-zinc-400"
            placeholder="AAPL"
          />
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
