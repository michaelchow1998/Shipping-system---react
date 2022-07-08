import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CreateOrderBox from "../../components/dashboard/CreateOrderBox";
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

export default function StaffDashboard() {
  const [createPageOpen, setCreatePageOpen] = useState(true);
  const [updateStatePageOpen, setUpdateStatePageOpen] = useState(false);

  const createBtnHandler = () => {
    setUpdateStatePageOpen(false);
    setCreatePageOpen(true);
  };
  const updateStateHandler = () => {
    setUpdateStatePageOpen(true);
    setCreatePageOpen(false);
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
              <button onClick={createBtnHandler}>Create Order</button>
            </div>
            <div className="flex w-[100%] items-center justify-center bg-slate-800 py-8 text-xl font-bold text-white hover:bg-slate-600 ">
              <button onClick={updateStateHandler}>Update order state</button>
            </div>
          </div>
        </div>
        <div className="w-[70%]">{createPageOpen && <CreateOrderBox />}</div>
      </div>
    </div>
  );
}
