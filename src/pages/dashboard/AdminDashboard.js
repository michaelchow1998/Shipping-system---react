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
    href: "/admin/dashboard",
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
  const relatedHandler = () => {};
  return (
    <div className="flex flex-col">
      <Breadcrumbs pages={pages} />
      {/* Side bar */}
      <div className="mx-auto flex h-[88vh] w-full max-w-screen-xl space-x-4 bg-gray-100">
        <div className="flex w-[20%] min-w-min flex-grow  flex-col">
          <div className="flex-1 space-y-1 bg-gray-200" aria-label="Sidebar">
            <div>
              <button>Related</button>
            </div>
            <div>
              <button>Sent</button>
            </div>
            <div>
              <button>Receipted</button>
            </div>
            <div>
              <button>Finished</button>
            </div>
            <div>
              <button>Unfinished</button>
            </div>
          </div>
        </div>
        <div className="w-[70%]"></div>
      </div>
    </div>
  );
}
