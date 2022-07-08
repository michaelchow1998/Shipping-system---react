import { useState, useEffect } from "react";
import axios from "../../api/axios";
import { UserAPI } from "../../services/user/userApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import OrdersList from "../../components/dashboard/OrdersList";
import DetailsBox from "../../components/search/DetailsBox";

const pages = [
  {
    name: "Dashboard",
    href: "/user/dashboard",
    current: true,
  },
];

export default function UserDashboard() {
  const [description, setDescription] = useState("");
  const [data, setData] = useState({});
  const [searched, setSearched] = useState(false);
  const [searchId, setSearchId] = useState("");
  const relatedHandler = async () => {
    const res = await UserAPI("");
    setDescription("related for you");
    setData(res);
  };
  const sentHandler = async () => {
    const res = await UserAPI("sent");
    setDescription("sent by you");

    setData(res);
  };
  const receiptedHandler = async () => {
    const res = await UserAPI("receipted");
    setDescription("receipted by you");
    setData(res);
  };

  const finishedHandler = async () => {
    const res = await UserAPI("finished");
    setDescription("is finished");
    setData(res);
  };

  const unfinishedHandler = async () => {
    const res = await UserAPI("unfinished");
    setDescription("is unfinished");
    setData(res);
  };
  useEffect(async () => {
    const res = await UserAPI("");
    setDescription("related for you");
    setData(res);
  }, []);

  return (
    <div className="flex flex-col">
      <Breadcrumbs pages={pages} />
      {/* Side bar */}
      <div className="mx-auto flex h-full w-full max-w-screen-xl space-x-4 bg-gray-100">
        <div className="flex h-[100%] w-[20%] min-w-min flex-grow  flex-col">
          <div
            className="flex h-[100%] flex-col items-center space-y-1 bg-slate-900 pb-[660px]"
            aria-label="Sidebar"
          >
            <div className="flex w-[100%] items-center justify-center bg-slate-800 py-8 text-xl font-bold text-white hover:bg-slate-600 ">
              <button onClick={relatedHandler}>Related</button>
            </div>
            <div className="flex w-[100%] items-center justify-center bg-slate-800 py-8 text-xl font-bold text-white hover:bg-slate-600 ">
              <button onClick={sentHandler}>Sent</button>
            </div>
            <div className="flex w-[100%] items-center justify-center bg-slate-800 py-8 text-xl font-bold text-white hover:bg-slate-600 ">
              <button onClick={receiptedHandler}>Receipted</button>
            </div>
            <div className="flex w-[100%] items-center justify-center bg-slate-800 py-8 text-xl font-bold text-white hover:bg-slate-600 ">
              <button onClick={finishedHandler}>Finished</button>
            </div>
            <div className="flex w-[100%] items-center justify-center bg-slate-800 py-8 text-xl font-bold text-white hover:bg-slate-600 ">
              <button onClick={unfinishedHandler}>Unfinished</button>
            </div>
          </div>
        </div>
        <div className="w-[70%]">
          {searched && (
            <DetailsBox setSearched={setSearched} searchId={searchId} />
          )}
          {!searched && (
            <OrdersList
              data={data}
              description={description}
              setSearchId={setSearchId}
              setSearched={setSearched}
            />
          )}
        </div>
      </div>
    </div>
  );
}
