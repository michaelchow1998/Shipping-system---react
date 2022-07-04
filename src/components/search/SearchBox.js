import { useState } from "react";
import SearchBar from "./SearchBar";

//import lama from "../images/lama256.png";
import lama from "../../images/lama256.png";

export default function SearchBox({ setSearched, setSearchId }) {
  //   console.log("orderExist: ", orderExist);
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-10 lg:px-8">
        <div className="flex-c py-2xl mx-auto mt-4 flex h-full w-4/5 px-4">
          <i className="fas fa-search mt-2 mr-2"></i>
          <h2 className="text-2xl font-semibold">Search Order</h2>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 sm:pb-10 lg:px-8">
        <div className="py- mx-auto flex h-full w-4/5 flex-col items-center justify-center rounded-md bg-gray-800 px-4">
          <div>
            <img
              className="my-4 mt-12 h-36 w-auto lg:block"
              src={lama}
              alt="lama"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">ShipSheep</h1>
          </div>
          <div>
            <h1 className="py-2 text-xl font-bold text-gray-400">
              Search your Order by Search ID
            </h1>
          </div>

          <SearchBar setSearched={setSearched} setSearchId={setSearchId} />
        </div>
      </div>
    </div>
  );
}
