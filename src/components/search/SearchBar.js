import { useState } from "react";

export default function SearchBar({ setSearched, setSearchId }) {
  const [filterDate, setFilterDate] = useState("");
  const searchBtnHandler = async () => {
    if (filterDate) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/guest/orders/${filterDate}/exists`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((response) => response.json())
          .then((json) => {
            if (json.exists === true) {
              setSearchId(json.searchID);
              setTimeout(() => {
                setSearched(json.exists);
              }, 500);
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
          onChange={handleChange}
          value={filterDate}
          placeholder="Please enter your order search ID"
          className="block w-full rounded-md border-gray-300 py-1.5 pr-36 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-48 mt-4 ml-12 flex gap-6 lg:ml-8">
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
    </div>
  );
}
