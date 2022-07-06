import { useState } from "react";
import axios from "../../api/axios";
import { UserAPI } from "../../services/user/userApi";
import Breadcrumbs from "../../components/Breadcrumbs";

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
const relatedHandler = async () => {
  const data = await UserAPI("", body);
  console.log(data);
};

export default function UserDashboard() {
  const [sideOpen, setSideOpen] = useState(true);
  const [data, setData] = useState({});
  const relatedHandler = () => {
    const data = UserAPI("", body);
    console.log(data);
  };
  const sentHandler = () => {};
  const receiptedHandler = () => {};

  const finishedHandler = () => {};

  const unfinishedHandler = () => {};

  return (
    <div className="flex flex-col">
      <Breadcrumbs pages={pages} />
      {/* Side bar */}
      <div className="mx-auto flex h-[88vh] w-full max-w-screen-xl space-x-4 bg-gray-100">
        <div className="flex h-[100%] w-[20%] min-w-min flex-grow  flex-col">
          <div
            className="flex h-[100%] flex-col items-center space-y-1 bg-slate-900"
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
