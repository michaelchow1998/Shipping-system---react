import { useState } from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import SearchBox from "../components/SearchBox";
import DetailsBox from "../components/DetailsBox";

function SearchOrder() {
  const pages = [
    {
      name: "Search Order",
      href: "search",
      current: true,
    },
  ];
  let [searched, setSearched] = useState(false);
  let [searchId, setSearchId] = useState("");
  console.log("main state:", searched);
  console.log("search id:", searchId);
  return (
    <div className="">
      <Breadcrumbs pages={pages} />

      {!searched && (
        <SearchBox setSearched={setSearched} setSearchId={setSearchId} />
      )}
      {searched && <DetailsBox setSearched={setSearched} searchId={searchId} />}
    </div>
  );
}

export default SearchOrder;
