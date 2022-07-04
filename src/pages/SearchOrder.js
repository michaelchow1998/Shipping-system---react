import { useState, useEffect } from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import SearchBox from "../components/search/SearchBox";
import DetailsBox from "../components/search/DetailsBox";

function SearchOrder() {
  const pages = [
    {
      name: "Search Order",
      href: "search",
      current: true,
    },
  ];
  useEffect(() => {
    console.log(searchId);
  }, []);

  let [searched, setSearched] = useState(false);
  let [searchId, setSearchId] = useState("");
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
