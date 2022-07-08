import { useState } from "react";
import axios from "../../api/axios";
import { UserAPI } from "../../services/user/userApi";
import Breadcrumbs from "../../components/Breadcrumbs";

const pages = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    current: true,
  },
];
const body = {
  username: "michael",
};
const relatedHandler = async () => {
  const res = await UserAPI("", body);

  setData(res);
};
const sentHandler = async () => {
  const res = await UserAPI("sent", body);

  setData(res);
};
const receiptedHandler = async () => {
  const res = await UserAPI("receipted", body);

  setData(res);
};

const finishedHandler = async () => {
  const res = await UserAPI("finished", body);

  setData(res);
};

const unfinishedHandler = async () => {
  const res = await UserAPI("unfinished", body);

  setData(res);
};

export default function AdminDashboard() {
  const [data, setData] = useState({});
  const relatedHandler = async () => {
    const res = await UserAPI("", body);

    setData(res);
  };
  const sentHandler = async () => {
    const res = await UserAPI("sent", body);

    setData(res);
  };
  const receiptedHandler = async () => {
    const res = await UserAPI("receipted", body);

    setData(res);
  };

  const finishedHandler = async () => {
    const res = await UserAPI("finished", body);

    setData(res);
  };

  const unfinishedHandler = async () => {
    const res = await UserAPI("unfinished", body);

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
        <div className="w-[70%]"></div>
      </div>
    </div>
  );
}
