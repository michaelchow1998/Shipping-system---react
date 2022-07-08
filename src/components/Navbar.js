/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

// import image
import lama from "../images/lama.png";

const initNavigation = [
  { name: "Home", href: "/", current: true },
  { name: "Search Order", href: "search", current: false },
  { name: "Locations", href: "locations", current: false },
  { name: "Contact", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({
  isLogin,
  setIsLogin,
  isUserLogin,
  isStaffLogin,
  setIsStaffLogin,
  setIsUserLogin,
}) {
  const [navigation, setNavigation] = useState(initNavigation);
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("../", { replace: true });
  };

  const logoutBtnHandler = () => {
    localStorage.clear();
    setIsLogin(false);
    setIsStaffLogin(false);
    setIsUserLogin(false);
    routeChange();
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={lama}
                    alt="lama"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={lama}
                    alt="lama"
                  />
                  <h1 className="hidden h-8 w-auto pl-2 pt-1 text-white lg:block">
                    ShipSheep
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    {isLogin && isUserLogin && (
                      <Link
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        to="/user/dashboard"
                      >
                        Dashboard
                      </Link>
                    )}
                    {isLogin && isStaffLogin && (
                      <Link
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        to="/staff/dashboard"
                      >
                        Dashboard
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {isLogin ? (
                  <button
                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-800"
                    onClick={logoutBtnHandler}
                  >
                    Log Out
                  </button>
                ) : (
                  <Link
                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-800"
                    to="/login"
                  >
                    LogIn
                  </Link>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <Link key={item.name} to={item.href}>
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
              {isLogin && isUserLogin && (
                <Link
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  to="/user/dashboard"
                >
                  Dashboard
                </Link>
              )}
              {isLogin && isStaffLogin && (
                <Link
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  to="/staff/dashboard"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
