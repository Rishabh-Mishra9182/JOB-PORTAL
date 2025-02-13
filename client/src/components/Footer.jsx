import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between py-3 mt-20">
      <img width={160} src={assets.logo} alt="" className="" />
      <p className="flex-1 border-l ml-2 items-center border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">Copyright @xyz | All right reserved.</p>
      <div className="flex gap-4 items-center">
        <Link to={"https://www.facebook.com/"}><img width={38} src={assets.facebook_icon} alt="" /></Link>
        <Link to={"https://www.instagram.com/accounts/login/?hl=en"}><img width={38} src={assets.instagram_icon} alt="" /></Link>
        <Link to={"https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyIiOiIiLCJteCI6IjIifQ%3D%3D%22%7D"}><img width={38} src={assets.twitter_icon} alt="" /></Link>
        
      </div>
    </div>
  );
};

export default Footer;
