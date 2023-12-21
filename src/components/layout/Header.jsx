import React from "react";
import menueIcon from "../../assets/menu-icon.svg";
import logo from "../../assets/my-logo.svg";
import searchIcon from "../../assets/search-icon.svg";
import dropDownIcon from "../../assets/drop-down-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import shopingCartIcon from "../../assets/shopping-cart-icon.svg";

const Header = () => {
  return (
    <div className="lg:w-full py-2 pl-20 lg:pr-20  md:pr-8 xsm:pr-8 sm:pr-8 h-[4.25rem] flex items-center justify-between xsm:w-[40rem] md:w-[35rem] sm:w-[25rem] ">
      <div className="flex items-center lg:w-[70%] xsm:w[90%] sm:w[90%] md:w[90%]  justify-between">
        <img
          src={menueIcon}
          alt="menueIcon"
          className="h-[0.75rem] w-[1.125rem] lg:ml-0 xsm:ml-16"
        />
        <img src={logo} alt="logo" className="h-[2.5rem] w-[3.75rem] lg:ml-0 sm:ml-4 xsm:ml-4 lg:mr-0 sm:mr-4 xsm:mr-4" />
        <div className="xsm:block sm:block md:hidden lg:block">
          <div className="border-2 border-[#D9DCE2] h-[2.75rem] lg:w-[17.5rem] xsm:w-[15rem] flex items-center justify-between rounded-[.3rem] px-4 ">
            <img src={locationIcon} alt="" />
            <p className="ml-[-3rem] text-[#667085] text-[.8rem]"> 23, KudiratAbiola Way</p>
            <img src={dropDownIcon} alt="" />
          </div>
        </div>
        <div className="relative xsm:hidden sm:hidden md:block lg:block">
          <input
            type="text"
            placeholder="Search the place.."
            className="border-2 border-[#D9DCE2] h-[2.75rem] w-[23.5rem] flex items-center rounded-[.3rem] pl-8 text-[.8rem]"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <img src={searchIcon} alt="searchIcon" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-2 rounded-[3rem] h-[1.6rem] w-[6.5rem] bg-[#6741FF] ">
        <img
          src={shopingCartIcon}
          alt="shopingCartIcon"
          className="h-[1rem] w-[1rem]"
        />
        <span className="text-[.8rem] text-white"> 0 basket </span>
        <img
          src={dropDownIcon}
          alt="dropDownIcon"
          className="h-[.5rem] w-[.5rem]"
        />
      </div>
    </div>
  );
};

export default Header;
