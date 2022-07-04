import { useState, useEffect } from "react";
import fetchOrderDetails from "../../api/guest/fetchOrderDetails";
import fetchOrderLocationsName from "../../api/guest/fetchOrderLocationsName";
import lama from "../images/lama256.png";

export default function DetailsBox({ setSearched, searchId }) {
  const [orderDetails, setOrderDetails] = useState({});
  const [locationsList, setLocationsList] = useState([]);
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [pick, setPick] = useState(false);
  const [process, setProcess] = useState(false);
  const [delivery, setDelivery] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promis.all([fetchOrderDetails(searchId)]);
      const idList = setLocationsId(orderDetailsJson);

      const fetchLocationNameJson = async (orderDetailsJson) => {
        const locationsName = await Promise.all(
          fetchOrderLocationsName(idList)
        );
        return locationsName;
      };

      fetchData();
      fetchLocationNameJson();
    };

    loadNameToState(locationsList);
    console.log(pickupLocation, deliveryLocation);
  }, []);

  const setLocationsId = (json) => {
    const data = [];
    data.push(json.pickupLocationId);
    data.push(json.deliveryLocationId);
    return data;
  };

  const setDetails = ({ pickedUp, processing, delivered }) => {
    setPick(pickedUp);
    setProcess(processing);
    setDelivery(delivered);
  };

  const loadNameToState = (locationsList) => {
    setPickupLocation(locationsList[0]);
    setDeliveryLocation(locationsList[1]);
  };

  const returnBtnHandle = () => {
    setSearched(false);
  };
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
              className="my-4 mt-12 h-24 w-auto lg:block"
              src={lama}
              alt="lama"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white">ShipSheep</h1>
          </div>

          <div>
            <h1 className="py-4 text-xl font-bold text-gray-400">
              {`Order: ${searchId} is ${orderDetails.currentState}`}
            </h1>
          </div>

          <div className="flex">
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <i
                className={`fas fa-box text-[5rem] ${
                  pick ? "text-blue-700" : "text-white"
                }`}
              ></i>
              <p className="text-white ">{pickupLocation}</p>
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <i className="fas fa-arrow-right text-[5rem] text-white"></i>
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <i
                className={`fas fa-truck text-[5rem] ${
                  process ? "text-blue-700" : "text-white"
                }`}
              ></i>
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <i className="fas fa-arrow-right text-[5rem] text-white"></i>
            </div>
            <div className="mt-6 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <i
                className={`fas fa-box-open text-[5rem] ${
                  delivery ? "text-blue-700" : "text-white"
                }`}
              ></i>
              <p className="text-white ">{deliveryLocation}</p>
            </div>
          </div>

          <div className="mb-48 mt-4 flex gap-6">
            <button
              type="button"
              onClick={returnBtnHandle}
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
