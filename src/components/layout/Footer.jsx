import React from "react";
import logo from "../../assets/my-logo.svg";
import googlePlayLogo from "../../assets/play-store-logo.svg";
import appStoreLogo from "../../assets/app-store-logo.svg";

const Footer = () => {
  return (
    <div className=" w-full  h-[26.8rem] border-2 border-red-600 mt-10 bg-[#FFFFFF] pl-16 pr-16 ">
      <div className="flex items-center justify-between mt-10  h-[9rem] pr-[10rem]">
        <img src={logo} alt="" className=" h-[4.4581rem] w-[6.687rem] " />
        <div>
          <h4 className=" font-semibold text-[#2B2F38] ">SWOOPPI</h4>
          <p className=" text-[.875rem] text-[#48505E] ">About us</p>
          <p className=" text-[.875rem] text-[#48505E] ">About us</p>
          <p className=" text-[.875rem] text-[#48505E] ">About us</p>
        </div>
        <div>
          <h4 className=" font-semibold text-[#2B2F38] ">RESOURCES</h4>
          <p className=" text-[.875rem] text-[#48505E] ">About us</p>
          <p className=" text-[.875rem] text-[#48505E] ">About us</p>
          <p className=" text-[.875rem] text-[#48505E] ">About us</p>
        </div>
        <div>
          <h4 className=" font-semibold text-[#2B2F38] ">COMMUNITIES</h4>
          <p className=" text-[.875rem] text-[#48505E] ">About us</p>
          <p className=" text-[.875rem] text-[#48505E] ">About us</p>
          <p className=" text-[.875rem] text-[#48505E] ">About us</p>
        </div>
      </div>
      <div className="border-b-[1px] border-[#D9DCE2] mt-8 "></div>
      <div className="h-[6rem] flex justify-between items-center px-6">
        <div className=" flex justify-between items-center w-[20rem]  ">
          <p className=" text-[.875rem] text-[#48505E] ">About us</p>
          <p className=" text-[.875rem] text-[#48505E] ">About us</p>
          <p className=" text-[.875rem] text-[#48505E] ">About us</p>
        </div>
        <div className=" flex justify-between items-center w-[17.9rem]">
          <img src={googlePlayLogo} alt="googlePlayLogo" />
          <img src={appStoreLogo} alt="appStoreLogo" />
        </div>
      </div>
      <div className="border-b-[1px] border-[#D9DCE2] mt-8 "></div>
      <div className=" flex justify-center items-center ">
        <p className=" text-[.875rem] text-[#48505E] mt-8 ">©Swooppi Inc. 2023. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
