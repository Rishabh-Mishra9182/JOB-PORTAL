import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between py-3 mt-20">
      <img width={160} src={assets.logo} alt="" className="" />
      <p className="flex-1 border-l ml-2 items-center border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">Copyright @xyz | All right reserved.</p>
      <div className="flex gap-4 items-center">
        <img width={38} src={assets.facebook_icon} alt="" />
        <img width={38} src={assets.twitter_icon} alt="" />
        <img width={38} src={assets.instagram_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
