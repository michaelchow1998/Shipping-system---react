import { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Table from "../components/Table";

function Locations() {
  const pages = [
    {
      name: "Locations",
      href: "locations",
      current: true,
    },
  ];

  let [locationsNT, setLocationsNT] = useState([]);
  let [locationsKL, setLocationsKL] = useState([]);
  let [locationsHK, setLocationsHK] = useState([]);
  let [loading, setloading] = useState(true);

  const NTlists = [];
  const KLlists = [];
  const HKlists = [];

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/guest/locations",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const json = await response.json();

        Object.keys(json).forEach((location) => {
          if (json[location].area === "NT") {
            NTlists.push(json[location]);
          }
          if (json[location].area === "KL") {
            KLlists.push(json[location]);
          }
          if (json[location].area === "HK") {
            HKlists.push(json[location]);
          }
        });

        //set Area lists
        setLocationsNT(NTlists);
        setLocationsKL(KLlists);
        setLocationsHK(HKlists);
        setloading(false);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, []);

  return (
    <div className="">
      <Breadcrumbs pages={pages} />
      <div className="mt-10">
        {!loading && (
          <Table
            datalist={locationsNT}
            area={"New Territories"}
            bg={"bg-green-500"}
          />
        )}
        {!loading && (
          <Table datalist={locationsKL} area={"Kowloon"} bg={"bg-red-500"} />
        )}
        {!loading && (
          <Table
            datalist={locationsHK}
            area={"Hong Kong Island"}
            bg={"bg-blue-600"}
          />
        )}
      </div>
    </div>
  );
}

export default Locations;
