import { useState, useEffect } from "react";
import axios from "../api/axios";
import Breadcrumbs from "../components/Breadcrumbs";
import LocationTable from "../components/location/LocationTable";

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
        const response = await axios.get("/guest/locations", {
          headers: { "Content-Type": "application/json" },
        });

        const { data } = response;

        Object.keys(data).forEach((location) => {
          if (data[location].area === "NT") {
            NTlists.push(data[location]);
          }
          if (data[location].area === "KL") {
            KLlists.push(data[location]);
          }
          if (data[location].area === "HK") {
            HKlists.push(data[location]);
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
          <LocationTable
            datalist={locationsNT}
            area={"New Territories"}
            bg={"bg-green-500"}
          />
        )}
        {!loading && (
          <LocationTable
            datalist={locationsKL}
            area={"Kowloon"}
            bg={"bg-red-500"}
          />
        )}
        {!loading && (
          <LocationTable
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
