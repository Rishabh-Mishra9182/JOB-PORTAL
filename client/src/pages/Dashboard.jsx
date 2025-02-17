import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* navbar for recruiter panel */}
      <div className="shadow-lg py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            className="max-sm:w-32 cursor-pointer"
            onClick={() => navigate("/")}
            src={assets.logo}
            alt=""
          />
          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome! xyz</p>
            <div className="relative group">
              <img
                className="w-8 border-gray-400 rounded-full"
                src={assets.company_icon}
                alt="company_logo"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border-gray-300 text-sm shadow-xl">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  items-start">
        {/* left side bar */}
        <div className="inline-block min-h-screen border-r-2 border-gray-300 shadow-r-xl">
          <ul className="flex flex-col item-start pt-6 text-gray-500">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-300 ${
                  isActive && "bg-blue-100 border-blue-600 border-r-6 text-blue-600"
                }`
              }
              to={"/dashboard/add-job"}
            >
              <img className="min-w-4" src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Jobs</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-300 ${
                  isActive && "bg-blue-100 border-blue-600 border-r-6 text-blue-600"
                }`
              }
              to={"/dashboard/manage-jobs"}
            >
              <img className="min-w-4" src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-300 ${
                  isActive && "bg-blue-100 border-blue-600 border-r-6 text-blue-600"
                }`
              }
              to={"/dashboard/view-application"}
            >
              <img  className="min-w-4" src={assets.person_tick_icon} alt="" />
              <p className="max-sm:hidden">View Application</p>
            </NavLink>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
