import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const {setShowRecuiterLogin} = useContext(AppContext)
  return (
    <div className="shadow-lg bg-white py-3">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img
          src={assets.logo}
          alt="logo"
          className="transform hover:scale-110 h-5 md:h-8 lg:h-8 cursor-pointer"
          onClick={() => navigate('/')}
        />
        {user ? (
          <div className="flex items-center gap-3">
            <Link to={"/applications"} className="text-blue-600">
              Applied Jobs
            </Link>
            <p>|</p>
            <p className="max-sm:hidden">Hi, {user.firstName + " " + user.lastName}</p>
            <UserButton className="shadow" />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button onClick={ (e) => setShowRecuiterLogin(true)}
            className="text-gray-600 ">Recruiter Login</button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-blue-600 text-white px-6 sm:px-9  py-2 rounded-full cursor-pointer hover:bg-blue-500"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
