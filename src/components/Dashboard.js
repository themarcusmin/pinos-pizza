import React, { useState } from "react";
import { Router, Link, useNavigate } from "@reach/router";
import { useAuth } from "../utils/AuthContext";
import Store from "../utils/Store";

import Ordering from "./Ordering/Ordering";
import Myorders from "./Myorders";
import Setting from "./Setting";
import DashboardHome from "./DashboardHome";

import SettingIcon from "../icons/SettingIcon";
import MenuOpen from "../icons/MenuOpen";
import MenuClose from "../icons/MenuClose";

const Dashboard = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  // slice name out of email
  const nameTag = currentUser.email.slice(0, currentUser.email.indexOf("@"));
  // Switch color of Nav Links
  const activeClass = (route) => {
    return window.location.pathname === route ? "nav-active nav-set" : "nav-inactive nav-set"
  }
  const activeClassMobile = (route) => {
    return window.location.pathname === route ? "nav-active nav-set-mobile" : "nav-inactive nav-set-mobile"
  }

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  async function handleLogout() {
    setError('');

    try {
      await logout()
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button onClick={handleMobileMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <MenuClose />
                <MenuOpen />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <Link to="./" className="flex-shrink-0 flex items-center space-x-4">
                <img className="block lg:hidden h-8 w-auto" src="https://www.pinocchiospizza.net/images/pinocchio_72.gif" alt="Pinocchio" />
                <img className="hidden lg:block h-8 w-auto" src="https://www.pinocchiospizza.net/images/pinocchio_72.gif" alt="Pinocchio" />
                <div className="text-xl text-white uppercase">Pinocchio&apos;s Pizza</div>
              </Link>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link to="ordering" id="ordering" className={activeClass("/dashboard/ordering")}>Start Ordering</Link>
                  <Link to="myorders" id="myorders" className={activeClass("/dashboard/myorders")}> My Orders</Link>
                </div>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex space-x-4">
                  <div className="nac-inactive nav-set select-none">
                    <strong className="text-white">
                      {nameTag}
                    </strong>
                  </div>
                  <Link to="setting" id="setting" className={activeClass("/dashboard/setting")}>
                    <SettingIcon id="setting" />
                  </Link>
                  <button type="button" onClick={handleLogout} id="logout" className="nav-inactive nav-set">Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu Toggling
        Open Menu: block, Close Menu: hidden */}
        <div className={mobileMenu ? "block sm:hidden" : "hidden sm:hidden"}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="ordering" id="ordering" className={activeClassMobile("/dashboard/ordering")}>Start Ordering</Link>
            <Link to="myorders" id="myorders" className={activeClassMobile("/dashboard/myorders")}>My Orders</Link>
            <div className="nav-inactive nav-set-mobile nav-icon select-none">
              <strong className="text-white">
                {nameTag}
              </strong>
            </div>
            <Link to="setting" id="setting" className={activeClassMobile("/dashboard/setting")}>Setting</Link>
            <button type="button" onClick={handleLogout} id="logout" className="nav-inactive nav-set">Logout</button>
          </div>
        </div>
      </nav>
      <div className="h-full w-full">
        {error ? (
          <div className="block text-center text-red-500 text-lg font-bold bg-yellow-500 py-3">Error here</div>
        ) : null}
        <Store>
          <Router primary={false}>
            <DashboardHome default />
            <Ordering path="ordering" />
            <Myorders path="myorders" />
            <Setting path="setting" />
          </Router>
        </Store>
      </div>
    </div>
  );
};

export default Dashboard;
