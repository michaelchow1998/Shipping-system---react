import { useState } from "react";
import axios from "../../api/axios";

export default function SearchBar({ setSearched, setSearchId }) {
  const [filterDate, setFilterDate] = useState("");
  const [searchError, setSearchError] = useState(false);
  const searchBtnHandler = async () => {
    if (filterDate) {
      try {
        await axios
          .get(`guest/orders/${filterDate}/exists`, {
            headers: { "Content-Type": "application/json" },
          })
          .then(({ data }) => {
            if (data.exists === true) {
              setSearchId(data.searchID);
              setTimeout(() => {
                setSearchError(false);
                setSearched(true);
              }, 500);
            } else {
              setSearchError(true);
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (e) => {
    setFilterDate(e.target.value);
  };

  const resetBtnHandle = () => {
    setFilterDate("");
  };

  return (
    <div>
      <div className="relative mt-1 flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          size="35"
          onChange={handleChange}
          value={filterDate}
          placeholder="Enter order search ID"
          className="w-full rounded-md border-gray-300 py-1.5 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-48 mt-4 ml-3 flex gap-6 sm:ml-14 lg:ml-8">
        <button
          onClick={resetBtnHandle}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-8 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Reset
        </button>
        <button
          onClick={searchBtnHandler}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Search
        </button>
      </div>
      <div className="relative bottom-32 text-xl font-semibold text-red-600">
        {searchError ? "The Order Search Id may not correct" : ""}
      </div>
    </div>
  );
}
