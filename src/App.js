import React, { useState } from "react";
import { Router, Link } from "@reach/router";

import Ordering from "./components/Ordering";
import Myorders from "./components/Myorders";
import Setting from "./components/Setting";
import Logout from "./components/Logout";

import SettingIcon from "./icons/SettingIcon";
import MenuOpen from "./icons/MenuOpen";
import MenuClose from "./icons/MenuClose";

// import firebase from "./firebase";

const App = () => {
  //   const database = firebase.database();
  //   console.log(database.ref("pinos-pizza-default-rtdb").on("value", (e) => {
  //     e.forEach((f) => {
  //       console.log(f.val());
  //     })
  //   }));


  const [activeNav, setActiveNav] = useState("ordering");
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleNav = (e) => {
    setActiveNav(e.target.id);
  }

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <div className="App">
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
              <Link to="/ordering" className="flex-shrink-0 flex items-center space-x-4">
                <img className="block lg:hidden h-8 w-auto" src="https://www.pinocchiospizza.net/images/pinocchio_72.gif" alt="Pinocchio" />
                <img className="hidden lg:block h-8 w-auto" src="https://www.pinocchiospizza.net/images/pinocchio_72.gif" alt="Pinocchio" />
                <div className="text-xl text-white uppercase">Pinocchio&apos;s Pizza</div>
              </Link>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link to="/ordering" onClick={handleNav} id="ordering" className={activeNav === "ordering" ? "nav-active nav-set" : "nav-inactive nav-set"}>Start Ordering</Link>
                  <Link to="/myorders" onClick={handleNav} id="myorders" className={activeNav === "myorders" ? "nav-active nav-set" : "nav-inactive nav-set"}>My Orders</Link>
                </div>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex space-x-4">
                  <Link to="/setting" onClick={handleNav} id="setting" className={activeNav === "setting" ? "nav-active nav-icon" : "nav-inactive nav-icon"}>
                    <SettingIcon id="setting" />
                  </Link>
                  <Link to="/logout" onClick={handleNav} id="logout" className={activeNav === "logout" ? "nav-active nav-set" : "nav-inactive nav-set"}>Logout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu Toggling
        Open Menu: block, Close Menu: hidden */}
        <div className={mobileMenu ? "block sm:hidden" : "hidden sm:hidden"}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/ordering" onClick={handleNav} id="ordering" className={activeNav === "ordering" ? "nav-active nav-set-mobile" : "nav-inactive nav-set-mobile"}>Start Ordering</Link>
            <Link to="/myorders" onClick={handleNav} id="myorders" className={activeNav === "myorders" ? "nav-active nav-set-mobile" : "nav-inactive nav-set-mobile"}>My Orders</Link>
            <Link to="/setting" onClick={handleNav} id="setting" className={activeNav === "setting" ? "nav-active nav-set-mobile" : "nav-inactive nav-set-mobile"}>Setting</Link>
            <Link to="/logout" onClick={handleNav} id="logout" className={activeNav === "logout" ? "nav-active nav-set-mobile" : "nav-inactive nav-set-mobile"}>Logout</Link>
          </div>
        </div>
      </nav>
      <div className="h-full w-full">
        <Router primary={false}>
          <Ordering path="/ordering" />
          <Myorders path="/myorders" />
          <Setting path="/setting" />
          <Logout path="logout" />
        </Router>
      </div>
    </div>
  );
};

export default App;
