import { useState, useEffect } from "react";
import axios from "../../api/axios";

//import Components
import OrderDetailsCard from "./OrderDeatilsCard";

//import img
import lama from "../../images/lama256.png";

export default function DetailsBox({ setSearched, searchId }) {
  const [loaded, setLoaded] = useState(false);
  //Order details with tracking details
  const [order, setOrder] = useState({});
  const [openList, setOpenList] = useState(false);

  //Order state (pickedUp, processing, delivered)
  const [orderState, setOrderState] = useState([false, false, false]);

  useEffect(async () => {
    await setTimeout(() => {
      const fetchData = async (searchId) => {
        //load order as JSON format
        try {
          const url = `guest/orders/${searchId}`;

          const res = axios
            .get(url, {
              headers: { "Content-Type": "application/json" },
            })
            .then(({ data }) => loadDateToState(data));
        } catch (error) {
          console.error(error);
        }
      };
      fetchData(searchId);
    }, 1000);
  }, []);

  useEffect(async () => {
    await setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  const loadDateToState = (data) => {
    setOrder(data);
    setOrderState([
      data.details.pickedUp,
      data.details.processing,
      data.details.delivered,
    ]);
  };

  let returnBtnHandle = () => {
    setSearched(false);
  };

  let openListBtnHandle = () => {
    setTimeout(() => {
      setOpenList(!openList);
    }, 500);
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
          {/* //loading box */}
          {!loaded && (
            <div className="mt-12 mb-52 ">
              <svg
                role="status"
                className="mr-2 inline h-24 w-24 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          )}
          {/* //details box */}
          {loaded && (
            <div className="flex flex-col  items-center justify-center">
              {/* //Text for Search Id and State */}
              <div>
                <h1 className="py-4 text-xl font-bold text-gray-400">
                  {`Order: ${searchId}`}
                </h1>
              </div>
              {/* //Logos for the Order State and Show location names */}
              <div className="flex">
                <div className="mt-4 ml-4 flex flex-shrink-0 flex-grow px-2 lg:ml-4 lg:flex-grow-0">
                  <i
                    className={`fas fa-box text-5xl lg:text-[5rem] ${
                      orderState[0] ? "text-blue-700" : "text-white"
                    }`}
                  ></i>
                </div>
                <div className="mt-4 ml-4 flex flex-shrink-0 flex-grow px-2 lg:ml-4 lg:flex-grow-0">
                  <i className="fas fa-arrow-right text-5xl text-white lg:text-[5rem]"></i>
                </div>
                <div className="mt-4 ml-4 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                  <i
                    className={`fas fa-truck text-5xl lg:text-[5rem] ${
                      orderState[1] ? "text-blue-700" : "text-white"
                    }`}
                  ></i>
                </div>
                <div className="mt-4 ml-4 flex flex-shrink-0 flex-grow px-2 lg:ml-4  lg:flex-grow-0">
                  <i className="fas fa-arrow-right text-5xl text-white lg:text-[5rem]"></i>
                </div>
                <div className="mt-4 ml-0 flex flex-shrink-0 flex-grow px-2 lg:ml-4  lg:flex-grow-0">
                  <i
                    className={`fas fa-box-open text-5xl lg:text-[5rem] ${
                      orderState[2] ? "text-blue-700" : "text-white"
                    }`}
                  ></i>
                </div>
              </div>
              {/* //Show Order Details as list */}
              <div className="mb-8 mt-8 flex gap-6 ">
                <button
                  type="button"
                  onClick={returnBtnHandle}
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-8 py-2 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Return
                </button>
                <button
                  type="button"
                  onClick={openListBtnHandle}
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Open Details
                </button>
              </div>
              {openList && (
                <OrderDetailsCard order={order} setOpenList={setOpenList} />
              )}
              {!openList && <div className="mb-24">""</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
