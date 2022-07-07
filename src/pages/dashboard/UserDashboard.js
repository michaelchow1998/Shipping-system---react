import { useState } from "react";
import axios from "../../api/axios";
import { UserAPI } from "../../services/user/userApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import OrdersList from "../../components/dashboard/OrdersList";
// const navigation = [
//   { name: "Related order", handler: { relatedHandler }, url: "" },
//   { name: "Sent order", handler: {}, url: "sent" },
//   { name: "Receipted order", handler: {}, url: "receipted" },
//   { name: "Finished order", handler: {}, url: "finished" },
//   { name: "Unfinished order", handler: {}, url: "unfinished" },
// ];
const pages = [
  {
    name: "Dashboard",
    href: "/user/dashboard",
    current: true,
  },
];
const body = {
  username: "michael",
};

export default function UserDashboard() {
  const [description, setDescription] = useState("");
  const [data, setData] = useState({});
  const relatedHandler = async () => {
    const res = await UserAPI("", body);
    setDescription("related for you");
    setData(res);
  };
  const sentHandler = async () => {
    const res = await UserAPI("sent", body);
    setDescription("sent by you");
    setData(res);
  };
  const receiptedHandler = async () => {
    const res = await UserAPI("receipted", body);
    setDescription("receipted by you");
    setData(res);
  };

  const finishedHandler = async () => {
    const res = await UserAPI("finished", body);
    setDescription("is finished");
    setData(res);
  };

  const unfinishedHandler = async () => {
    const res = await UserAPI("unfinished", body);
    setDescription("is unfinished");
    setData(res);
  };

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
          <OrdersList data={data} description={description} />
        </div>
      </div>
    </div>
  );
}
